import { createEventListener } from "./creatingProject";
import { listEvent } from "./creatingTask";


createEventListener();
listEvent();
//hide side menu event listener
const hiddenMenu = document.querySelector('.hidden-menu');
hiddenMenu.addEventListener('click', () => {
    const leftPanel = document.querySelector('.left-panel');
    leftPanel.classList.toggle('hidden');
});