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

    displayProject(projectList);

}

//get project list of objects from locak storage or start with empty
let defaultProjectList = [];
let projectList = localStorage.getItem("myProjectList");

projectList = JSON.parse(projectList || JSON.stringify(defaultProjectList));

//process the input and prepare to create project element
function processProjectInput(e) {
    e.preventDefault();
    let projectName = document.querySelector('#project-input').value;
    let dataProject = findNextDataset();
    const newProject = createProject(dataProject, projectName);

    projectList.push(newProject);
    saveToLocalStorage();

    addProject(dataProject, projectName);
    hideProjectForm();

}

//save projectList and last id data on local storage
function saveToLocalStorage() {
    localStorage.setItem("myProjectList", JSON.stringify(projectList));
    localStorage.setItem("currentId", (id).toString());


}

//display the list of all projects in the left panel
function displayProject(array) {
    array.forEach(project => {
        addProject(project.dataProject, project.name);
    })
}
//create a project and add it to the list of projects in HTM;
function addProject(dataProject, textInput) {
    const project = document.querySelector('.project');
    const form = document.querySelector('#project-form');

    const container = document.createElement('div');
    container.setAttribute('data-project', `${dataProject}`);
    container.classList.add('tile', 'data-tile');
    project.insertBefore(container, form);

    //menu three lines icon
    const menuIcon = createSpanIcon('menu');
    menuIcon.setAttribute('data-drag', '');
    container.appendChild(menuIcon);
    //name and number status
    const projectInfo = document.createElement('div');
    projectInfo.classList.add('project-info');
    container.appendChild(projectInfo);

    const projectName = document.createElement('div');
    projectName.classList.add('project-name');
    projectName.textContent = textInput;

    projectInfo.appendChild(projectName);
    //three dots on the right section
    const editDiv = document.createElement('div');
    editDiv.classList.add('edit-container');
    editDiv.setAttribute('data-dropdown', '');
    container.appendChild(editDiv);

    const editIcon = createSpanIcon('more_vert');
    editIcon.setAttribute("data-dropdown-button", "");
    editDiv.appendChild(editIcon);

}
//create span icon of google materials
function createSpanIcon(name) {
    const icon = document.createElement('span');
    icon.classList.add('material-icons-round');
    icon.textContent = name;
    return icon;
}

//find next data-set
const findNextDataset = () => {
    const allprojects = document.querySelectorAll("[data-project]");
    return allprojects.length;
}

// remove add task Btn when homeTiles is selected
function hideAddTaskBtn() {
    const addTaskBtn = document.querySelector('#add-list');
    addTaskBtn.classList.add('hidden');
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
        hideAddTaskBtn();
    } else if (projectTile != null) {
        const title = projectTile.querySelector(".project-name");
        let dataProject = projectTile.dataset.project;

        selectTile(projectTile);
        updateTitle(title);
    } else {
        return;
    }

}
//create project factory function
const createProject = (dataProject, name) => {
    const taskList = [];
    const taskNum = taskList.length;
    return {
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
export { createEventListener, createSpanIcon, projectList, saveToLocalStorage, hideAddTaskBtn, createProject };