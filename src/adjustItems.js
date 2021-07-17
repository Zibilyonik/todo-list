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
  cont.remove();
  arr.splice(index, 1);
  localStorage.clear();
  localStorage.setItem('todoArray', JSON.stringify(arr));
}

function editTodo(arr, index) {

}

export { addTodo, deleteTodo, editTodo };