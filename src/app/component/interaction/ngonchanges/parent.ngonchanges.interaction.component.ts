import {Component, Input} from "@angular/core";

@Component({
    selector: 'parent-ngonchange-interaction',
    template: `<h2>{{title}}</h2>
               <button (click)="incrementMinorVersion()">Incrementar minor version</button>
               <button (click)="incrementMayorVersion()">Incrementar mayor version</button>
               <version-ngonchanges-interaction [minor]="minor" [mayor]="mayor"></version-ngonchanges-interaction>`
})
export class ParentNgOnChangesComponent{

    private title: string = 'Interacción a través de ngonchanges';

    @Input()
    private minor: number;

    @Input()
    private mayor: number;

    public incrementMinorVersion(): void{
        this.minor++;
    }

    public incrementMayorVersion(): void{
        this.mayor++;
    }
}