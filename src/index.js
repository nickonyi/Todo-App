import { createEventListener } from "./creatingProject";
import { listEvent } from "./creatingTask";
import { editContainerEventListener } from "./editingProject";
import { displayAllTasks } from "./homeSection";





createEventListener();
listEvent();
editContainerEventListener();
displayAllTasks();



//hide side menu event listener
const hiddenMenu = document.querySelector('.hidden-menu');
hiddenMenu.addEventListener('click', () => {
    const leftPanel = document.querySelector('.left-panel');
    leftPanel.classList.toggle('hidden');
});

//on start up checked wheather its on light mode or dark mode

const checkbox = document.getElementById('checkbox');

if (checkbox.checked === true) {
    document.body.classList.add('light');
} else {
    document.body.classList.remove('light');
}

//event listener for every time the dark mode toggle change
checkbox.addEventListener("change", () => {
    document.body.classList.toggle('light');
})