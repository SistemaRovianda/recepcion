import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/shared/models/app-state.interface';
import { signOut } from 'src/app/features/landing/store/login/login.action';

import { CancelProcessDialogComponent } from 'src/app/shared/dialogs/cancel-process-dialog/cancel-process-dialog.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-reception-menu',
  templateUrl: './reception-menu.component.html',
  styleUrls: ['./reception-menu.component.scss'],
})
export class ReceptionMenuComponent implements OnInit {
  constructor(private store: Store<AppState>,private modalCtrl:ModalController) {}

  ngOnInit() {}

  async logout(evt) {
    const modal = await this.modalCtrl.create({
      component: CancelProcessDialogComponent,
      cssClass: 'cancel-dialog',
      componentProps: {
        message: '¿Saldras de la sesion?',
        area: 'reception',
        pathBack: 'logout',
      },
    });
    return await modal.present();
    
  }
}
