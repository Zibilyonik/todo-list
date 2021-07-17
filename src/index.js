import './style.css';
import {
  dragger, heldItem, droppedOn, printList,
} from './dragging.js';
import { addTodo, deleteMarked } from './adjustItems.js';

let arr = [];
let temp = [];
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
    const texter = document.createElement('p');
    const delBtn = document.createElement('button');
    delBtn.classList.add('del-button-style', 'btn', 'col-3', 'm-0', 'float-right');
    delBtn.type = 'button';
    delBtn.id = `${this.index}-del`;
    delBtn.innerText = 'Delete';
    checkbox.classList.add('form-check-input', 'mt-3', 'checkbox-style');
    checkbox.type = 'checkbox';
    checkbox.id = `${this.index}-checkbox`;
    checkbox.ariaLabel = '...';
    obj.id = this.index;
    texter.contentEditable = 'true';
    texter.classList.add('inline-flex', 'mt-2');
    obj.classList.add('list-group-item', 'list-item-style', 'mx-2', 'align-middle');
    obj.draggable = true;
    if (this.completed) {
      checkbox.defaultChecked = true;
      obj.classList.add('disabled');
    }
    texter.innerText = this.description;
    obj.appendChild(checkbox);
    obj.appendChild(texter);
    obj.appendChild(delBtn);
    temp.appendChild(obj);
    obj.addEventListener('drag', heldItem);
    obj.addEventListener('dragover', droppedOn);
    obj.addEventListener('drop', () => { dragger(arr); });
  }
}

const btn = document.getElementById('SubmitButton');
btn.addEventListener('click', () => {
  addTodo(temp);
  const num = temp.length - 1;
  arr.push(new Todo(temp[num].description, temp[num].completed, temp[num].index));
  printList(arr);
});

if (localStorage.getItem('todoArray')) {
  temp = JSON.parse(localStorage.getItem('todoArray'));
  temp.forEach((item) => arr.push(new Todo(item.description, item.completed, temp.indexOf(item))));
}
const cleanbtn = document.getElementById('ClearButton');
cleanbtn.addEventListener('click', () => {
  arr = deleteMarked(arr);
  printList(arr);
});
printList(arr);