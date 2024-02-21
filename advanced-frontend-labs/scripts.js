function addTask() {
    let taskInput = document.getElementById('taskInput');
    let task = taskInput.value;
    if (task === '') return;

    let li = document.createElement('li');
  
    let checkMark = document.createElement('button');
    checkMark.innerHTML = '&#10004;';
    checkMark.onclick = passTask;
    li.appendChild(checkMark);

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

    li.appendChild(descriptionDiv);

    let crossMark = document.createElement('button');
    crossMark.innerHTML = '&#x2716;';
    crossMark.onclick = returnTask;
    li.appendChild(crossMark);

    document.getElementById('activeTasks').appendChild(li);

    taskInput.value = '';
    saveTasks();
}

function rmAllTasks(){
    let ulElements = document.querySelectorAll('ul');
    ulElements.forEach((ul) => ul.innerHTML = '');
    localStorage.clear();
}

function passTask() {
    let ul = this.parentNode.parentNode.id;
    if (ul === 'activeTasks') {
        document.getElementById('completedTasks').appendChild(this.parentNode);
    } else if (ul === 'completedTasks') {
        let confirmDelete = confirm('Вы уверены, что хотите удалить эту запись?');
        if (confirmDelete) document.getElementById('deletedTasks').appendChild(this.parentNode);
    }
    else {
        let confirmDelete = confirm('Хотите восстановить задачу?');
        if (confirmDelete) document.getElementById('activeTasks').appendChild(this.parentNode);
        else this.parentNode.remove();
    }
    saveTasks();
}

function returnTask(){
    let confirmDelete = confirm('Вы уверены, что хотите удалить эту запись навсегда?');
    if (confirmDelete) this.parentNode.remove();
    saveTasks();
}

function saveTasks() {
    let activeTasks = document.getElementById('activeTasks').innerHTML;
    let completedTasks = document.getElementById('completedTasks').innerHTML;
    let deletedTasks = document.getElementById('deletedTasks').innerHTML;
    localStorage.setItem('activeTasks', activeTasks);
    localStorage.setItem('completedTasks', completedTasks);
    localStorage.setItem('deletedTasks', deletedTasks);
}

function loadTasks() {
    document.getElementById('activeTasks').innerHTML = localStorage.getItem('activeTasks');
    document.getElementById('completedTasks').innerHTML = localStorage.getItem('completedTasks');
    document.getElementById('deletedTasks').innerHTML = localStorage.getItem('deletedTasks');
    rebuildOnClick();
}

function showNotes() {
    let selectedGroup = document.getElementById('noteGroupSelector').value;
    let lists = document.querySelectorAll('.list > div');

    lists.forEach(list => {
        let listId = list.getAttribute('id');
        if (selectedGroup === 'all' || listId === selectedGroup) {
            list.style.display = 'flex';
        }
        else list.style.display = 'none';
    });
}

function rebuildOnClick() {
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

//localStorage.clear();
loadTasks();
