// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

// Functions

function addTodo(event) {
  // Prevents form from submitting:
  event.preventDefault();
  // Todo <div>
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  // Create <li>
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);
  // Check-mark button
  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("completed-button");
  todoDiv.appendChild(completedButton);
  // Delete button
  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-button");
  todoDiv.appendChild(trashButton);
  // Append to list
  todoList.appendChild(todoDiv);
  // Clear Todo input value
  todoInput.value = "";
}

function deleteCheck(event) {
  const item = event.target;
  // Delete TODO:
  if (item.classList[0] === 'trash-button') {
    const todo = item.parentElement;
    todo.remove();
  }
  // Mark checked:
  if (item.classList[0] === 'completed-button') {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }

}