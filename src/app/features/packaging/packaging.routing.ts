import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FirstStepPage } from './pages/first-step/first-step.page';
import { SecondStepPage } from './pages/second-step/second-step.page';
import { SecondStepPageModule } from './pages/second-step/second-step.module';
import { FirstStepPageModule } from './pages/first-step/first-step.module';
import { ProductsResolve } from 'src/app/shared/resolvers/products.resolver';
import { PrintReportPageComponent } from './pages/print-report/print-report.page';
import { PrintReportPageModule } from './pages/print-report/print-report.module';
import { UsersResolve } from 'src/app/shared/resolvers/users.resolver';

const routes: Routes = [
  {
    path: 'first-step/:area',
    resolve: {
      products: ProductsResolve,
    },
    component: FirstStepPage,
  },
  {
    path: 'second-step',
    resolve: {
      users: UsersResolve,
    },
    component: SecondStepPage,
  },
  {
    path: 'print-report/:id',
    component: PrintReportPageComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FirstStepPageModule,
    SecondStepPageModule,
    PrintReportPageModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
  providers: [ProductsResolve, UsersResolve],
})
export class PackagingRountingModule {}
