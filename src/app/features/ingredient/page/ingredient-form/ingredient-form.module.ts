import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngredientFormPageRoutingModule } from './ingredient-form-routing.module';
import {MatInputModule} from '@angular/material/input';
import { IngredientFormPage } from './ingredient-form.page';
import { HttpClientModule } from '@angular/common/http';
import { TitleHeaderModule } from 'src/app/shared/components/header/header.module';
// import { InputBasicModule } from '../../component/input-basic/input-basic.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // InputBasicModule,
    ReactiveFormsModule,
    MatInputModule,
    HttpClientModule,
    TitleHeaderModule,
    IngredientFormPageRoutingModule
  ],
  declarations: [IngredientFormPage]
})
export class IngredientFormPageModule {}
