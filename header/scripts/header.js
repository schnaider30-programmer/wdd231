const hamButton = document.querySelector('#ham-button');
const navBar = document.querySelector("#nav-bar");


hamButton.addEventListener('click', () => {
    hamButton.classList.toggle('close');
    navBar.classList.toggle('show');
});
