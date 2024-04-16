import { saveTasks } from './storage';

export function createTaskListItem(task: string) {
    let li = document.createElement('li');

    let checkmark = createButton('&#10004;', passTask);
    li.appendChild(checkmark);

    let descriptionDiv = createTaskDescription(task);
    li.appendChild(descriptionDiv);

    let crossMark = createButton('&#x2716;', returnTask);
    li.appendChild(crossMark);

    return li;
}

export function createButton(text: string, callback: (this: HTMLElement, event: MouseEvent) => void) {
    let button = document.createElement('button');
    button.innerHTML = text;
    let htmlButton = button as HTMLElement;
    button.onclick = function(event: MouseEvent) {
        callback.call(htmlButton, event);
    }
    return button;
}

export function passTask(this: HTMLElement, event: MouseEvent) {
    let parentNode = this.parentNode as HTMLElement | null;
    let ul = parentNode?.parentNode instanceof HTMLElement ? parentNode.parentNode.id : null;

    if (ul === 'activeTasks') {
        document.getElementById('completedTasks')!.appendChild(this.parentNode!);
    } else if (ul === 'completedTasks') {
        let confirmDelete = confirm('Are you sure you want to delete this entry?');
        if (confirmDelete) document.getElementById('deletedTasks')!.appendChild(this.parentNode!);
    } else {
        let confirmDelete = confirm('Do you want to restore the task?');
        if (confirmDelete) document.getElementById('activeTasks')!.appendChild(this.parentNode!);
        else parentNode!.remove();
    }
    saveTasks();
}

export function returnTask(this: HTMLElement, event: MouseEvent) {
    let confirmDelete = confirm('Are you sure you want to delete this entry permanently?');
    let parentNode = this.parentNode as HTMLElement | null;
    if (confirmDelete) parentNode!.remove();
    saveTasks();
}
  
export function createTaskDescription(task: string) {
    let descriptionDiv = document.createElement('div');
    descriptionDiv.style.display = 'flex';
    descriptionDiv.style.flexDirection = 'column';

    let taskHeader = document.createElement('h4');
    taskHeader.textContent = task;
    descriptionDiv.appendChild(taskHeader);

    let currentDate = new Date();
    let creationDate = document.createElement('sub');
    creationDate.style.textAlign = 'end';
    creationDate.textContent = `от ${currentDate.getDate()}/${currentDate.getMonth()}/${currentDate.getFullYear()}`;
    descriptionDiv.appendChild(creationDate);

    return descriptionDiv;
}