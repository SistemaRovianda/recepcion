import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FirstFormComponent } from '../../components/forms/first-form/first-form.component';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/shared/models/app-state.interface';
import {
  addBasicInformation,
  clearEntryMeat,
} from '../../store/meat/meat.actions';
import { BasicInformation } from 'src/app/shared/models/meat.interface';
import { ModalController } from '@ionic/angular';
import { CancelProcessDialogComponent } from 'src/app/shared/dialogs/cancel-process-dialog/cancel-process-dialog.component';

@Component({
  selector: 'app-first-form',
  templateUrl: './first-form.page.html',
  styleUrls: ['./first-form.page.scss'],
})
export class FirstFormPage implements OnInit {
  @ViewChild(FirstFormComponent, { static: false })
  firstForm: FirstFormComponent;

  constructor(
    private _router: Router,
    private _store: Store<AppState>,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {}

  onSubmit(evt: BasicInformation) {
    this._store.dispatch(addBasicInformation({ basicInformation: evt }));
  }

  onBack(evt) {
    if (this.firstForm.form.valid) {
      this.cancelRegister();
    } else {
      this._router.navigate(['menu', 'reception']);
    }
  }

  onNextPage() {
    this.firstForm.onSubmitForm();
    this._router.navigate(['meat', 'second-form-meat']);
  }

  async cancelRegister() {
    const modal = await this.modalCtrl.create({
      component: CancelProcessDialogComponent,
      cssClass: 'cancel-dialog',
      componentProps: {
        message: '¿Tienes datos en curso, seguro deseas regresar?',
        area: 'meat',
        pathBack: '/menu/reception',
      },
    });

    modal.onDidDismiss().then((valueReturn) => {
      if (valueReturn !== null) {
        if (valueReturn.data.onClearForm) {
          console.log('limpiar estado de entry meat');
          this.firstForm.form.reset();
          this._store.dispatch(clearEntryMeat());
        }
      }
    });

    return await modal.present();
  }
}
