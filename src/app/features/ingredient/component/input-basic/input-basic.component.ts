import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-basic',
  templateUrl: './input-basic.component.html',
  styleUrls: ['./input-basic.component.scss'],
})
export class InputBasicComponent implements OnInit {

  @Input() dataStart: any;

  constructor() { }

  ngOnInit() {}

}
