const menuIcon = document.getElementById("menuIcon");
const navLinks2 = document.getElementById("navLinks2");

menuIcon.addEventListener("click", () => {
    navLinks2.classList.toggle("show"); // add/remove .show
});

document.addEventListener("click", (event) => {
  if (!navLinks2.contains(event.target) && event.target !== menuIcon) {
    navLinks2.classList.remove("show");
  }
});
window.addEventListener("resize", () => {
  if (window.innerWidth > 1112) {
    navLinks2.classList.remove("show");
  }
});

















const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const emptyMsg = document.getElementById('emptyMsg');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
displayTasks();

addBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText) {
    tasks.push(taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    taskInput.value = '';
    displayTasks();
  }
});

function displayTasks() {
  taskList.innerHTML = '';
  if (tasks.length === 0) {
    emptyMsg.style.display = 'block';
    return;
  }
  emptyMsg.style.display = 'none';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = task;

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.onclick = () => {
      const newTask = prompt('Edit task:', task);
      if (newTask) {
        tasks[index] = newTask;
        localStorage.setItem('tasks', JSON.stringify(tasks));
        displayTasks();
      }
    };

    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.onclick = () => {
      tasks.splice(index, 1);
      localStorage.setItem('tasks', JSON.stringify(tasks));
      displayTasks();
    };

    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(delBtn);
    taskList.appendChild(li);
  });
}
