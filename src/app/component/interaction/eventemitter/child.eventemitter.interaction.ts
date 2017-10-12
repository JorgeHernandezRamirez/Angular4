import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
    selector: 'child-event-emitter-interaction',
    template: `<h3>Hijo</h3>
               <button (click)="incrementCounter()">Incrementar valor</button>
               <span>{{counter}}</span>`
})
export class ChildEventEmitterVariableInteractionComponent{

    @Input()
    private counter: number;

    @Output('callback')
    private eventEmitter: EventEmitter<number> = new EventEmitter<number>();

    constructor(){
        this.counter = 0;
    }

    public incrementCounter(): void{
        this.counter++;
        this.eventEmitter.emit(this.counter);
    }
}