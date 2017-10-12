"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ParentEventEmitterInteractionComponent = (function () {
    function ParentEventEmitterInteractionComponent() {
        this.logValues = [];
        this.title = 'Interacción a través de event emitter';
    }
    ParentEventEmitterInteractionComponent.prototype.getMessageFromChild = function (counter) {
        this.logValues.push(counter);
    };
    return ParentEventEmitterInteractionComponent;
}());
ParentEventEmitterInteractionComponent = __decorate([
    core_1.Component({
        selector: 'parent-event-emitter-interaction',
        template: "<h2>{{title}}</h2>\n               <h3>Padre</h3>\n               <span *ngFor=\"let value of logValues\"> {{value}}</span>\n               <child-event-emitter-interaction [counter]=\"0\" (callback)=\"getMessageFromChild($event)\"></child-event-emitter-interaction>"
    }),
    __metadata("design:paramtypes", [])
], ParentEventEmitterInteractionComponent);
exports.ParentEventEmitterInteractionComponent = ParentEventEmitterInteractionComponent;
//# sourceMappingURL=parent.eventemitter.interaction.js.map