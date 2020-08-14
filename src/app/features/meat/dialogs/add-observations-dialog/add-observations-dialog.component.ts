import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-observations-dialog',
  templateUrl: './add-observations-dialog.component.html',
  styleUrls: ['./add-observations-dialog.component.scss'],
})
export class AddObservationsDialogComponent implements OnInit {

  observationForm: FormControl = new FormControl('', Validators.required);

  constructor(private modalCtrl: ModalController) {
    
  }

  ngOnInit() {}

  onAccept(){
    this.modalCtrl.dismiss({observation: this.observationForm.value});
  }

  onCancel(){
    this.observationForm.reset();
    this.modalCtrl.dismiss();
  }

}
