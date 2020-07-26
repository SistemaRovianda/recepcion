import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/shared/models/app-state.interface';
import { generateReportEntryPackaging } from '../../store/packaging/packaging.actions';

@Component({
  selector: 'print-report',
  templateUrl: './print-report.page.html',
  styleUrls: ['./print-report.page.scss'],
})
export class PrintReportPageComponent implements OnInit {
  entryPackingId: string;

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.entryPackingId = this.route.snapshot.params.id;
    console.log('idFormulation: ', this.entryPackingId);
  }

  ngOnInit() {}

  printReport() {
    console.log('Imprimir reporte');
    this.store.dispatch(
      generateReportEntryPackaging({ entryPackagingId: this.entryPackingId })
    );
  }

  returnToMenu() {
    this.router.navigate(['menu', 'reception']);
  }
}
