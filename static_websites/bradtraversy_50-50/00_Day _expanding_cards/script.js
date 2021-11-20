//how to do this project:
// get all the elements by class,
// add a click event listener, 
// event listener will make the selected card have an active class and removes active class from the rest of cards

panels = document.querySelectorAll('.panel');

const removeClass = () => {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeClass()
        panel.classList.add('active')
    })
});
