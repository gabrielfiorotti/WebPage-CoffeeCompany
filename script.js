
// =========== nav menu sandwich ===========

// getting the button
const btnMobile = document.getElementById('btn-mobile');


// creating the function I want to activate when click the button
function toggleMenu(event) {
    if(event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    

    // setting aria-expanded for accessibility: 
    const active = nav.classList.contains('active')
    event.currentTarget.setAttribute('aria-expanded', active);

    // setting aria-label for accessibility: 
    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
        } else {
            event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
        }

}

// adding event click => on click, run the function toggleMenu:
btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);



// ============================================



// fixing navigation menu to stop in the right spot when scrolling, 
// due to header position 'fixed';

// (parâmetro que usei: https://www.youtube.com/watch?v=tzbpAqb2Wjc)


const menuItems = document.querySelectorAll('#menu a')

menuItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
})


function getScrollTopByHref(element) {
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
}

function scrollToIdOnClick(event) {
    event.preventDefault();
    const section = getScrollTopByHref(event.target) - 80;

    scrollToPosition(section);
}

function scrollToPosition(section) {
    window.scroll({
        top: section,
        behavior: "smooth"
    });
}





