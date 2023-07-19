import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { FormComponent } from "./form/form.component";

const routes: Routes = [
  {path: '', component: FormComponent}
]
@NgModule({
  declarations: [],
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class appRoutingModule {}
