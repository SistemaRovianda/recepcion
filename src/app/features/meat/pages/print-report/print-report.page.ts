import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/shared/models/app-state.interface';
import { generateReportEntryMeat } from '../../store/meat/meat.actions';

@Component({
  selector: 'print-report',
  templateUrl: './print-report.page.html',
  styleUrls: ['./print-report.page.scss'],
})
export class PrintReportPageComponent implements OnInit {
  entryMeatId: string;

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.entryMeatId = this.route.snapshot.params.id;
    console.log('idFormulation: ', this.entryMeatId);
  }

  ngOnInit() {}

  printReport() {
    console.log('Imprimir reporte');
    this.store.dispatch(
      generateReportEntryMeat({ entryMeatId: this.entryMeatId })
    );
  }

  onBack(evt) {
    this.returnToMenu();
  }

  returnToMenu() {
    this.router.navigate(['menu', 'reception']);
  }
}
