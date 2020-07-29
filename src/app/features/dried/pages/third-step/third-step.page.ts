import { Component, OnInit, ViewChild } from '@angular/core';
import { ThirdFormComponent } from '../../components/third-form/third-form.component';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/shared/models/app-state.interface';
import { ModalController } from '@ionic/angular';
import { ConfirmSaveDialogComponent } from 'src/app/shared/dialogs/confirm-save-dialog/confirm-save-dialog.component';
import { addSecondAdditionalInformationDried } from '../../store/dried/dried.actions';
import { entryDriedSelector } from '../../store/dried/dried.selectos';

@Component({
  selector: 'app-third-step',
  templateUrl: './third-step.page.html',
  styleUrls: ['./third-step.page.scss'],
})
export class ThirdStepPage implements OnInit {
  @ViewChild('form', { static: false }) form: ThirdFormComponent;

  constructor(
    private store: Store<AppState>,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {}

  onSubmit(evt) {
    console.log('thirdForm: ', evt);
    this.store.dispatch(
      addSecondAdditionalInformationDried({ secondAdditionalInformation: evt })
    );
    this.openConfirmSaveModal();
  }

  onSaveForm() {
    this.form.onSubmitForm();
  }

  async openConfirmSaveModal() {
    let entryDrief;

    this.store.select(entryDriedSelector).subscribe((drief) => {
      entryDrief = drief;
    });

    const modal = await this.modalCtrl.create({
      component: ConfirmSaveDialogComponent,
      cssClass: 'confirm-dialog',
      componentProps: {
        message: '“Una vez que se genere el reporte no podrá ser modificado',
        area: 'drief',
        entryDrief: entryDrief,
      },
    });

    return await modal.present();
  }
}
