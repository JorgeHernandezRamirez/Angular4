"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ParentLocalVariableInteractionComponent = (function () {
    function ParentLocalVariableInteractionComponent() {
        this.title = 'Interacción a través de variables locales';
    }
    return ParentLocalVariableInteractionComponent;
}());
ParentLocalVariableInteractionComponent = __decorate([
    core_1.Component({
        selector: 'parent-local-variable-interaction',
        template: "<h2>{{title}}</h2>\n               <button (click)=\"child.incrementCounter();\">Incrementar valor</button>\n               <child-local-variable-interaction #child></child-local-variable-interaction>"
    })
], ParentLocalVariableInteractionComponent);
exports.ParentLocalVariableInteractionComponent = ParentLocalVariableInteractionComponent;
//# sourceMappingURL=parent.localvariable.interaction.js.map