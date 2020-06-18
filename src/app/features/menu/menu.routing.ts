import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ReceptionMenuComponent } from './pages/reception-menu/reception-menu.component';
import { ReceptionMenuModule } from './pages/reception-menu/reception-menu.module';

const routes: Routes = [
  {
    path: 'reception',
    component: ReceptionMenuComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), ReceptionMenuModule],
  providers: [],
  exports: [RouterModule],
})
export class MenuRoutingModule {}
