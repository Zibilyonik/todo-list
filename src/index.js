import _ from 'lodash';
import './style.css';
class Todo{
  constructor(description = "", completed = false, index = 0){
    this.description = description;
    this.completed = completed; 
    this.index = index;
  }
  add() {
    let temp = document.getElementById("Container");
    let obj = document.createElement('li');
    let checkbox = document.createElement('input');
    checkbox.classList.add('form-check-input', 'me-1');
    checkbox.type = "checkbox";
    checkbox.value = "";
    checkbox.ariaLabel = "...";
    obj.id = this.index;
    obj.classList.add('list-group-item', 'list-item-style', 'ml-3')
    obj.appendChild(checkbox);
    obj.innerHTML = obj.innerHTML + this.description;
    if(this.completed){
      obj.classList.add('disabled');
    }
    temp.appendChild(obj);
  }

}

let first = new Todo("clean the house", false, 0);
let second = new Todo("take out the trash", true, 1);
let third = new Todo ("go to toilet", true, 2);
let arr = [first, second, third];
function printList(list) {
  for(let i = 0; i < list.length; i += 1){
    list[i].add();
  }
}
printList(arr);