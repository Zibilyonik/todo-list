import changeStatus from './changeStatus.js';

function printList(list) {
  const temp = document.getElementById('Container');
  temp.innerText = '';
  for (let i = 0; i < list.length; i += 1) {
    list[i].add();
    const checkbox = document.getElementById(`${i}-checkbox`);
    checkbox.onchange = () => { changeStatus(list, i); };
  }
  localStorage.clear();
  localStorage.setItem('todoArray', JSON.stringify(list));
}
let droppedItem;
let held;
function heldItem(e) {
  held = parseInt(e.target.id, 10);
}

function droppedOn(e) {
  e.preventDefault();
  droppedItem = parseInt(e.target.id, 10);
}

function dragger(arr) {
  const item1 = arr[held];
  const item2 = arr[droppedItem];
  arr.splice(item1.index, 1);
  arr.splice(item2.index, 0, item1);
  for (let i = 0; i < arr.length; i += 1) {
    arr[i].index = i;
  }
  printList(arr);
}

export {
  dragger, heldItem, droppedOn, printList,
};