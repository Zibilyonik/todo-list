let droppedItem;
let held;
function heldItem(e) {
  held = parseInt(e.target.id, 10);
}

function droppedOn(e) {
  e.preventDefault();
  droppedItem = parseInt(e.target.id, 10);
}

function adjustDropped(val) {
  droppedItem = val;
}

function adjustHeld(val) {
  held = val;
}

function dragger(arr) {
  const item1 = arr[held - 1];
  const item2 = arr[droppedItem - 1];
  arr.splice(item1.index - 1, 1);
  arr.splice(item2.index - 1, 0, item1);
  for (let i = 1; i <= arr.length; i += 1) {
    arr[i - 1].index = i;
  }
}

export {
  dragger, heldItem, droppedOn, adjustHeld, adjustDropped,
};