import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private toastCtrl: ToastController, private router: Router) {}

  async onSuccess() {
    const toast = await this.toastCtrl.create({
      message: 'Operacion exitosa!',
      duration: 2000,
      color: 'success',
    });
    // this.router.navigate(["/dried/menu"]);
    toast.present();
  }

  async onError() {
    const toast = await this.toastCtrl.create({
      message: 'Error en la operación!',
      duration: 2000,
      color: 'danger',
    });

    toast.present();
  }
}
