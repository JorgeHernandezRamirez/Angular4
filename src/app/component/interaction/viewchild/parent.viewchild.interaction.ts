import {Component, ViewChild} from "@angular/core";
import {ChildViewChildInteractionComponent} from "./child.viewchild.interaction";

@Component({
    selector: 'parent-view-child-variable-interaction',
    template: `<h2>{{title}}</h2>
               <button (click)="incrementCounter();">Incrementar valor</button>
               <child-view-child-variable-interaction></child-view-child-variable-interaction>`
})
export class ParentViewChildInteractionComponent{

    private title: string = 'Interacción a través de @ViewChild';

    @ViewChild(ChildViewChildInteractionComponent)
    private childChildViewInteractionComponent: ChildViewChildInteractionComponent;

    constructor(){
    }

    public incrementCounter(): void{
        this.childChildViewInteractionComponent.incrementCounter();
    }
}