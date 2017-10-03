import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {FormComponent} from "./component/form.component";
import {DashboardCounterComponent} from "./component/dashboard.counter.component";

const routes: Routes = [
  { path: '', redirectTo: '/form', pathMatch: 'full' },
  { path: 'form',     component: FormComponent},
  { path: 'counter',     component: DashboardCounterComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
