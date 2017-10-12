import {ComponentFixture, TestBed} from "@angular/core/testing";
import {By} from "@angular/platform-browser";

import {ParentPassDataInteractionComponent} from "../../../app/component/interaction/passdata/parent.passdata.interaction.component";
import {ChildPassDataInteractionComponent} from "../../../app/component/interaction/passdata/child.passdata.interaction.component";

describe('PassDataInteractionComponent', () => {

    let componentToTest: ParentPassDataInteractionComponent;

    let fixture: ComponentFixture<ParentPassDataInteractionComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ ParentPassDataInteractionComponent, ChildPassDataInteractionComponent ], // declare the test component
        });
        fixture = TestBed.createComponent(ParentPassDataInteractionComponent);
        componentToTest = fixture.componentInstance;
    });

    it('should display h2 value title empty', () => {
        let h2HtmlElement: HTMLElement  = fixture.debugElement.query(By.css('h2')).nativeElement;
        expect(h2HtmlElement.textContent).toEqual('');
    });

    it('should display h2 value title equals to component title', () => {
        fixture.detectChanges();
        let h2HtmlElement: HTMLElement  = fixture.debugElement.query(By.css('h2')).nativeElement;
        expect(h2HtmlElement.textContent).toEqual(componentToTest.title);
    });

    it('should display value title and description from first book', () => {
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelectorAll('child-pass-data-interaction')[0].children[0].children[1].innerHTML)
            .toBe('Robert. C. Martin');
        expect(fixture.nativeElement.querySelectorAll('child-pass-data-interaction p')[0].innerHTML)
            .toBe('Clean Code');
    });
});