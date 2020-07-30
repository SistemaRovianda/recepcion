import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/shared/models/app-state.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { generateReportEntryDried } from '../../store/dried/dried.actions';

@Component({
  selector: 'app-print-report',
  templateUrl: './print-report.page.html',
  styleUrls: ['./print-report.page.scss'],
})
export class PrintReportPage implements OnInit {
  entryDriefId: string;

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.entryDriefId = this.route.snapshot.params.id;
    console.log('idDried: ', this.entryDriefId);
  }

  ngOnInit() {}

  printReport() {
    console.log('Imprimir reporte');
    this.store.dispatch(
      generateReportEntryDried({ entryDriedId: this.entryDriefId })
    );
  }

  onBack(evt) {
    this.returnToMenu();
  }

  returnToMenu() {
    this.router.navigate(['menu', 'reception']);
  }
}
