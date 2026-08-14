import { createTaskListItem } from './taskbuilder';
import { saveTasks } from './storage';

export function addTask(): void {
    let taskInput = document.getElementById('taskInput') as HTMLInputElement;
    let task = taskInput.value;
    if (task === '') return;

    let li = createTaskListItem(task);
    document.getElementById('activeTasks')?.appendChild(li);

    taskInput.value = '';
    saveTasks();
}

export function rmAllTasks(): void {
    let ulElements = document.querySelectorAll('ul');
    ulElements.forEach((ul) => ul.innerHTML = '');
    localStorage.clear();
}