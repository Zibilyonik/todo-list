import './style.css';
import {
  dragger, heldItem, droppedOn, printList,
} from './dragging.js';

let arr;

class Todo {
  constructor(description = '', completed = false, index = 0) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }

  add() {
    const temp = document.getElementById('Container');
    const obj = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.classList.add('form-check-input');
    checkbox.type = 'checkbox';
    checkbox.id = `${this.index}-checkbox`;
    checkbox.ariaLabel = '...';
    obj.id = this.index;
    obj.classList.add('list-group-item', 'list-item-style', 'mx-2');
    obj.draggable = true;
    if (this.completed) {
      checkbox.defaultChecked = true;
      obj.classList.add('disabled');
    }
    obj.appendChild(checkbox);
    obj.innerHTML += this.description;
    temp.appendChild(obj);
    obj.addEventListener('drag', heldItem);
    obj.addEventListener('dragover', droppedOn);
    obj.addEventListener('drop', () => { dragger(arr); printList(arr); });
  }
}

const first = new Todo('clean the house', false, 0);
const second = new Todo('take out the trash', true, 1);
const third = new Todo('go to toilet', true, 2);
arr = [first, second, third];

printList(arr);