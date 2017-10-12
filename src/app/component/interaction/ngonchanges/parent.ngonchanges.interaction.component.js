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
var ParentNgOnChangesComponent = (function () {
    function ParentNgOnChangesComponent() {
        this.title = 'Interacción a través de ngonchanges';
    }
    ParentNgOnChangesComponent.prototype.incrementMinorVersion = function () {
        this.minor++;
    };
    ParentNgOnChangesComponent.prototype.incrementMayorVersion = function () {
        this.mayor++;
    };
    return ParentNgOnChangesComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], ParentNgOnChangesComponent.prototype, "minor", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], ParentNgOnChangesComponent.prototype, "mayor", void 0);
ParentNgOnChangesComponent = __decorate([
    core_1.Component({
        selector: 'parent-ngonchange-interaction',
        template: "<h2>{{title}}</h2>\n               <button (click)=\"incrementMinorVersion()\">Incrementar minor version</button>\n               <button (click)=\"incrementMayorVersion()\">Incrementar mayor version</button>\n               <version-ngonchanges-interaction [minor]=\"minor\" [mayor]=\"mayor\"></version-ngonchanges-interaction>"
    })
], ParentNgOnChangesComponent);
exports.ParentNgOnChangesComponent = ParentNgOnChangesComponent;
//# sourceMappingURL=parent.ngonchanges.interaction.component.js.map