"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var platform_browser_1 = require("@angular/platform-browser");
var parent_passdata_interaction_component_1 = require("../../../app/component/interaction/passdata/parent.passdata.interaction.component");
var child_passdata_interaction_component_1 = require("../../../app/component/interaction/passdata/child.passdata.interaction.component");
describe('PassDataInteractionComponent', function () {
    var componentToTest;
    var fixture;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [parent_passdata_interaction_component_1.ParentPassDataInteractionComponent, child_passdata_interaction_component_1.ChildPassDataInteractionComponent],
        });
        fixture = testing_1.TestBed.createComponent(parent_passdata_interaction_component_1.ParentPassDataInteractionComponent);
        componentToTest = fixture.componentInstance;
    });
    it('should display h2 value title empty', function () {
        var h2HtmlElement = fixture.debugElement.query(platform_browser_1.By.css('h2')).nativeElement;
        expect(h2HtmlElement.textContent).toEqual('');
    });
    it('should display h2 value title equals to component title', function () {
        fixture.detectChanges();
        var h2HtmlElement = fixture.debugElement.query(platform_browser_1.By.css('h2')).nativeElement;
        expect(h2HtmlElement.textContent).toEqual(componentToTest.title);
    });
    it('should display value title and description from first book', function () {
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelectorAll('child-pass-data-interaction')[0].children[0].children[1].innerHTML)
            .toBe('Robert. C. Martin');
        expect(fixture.nativeElement.querySelectorAll('child-pass-data-interaction p')[0].innerHTML)
            .toBe('Clean Code');
    });
});
//# sourceMappingURL=interaction.component.spec.js.map