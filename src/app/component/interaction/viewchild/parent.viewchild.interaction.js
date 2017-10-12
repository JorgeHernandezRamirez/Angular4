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
var child_viewchild_interaction_1 = require("./child.viewchild.interaction");
var ParentViewChildInteractionComponent = (function () {
    function ParentViewChildInteractionComponent() {
        this.title = 'Interacción a través de @ViewChild';
    }
    ParentViewChildInteractionComponent.prototype.incrementCounter = function () {
        this.childChildViewInteractionComponent.incrementCounter();
    };
    return ParentViewChildInteractionComponent;
}());
__decorate([
    core_1.ViewChild(child_viewchild_interaction_1.ChildViewChildInteractionComponent),
    __metadata("design:type", child_viewchild_interaction_1.ChildViewChildInteractionComponent)
], ParentViewChildInteractionComponent.prototype, "childChildViewInteractionComponent", void 0);
ParentViewChildInteractionComponent = __decorate([
    core_1.Component({
        selector: 'parent-view-child-variable-interaction',
        template: "<h2>{{title}}</h2>\n               <button (click)=\"incrementCounter();\">Incrementar valor</button>\n               <child-view-child-variable-interaction></child-view-child-variable-interaction>"
    }),
    __metadata("design:paramtypes", [])
], ParentViewChildInteractionComponent);
exports.ParentViewChildInteractionComponent = ParentViewChildInteractionComponent;
//# sourceMappingURL=parent.viewchild.interaction.js.map