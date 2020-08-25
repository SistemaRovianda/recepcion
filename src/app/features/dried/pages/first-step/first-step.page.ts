import { Component, OnInit, ViewChild } from '@angular/core';
import { FirstFormComponent } from 'src/app/features/packaging/components/forms/first-form/first-form.component';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/shared/models/app-state.interface';
import {
  addBasicInformationDried,
  clearEntryDried,
} from '../../store/dried/dried.actions';
import { ModalController } from '@ionic/angular';
import { CancelProcessDialogComponent } from 'src/app/shared/dialogs/cancel-process-dialog/cancel-process-dialog.component';
// import { addBasicInformationPackaging } from 'src/app/features/packaging/store/packaging/packaging.actions';

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
    this.store.dispatch(addBasicInformationDried({ basicInformation: evt }));
  }

  onBack(evt) {
    this.cancelRegister();
    if(localStorage.getItem('objQuantity')!=null){
      localStorage.removeItem('objQuantity')
    };
  }

  toNavigate() {
    this.form.onSubmit();
    this.router.navigate(['dried', 'second-step']);
  }

  async cancelRegister() {
    const modal = await this.modalCtrl.create({
      component: CancelProcessDialogComponent,
      cssClass: 'cancel-dialog',
      componentProps: {
        message: '¿Tienes datos en curso, seguro deseas regresar?',
        area: 'drief',
        pathBack: '/menu/reception',
      },
    });

    modal.onDidDismiss().then((valueReturn) => {
      if (valueReturn !== null) {
        if (valueReturn.data.onClearForm) {
          console.log('limpiar estado de drief');
          this.form.form.reset();
          this.store.dispatch(clearEntryDried());
        }
      }
    });

    return await modal.present();
  }
}
