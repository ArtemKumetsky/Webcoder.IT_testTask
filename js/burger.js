const MOBILE_BREAKPOINT = 1000;

let burgerEventListenerIsActive = false;
let lastSavedViewport;

const burger = document.querySelector(".burger-btn");

function addBurgerEventListener() {
    document.addEventListener('click', (e) => {
        if (e.target === burger || e.target.parentElement === burger) {
            burger.classList.toggle('is-active');
        }
        else if (e.target !== burger && e.target.parentElement !== burger && burger.classList.contains('is-active')) {
            burger.classList.remove('is-active');
        }
    });
    burgerEventListenerIsActive = true;
}

// add event listener for burger btn if mobile view
if (window.innerWidth <= MOBILE_BREAKPOINT && !burgerEventListenerIsActive) {
    addBurgerEventListener();
}

// listen to resize desktop > mobile && ignore viewport height changes when scrolling on mobile
window.addEventListener('resize', ()=>{
    if (window.innerWidth <= MOBILE_BREAKPOINT
        && window.innerWidth !== lastSavedViewport
        && !burgerEventListenerIsActive) {
        addBurgerEventListener();
    }
});