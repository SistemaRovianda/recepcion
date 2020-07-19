import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./features/landing/layout/layout.module').then(
        (layoutModule) => layoutModule.LayoutPageModule
      ),
  },
  {
    path: 'menu',
    loadChildren: () =>
      import('./features/menu/menu.module').then((m) => m.MenuModule),
  },
  {
    path: 'meat',
    loadChildren: () =>
      import('./features/meat/meat.routing').then((m) => m.MeatRoutingModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
