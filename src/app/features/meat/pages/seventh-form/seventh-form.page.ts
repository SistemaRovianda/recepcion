import { Component, OnInit, ViewChild } from '@angular/core';
import { SeventhFormComponent } from '../../components/forms/seventh-form/seventh-form.component';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/shared/models/app-state.interface';
import { finalInformation } from 'src/app/shared/models/meat.interface';
import { addFinalData, saveEntryMeat } from '../../store/meat/meat.actions';
import { meatSelector } from '../../store/meat/meat.selectors';

@Component({
  selector: 'app-seventh-form',
  templateUrl: './seventh-form.page.html',
  styleUrls: ['./seventh-form.page.scss'],
})
export class SeventhFormPage implements OnInit {
  @ViewChild('seventhForm', { static: false })
  seventhForm: SeventhFormComponent;

  constructor(private _store: Store<AppState>) {}

  ngOnInit() {}

  onSubmitSeventh(evt: finalInformation) {
    let entryMeat;
    this._store.select(meatSelector).subscribe((meat) => {
      entryMeat = {
        ...meat,
        ...evt,
      };
    });
    console.info('seventh: ', entryMeat);
    // this._store.dispatch(addFinalData({ final: evt }));
    this._store.dispatch(saveEntryMeat({ entryMeat: entryMeat }));
  }

  onGenerateReport() {
    this.seventhForm.onSubmit();
    console.log('Generar reporte');
  }
}
