import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ingredient } from 'src/app/shared/models/ingredient.interface';
import { IngredientsService } from '../../../../shared/services/ingredients.service';
import { HttpClient } from '@angular/common/http';
import { AlertController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/shared/models/app-state.interface';
import { CancelProcessDialogComponent } from 'src/app/shared/dialogs/cancel-process-dialog/cancel-process-dialog.component';
@Component({
  selector: 'app-ingredient-form',
  templateUrl: './ingredient-form.page.html',
  styleUrls: ['./ingredient-form.page.scss'],
})
export class IngredientFormPage implements OnInit {
  form: FormGroup;

  constructor(
    private ingredientService: IngredientsService,
    public alertController: AlertController,
    private _router: Router,
    private modalCtrl: ModalController,
    private _store: Store<AppState>
  ) {
    this.form = new FormGroup({
      product: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(
          /^[0-9a-zA-Z\u00C0-\u017F]+(?:\s[0-9a-zA-Z\u00C0-\u017F]+)*$/
        ),
      ]),
      mark: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(
          /^[0-9a-zA-Z\u00C0-\u017F]+(?:\s[0-9a-zA-Z\u00C0-\u017F]+)*$/
        ),
      ]),
      variant: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(
          /^[0-9a-zA-Z\u00C0-\u017F]+(?:\s[0-9a-zA-Z\u00C0-\u017F]+)*$/
        ),
      ]),
      presentation: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(
          /^[0-9a-zA-Z\u00C0-\u017F]+(?:\s[0-9a-zA-Z\u00C0-\u017F]+)*$/
        ),
      ]),
      category: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {}

  getErrorProduct() {
    return this.form.get('product').hasError('required') &&
      this.form.get('product').touched
      ? 'El producto es requerido'
      : this.form.get('product').hasError('minlength')
      ? 'Minimo 3 letras'
      : this.form.get('product').hasError('pattern')
      ? 'No se permiten espacios en blanco'
      : '';
  }

  getErrorMark() {
    return this.form.get('mark').hasError('required') &&
      this.form.get('mark').touched
      ? 'La marca es requerida'
      : this.form.get('mark').hasError('minlength')
      ? 'Minimo 3 letras'
      : this.form.get('mark').hasError('pattern')
      ? 'No se permiten espacios en blanco'
      : '';
  }

  async addIngredient() {
    let sendIngredient: ingredient = {
      nameProduct: this.form.get('product').value,
      mark: this.form.get('mark').value,
      variant: this.form.get('variant').value,
      presentation: this.form.get('presentation').value,
      category: this.form.get('category').value,
    };
    await this.ingredientService.postAddIngredient(sendIngredient).subscribe(
      async (data) => {
        this.form.reset();
        this.Alert('Confirmación', 'El ingrediente fue agregado con éxito');
        this._router.navigate(['list-ingredient']);
      },
      (err) => {
        this.Alert('Error', 'No se pudo agregar el ingrediente');
      }
    );
  }

  onBack() {
    if (this.form.invalid) this.cancelRegister();
    // this.form.reset();
    // this._router.navigate(['list-ingredient']);
  }

  async Alert(title, message, header = '') {
    const alert = await this.alertController.create({
      header: `${title}`,
      subHeader: `${header}`,
      message: `${message}`,
      buttons: ['OK'],
    });

    await alert.present();
  }

  async cancelRegister() {
    const modal = await this.modalCtrl.create({
      component: CancelProcessDialogComponent,
      cssClass: 'cancel-dialog',
      componentProps: {
        message: '¿Tienes datos en curso, seguro deseas regresar?',
        area: 'ingredient',
        pathBack: '/list-ingredient',
      },
    });

    modal.onDidDismiss().then((valueReturn) => {
      if (valueReturn !== null) {
        if (valueReturn.data.onClearForm) {
          console.log('limpiar estado de entry meat');
          this.form.reset();
        }
      }
    });

    return await modal.present();
  }
}
