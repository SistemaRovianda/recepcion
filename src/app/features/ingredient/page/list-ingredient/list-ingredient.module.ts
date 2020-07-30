import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListIngredientPageRoutingModule } from './list-ingredient-routing.module';
import {MatTableModule} from '@angular/material/table';
import { ListIngredientPage } from './list-ingredient.page';
import { TitleHeaderModule } from 'src/app/shared/components/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatTableModule,
    TitleHeaderModule,
    ListIngredientPageRoutingModule
  ],
  declarations: [ListIngredientPage]
})
export class ListIngredientPageModule {}
