document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("task-input");
  const addButton = document.getElementById("add-button");
  const taskList = document.getElementById("task-list");
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((task) => {
        createTask(task);
      });
    });
  function createTask(task) {
    const listItem = document.createElement("li");
    const taskTitle = document.createElement("span");
    taskTitle.textContent = task.title;
    const updateButton = document.createElement("button");
    updateButton.textContent = "Update";
    updateButton.className = "update-button";
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-button";
    updateButton.addEventListener("click", () => {
      const newTitle = prompt("Update the ToDos item", task.title);
      if (newTitle !== null) {
        taskTitle.textContent = newTitle;
        task.title = newTitle;
      }
    });
    deleteButton.addEventListener("click", () => {
      listItem.remove();
    });
    listItem.appendChild(taskTitle);
    listItem.appendChild(updateButton);
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);
  }
  addButton.addEventListener("click", () => {
    const newTaskTitle = taskInput.value.trim();
    if (newTaskTitle !== "") {
      const newTask = {
        title: newTaskTitle,
      };
      createTask(newTask);
      taskInput.value = "";
    }
  });
});