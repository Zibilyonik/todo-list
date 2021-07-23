const changeStatus = (arr, itemId) => {
  const item = document.getElementById(itemId);
  arr[itemId - 1].completed = !arr[itemId - 1].completed;
  if (arr[itemId - 1].completed) {
    item.classList.add('disabled');
  } else {
    item.classList.remove('disabled');
  }
  localStorage.clear();
  localStorage.setItem('todoArray', JSON.stringify(arr));
};

export default changeStatus;