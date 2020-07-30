import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SecondFormComponent } from '../../components/second-form/second-form.component';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/shared/models/app-state.interface';
import { addFirstAdditionalInformationDried } from '../../store/dried/dried.actions';

@Component({
  selector: 'app-second-step',
  templateUrl: './second-step.page.html',
  styleUrls: ['./second-step.page.scss'],
})
export class SecondStepPage implements OnInit {
  @ViewChild('form', { static: false }) form: SecondFormComponent;

  constructor(private router: Router, private store: Store<AppState>) {}

  ngOnInit() {}

  onSubmit(evt) {
    console.log('SecondForm: ', evt);
    this.store.dispatch(
      addFirstAdditionalInformationDried({ firstAdditionalInformation: evt })
    );
  }

  onBack(evt) {
    this.router.navigate(['dried', 'first-step/DRIEF']);
  }

  toNavigate() {
    this.form.onSubmitForm();
    this.router.navigate(['dried', 'third-step']);
  }
}
