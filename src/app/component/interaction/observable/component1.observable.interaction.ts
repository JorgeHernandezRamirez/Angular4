import {Component} from "@angular/core";
import {CommunicationService} from "./communication.service";

@Component({
    selector: 'component1-observable-interaction',
    template: `<h3>Component1</h3>
               <input type="text" placeholder="Mensaje para el componente 2" #message/>
               <button (click)="sendMessage(message.value)">Enviar mensaje</button>
               <div *ngFor="let message of messagesFromComponent2">{{message}}</div>`
})
export class Component1ObservableInteractionComponent{

    private messagesFromComponent2: string[] = [];

    constructor(private communicationService: CommunicationService){
        communicationService.getObservableToComponent1().subscribe((message) => {
            this.messagesFromComponent2.push(message);
        })
    }

    public sendMessage(messageToComponent2: string): void{
        this.communicationService.sendMessageToComponent2(messageToComponent2);
    }
}