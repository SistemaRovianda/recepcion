import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SecondFormPage } from './pages/second-form/second-form.page';
import { ThirdFormPage } from './pages/third-form/third-form.page';
import { FourthFormPage } from './pages/fourth-form/fourth-form.page';
import { FifthFormPage } from './pages/fifth-form/fifth-form.page';
import { SixthFormPage } from './pages/sixth-form/sixth-form.page';
import { SeventhFormPage } from './pages/seventh-form/seventh-form.page';
import { FirstFormPage } from './pages/first-form/first-form.page';
import { FirstFormPageModule } from './pages/first-form/first-form.module';
import { SecondFormPageModule } from './pages/second-form/second-form.module';
import { ThirdFormPageModule } from './pages/third-form/third-form.module';
import { FourthFormPageModule } from './pages/fourth-form/fourth-form.module';
import { FifthFormPageModule } from './pages/fifth-form/fifth-form.module';
import { SeventhFormPageModule } from './pages/seventh-form/seventh-form.module';
import { SixthFormPageModule } from './pages/sixth-form/sixth-form.module';
import { FridgesResolve } from '../../shared/resolvers/fridges.resolver';
import { UsersResolve } from 'src/app/shared/resolvers/users.resolver';

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
    path: 'third-form-meat',
    component: ThirdFormPage,
  },
  {
    path: 'fourth-form-meat',
    component: FourthFormPage,
  },
  {
    path: 'fifth-form-meat',
    component: FifthFormPage,
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
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FirstFormPageModule,
    SecondFormPageModule,
    ThirdFormPageModule,
    FourthFormPageModule,
    FifthFormPageModule,
    SixthFormPageModule,
    SeventhFormPageModule,
  ],
  exports: [RouterModule],
  providers: [FridgesResolve, UsersResolve],
})
export class MeatRoutingModule {}
