import {Component, EventEmitter, Input, Output} from "@angular/core";
import "rxjs/add/operator/catch";

@Component({
  selector: 'counter-databinding',
  templateUrl: './template/counter.component.template.html',
  styleUrls: [ './style/counter.component.css' ]
})
export class ChildDataBindingComponent {

  @Input('value')
  private varValue: number;

  @Output('value')
  private varValueChangeEventEmitter = new EventEmitter();

  constructor(){
  }

  get value() {
    return this.varValue;
  }

  set value(value: number) {
    this.varValue = value;
    this.varValueChangeEventEmitter.emit(this.varValue);
  }

  public decrement() {
    this.value--;
  }

  public increment() {
    this.value++;
  }
}
