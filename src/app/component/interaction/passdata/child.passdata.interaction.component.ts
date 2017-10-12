import {Component, Input} from "@angular/core";

@Component({
    selector: 'child-pass-data-interaction',
    template: `<div class="child-pass-data-interaction-component">
                  <p>{{title}}</p>
                  <span>{{description}}</span>
               </div>`
})
export class ChildPassDataInteractionComponent{

    @Input('title')
    private _title: string;

    private _description: string;

    ngOnInit(): void {
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    @Input()
    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }
}