import './style.css';

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
    checkbox.value = '';
    checkbox.ariaLabel = '...';
    obj.id = this.index;
    obj.classList.add('list-group-item', 'list-item-style', 'mx-2');
    obj.appendChild(checkbox);
    obj.innerHTML += this.description;
    if (this.completed) {
      obj.classList.add('disabled');
    }
    temp.appendChild(obj);
  }
}

const first = new Todo('clean the house', false, 0);
const second = new Todo('take out the trash', true, 1);
const third = new Todo('go to toilet', true, 2);
const arr = [first, second, third];
function printList(list) {
  for (let i = 0; i < list.length; i += 1) {
    list[i].add();
  }
}
printList(arr);