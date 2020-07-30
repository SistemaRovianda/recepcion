import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'title-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class TitleHeaderComponent implements OnInit {
  @Input() titlePath: string; //title of button
  @Input() title: string;
  @Output('onBack') back = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onBack() {
    this.back.emit();
  }
}
