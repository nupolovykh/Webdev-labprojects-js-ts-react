function createTaskListItem(task) {
    let li = document.createElement('li');

    let checkMark = createButton('&#10004;', passTask);
    li.appendChild(checkMark);

    let descriptionDiv = createTaskDescription(task);
    li.appendChild(descriptionDiv);

    let crossMark = createButton('&#x2716;', returnTask);
    li.appendChild(crossMark);

    return li;
}

function createButton(text, onClickHandler) {
    let button = document.createElement('button');
    button.innerHTML = text;
    button.onclick = onClickHandler;
    return button;
}

function passTask() {
    let ul = this.parentNode.parentNode.id;
    if (ul === 'activeTasks') {
        document.getElementById('completedTasks').appendChild(this.parentNode);
    } else if (ul === 'completedTasks') {
        let confirmDelete = confirm('Are you sure you want to delete this entry?');
        if (confirmDelete) document.getElementById('deletedTasks').appendChild(this.parentNode);
    }
    else {
        let confirmDelete = confirm('Do you want to restore the task?');
        if (confirmDelete) document.getElementById('activeTasks').appendChild(this.parentNode);
        else this.parentNode.remove();
    }
    saveTasks();
}

function returnTask(){
    let confirmDelete = confirm('Are you sure you want to delete this entry permanently?');
    if (confirmDelete) this.parentNode.remove();
    saveTasks();
}
  
function createTaskDescription(task) {
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