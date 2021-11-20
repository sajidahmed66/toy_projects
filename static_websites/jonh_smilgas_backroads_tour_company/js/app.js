/* setting the bdate dynamically  */
// set date
let date = document.getElementById('date');

date.innerHTML = new Date().getFullYear();

//toggle navbar on click 

let navBtn = document.getElementById('nav-toggle');
let navLinks = document.getElementById('nav-links');
let flag = false;
navBtn.addEventListener('click', () => {
    navLinks.classList.toggle("show-nav")
})

// fixed navbar
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY >= 62) {
        navbar.classList.add('fixed');
    } else {
        navbar.classList.remove('fixed');
    }
})

const scrollLink = document.querySelectorAll('.scroll-link');

console.log(scrollLink);

scrollLink.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        navLinks.classList.remove('show-nav');
        const id = e.target.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        let position;
        if (navbar.classList.contains('fixed')) {
            position = element.offsetTop - 62;
        } else {
            position = element.offsetTop - 124;
        }
        if (window.innerWidth < 992) {
            if (navbar.classList.contains('fixed')) {
                position = element.offsetTop - 62;
            } else {
                position = element.offsetTop - 332 - 62;
            }
        }

        window.scrollTo({
            top: position,
            behavior: 'smooth'
        })

    })
})
// element.scrollIntoView({
//     behavior: 'smooth',
//     block: 'start'
// });