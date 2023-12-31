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
  {
    path: 'packaging',
    loadChildren: () =>
      import('./features/packaging/packaging.routing').then(
        (m) => m.PackagingRountingModule
      ),
  },
  {
    path: 'addingredient',
    loadChildren: () =>
      import(
        './features/ingredient/page/ingredient-form/ingredient-form.module'
      ).then((m) => m.IngredientFormPageModule),
  },
  {
    path: 'list-ingredient',
    loadChildren: () =>
      import(
        './features/ingredient/page/list-ingredient/list-ingredient.module'
      ).then((m) => m.ListIngredientPageModule),
  },

  {
    path: 'dried',
    loadChildren: () =>
      import('./features/dried/dried.routing').then(
        (m) => m.DriedRoutingModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
