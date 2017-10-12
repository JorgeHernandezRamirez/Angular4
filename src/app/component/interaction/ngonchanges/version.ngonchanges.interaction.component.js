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
var VersionNgOnChangesComponent = (function () {
    function VersionNgOnChangesComponent() {
        this.changeLog = [];
    }
    VersionNgOnChangesComponent.prototype.ngOnChanges = function (changes) {
        for (var propertyName in changes) {
            var propertyChanged = changes[propertyName];
            var jsonPropertyValue = JSON.stringify(propertyChanged.currentValue);
            if (propertyChanged.firstChange) {
                this.changeLog.push("Valor inicial de la propiedad " + propertyName + " al valor " + jsonPropertyValue);
            }
            else {
                this.changeLog.push("Propiedad " + propertyName + " cambiada al valor " + jsonPropertyValue);
            }
        }
    };
    return VersionNgOnChangesComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], VersionNgOnChangesComponent.prototype, "minor", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], VersionNgOnChangesComponent.prototype, "mayor", void 0);
VersionNgOnChangesComponent = __decorate([
    core_1.Component({
        selector: 'version-ngonchanges-interaction',
        template: "<div>Version actual {{mayor}}.{{minor}}</div><div *ngFor=\"let log of changeLog\">{{log}}</div>"
    }),
    __metadata("design:paramtypes", [])
], VersionNgOnChangesComponent);
exports.VersionNgOnChangesComponent = VersionNgOnChangesComponent;
//# sourceMappingURL=version.ngonchanges.interaction.component.js.map