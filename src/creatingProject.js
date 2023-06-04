import { displayTask, updateTitle, id } from "./creatingTask";
import { revertEditFormLocation } from "./editingTask";
import { revertOptionLocation } from "./editingProject";
import { checkWhichHomeTile } from "./homeSection";


function createEventListener() {
    //event listerner for creating a form for adding projects
    const cancel = document.querySelector('.project-cancel-btn');
    cancel.addEventListener("click", hideProjectForm);

    const add = document.querySelector('#add-project');
    add.addEventListener("click", showProjectForm);

    const submit = document.querySelector('#project-form');
    submit.addEventListener('submit', processProjectInput);

    const leftPanel = document.querySelector('.left-panel');
    leftPanel.addEventListener('click', checkTile);

}

//get project list of objects from locak storage or start with empty
let defaultProjectList = [];

//process the input and prepare to create project element
function processProjectInput(e) {
    e.preventDefault();
    let projectName = document.querySelector('#project-input').value;
    let dataProject = findNextDataset();
    const newProject = createProject(projectName);

    console.log(newProject.name);

    defaultProjectList.push(newProject);

    console.log(defaultProjectList);
}

function createSpanIcon() {

}

//find next data-set
const findNextDataset = () => {
    const allprojects = document.querySelectorAll("[data-project]");
    return allprojects.length;
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
    let projectTile = e.target.closest('.project .tile');



    if (homeTile != null) {
        const title = homeTile.querySelector('[data-name]');
        selectTile(homeTile);
        // checkWhichHomeTile(homeTile);
        updateTitle(title);
    }

}
//create project factory function
function createProject(dataProject, name) {
    const taskList = [];
    const taskNum = taskList.length;

    {
        dataProject,
        name,
        taskList,
        taskNum
    }
}

//pop up the project form
function showProjectForm() {
    const projectForm = document.getElementById('project-form');
    projectForm.classList.remove('hidden');
    //focus on input field
    document.getElementById('project-input').focus();
}
//hide the project form
function hideProjectForm() {
    const projectForm = document.querySelector('#project-form');
    const projectInput = document.querySelector('#project-input');

    projectInput.value = "";
    projectForm.classList.add('hidden');
}

function selectTile(node) {
    const selectedTile = document.querySelector('.selected');

    selectedTile.classList.remove('selected');
    node.classList.add('selected');

}
export { createEventListener, createSpanIcon, projectList, saveToLocalStorage, hideAddTaskBtn };