import {Component, Input, OnChanges, SimpleChanges} from "@angular/core";

@Component({
    selector: 'version-ngonchanges-interaction',
    template: `<div>Version actual {{mayor}}.{{minor}}</div><div *ngFor="let log of changeLog">{{log}}</div>`
})
export class VersionNgOnChangesComponent implements OnChanges{

    @Input()
    private minor: number;

    @Input()
    private mayor: number;

    private changeLog: string[] = [];

    constructor(){
    }

    ngOnChanges(changes: SimpleChanges): void {
        for(let propertyName in changes){
            let propertyChanged = changes[propertyName];
            let jsonPropertyValue = JSON.stringify(propertyChanged.currentValue);
            if(propertyChanged.firstChange){
                this.changeLog.push(`Valor inicial de la propiedad ${propertyName} al valor ${jsonPropertyValue}`);
            }
            else{
                this.changeLog.push(`Propiedad ${propertyName} cambiada al valor ${jsonPropertyValue}`);
            }
        }
    }
}