import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SecondFormPage } from './pages/second-form/second-form.page';
import { FourthFormPage } from './pages/fourth-form/fourth-form.page';
import { SixthFormPage } from './pages/sixth-form/sixth-form.page';
import { SeventhFormPage } from './pages/seventh-form/seventh-form.page';
import { FirstFormPage } from './pages/first-form/first-form.page';
import { FirstFormPageModule } from './pages/first-form/first-form.module';
import { SecondFormPageModule } from './pages/second-form/second-form.module';
import { FourthFormPageModule } from './pages/fourth-form/fourth-form.module';
import { SeventhFormPageModule } from './pages/seventh-form/seventh-form.module';
import { SixthFormPageModule } from './pages/sixth-form/sixth-form.module';
import { FridgesResolve } from '../../shared/resolvers/fridges.resolver';
import { UsersResolve } from 'src/app/shared/resolvers/users.resolver';
import { PrintReportPageComponent } from './pages/print-report/print-report.page';
import { PrintReportPageModule } from './pages/print-report/print-report.module';

const routes: Routes = [
  {
    path: 'first-form-meat',
    component: FirstFormPage,
  },
  {
    path: 'second-form-meat',
    component: SecondFormPage,
  },
  {
    path: 'fourth-form-meat',
    component: FourthFormPage,
  },
  {
    path: 'sixth-form-meat',
    resolve: {
      fridges: FridgesResolve,
    },
    component: SixthFormPage,
  },
  {
    path: 'seventh-form-meat',
    resolve: {
      users: UsersResolve,
    },
    component: SeventhFormPage,
  },
  {
    path: 'print-report/:id',
    component: PrintReportPageComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FirstFormPageModule,
    SecondFormPageModule,
    FourthFormPageModule,
    SixthFormPageModule,
    SeventhFormPageModule,
    PrintReportPageModule,
  ],
  exports: [RouterModule],
  providers: [FridgesResolve, UsersResolve],
})
export class MeatRoutingModule {}
