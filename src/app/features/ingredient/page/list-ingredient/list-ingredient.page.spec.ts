import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListIngredientPage } from './list-ingredient.page';

describe('ListIngredientPage', () => {
  let component: ListIngredientPage;
  let fixture: ComponentFixture<ListIngredientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListIngredientPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListIngredientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
