import {Component, EventEmitter, Input, Output} from "@angular/core";
import "rxjs/add/operator/catch";

@Component({
  selector: 'dashboard-component',
  templateUrl: './template/dashboard.counter.component.template.html',
  styleUrls: [ './style/dashboard.counter.component.css' ]
})
export class DashboardCounterComponent {

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
