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
var ChildPassDataInteractionComponent = (function () {
    function ChildPassDataInteractionComponent() {
    }
    ChildPassDataInteractionComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(ChildPassDataInteractionComponent.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (value) {
            this._title = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChildPassDataInteractionComponent.prototype, "description", {
        get: function () {
            return this._description;
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: true,
        configurable: true
    });
    return ChildPassDataInteractionComponent;
}());
__decorate([
    core_1.Input('title'),
    __metadata("design:type", String)
], ChildPassDataInteractionComponent.prototype, "_title", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], ChildPassDataInteractionComponent.prototype, "description", null);
ChildPassDataInteractionComponent = __decorate([
    core_1.Component({
        selector: 'child-pass-data-interaction',
        template: "<div class=\"child-pass-data-interaction-component\">\n                  <p>{{title}}</p>\n                  <span>{{description}}</span>\n               </div>"
    })
], ChildPassDataInteractionComponent);
exports.ChildPassDataInteractionComponent = ChildPassDataInteractionComponent;
//# sourceMappingURL=child.passdata.interaction.component.js.map