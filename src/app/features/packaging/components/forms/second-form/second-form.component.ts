import {
  Component,
  OnInit,
  ViewChild,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CheckFormComponent } from '../check-form/check-form.component';

@Component({
  selector: 'app-second-form',
  templateUrl: './second-form.component.html',
  styleUrls: ['./second-form.component.scss'],
})
export class SecondFormComponent implements OnInit {
  form: FormGroup;

  @ViewChild('qualityForm', { static: false }) qualityForm: CheckFormComponent;

  @ViewChild('strageMaterialForm', { static: false })
  strageMaterialForm: CheckFormComponent;

  @ViewChild('transportForm', { static: false })
  transportForm: CheckFormComponent;

  @ViewChild('isPzForm', { static: false }) isPzForm: CheckFormComponent;

  @Output('onSubmit') submit = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      quality: ['', Validators.required],
      strageMaterial: ['', Validators.required],
      transport: ['', Validators.required],
      isPz: ['', Validators.required],
      makeId: ['', Validators.required],
      verifitId: ['', Validators.required],
    });
  }

  ngOnInit() {}

  onQualitySubmit(evt) {
    console.info('QualityForm: ', evt);
    this.form.get('quality').setValue(evt);
  }

  onStrageMaterialSubmit(evt) {
    console.log('StrageMaterialForm: ', evt);
    this.form.get('strageMaterial').setValue(evt);
  }

  onTransportSubmit(evt) {
    console.log('TransportForm: ', evt);
    this.form.get('transport').setValue(evt);
  }

  onIsPzSubmit(evt) {
    console.log('isPzForm: ', evt);
    this.form.get('isPz').setValue(evt);
  }

  onSubmitForm() {
    this.qualityForm.onSubmit();
    this.strageMaterialForm.onSubmit();
    this.transportForm.onSubmit();
    this.isPzForm.onSubmit();
    this.submit.emit(this.form.value);
  }

  get quality() {
    return this.form.get('quality');
  }

  get strageMaterial() {
    return this.form.get('strageMaterial');
  }

  get transport() {
    return this.form.get('transport');
  }

  get isPz() {
    return this.form.get('isPz');
  }

  get makeId() {
    return this.form.get('makeId');
  }

  get verifitId() {
    return this.form.get('verifitId');
  }
}
