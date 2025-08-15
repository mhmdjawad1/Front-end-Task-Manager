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

    let filteredTasks = tasks;
  if (filter === 'completed') {
    filteredTasks = tasks.filter(task => task.completed);
  } else if (filter === 'pending') {
    filteredTasks = tasks.filter(task => !task.completed);
  }