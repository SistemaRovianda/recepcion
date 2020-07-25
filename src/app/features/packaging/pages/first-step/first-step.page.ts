import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FirstFormComponent } from '../../components/forms/first-form/first-form.component';

@Component({
  selector: 'app-first-step',
  templateUrl: './first-step.page.html',
  styleUrls: ['./first-step.page.scss'],
})
export class FirstStepPage implements OnInit {
  @ViewChild('form', { static: false }) form: FirstFormComponent;

  constructor(private router: Router) {}

  ngOnInit() {}

  onSubmit(evt) {
    console.log('primera parte: ', evt);
  }

  toNavigate() {
    this.form.onSubmit();
    this.router.navigate(['packaging', 'second-step']);
  }
}