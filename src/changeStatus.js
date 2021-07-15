const changeStatus = (arr, itemId) => {
  const item = document.getElementById(itemId);
  arr[itemId].completed = !arr[itemId].completed;
  if (arr[itemId].completed) {
    item.classList.add('disabled');
  } else {
    item.classList.remove('disabled');
  }
};

export default changeStatus;