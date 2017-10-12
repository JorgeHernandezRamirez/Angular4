"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_routing_module_1 = require("./app-routing.module");
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var in_memory_data_service_1 = require("./service/in-memory-data.service");
var app_component_1 = require("./component/app.component");
var form_component_1 = require("./component/form/form.component");
var counter_databinding_component_1 = require("./component/databinding/counter.databinding.component");
var IPlayerService_1 = require("./service/IPlayerService");
var PlayerService_1 = require("./service/PlayerService");
var interaction_component_1 = require("./component/interaction/interaction.component");
var parent_passdata_interaction_component_1 = require("./component/interaction/passdata/parent.passdata.interaction.component");
var child_passdata_interaction_component_1 = require("./component/interaction/passdata/child.passdata.interaction.component");
var databinding_counter_component_1 = require("./component/databinding/databinding.counter.component");
var version_ngonchanges_interaction_component_1 = require("./component/interaction/ngonchanges/version.ngonchanges.interaction.component");
var parent_ngonchanges_interaction_component_1 = require("./component/interaction/ngonchanges/parent.ngonchanges.interaction.component");
var child_localvariable_interaction_1 = require("./component/interaction/localvariable/child.localvariable.interaction");
var parent_localvariable_interaction_1 = require("./component/interaction/localvariable/parent.localvariable.interaction");
var child_viewchild_interaction_1 = require("./component/interaction/viewchild/child.viewchild.interaction");
var parent_viewchild_interaction_1 = require("./component/interaction/viewchild/parent.viewchild.interaction");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            app_routing_module_1.AppRoutingModule,
            forms_1.ReactiveFormsModule,
            angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService),
        ],
        declarations: [
            app_component_1.AppComponent,
            form_component_1.FormComponent,
            counter_databinding_component_1.ChildDataBindingComponent,
            databinding_counter_component_1.DataBindingComponent,
            interaction_component_1.InteractionComponent,
            child_passdata_interaction_component_1.ChildPassDataInteractionComponent,
            parent_passdata_interaction_component_1.ParentPassDataInteractionComponent,
            version_ngonchanges_interaction_component_1.VersionNgOnChangesComponent,
            parent_ngonchanges_interaction_component_1.ParentNgOnChangesComponent,
            child_localvariable_interaction_1.ChildLocalVariableInteractionComponent,
            parent_localvariable_interaction_1.ParentLocalVariableInteractionComponent,
            parent_viewchild_interaction_1.ParentViewChildInteractionComponent,
            child_viewchild_interaction_1.ChildViewChildInteractionComponent
        ],
        providers: [
            { provide: IPlayerService_1.IPlayerService, useClass: PlayerService_1.PlayerService }
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map