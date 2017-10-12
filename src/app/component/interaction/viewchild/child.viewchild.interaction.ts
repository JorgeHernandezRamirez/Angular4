import {Component} from "@angular/core";

@Component({
    selector: 'child-view-child-variable-interaction',
    template: `{{counter}}`
})
export class ChildViewChildInteractionComponent{

    private counter: number;

    constructor(){
        this.counter = 0;
    }

    public incrementCounter(): void{
        this.counter++;
    }
}