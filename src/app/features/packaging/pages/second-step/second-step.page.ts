import { Component, OnInit, ViewChild } from '@angular/core';
import { SecondFormComponent } from '../../components/forms/second-form/second-form.component';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/shared/models/app-state.interface';
import { addAdditionalInformationPackaging } from '../../store/packaging/packaging.actions';
import { ModalController } from '@ionic/angular';
import { ConfirmSaveDialogComponent } from 'src/app/shared/dialogs/confirm-save-dialog/confirm-save-dialog.component';
import { Packaging } from 'src/app/shared/models/packaging.interface';
import { entryPackagingSelector } from '../../store/packaging/packaging.selectors';

@Component({
  selector: 'app-second-step',
  templateUrl: './second-step.page.html',
  styleUrls: ['./second-step.page.scss'],
})
export class SecondStepPage implements OnInit {
  @ViewChild('form', { static: false }) form: SecondFormComponent;

  constructor(
    private store: Store<AppState>,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {}

  onSubmit(evt) {
    console.log('Segundo formulario: ', evt);
    this.store.dispatch(
      addAdditionalInformationPackaging({ selectionInformation: evt })
    );
    this.openConfirmSaveModal();
  }

  onSave() {
    this.form.onSubmitForm();
  }

  async openConfirmSaveModal() {
    let entryPacking: Packaging;

    this.store
      .select(entryPackagingSelector)
      .subscribe((packing) => (entryPacking = packing));

    const modal = await this.modalCtrl.create({
      component: ConfirmSaveDialogComponent,
      cssClass: 'confirm-dialog',
      componentProps: {
        message: '“Una vez que se genere el reporte no podrá ser modificado',
        area: 'packing',
        entryPackaging: entryPacking,
      },
    });

    return await modal.present();
  }
}
