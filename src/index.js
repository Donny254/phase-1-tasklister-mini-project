document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const taskDescription = document.getElementById("new-task-description").value;
    if (taskDescription) {  // Optional: skip empty inputs
      buildToDo(taskDescription);
      form.reset();  // Clear the input
    }
  });
});

function buildToDo(todo) {
  const li = document.createElement("li");
  li.textContent = todo;
  const taskList = document.getElementById("tasks");  // Correct selector
  taskList.appendChild(li);
}