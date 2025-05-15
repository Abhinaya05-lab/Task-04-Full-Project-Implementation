window.onload = function () {
  loadTasks();
};

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const task = taskInput.value.trim();
  if (task !== "") {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    taskInput.value = "";
    loadTasks();
  }
}

function loadTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = "";
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.textContent = task;

    const delBtn = document.createElement('button');
    delBtn.textContent = "❌";
    delBtn.className = "deleteBtn";
    delBtn.onclick = () => removeTask(index);

    li.appendChild(delBtn);
    taskList.appendChild(li);
  });
}

function removeTask(index) {
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  loadTasks();
}
