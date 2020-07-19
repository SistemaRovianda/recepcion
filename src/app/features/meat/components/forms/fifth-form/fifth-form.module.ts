import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FifthFormComponent } from './fifth-form.component';
import { TitleHeaderModule } from 'src/app/shared/components/header/header.module';

@NgModule({
  declarations: [FifthFormComponent],
  imports: [CommonModule, TitleHeaderModule],
  exports: [FifthFormComponent],
  providers: [],
})
export class FifthFormModule {}
