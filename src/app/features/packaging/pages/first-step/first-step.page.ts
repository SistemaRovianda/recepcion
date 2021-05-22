import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FirstFormComponent } from '../../components/forms/first-form/first-form.component';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/shared/models/app-state.interface';
import {
  addBasicInformationPackaging,
  clearEntryPackaging,
} from '../../store/packaging/packaging.actions';
import { ModalController } from '@ionic/angular';
import { CancelProcessDialogComponent } from 'src/app/shared/dialogs/cancel-process-dialog/cancel-process-dialog.component';

@Component({
  selector: 'app-first-step',
  templateUrl: './first-step.page.html',
  styleUrls: ['./first-step.page.scss'],
})
export class FirstStepPage implements OnInit {
  @ViewChild('form', { static: false }) form: FirstFormComponent;

  constructor(
    private router: Router,
    private store: Store<AppState>,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {}

  onSubmit(evt) {
    console.log('Primer formulario: ', evt);
    this.store.dispatch(
      addBasicInformationPackaging({ basicInformation: evt })
    );
  }

  onBack(evt) {
    this.cancelRegister();
    if(localStorage.getItem('objQuantity')!=null){
      localStorage.removeItem('objQuantity')
    };
  }

  toNavigate() {
    this.form.onSubmit();
    this.router.navigate(['packaging', 'second-step']);
  }

  async cancelRegister() {
    const modal = await this.modalCtrl.create({
      component: CancelProcessDialogComponent,
      cssClass: 'cancel-dialog',
      componentProps: {
        message: '¿Tienes datos en curso, seguro deseas regresar?',
        area: 'packing',
        pathBack: '/menu/reception',
      },
    });

    modal.onDidDismiss().then((valueReturn) => {
      if (valueReturn !== null) {
        if (valueReturn.data.onClearForm) {
          console.log('limpiar estado de packing');
          this.form.form.reset();
          this.store.dispatch(clearEntryPackaging());
        }
      }
    });

    return await modal.present();
  }
}
