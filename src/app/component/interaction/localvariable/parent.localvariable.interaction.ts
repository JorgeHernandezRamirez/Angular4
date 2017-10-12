import {Component} from "@angular/core";

@Component({
    selector: 'parent-local-variable-interaction',
    template: `<h2>{{title}}</h2>
               <button (click)="child.incrementCounter();">Incrementar valor</button>
               <child-local-variable-interaction #child></child-local-variable-interaction>`
})
export class ParentLocalVariableInteractionComponent{

    title = 'Interacción a través de variables locales';
}