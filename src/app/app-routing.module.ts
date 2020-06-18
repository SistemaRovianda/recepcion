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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
