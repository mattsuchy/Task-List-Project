//Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//Load all event listners
loadEventListeners();

//Load All event listners function

function loadEventListeners() {
    //Add Task Event
    form.addEventListener('submit', addTask);
    //Remove task event
    taskList.addEventListener('click', removeTask);
    //Clear all tasks event
    clearBtn.addEventListener('click', clearTasks);
    //Filter Tasks Event
    filter.addEventListener('keyup', filterTasks)
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
    //Create txt node and append li
    li.appendChild(document.createTextNode(taskInput.value));
    //create new link element
    const link = document.createElement('a');
    //add class
    link.className = 'delete-item right';
    //add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    //Append link to li
    li.appendChild(link);
    //Append li to ul
    taskList.appendChild(li);

    //Clear input
    taskInput.value = ''

    e.preventDefault();
}

//Remove task
function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are you sure?')) {
            e.target.parentElement.parentElement.remove();
        }
    }
}

//Clear all tasks
function clearTasks() {
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
}

//Filter tasks
function filterTasks(e) {
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach
        (function (task) {
            const item = task.firstChild.textContent;
            if (item.toLowerCase().indexOf(text) != -1) {
                task.style.display = 'block'
            } else {
                task.style.display = 'none'
            }

        });

}