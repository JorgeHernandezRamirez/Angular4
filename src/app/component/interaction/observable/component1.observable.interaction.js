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
var communication_service_1 = require("./communication.service");
var Component1ObservableInteractionComponent = (function () {
    function Component1ObservableInteractionComponent(communicationService) {
        var _this = this;
        this.communicationService = communicationService;
        this.messagesFromComponent2 = [];
        communicationService.getObservableToComponent1().subscribe(function (message) {
            _this.messagesFromComponent2.push(message);
        });
    }
    Component1ObservableInteractionComponent.prototype.sendMessage = function (messageToComponent2) {
        this.communicationService.sendMessageToComponent2(messageToComponent2);
    };
    return Component1ObservableInteractionComponent;
}());
Component1ObservableInteractionComponent = __decorate([
    core_1.Component({
        selector: 'component1-observable-interaction',
        template: "<h3>Component1</h3>\n               <input type=\"text\" placeholder=\"Mensaje para el componente 2\" #message/>\n               <button (click)=\"sendMessage(message.value)\">Enviar mensaje</button>\n               <div *ngFor=\"let message of messagesFromComponent2\">{{message}}</div>"
    }),
    __metadata("design:paramtypes", [communication_service_1.CommunicationService])
], Component1ObservableInteractionComponent);
exports.Component1ObservableInteractionComponent = Component1ObservableInteractionComponent;
//# sourceMappingURL=component1.observable.interaction.js.map