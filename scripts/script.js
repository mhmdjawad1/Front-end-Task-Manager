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





document.getElementById('task-form').addEventListener('submit', function (e) {
  e.preventDefault();


  const input = document.getElementById('task-input');
  const errorMsg = document.getElementById('error-msg');

  if (input.value.trim() === '') {
    errorMsg.style.display = 'inline';
    return;
  }
  errorMsg.style.display = 'none';


    tasks.push({ text: input.value, completed: false });
  localStorage.setItem('tasks', JSON.stringify(tasks));
  input.value = '';
  renderTasks();
});




document.getElementById('filters').addEventListener('click', function (e) {
  if (e.target.tagName === 'BUTTON') {
    renderTasks(e.target.dataset.filter);6
  }
});




document.getElementById('task-list').addEventListener('click', function (e) {
  const li = e.target.closest('li');
  const index = li.dataset.index;
  const task = tasks[index];

   
  if (e.target.classList.contains('toggle')) {
    task.completed = e.target.checked;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
  }


