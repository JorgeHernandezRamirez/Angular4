"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var InteractionComponent = (function () {
    function InteractionComponent() {
    }
    InteractionComponent.prototype.ngOnInit = function () {
    };
    return InteractionComponent;
}());
InteractionComponent = __decorate([
    core_1.Component({
        selector: 'interaction',
        template: "<parent-pass-data-interaction></parent-pass-data-interaction>\n               <parent-ngonchange-interaction [mayor]=\"1\" [minor]=\"0\"></parent-ngonchange-interaction>\n               <parent-local-variable-interaction></parent-local-variable-interaction>\n               <parent-view-child-variable-interaction></parent-view-child-variable-interaction>"
    })
], InteractionComponent);
exports.InteractionComponent = InteractionComponent;
//# sourceMappingURL=interaction.component.js.map