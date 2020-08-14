import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddObservationsDialogComponent } from './add-observations-dialog.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [AddObservationsDialogComponent],
    imports: [ CommonModule, IonicModule, FormsModule, ReactiveFormsModule ],
    exports: [AddObservationsDialogComponent],
    entryComponents: [AddObservationsDialogComponent],
    providers: [],
})
export class AddObservationsModule {}