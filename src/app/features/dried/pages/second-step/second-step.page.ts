import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SecondFormComponent } from '../../components/second-form/second-form.component';

@Component({
  selector: 'app-second-step',
  templateUrl: './second-step.page.html',
  styleUrls: ['./second-step.page.scss'],
})
export class SecondStepPage implements OnInit {
  @ViewChild('form', { static: false }) form: SecondFormComponent;

  constructor(private router: Router) {}

  ngOnInit() {}

  onSubmit(evt) {
    console.log('SecondForm: ', evt);
  }

  toNavigate() {
    this.form.onSubmitForm();
    this.router.navigate(['dried', 'third-step']);
  }
}
