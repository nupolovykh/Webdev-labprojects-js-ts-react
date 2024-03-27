import { loadTasks, rebuildOnClick, saveTasks } from './storage.js';
import { addTask, rmAllTasks } from './main.js';
import { parseDateFromString } from './additional.js';
import { groupBy, orderBy } from './orders.js';
import { createButton, createTaskDescription, createTaskListItem, passTask, returnTask } from './taskbuilder.js';

//localStorage.clear();
loadTasks();

document.getElementById('addBtn').addEventListener('click', addTask);
document.getElementById('rmBtn').addEventListener('click', rmAllTasks);
document.getElementById('listSelector').addEventListener('change', groupBy);
document.getElementById('orderSelector').addEventListener('change', orderBy);


