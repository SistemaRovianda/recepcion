import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginFormComponent } from "./login-form.component";
import { IonicModule } from "@ionic/angular";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

const COMMON_DECLARATIONS = [LoginFormComponent];

const COMMON_IMPORTS = [
  CommonModule,
  IonicModule,
  ReactiveFormsModule,
  FormsModule,
];

@NgModule({
  declarations: COMMON_DECLARATIONS,
  imports: COMMON_IMPORTS,
  exports: COMMON_DECLARATIONS,
})
export class LoginFormModule {}
