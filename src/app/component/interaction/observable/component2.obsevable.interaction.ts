import {Component} from "@angular/core";
import {CommunicationService} from "./communication.service";

@Component({
    selector: 'component2-observable-interaction',
    template: `<h3>Component2</h3>
    <input type="text" placeholder="Mensaje para el componente 1" #message/>
    <button (click)="sendMessage(message.value)">Enviar mensaje</button>
    <p *ngFor="let message of messagesFromComponent1">{{message}}</p>`
})
export class Component2ObservableInteractionComponent{

    private messagesFromComponent1: string[] = [];

    constructor(private communicationService: CommunicationService){
        communicationService.getObservableToComponent2().subscribe((message) => {
            this.messagesFromComponent1.push(message);
        })
    }

    public sendMessage(messageToComponent1: string): void{
        this.communicationService.sendMessageToComponent1(messageToComponent1);
    }
}