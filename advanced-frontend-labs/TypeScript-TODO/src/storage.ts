import { passTask, returnTask } from './taskbuilder';

export function saveTasks(): void {
    let activeTasks = document.getElementById('activeTasks')!.innerHTML;
    let completedTasks = document.getElementById('completedTasks')!.innerHTML;
    let deletedTasks = document.getElementById('deletedTasks')!.innerHTML;
    localStorage.setItem('activeTasks', activeTasks);
    localStorage.setItem('completedTasks', completedTasks);
    localStorage.setItem('deletedTasks', deletedTasks);
}

export function loadTasks(): void {
    const activeTasksElement = document.getElementById('activeTasks');
    const completedTasksElement = document.getElementById('completedTasks');
    const deletedTasksElement = document.getElementById('deletedTasks');
    
    if (activeTasksElement && completedTasksElement && deletedTasksElement) {
        activeTasksElement.innerHTML = localStorage.getItem('activeTasks') || '';
        completedTasksElement.innerHTML = localStorage.getItem('completedTasks') || '';
        deletedTasksElement.innerHTML = localStorage.getItem('deletedTasks') || '';
        rebuildOnClick();
    }
}

export function rebuildOnClick(): void {
    let btns = document.querySelectorAll('button');
    btns.forEach(btn => {
        if (btn.parentElement?.firstChild === btn) {
            btn.onclick = (event: MouseEvent) => {
                passTask.call(btn, event);
            }
        }
        else if(btn.parentElement?.lastChild === btn){
            btn.onclick = (event: MouseEvent) => {
                returnTask.call(btn, event);
            }
        }
    });
}