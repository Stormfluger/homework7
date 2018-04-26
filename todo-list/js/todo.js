'use strict';

window.addEventListener('DOMContentLoaded', () => {

  const todoList = document.querySelector('.todo-list');
  const doneList = todoList.querySelector('.done');
  const undoneList = todoList.querySelector('.undone');
  const inputsList = todoList.querySelectorAll('input[type="checkbox"]');

  todoList.addEventListener('change', (event) => {
    const parentList = event.target.parentElement.parentElement;
    const removeCurrentInput = parentList.removeChild(event.target.parentElement);

    if (parentList.classList.contains('done')) {
      removeCurrentInput.firstElementChild.removeAttribute('checked');
      undoneList.insertBefore(removeCurrentInput, null);
    } else {
      removeCurrentInput.firstElementChild.setAttribute('checked', '');
      doneList.insertBefore(removeCurrentInput, null);
    }

    doneList.querySelectorAll('label').length === 0 ? doneList.style.display = "none" : doneList.style.display = "block";
    undoneList.querySelectorAll('label').length === 0 ? undoneList.style.display = "none" : undoneList.style.display = "block";
  });

});
