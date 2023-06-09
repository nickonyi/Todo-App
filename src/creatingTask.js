import { projectList, createSpanIcon, saveToLocalStorage } from "./creatingProject"
import {
    styleCompletedTask,
    updateCompletedTask,
    styleImportantTask,
    updateImportantTask,
    deleteTask,
    showEditForm,
    revertEditFormLocation,
    processEditTask,
    showHiddenTask
} from "./editingTask"

function listEvent() {
    const addList = document.querySelector("#add-list");
    addList.addEventListener("click", showListForm);

    const cancel = document.querySelector('.list-cancel-btn');
    cancel.addEventListener("click", hideListForm);

    const listSubmit = document.querySelector('#list-form');
    listSubmit.addEventListener('submit', processListInput);

    const todoList = document.querySelector('.list-todo');
    todoList.addEventListener("click", checkListEvent);
}

function createTask(dataProject, id, title, details, completed, important, date) {
    return {
        dataProject,
        id,
        title,
        details,
        completed: completed,
        important: important,
        date: date
    }
}

function checkListEvent(e) {
    let isStarIcon = e.target.matches('.star-outline');
    let isCircleIcon = e.target.matches('.unchecked');

    let isEditSubmitBtn = e.target.matches('.list-submit-btn');
    let isEditTaskCancel = e.target.matches('.list-cancel-btn');

    let isDeleteBtn = e.target.matches('#list-delete');
    let isEditBtn = e.target.matches('#list-edit');

    if (isEditBtn) {
        console.log("Yes that is true");
    }

    if (isStarIcon) {
        styleImportantTask(e);
        updateImportantTask(e);
    } else if (isCircleIcon) {
        styleCompletedTask(e);
        updateCompletedTask(e);
    }
}



//pop up the add list form
function showListForm() {
    const listForm = document.querySelector('#list-form');
    listForm.classList.remove('hidden');
    document.querySelector('#list-input').focus();
}

//hide the add list form
function hideListForm() {
    const listForm = document.querySelector('#list-form');
    const listInput = document.querySelector('#list-input');
    const listInputDetail = document.querySelector('#list-input-detail');
    const listInputDate = document.querySelector('#list-input-date');

    listForm.classList.add('hidden');
    listInput.value = "";
    listInputDetail.value = "";
    listInputDate.value = "";
}
//get id from local storage or get a default one
let defaultId = 0;
let id = Number(localStorage.getItem("currentId")) || defaultId;

function processListInput(e) {
    e.preventDefault();
    let title = document.querySelector('#list-input').value;
    let details = document.querySelector('#list-input-detail').value;
    let dateInput = document.querySelector('#list-input-date').value;

    let dataProject = findCurrentDataProject();
    let date = processDateData(dateInput);
    let listID = id;

    const newTask = createTask(dataProject, listID, title, details, false, false, date);
    projectList[dataProject].taskList.push(newTask);
    id++;
    saveToLocalStorage();

    addTask(listID, title, details, date);
    hideListForm();
}
//dispay all the task in a project
function displayTask(dataProject) {
    const ul = document.querySelector('ul');
    ul.textContent = "";
    projectList[dataProject].taskList.forEach(task => {
        addTask(task.id, task.title, task.details, task.date, task.completed, task.important);
    });
}

function updateTitle(nameNode) {
    const title = document.querySelector('.title');
    title.textContent = nameNode.textContent;
}





function addTask(listId, title, details, date, completed, important) {
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    li.id = listId;
    ul.appendChild(li);

    const unchecked = document.createElement('div');
    unchecked.classList.add('unchecked');
    li.appendChild(unchecked);

    const listDetails = document.createElement('div');
    listDetails.classList.add('list-details');
    li.appendChild(listDetails);

    if (completed) {
        unchecked.classList.toggle('checked');
        listDetails.classList.toggle('line-through');
        listDetails.classList.toggle('fade');
    }

    const taskTitle = document.createElement('div');
    taskTitle.classList.add("task-title");
    taskTitle.textContent = title;
    listDetails.appendChild(taskTitle);

    const taskDetails = document.createElement('div');
    taskDetails.classList.add("task-details");
    taskDetails.textContent = details;
    listDetails.appendChild(taskDetails);

    const dateDiv = document.createElement('div');
    dateDiv.classList.add("date");
    dateDiv.textContent = date;
    li.appendChild(dateDiv);

    const listRight = document.createElement('div');
    listRight.classList.add('list-right');
    li.appendChild(listRight);

    const starOutline = createSpanIcon('star_outline');
    starOutline.classList.add('star-outline');
    listRight.appendChild(starOutline);

    const star = createSpanIcon('star');
    star.classList.add('important');
    listRight.appendChild(star);

    if (important) {
        starOutline.classList.add('list-hidden');
    } else {
        star.classList.add('list-hidden');
    }

    const editContainer = document.createElement('div');
    editContainer.dataset.dropdown = "";
    editContainer.classList.add('edit-codatentainer');
    listRight.appendChild(editContainer);

    const threeDots = createSpanIcon('more_vert');
    threeDots.dataset.dropdownButton = "";
    editContainer.appendChild(threeDots);

}

function processDateData(date) {
    let formattedDate;
    if (!date) {
        formattedDate = "No due date";
    } else {
        formattedDate = date;
    }

    return formattedDate;
}
//function to find the data-project index when adding new tasks
function findCurrentDataProject() {
    const selected = document.querySelector('.selected');
    return selected.dataset.project;
}

export { updateTitle, listEvent, displayTask, id, addTask, processDateData };