import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {AppRoutingModule} from "./app-routing.module";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";

import {AppComponent} from "./component/app.component";
import {FormComponent} from "./component/form.component";
import {IPlayerService} from "./service/IPlayerService";
import {PlayerService} from "./service/PlayerService";
import {InMemoryDataService} from "./service/in-memory-data.service";
import {CounterComponent} from "./component/counter.component";
import {DashboardCounterComponent} from "./component/dashboard.counter.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  declarations: [
    AppComponent,
    FormComponent,
    CounterComponent,
    DashboardCounterComponent
  ],
  providers: [
    {provide: IPlayerService, useClass: PlayerService}
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
