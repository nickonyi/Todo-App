//hide side menu event listener
const hiddenMenu = document.querySelector('.hidden-menu');
hiddenMenu.addEventListener('click', () => {
    const leftPanel = document.querySelector('.left-panel');
    leftPanel.classList.toggle('hidden');
});