import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {AppRoutingModule} from "./app-routing.module";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./service/in-memory-data.service";
import {AppComponent} from "./component/app.component";
import {FormComponent} from "./component/form/form.component";
import {ChildDataBindingComponent} from "./component/databinding/counter.databinding.component";
import {IPlayerService} from "./service/IPlayerService";
import {PlayerService} from "./service/PlayerService";
import {InteractionComponent} from "./component/interaction/interaction.component";
import {ParentPassDataInteractionComponent} from "./component/interaction/passdata/parent.passdata.interaction.component";
import {ChildPassDataInteractionComponent} from "./component/interaction/passdata/child.passdata.interaction.component";
import {DataBindingComponent} from "./component/databinding/databinding.counter.component";
import {VersionNgOnChangesComponent} from "./component/interaction/ngonchanges/version.ngonchanges.interaction.component";
import {ParentNgOnChangesComponent} from "./component/interaction/ngonchanges/parent.ngonchanges.interaction.component";
import {ChildLocalVariableInteractionComponent} from "./component/interaction/localvariable/child.localvariable.interaction";
import {ParentLocalVariableInteractionComponent} from "./component/interaction/localvariable/parent.localvariable.interaction";
import {ChildViewChildInteractionComponent} from "./component/interaction/viewchild/child.viewchild.interaction";
import {ParentViewChildInteractionComponent} from "./component/interaction/viewchild/parent.viewchild.interaction";

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
    ChildDataBindingComponent,
    DataBindingComponent,
    InteractionComponent,
    ChildPassDataInteractionComponent,
    ParentPassDataInteractionComponent,
    VersionNgOnChangesComponent,
    ParentNgOnChangesComponent,
    ChildLocalVariableInteractionComponent,
    ParentLocalVariableInteractionComponent,
    ParentViewChildInteractionComponent,
    ChildViewChildInteractionComponent
  ],
  providers: [
    {provide: IPlayerService, useClass: PlayerService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
