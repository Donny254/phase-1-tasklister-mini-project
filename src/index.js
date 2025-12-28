const form = document.querySelector('#create-task-form');
const taskList = document.querySelector('#task');


document.addEventListener("DOMContentLoaded", (event) => {
  event.preventDefault();


  const input = document.querySelector('#new-task-description')
  const task = input.value.trim();


  if (task !== '') {

    buildToDoList();
    input.value = '';
  }
});


function buildToDoList(task) {
  const li = document.createElement('li');
  li.textContent = li;
  taskList.appendChild(li);
}