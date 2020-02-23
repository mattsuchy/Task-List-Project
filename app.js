//Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collecion');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//Load all event listners
loadEventListeners();

//Load All event listners function

function loadEventListeners() {
    //Add Task Event
    form.addEventListener('submit', addTask);
}

//Add Task
function addTask(e) {
    if (taskInput.value === '') {
        alert('Add a Task');
    }
    //Create li element
    const li = document.createElement('li');
    //Add Class
    li.className = 'collection-item';




    e.preventDefault();
}