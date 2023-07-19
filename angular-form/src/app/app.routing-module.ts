import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { FormComponent } from "./form/form.component";
import { PaginaComponent } from './pagina/pagina.component';

const routes: Routes = [
  {path: '', component: FormComponent},
  {path: 'página', component: PaginaComponent}
]
@NgModule({
  declarations: [],
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class appRoutingModule {}
