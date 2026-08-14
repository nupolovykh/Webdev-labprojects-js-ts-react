function addTask() {
    let taskInput = document.getElementById('taskInput');
    let task = taskInput.value;
    if (task === '') return;

    let li = document.createElement('li');
    li.appendChild(document.createTextNode(task));
    li.onclick = completeTask;
    li.id = "task";
    document.getElementById('activeTasks').appendChild(li);

    taskInput.value = '';
    saveTasks();
}

function completeTask() {
    let ul = this.parentNode.id;
    if (ul === 'activeTasks') {
        document.getElementById('completedTasks').appendChild(this);
    } else if (ul === 'completedTasks') {
        let confirmDelete = confirm('Вы уверены, что хотите удалить эту запись?');
        if (confirmDelete) document.getElementById('deletedTasks').appendChild(this);
        else document.getElementById('activeTasks').appendChild(this);
    }
    else {
        let confirmDelete = confirm('Вы уверены, что хотите удалить эту запись?');
        if (confirmDelete) this.remove();
        else document.getElementById('activeTasks').appendChild(this);
    }
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
    rebuildLi();
}

function showNotes() {
    let selectedGroup = document.getElementById('noteGroupSelector').value;
    let lists = document.querySelectorAll('.list div');

    lists.forEach(list => {
        let listId = list.getAttribute('id');
        if (selectedGroup === 'all' || listId === selectedGroup) {
            list.style.display = 'flex';
        }
        else list.style.display = 'none';
    });
}

function rebuildLi() {
    let lis = document.querySelectorAll('#task');
    lis.forEach(li => {
        li.onclick = completeTask;
    });
}

//localStorage.clear();
loadTasks();
