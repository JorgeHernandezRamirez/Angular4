import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'interaction', 
    template: `<parent-pass-data-interaction></parent-pass-data-interaction>
               <parent-ngonchange-interaction [mayor]="1" [minor]="0"></parent-ngonchange-interaction>
               <parent-local-variable-interaction></parent-local-variable-interaction>
               <parent-view-child-variable-interaction></parent-view-child-variable-interaction>`
})
export class InteractionComponent implements OnInit{

    ngOnInit(): void {
    }
}