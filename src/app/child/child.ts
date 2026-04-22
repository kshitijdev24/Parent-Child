import { Component, EventEmitter, Input, input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  @Input()
  recievedMessage: string = '';

  @Output()

  itemEvent = new EventEmitter<string>();
  addItem(item: string) {
    this.itemEvent.emit(item);
  }


}
