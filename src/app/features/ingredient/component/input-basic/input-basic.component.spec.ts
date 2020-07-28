import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InputBasicComponent } from './input-basic.component';

describe('InputBasicComponent', () => {
  let component: InputBasicComponent;
  let fixture: ComponentFixture<InputBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputBasicComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InputBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
