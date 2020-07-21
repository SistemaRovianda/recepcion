import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeventhFormComponent } from './seventh-form.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SeventhFormComponent],
  imports: [CommonModule, IonicModule, FormsModule, ReactiveFormsModule],
  exports: [SeventhFormComponent],
  providers: [],
})
export class SeventhFormModule {}
