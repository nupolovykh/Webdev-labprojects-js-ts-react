import { passTask, returnTask } from './taskbuilder.js';

export function saveTasks() {
    let activeTasks = document.getElementById('activeTasks').innerHTML;
    let completedTasks = document.getElementById('completedTasks').innerHTML;
    let deletedTasks = document.getElementById('deletedTasks').innerHTML;
    localStorage.setItem('activeTasks', activeTasks);
    localStorage.setItem('completedTasks', completedTasks);
    localStorage.setItem('deletedTasks', deletedTasks);
}

export function loadTasks() {
    document.getElementById('activeTasks').innerHTML = localStorage.getItem('activeTasks');
    document.getElementById('completedTasks').innerHTML = localStorage.getItem('completedTasks');
    document.getElementById('deletedTasks').innerHTML = localStorage.getItem('deletedTasks');
    rebuildOnClick();
}

export function rebuildOnClick() {
    let btns = document.querySelectorAll('button');
    btns.forEach(btn => {
        if (btn.parentElement.firstChild === btn) {
            btn.onclick = passTask;
        }
        else if(btn.parentElement.lastChild === btn){
            btn.onclick = returnTask;
        }
    });
}