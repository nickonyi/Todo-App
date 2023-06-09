import { projectList, saveToLocalStorage } from "./creatingProject";
import { hideDropDown, revertOptionLocation } from "./editingProject";
import { displayTask, processDateData } from "./creatingTask";
import { checkWhichHomeTile } from "./homeSection";

function styleCompletedTask(e) {
    let uncheckedNode = e.target;
    let taskTile = e.target.closest('li');
    let listDetails = taskTile.querySelector('.list-details');
    listDetails.classList.toggle('line-through');
    listDetails.classList.toggle('fade');
    uncheckedNode.classList.toggle('checked');

}

function updateCompletedTask(e) {
    let listID = e.target.closest('li').id;
    let selectedTask = findSelectedTask(listID);
    selectedTask.completed = !selectedTask.completed;
    saveToLocalStorage();
}

function styleImportantTask(e) {
    let starOutline = e.target;
    starOutline.classList.toggle('list-hidden');

    let starFilled = e.target.nextElementSibling;
    starFilled.classList.toggle('list-hidden');

}

function updateImportantTask(e) {
    let listId = e.target.closest('li').id;
    let selectedTask = findSelectedTask(listId);
    selectedTask.important = !selectedTask.important;
    saveToLocalStorage();
}



function deleteTask() {

}

function findSelectedTask(listId) {
    let selectedTask = projectList.reduce((acc, project) => {
        let currentTask = project.taskList.find(task => task.id == listId);
        if (currentTask != null) {
            acc = currentTask;
        }
        return acc;
    }, {});

    return selectedTask;
}

function showEditForm() {

}

function relocateEditListForm() {

}

function revertEditFormLocation() {

}

function processEditTask() {

}

function showHiddenTask() {

}

export {
    styleCompletedTask,
    styleImportantTask,
    updateCompletedTask,
    updateImportantTask,
    deleteTask,
    showEditForm,
    relocateEditListForm,
    revertEditFormLocation,
    processEditTask,
    showHiddenTask
}