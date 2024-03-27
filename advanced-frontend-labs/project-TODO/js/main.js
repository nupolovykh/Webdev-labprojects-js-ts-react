function addTask() {
    let taskInput = document.getElementById('taskInput');
    let task = taskInput.value;
    if (task === '') return;

    let li = createTaskListItem(task);
    document.getElementById('activeTasks').appendChild(li);

    taskInput.value = '';
    saveTasks();
}

function rmAllTasks(){
    let ulElements = document.querySelectorAll('ul');
    ulElements.forEach((ul) => ul.innerHTML = '');
    localStorage.clear();
}

//localStorage.clear();
loadTasks();
