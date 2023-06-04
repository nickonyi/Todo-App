import { displayTask, updateTitle, id } from "./creatingTask";
import { revertEditFormLocation } from "./editingTask";
import { revertOptionLocation } from "./editingProject";
import { checkWhichHomeTile } from "./homeSection";


function createEventListener() {
    //event listerner for creating a form for adding projects
    const cancel = document.querySelector('.project-cancel-btn');


    const leftPanel = document.querySelector('.left-panel');
    leftPanel.addEventListener('click', checkTile);

}

function createSpanIcon() {

}

function projectList() {

}

function saveToLocalStorage() {

}

function hideAddTaskBtn() {

}

//check to see what tile is selected
function checkTile(e) {
    let homeTile = e.target.closest('.home .tile');
    let projectTile = e.target.closest('.projects .tile');

    console.log(homeTile);
    console.log(projectTile);
}
export { createEventListener, createSpanIcon, projectList, saveToLocalStorage, hideAddTaskBtn };