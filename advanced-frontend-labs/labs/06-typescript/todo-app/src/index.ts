import { loadTasks, rebuildOnClick, saveTasks } from './storage';
import { addTask, rmAllTasks } from './main';
import { parseDateFromString } from './additional';
import { groupBy, orderBy } from './orders';
import { createButton, createTaskDescription, createTaskListItem, passTask, returnTask } from './taskbuilder';

//localStorage.clear();
loadTasks();

document.getElementById('addBtn')!.addEventListener('click', addTask);
document.getElementById('rmBtn')!.addEventListener('click', rmAllTasks);
document.getElementById('listSelector')!.addEventListener('change', groupBy);
document.getElementById('orderSelector')!.addEventListener('change', orderBy);