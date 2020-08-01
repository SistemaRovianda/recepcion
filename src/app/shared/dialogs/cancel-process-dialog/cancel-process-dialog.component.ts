import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AppState } from '../../models/app-state.interface';
import { Store } from '@ngrx/store';
import { clearEntryMeat } from 'src/app/features/meat/store/meat/meat.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cancel-process-dialog',
  templateUrl: './cancel-process-dialog.component.html',
  styleUrls: ['./cancel-process-dialog.component.scss'],
})
export class CancelProcessDialogComponent implements OnInit {
  @Input() message: string;

  @Input() area: string;

  @Input() pathBack: string;

  constructor(
    private modalCtrl: ModalController,
    private store: Store<AppState>,
    private router: Router
  ) {}

  ngOnInit() {}

  onCancel() {
    this.modalCtrl.dismiss();
  }

  acceptBackFromEntryMeat() {
    this.store.dispatch(clearEntryMeat());
    this.router.navigate([`${this.pathBack}`]);

    this.modalCtrl.dismiss({
      onClearForm: true,
    });
  }

  acceptBackFromEntryPacking() {
    this.store.dispatch(clearEntryMeat());
    this.router.navigate([`${this.pathBack}`]);

    this.modalCtrl.dismiss({
      onClearForm: true,
    });
  }

  acceptBackFromEntryDrief() {
    this.store.dispatch(clearEntryMeat());
    this.router.navigate([`${this.pathBack}`]);

    this.modalCtrl.dismiss({
      onClearForm: true,
    });
  }

  acceptBackFromEntryIngredient() {
    this.router.navigate([`${this.pathBack}`]);

    this.modalCtrl.dismiss({
      onClearForm: true,
    });
  }
}
