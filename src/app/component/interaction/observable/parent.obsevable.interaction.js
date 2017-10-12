"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ParentObservableInteractionComponent = (function () {
    function ParentObservableInteractionComponent() {
    }
    return ParentObservableInteractionComponent;
}());
ParentObservableInteractionComponent = __decorate([
    core_1.Component({
        selector: 'parent-observable-interaction',
        template: "<h2>Interacci\u00F3n a trav\u00E9s de servicio (observable)</h2>\n               <component1-observable-interaction></component1-observable-interaction>\n               <component2-observable-interaction></component2-observable-interaction>"
    })
], ParentObservableInteractionComponent);
exports.ParentObservableInteractionComponent = ParentObservableInteractionComponent;
//# sourceMappingURL=parent.obsevable.interaction.js.map