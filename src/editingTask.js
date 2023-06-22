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



function deleteTask(e) {
    let listNode = e.target.closest('li');
    let id = listNode.id;
    let selectedTask = findSelectedTask(id);
    let dataProject = selectedTask.dataProject;
    projectList[dataProject].taskList = projectList[dataProject].taskList.filter(task => task != selectedTask);
    saveToLocalStorage();
    revertOptionLocation();
    listNode.remove();

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

function showEditForm(e) {
    let editContainerNode = e.target.parentNode.parentNode;
    hideDropDown(editContainerNode);
    relocateEditListForm(e);


}

function relocateEditListForm(e) {
    const listNode = e.target.closest('li');
    let ul = listNode.parentNode;

    const editListForm = document.getElementById('edit-list-form');
    const taskTitle = listNode.querySelector('.task-title').textContent;
    const taskDetails = listNode.querySelector('.task-details').textContent;
    const taskDate = listNode.querySelector('.date').textContent;

    const titleInput = editListForm.querySelector("#edit-list-title");
    const detailInput = editListForm.querySelector("#edit-list-details");
    const dateInput = editListForm.querySelector("#edit-list-date");

    titleInput.value = taskTitle;
    detailInput.value = taskDetails;
    dateInput.value = taskDate;

    listNode.classList.add("hidden");
    editListForm.classList.remove("hidden");
    ul.insertBefore(editListForm, listNode);
}

function revertEditFormLocation() {

}

function processEditTask(e) {
    let title = document.querySelector('#edit-list-title').value;
    let details = document.querySelector('#edit-list-details').value;
    let date = document.querySelector('#edit-list-date').value;
    let taskId = findHiddenTask().id;
    let selectedTask = findSelectedTask(taskId);

    selectedTask.title = title;
    selectedTask.details = details;
    selectedTask.date = processDateData(date);
    saveToLocalStorage();

    revertEditFormLocation();
    revertOptionLocation();
    showHiddenTask();

    let dataProject = selectedTask.dataProject;
    refreshDisplay(dataProject);

    e.preventDefault();

}
//refresh the content display after its been edited/changed in some way
function refreshDisplay(dataProject) {
    const selectedTile = document.querySelector('.selected');
    if (selectedTile.closest('.project') != null) {
        displayTask(dataProject);
    } else if (selectedTile.closest('.home') != null) {
        checkWhichHomeTile(selectedTile);
    } else {
        return;
    }
}

function findHiddenTask() {
    const hiddenTask = document.querySelector('li.hidden');
    return hiddenTask;
}

function showHiddenTask() {
    const hiddenTask = document.querySelector('li.hidden');
    hiddenTask.classList.remove('hidden');
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