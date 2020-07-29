import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FirstStepPage } from './pages/first-step/first-step.page';
import { SecondStepPage } from './pages/second-step/second-step.page';
import { ThirdStepPage } from './pages/third-step/third-step.page';
import { FirstStepPageModule } from './pages/first-step/first-step.module';
import { SecondStepPageModule } from './pages/second-step/second-step.module';
import { ThirdStepPageModule } from './pages/third-step/third-step.module';
import { PrintReportPage } from './pages/print-report/print-report.page';
import { PrintReportPageModule } from './pages/print-report/print-report.module';
import { ProductsResolve } from 'src/app/shared/resolvers/products.resolver';

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
    component: SecondStepPage,
  },
  {
    path: 'third-step',
    component: ThirdStepPage,
  },
  {
    path: 'print-report/:id',
    component: PrintReportPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FirstStepPageModule,
    SecondStepPageModule,
    ThirdStepPageModule,
    PrintReportPageModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
  providers: [ProductsResolve],
})
export class DriedRoutingModule {}
