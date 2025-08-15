let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function renderTasks(filter = 'all') {
  const taskList = document.getElementById('task-list');
  taskList.innerHTML = '';


  let filteredTasks = tasks;
  if (filter === 'completed') {
    filteredTasks = tasks.filter(task => task.completed);
  } else if (filter === 'pending') {
    filteredTasks = tasks.filter(task => !task.completed);
  }

filteredTasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.dataset.index = index;
    li.innerHTML = `
      <input type="checkbox" ${task.completed ? 'checked' : ''} class="toggle">
      <span style="${task.completed ? 'text-decoration: line-through; opacity: 0.6;' : ''}">${task.text}</span>
      <button class="edit">Edit</button>
      <button class="delete">Delete</button>
    `;
    taskList.appendChild(li);
  });
}

renderTasks();



