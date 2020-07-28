import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IngredientFormPage } from './ingredient-form.page';

describe('IngredientFormPage', () => {
  let component: IngredientFormPage;
  let fixture: ComponentFixture<IngredientFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IngredientFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
