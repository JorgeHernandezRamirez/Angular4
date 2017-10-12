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
var ChildEventEmitterVariableInteractionComponent = (function () {
    function ChildEventEmitterVariableInteractionComponent() {
        this.eventEmitter = new core_1.EventEmitter();
        this.counter = 0;
    }
    ChildEventEmitterVariableInteractionComponent.prototype.incrementCounter = function () {
        this.counter++;
        this.eventEmitter.emit(this.counter);
    };
    return ChildEventEmitterVariableInteractionComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], ChildEventEmitterVariableInteractionComponent.prototype, "counter", void 0);
__decorate([
    core_1.Output('callback'),
    __metadata("design:type", core_1.EventEmitter)
], ChildEventEmitterVariableInteractionComponent.prototype, "eventEmitter", void 0);
ChildEventEmitterVariableInteractionComponent = __decorate([
    core_1.Component({
        selector: 'child-event-emitter-interaction',
        template: "<h3>Hijo</h3>\n               <button (click)=\"incrementCounter()\">Incrementar valor</button>\n               <span>{{counter}}</span>"
    }),
    __metadata("design:paramtypes", [])
], ChildEventEmitterVariableInteractionComponent);
exports.ChildEventEmitterVariableInteractionComponent = ChildEventEmitterVariableInteractionComponent;
//# sourceMappingURL=child.eventemitter.interaction.js.map