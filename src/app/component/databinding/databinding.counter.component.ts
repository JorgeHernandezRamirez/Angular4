import {Component, EventEmitter, Input, Output} from "@angular/core";
import "rxjs/add/operator/catch";

@Component({
  selector: 'data-binding-component',
  template: `<h2>Data binding entre componentes</h2>
             <p>Counter Atributo -> <span>{{valueCounter}}</span></p>
             <counter-databinding [value]="valueCounter" (value)="countChange($event)"></counter-databinding>`
})
export class DataBindingComponent {

  private valueCounter_: number;

  constructor(){
    this.valueCounter_ = 10;
  }

  get valueCounter() {
    return this.valueCounter_;
  }

  set valueCounter(valueCounter_: number){
    this.valueCounter_ = valueCounter_;
  }

  countChange(event:number) {
    this.valueCounter = event;
  }
}
