import { createTaskListItem } from './taskbuilder.js';
import { saveTasks } from './storage.js';

export function addTask() {
    let taskInput = document.getElementById('taskInput');
    let task = taskInput.value;
    if (task === '') return;

    let li = createTaskListItem(task);
    document.getElementById('activeTasks').appendChild(li);

    taskInput.value = '';
    saveTasks();
}

export function rmAllTasks(){
    let ulElements = document.querySelectorAll('ul');
    ulElements.forEach((ul) => ul.innerHTML = '');
    localStorage.clear();
}
