import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { LayoutPage } from "./layout.page";
import { Route } from "@angular/compiler/src/core";
import { Routes, RouterModule } from "@angular/router";

import { LoginFormModule } from "../components/login-form/login-form.module";

const routes: Routes = [
  {
    path: "",
    component: LayoutPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginFormModule,
    RouterModule.forChild(routes),
  ],
  declarations: [LayoutPage],
})
export class LayoutPageModule {}
