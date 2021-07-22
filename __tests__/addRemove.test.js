/**
 * @jest-environment jsdom
 */
const { addTodo } = require('../src/adjustItems.js');

document.body.innerHTML = '<div class="d-flex rounded col-6 col-lg-3 mx-auto mt-5 p-0 mb-1"><input type = "text" id="TodoDesc" class = "rounded col-9 p-0 m-0 text-center" placeholder="What to do?"><button type="button" class="button-style btn col-3 m-0" id="SubmitButton">Submit</button></div><ul id="Container" class="main-container list-group list-group-flush rounded col-6 col-lg-3 mb-1 mx-auto p-0"></ul><div class="d-flex rounded col-6 col-lg-3 mx-auto p-0 mb-1"><button type="button" class="button-style btn col m-0" id="ClearButton">Delete All Completed Tasks</button></div>';

describe('check for add function', () => {
  let arr = [];
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
    expect(arr[0].index).toBe(arr.length);
  });
});