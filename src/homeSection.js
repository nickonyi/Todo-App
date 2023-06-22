import { addDays, format, isEqual, isWithinInterval } from "date-fns";
import parseISO from "date-fns/parseISO";
import { projectList, hideAddTaskBtn } from "./creatingProject";
import { addTask, displayTask } from "./creatingTask";



function checkWhichHomeTile(homeTile) {
    if (homeTile.matches('#all-tasks')) {
        displayAllTasks();
    } else if (homeTile.matches('#today')) {
        displayToday();
    } else if (homeTile.matches('#this-week')) {
        displayThisWeek();
    } else if (homeTile.matches('#important')) {
        displayImportant();
    }
}

function clearContent() {
    const ul = document.querySelector('ul');
    ul.textContent = '';
}

//display all tasks
function displayAllTasks() {
    clearContent();
    projectList.forEach(project => {
        project.taskList.forEach(task => {
            addTask(task.id, task.title, task.details, task.date, task.completed, task.important);
        });
    });
    hideAddTaskBtn();
    checkNoTasks();
}
//display all today tasks
function displayToday() {
    clearContent();
    let today = Date.parse(format(new Date(), "yyyy-MM-dd"));
    projectList.forEach(project => {
        project.taskList.forEach(task => {
            let date = Date.parse(task.date);
            if (isEqual(date, today)) {
                addTask(task.id, task.title, task.details, task.date, task.completed, task.important);
            } else {
                return;
            }
        });
    });
    checkNoTasks();
}
//display all this weeks tasks
function displayThisWeek() {
    clearContent();
    projectList.forEach(project => {
        project.taskList.forEach(task => {
            let date = parseISO(task.date);

            if (checkNextWeek(date)) {
                addTask(task.id, task.title, task.details, task.date, task.completed, task.important);
            } else {
                return;
            }
        });
    });
    checkNoTasks();
}

function checkNextWeek(taskDate) {
    let nextWeekPlus1 = addDays(new Date(), 8); //interval does not count the edges so plus 1
    let today = new Date();
    return isWithinInterval(taskDate, {
        start: today,
        end: nextWeekPlus1
    });
}
//display important tasks
function displayImportant() {
    clearContent();
    projectList.forEach(project => {
        project.taskList.forEach(task => {
            if (task.important) {
                addTask(task.id, task.title, task.details, task.date, task.completed, task.important);
            } else {
                return;
            }
        });
    });
    checkNoTasks();
}

function checkNoTasks() {
    const ul = document.querySelector('ul');
    if (ul.textContent === "") {
        showNoTask();
    } else {
        return;
    }
}

function showNoTask() {
    const ul = document.querySelector("ul");
    const div = document.createElement("div");
    div.classList.add("noTask");
    div.textContent = "You can rest no tasks today!";
    ul.appendChild(div);

}


export {
    displayAllTasks,
    checkWhichHomeTile
}