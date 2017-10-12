import {Component} from "@angular/core";

@Component({
    selector: 'parent-event-emitter-interaction',
    template: `<h2>{{title}}</h2>
               <h3>Padre</h3>
               <span *ngFor="let value of logValues"> {{value}}</span>
               <child-event-emitter-interaction [counter]="0" (callback)="getMessageFromChild($event)"></child-event-emitter-interaction>`
})
export class ParentEventEmitterInteractionComponent{

    private logValues: number[] = [];

    title = 'Interacción a través de event emitter';

    constructor(){
    }

    public getMessageFromChild(counter: number): void{
        this.logValues.push(counter);
    }
}