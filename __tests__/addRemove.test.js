/**
 * @jest-environment jsdom
 */
const { addTodo, deleteTodo } = require('../src/adjustItems.js');

describe('check for add function', () => {
  let arr = [];
  document.body.innerHTML = '<div class="d-flex rounded col-6 col-lg-3 mx-auto mt-5 p-0 mb-1"><input type = "text" id="TodoDesc" class = "rounded col-9 p-0 m-0 text-center" placeholder="What to do?"><button type="button" class="button-style btn col-3 m-0" id="SubmitButton">Submit</button></div><ul id="Container" class="main-container list-group list-group-flush rounded col-6 col-lg-3 mb-1 mx-auto p-0"></ul><div class="d-flex rounded col-6 col-lg-3 mx-auto p-0 mb-1"><button type="button" class="button-style btn col m-0" id="ClearButton">Delete All Completed Tasks</button></div>';
  beforeEach(() => {
    document.getElementById('TodoDesc').value = 'test';
    addTodo(arr);
  });
  afterEach(() => {
    arr = [];
  });
  it('checks for length', () => {
    expect(arr.length).toBe(1);
  });
  it('checks for correct data', () => {
    expect(arr[0].description).toBe('test');
  });
  it('checks for correct index num', () => {
    expect(arr[0].index + 1).toBe(arr.length);
  });
});

describe('remove task', () => {
  let arr = [];
  beforeAll(() => {
    document.body.innerHTML = '<div class="d-flex rounded col-6 col-lg-3 mx-auto mt-5 p-0 mb-1"><input type = "text" id="TodoDesc" class = "rounded col-9 p-0 m-0 text-center" placeholder="What to do?"><button type="button" class="button-style btn col-3 m-0" id="SubmitButton">Submit</button></div><ul id="Container" class="main-container list-group list-group-flush rounded col-6 col-lg-3 mb-1 mx-auto p-0"><li id="1"></li></ul><div class="d-flex rounded col-6 col-lg-3 mx-auto p-0 mb-1"><button type="button" class="button-style btn col m-0" id="ClearButton">Delete All Completed Tasks</button></div>';
    arr = [{ index: 1, description: 'test', completed: false }];
    deleteTodo(arr, arr[0].index);
  });
  it('should remove item from the array', () => {
    expect(arr.length).toBe(0);
  });
  it('should remove the item from the dom', () => {
    expect(document.getElementById('Container').childNodes.length).toBe(0);
  });
});
