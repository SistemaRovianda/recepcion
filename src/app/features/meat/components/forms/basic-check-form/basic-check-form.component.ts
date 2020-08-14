import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { AddObservationsDialogComponent } from '../../../dialogs/add-observations-dialog/add-observations-dialog.component';

@Component({
  selector: 'app-basic-check-form',
  templateUrl: './basic-check-form.component.html',
  styleUrls: ['./basic-check-form.component.scss'],
})
export class BasicCheckFormComponent implements OnInit {

  @Input() title: string;
  @Input() subtitle: string;
  @Output("onSubmit") submit = new EventEmitter();

  form: FormGroup;

  constructor(private fb: FormBuilder, private modalCtrl: ModalController) { 
    this.form = this.fb.group({
      accepted: ['', Validators.required],
      observations: ['']
    })
  }

  ngOnInit() {}

  onSubmitForm(){
    this.submit.emit(this.form.value)    
  }

  addObservations(){
    this.openModal();
  }

  async openModal(){
    const dialog = await this.modalCtrl.create({
      component: AddObservationsDialogComponent,
      cssClass: 'observations-modal'
    });

    dialog.onDidDismiss().then(res => {
      if(res !== null){
        if(res.data !== undefined){
          this.form.get('observations').setValue(res.data.observation);
        }
      }
    });

    return await dialog.present();
  }

}
