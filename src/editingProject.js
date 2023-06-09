import { projectList, saveToLocalStorage } from "./creatingProject"
import { updateTitle } from "./creatingTask"

function editContainerEventListener() {
    document.addEventListener("click", showDropDown);
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

function showRenameForm() {

}

function hideDropDown() {

}

function deleteProject() {

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

function sortArray() {

}

export { editContainerEventListener, showRenameForm, hideDropDown, deleteProject, revertOptionLocation, sortArray };