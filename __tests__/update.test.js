const { editTodo, deleteMarked } = require('../src/adjustItems.js');
const { default: changeStatus } = require('../src/changeStatus.js');
const { dragger, heldItem, droppedOn } = require('../src/dragging.js');

const fakeLocalStorage = (() => {
  let store = {};

  return {
    getItem(key) {
      return store[key] || null;
    },
    setItem(key, value) {
      store[key] = value.toString();
    },
    removeItem(key) {
      delete store[key];
    },
    clear() {
      store = {};
    },
  };
});
Object.defineProperty(window, 'localStorage', {
  value: fakeLocalStorage(),
});

changeStatus();
heldItem();
droppedOn();
dragger();