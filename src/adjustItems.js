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

function deleteMarked(arr) {
  arr = arr.filter((item) => item.completed === false);
  arr.forEach((item) => item.add());
  localStorage.clear();
  localStorage.setItem('todoArray', JSON.stringify(arr));
  return arr;
}
export { addTodo, deleteTodo, deleteMarked };