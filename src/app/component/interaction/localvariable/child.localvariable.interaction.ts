import {Component} from "@angular/core";

@Component({
    selector: 'child-local-variable-interaction',
    template: `{{counter}}`
})
export class ChildLocalVariableInteractionComponent{

    private counter: number;

    constructor(){
        this.counter = 0;
    }

    public incrementCounter(): void{
        this.counter++;
    }
}