/**
 * @jest-environment jsdom
 */

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
      store[key] = value;
    },
    removeItem(key) {
      delete store[key];
    },
    clear() {
      store = {};
    },
  };
});

describe('check for edit function', () => {
  const arr = [];
  document.body.innerHTML = '<div class="d-flex rounded col-6 col-lg-3 mx-auto mt-5 p-0 mb-1"><input type = "text" id="TodoDesc" class = "rounded col-9 p-0 m-0 text-center" placeholder="What to do?"><button type="button" class="button-style btn col-3 m-0" id="SubmitButton">Submit</button></div><ul id="Container" class="main-container list-group list-group-flush rounded col-6 col-lg-3 mb-1 mx-auto p-0"><li id="1"><p id="1-text">test</p></li></ul><div class="d-flex rounded col-6 col-lg-3 mx-auto p-0 mb-1"><button type="button" class="button-style btn col m-0" id="ClearButton">Delete All Completed Tasks</button></div>';
  beforeAll(() => {
    Object.defineProperty(window, 'localStorage', {
      value: fakeLocalStorage(),
    });
    arr.push({ description: 'test', completed: false, index: 1 });
    document.getElementById('1-text').innerText = 'tester';
    editTodo(arr, 1);
  });
  afterAll(() => {
    window.localStorage.setItem({});
  });
  it('checks for localStorage match', () => {
    expect(window.localStorage.getItem('todoArray')).toEqual(JSON.stringify(arr));
  });
  it('checks for correct data', () => {
    expect(arr[0].description).toBe('tester');
  });
});

describe('delete completed task', () => {
  let arr = [];
  document.body.innerHTML = '<div class="d-flex rounded col-6 col-lg-3 mx-auto mt-5 p-0 mb-1"><input type = "text" id="TodoDesc" class = "rounded col-9 p-0 m-0 text-center" placeholder="What to do?"><button type="button" class="button-style btn col-3 m-0" id="SubmitButton">Submit</button></div><ul id="Container" class="main-container list-group list-group-flush rounded col-6 col-lg-3 mb-1 mx-auto p-0"><li id="1"><p id="1-text">test</p></li></ul><div class="d-flex rounded col-6 col-lg-3 mx-auto p-0 mb-1"><button type="button" class="button-style btn col m-0" id="ClearButton">Delete All Completed Tasks</button></div>';
  beforeAll(() => {
    Object.defineProperty(window, 'localStorage', {
      value: fakeLocalStorage(),
    });
    arr.push({ description: 'test1', completed: true, index: 1 }, { description: 'test2', completed: false, index: 2 });
    deleteMarked(arr);
    arr = JSON.parse(window.localStorage.getItem('todoArray'));
  });
  afterAll(() => {
    window.localStorage.setItem({});
  });
  it('should return correct array lenght', () => {
    expect(arr.length).toBe(1);
  });

  it('should return the remaining element', () => {
    expect(arr[0].completed).toBe(false);
  });
});
