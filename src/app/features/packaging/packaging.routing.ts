import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FirstStepPage } from './pages/first-step/first-step.page';
import { SecondStepPage } from './pages/second-step/second-step.page';
import { SecondStepPageModule } from './pages/second-step/second-step.module';
import { FirstStepPageModule } from './pages/first-step/first-step.module';
import { ProductsResolve } from 'src/app/shared/resolvers/products.resolver';

const routes: Routes = [
  {
    path: 'first-step',
    resolve: {
      products: ProductsResolve,
    },
    component: FirstStepPage,
  },
  {
    path: 'second-step',
    component: SecondStepPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FirstStepPageModule,
    SecondStepPageModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
  providers: [ProductsResolve],
})
export class PackagingRountingModule {}
