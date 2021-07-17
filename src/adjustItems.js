function addTodo(arr) {
  const textGetter = document.getElementById('TodoDesc');
  arr.push({
    description: textGetter.value,
    completed: false,
    index: arr.length,
  });
  textGetter.value = '';
}
function deleteTodo(arr, index) {
  const cont = document.getElementById(index);
  let first = document.getElementById('Container').firstChild;
  arr.splice(index - 1, 1);
  for (let i = 0; i < arr.length; i += 1) {
    first.id = i + 1;
    first.firstChild.id = `${i + 1}-checkbox`;
    first.lastChild.id = `${i + 1}-del`;
    first = first.nextSibling;
    arr[i].index = i + 1;
  }
  cont.remove();
  localStorage.clear();
  localStorage.setItem('todoArray', JSON.stringify(arr));
}

function editTodo(arr, index) {
  const obj = document.getElementById(`${index}-text`);
  arr[index - 1].description = obj.innerText;
  localStorage.clear();
  localStorage.setItem('todoArray', JSON.stringify(arr));
}

function deleteMarked(arr) {
  const bonk = arr.filter((item) => item.completed === false);
  arr = [...bonk];
  localStorage.clear();
  localStorage.setItem('todoArray', JSON.stringify(arr));
}
export {
  addTodo, deleteTodo, editTodo, deleteMarked,
};