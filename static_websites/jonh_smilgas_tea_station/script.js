const navBtn = document.querySelector('.nav-btn');
const navClose = document.querySelector('.nav-close');
const navBar = document.querySelector('.nav-bar');

navBtn.addEventListener('click', () => {
    navBar.classList.add('show-nav');
});

navClose.addEventListener('click', () => {
    navBar.classList.remove('show-nav');
});