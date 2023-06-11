import { projectList, saveToLocalStorage } from "./creatingProject"
import { updateTitle } from "./creatingTask"

function editContainerEventListener() {
    document.addEventListener("click", showDropDown);

    const option = document.querySelector('.project .option');
    option.firstElementChild.addEventListener('click', showRenameForm);
    option.lastElementChild.addEventListener('click', deleteProject);
}

function showDropDown(e) {
    const isDropDownButton = e.target.matches('[data-dropdown-button]');
    if (!isDropDownButton && e.target.closest('[data-dropdown]') != null) {
        return;
    }
    let currentDropDown;
    if (isDropDownButton) {
        relocateOption(e);
        currentDropDown = e.target.closest('[data-dropdown]');
        setTimeout(function() {
            currentDropDown.classList.toggle('active');
        }, 0);
    }

    document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
        //if click anywhere else currentDropDown = undefined meaning all active ones are closed
        if (dropdown === currentDropDown) { //if its the current button then do nth
            return;
        }
        dropdown.classList.remove("active"); //basically close all dropdown other drop down before open another
    });
}

function showRenameForm(e) {
    let editContainerNode = e.target.parentNode.parentNode;
    let tileNode = editContainerNode.parentNode;

    hideDropDown(editContainerNode);
    let haveForm = checkFormExist();
    if (haveForm === true) {
        revertRenameFormLocation();
        displayRenamedProject();
    }

    relocateRenameForm(tileNode);
    animateRenameForm();

    document.querySelector('.project-rename-input').focus();
}

function hideDropDown(editContainerNode) {
    editContainerNode.classList.remove('active');
}

function deleteProject(e) {
    let tile = e.target.closest('.tile');
    let index = tile.dataset.project;

    if (tile.classList.contains('selected')) {
        const today = document.querySelector("#today");
        const nameNode = today.querySelector("[data-name]");

        today.classList.add("selected");
        updateTitle(nameNode);
    }
}

function revertOptionLocation() {
    const projectOption = document.getElementById('project-option');
    projectOption.classList.add("hidden");
    const project = document.querySelector(".project");
    project.appendChild(projectOption);
    //revert option DOM in right panel
    const listOption = document.querySelector("#list-option");
    listOption.classList.add("hidden");
    const listToDo = document.querySelector(".list-todo");
    listToDo.appendChild(listOption);
}

function relocateOption(e) {
    const editContainer = e.target.closest('.edit-container');

    if (e.target.closest('.tile') != null) {
        const projectOption = document.querySelector('#project-option');
        projectOption.classList.remove('hidden');
        editContainer.appendChild(projectOption);
    } else if (e.target.closest("li") != null) { //pop up in list
        const listOption = document.getElementById("list-option");
        listOption.classList.remove("hidden");
        editContainer.appendChild(listOption);
    }

}

function checkFormExist() {
    const renameForm = document.querySelector('#rename-form');

    if (renameForm.classList.contains('hidden')) {
        return false;
    } else {
        return true;
    }
}

//revert form back to its original posting under .project
function revertRenameFormLocation() {
    const renameForm = document.getElementById("rename-form");
    const project = document.querySelector(".project");

    renameForm.classList.add("hidden");
    project.appendChild(renameForm);
}

function relocateRenameForm(tileNode) {
    const projectNode = tileNode.parentNode;
    const renameForm = document.getElementById('rename-form');

    const nameNode = tileNode.querySelector('.project-name');
    let name = nameNode.textContent;

    const input = renameForm.querySelector('input');
    input.value = name;

    projectNode.insertBefore(renameForm, tileNode);
}

function animateRenameForm() {
    const form = document.querySelector('#rename-form');

    setTimeout(() => {
        form.classList.remove('hidden');
    }, 0);
}

function displayRenamedProject() {
    const hiddenTile = document.querySelector('div.hidden');
    hiddenTile.classList.remove('hidden');
}

function sortArray() {

}

export { editContainerEventListener, showRenameForm, hideDropDown, deleteProject, revertOptionLocation, sortArray };