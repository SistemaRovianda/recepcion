import { Component, OnInit, ViewChild } from '@angular/core';
import { SeventhFormComponent } from '../../components/forms/seventh-form/seventh-form.component';

@Component({
  selector: 'app-seventh-form',
  templateUrl: './seventh-form.page.html',
  styleUrls: ['./seventh-form.page.scss'],
})
export class SeventhFormPage implements OnInit {
  @ViewChild('seventhForm', { static: false })
  seventhForm: SeventhFormComponent;

  constructor() {}

  ngOnInit() {}

  onSubmitSeventh(evt) {
    console.info('seventh: ', evt);
  }

  onGenerateReport() {
    this.seventhForm.onSubmit();
    console.log('Generar reporte');
  }
}
