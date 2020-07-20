import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstFormComponent } from './first-form.component';
import { TitleHeaderModule } from 'src/app/shared/components/header/header.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [FirstFormComponent],
  imports: [
    CommonModule,
    TitleHeaderModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [FirstFormComponent],
  providers: [],
})
export class FirstFormModule {}
