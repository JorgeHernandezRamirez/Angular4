import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormComponent} from "./component/form/form.component";
import {InteractionComponent} from "./component/interaction/interaction.component";
import {DataBindingComponent} from "./component/databinding/databinding.counter.component";

const routes: Routes = [
  { path: '', redirectTo: '/form', pathMatch: 'full' },
  { path: 'form', component: FormComponent},
  { path: 'databinding', component: DataBindingComponent},
  { path: 'interaction', component: InteractionComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
