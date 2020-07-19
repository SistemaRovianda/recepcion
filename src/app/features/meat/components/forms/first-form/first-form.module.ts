import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstFormComponent } from './first-form.component';
import { TitleHeaderModule } from 'src/app/shared/components/header/header.module';

@NgModule({
  declarations: [FirstFormComponent],
  imports: [CommonModule, TitleHeaderModule],
  exports: [FirstFormComponent],
  providers: [],
})
export class FirstFormModule {}
