import { Component, OnInit, Input } from '@angular/core';
import { EntryMeat } from '../../models/meat.interface';
import { Store } from '@ngrx/store';
import { AppState } from '../../models/app-state.interface';
import { saveEntryMeat } from 'src/app/features/meat/store/meat/meat.actions';
import { ModalController } from '@ionic/angular';
import { saveEntryPackaging } from 'src/app/features/packaging/store/packaging/packaging.actions';
import { Dried } from '../../models/dried.interface';
import { saveEntryDried } from 'src/app/features/dried/store/dried/dried.actions';

@Component({
  selector: 'app-confirm-save-dialog',
  templateUrl: './confirm-save-dialog.component.html',
  styleUrls: ['./confirm-save-dialog.component.scss'],
})
export class ConfirmSaveDialogComponent implements OnInit {
  @Input() message: string;

  @Input() area: string;

  @Input() entryMeat: EntryMeat;

  @Input() entryPackaging: any;

  @Input() entryDrief: Dried;

  constructor(
    private _store: Store<AppState>,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {}

  onAcceptSaveEntryMeat() {
    this._store.dispatch(saveEntryMeat({ entryMeat: this.entryMeat }));
    this.modalCtrl.dismiss();
  }

  onAcceptSavePackaging() {
    console.log('entry packaging: ', this.entryPackaging);
    this._store.dispatch(
      saveEntryPackaging({ entryPackaging: this.entryPackaging })
    );
    this.modalCtrl.dismiss();
  }

  onAcceptSaveDried() {
    console.log('entry dried---> ', this.entryDrief);
    this._store.dispatch(saveEntryDried({ entryDried: this.entryDrief }));

    this.modalCtrl.dismiss();
  }

  onCancel() {
    this.modalCtrl.dismiss();
  }
}
