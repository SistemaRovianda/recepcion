import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicCheckFormComponent } from './basic-check-form.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddObservationsModule } from '../../../dialogs/add-observations-dialog/add-observations-dialog.module';

@NgModule({
    declarations: [BasicCheckFormComponent],
    imports: [ CommonModule, IonicModule, FormsModule, ReactiveFormsModule, AddObservationsModule ],
    exports: [BasicCheckFormComponent],
    providers: [],
})
export class BasicCheckFormModule {}