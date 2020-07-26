import { Component, OnInit, Input } from '@angular/core';
import { EntryMeat } from '../../models/meat.interface';
import { Store } from '@ngrx/store';
import { AppState } from '../../models/app-state.interface';
import { saveEntryMeat } from 'src/app/features/meat/store/meat/meat.actions';
import { ModalController } from '@ionic/angular';

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

  constructor(
    private _store: Store<AppState>,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {}

  onAcceptSaveEntryMeat() {
    this._store.dispatch(saveEntryMeat({ entryMeat: this.entryMeat }));
    this.modalCtrl.dismiss();
  }

  onAcceptSaveEntryPackaging() {
    console.log('entry packaging: ', this.entryPackaging);
  }

  onCancel() {
    this.modalCtrl.dismiss();
  }
}
