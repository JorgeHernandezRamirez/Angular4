import {Component} from "@angular/core";
import {CommunicationService} from "./communication.service";

@Component({
    selector: 'parent-observable-interaction',
    template: `<h2>Interacción a través de servicio (observable)</h2>
               <component1-observable-interaction></component1-observable-interaction>
               <component2-observable-interaction></component2-observable-interaction>`
})
export class ParentObservableInteractionComponent{
}