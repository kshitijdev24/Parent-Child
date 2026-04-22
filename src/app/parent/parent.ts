import { Component } from '@angular/core';
import {Child} from '../child/child'
@Component({
  selector: 'app-parent',
  imports: [Child],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent {
  parentMessage: string = 'hello from parent'
  
  itemList: string[] = ['Pendrive', 'USB']
  
  addNewItem(value: string) {
    this.itemList.push(value);
  }
}
