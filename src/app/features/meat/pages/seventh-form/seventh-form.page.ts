import { Component, OnInit, ViewChild } from '@angular/core';
import { SeventhFormComponent } from '../../components/forms/seventh-form/seventh-form.component';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/shared/models/app-state.interface';
import { finalInformation } from 'src/app/shared/models/meat.interface';
import { addFinalData, saveEntryMeat } from '../../store/meat/meat.actions';
import { meatSelector } from '../../store/meat/meat.selectors';
import { ModalController, LoadingController } from '@ionic/angular';
import { ConfirmSaveDialogComponent } from 'src/app/shared/dialogs/confirm-save-dialog/confirm-save-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seventh-form',
  templateUrl: './seventh-form.page.html',
  styleUrls: ['./seventh-form.page.scss'],
})
export class SeventhFormPage implements OnInit {
  @ViewChild('seventhForm', { static: false })
  seventhForm: SeventhFormComponent;

  constructor(
    private _store: Store<AppState>,
    private _router: Router,
    private _modalCtrl: ModalController
  ) {}

  ngOnInit() {}

  async onSubmitSeventh(evt: finalInformation) {
    this._store.dispatch(addFinalData({ final: evt }));
    this.openConfirmSaveModal();
  }

  onGenerateReport() {
    this.seventhForm.onSubmit();
    console.log(
      'Generar reporte. Esto es una prueba, aun me falta esta madre...'
    );
  }

  onBack(evt) {
    this._router.navigate(['/meat/sixth-form-meat']);
  }

  async openConfirmSaveModal() {
    let entryMeat;
    this._store.select(meatSelector).subscribe((meat) => {
      entryMeat = {
        ...meat,
      };
    });

    let modal = await this._modalCtrl.create({
      component: ConfirmSaveDialogComponent,
      cssClass: 'confirm-dialog',
      componentProps: {
        message: '“Una vez que se genere el reporte no podrá ser modificado',
        area: 'meat',
        entryMeat: entryMeat,
      },
    });

    return await modal.present();
  }
}
