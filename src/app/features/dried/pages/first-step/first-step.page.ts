import { Component, OnInit, ViewChild } from '@angular/core';
import { FirstFormComponent } from 'src/app/features/packaging/components/forms/first-form/first-form.component';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/shared/models/app-state.interface';
// import { addBasicInformationPackaging } from 'src/app/features/packaging/store/packaging/packaging.actions';

@Component({
  selector: 'app-first-step',
  templateUrl: './first-step.page.html',
  styleUrls: ['./first-step.page.scss'],
})
export class FirstStepPage implements OnInit {
  @ViewChild('form', { static: false }) form: FirstFormComponent;

  constructor(private router: Router, private store: Store<AppState>) {}

  ngOnInit() {}

  onSubmit(evt) {
    console.log('Primer formulario: ', evt);
    // this.store.dispatch(
    //   addBasicInformationPackaging({ basicInformation: evt })
    // );
  }

  toNavigate() {
    this.form.onSubmit();
    this.router.navigate(['dried', 'second-step']);
  }
}
