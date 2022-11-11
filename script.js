const btnMobile = document.querySelector("#btnMobile");
const closeMenuMobile = document.querySelector(".closeMenu");
const overlay = document.querySelector(".overlay");
const nav = document.querySelector(".navigation");
const link = document.querySelectorAll("ul.navigationLinks li > a");

function initMenu(event) {
    if(event.type === 'touchstart') event.preventDefault();
    nav.classList.add('active');
    overlay.classList.add('start');
    btnMobile.style.display = 'none'
}


function closeMenu(event) {
    if(event.type === 'touchstart') event.preventDefault();
    const active = nav.classList.contains('active');
    if(active) {
        nav.classList.remove('active'); 
        overlay.classList.remove('start');
        btnMobile.style.display = 'block'
    }
}


btnMobile.addEventListener('click', initMenu);
btnMobile.addEventListener('touchstart', initMenu);
closeMenuMobile.addEventListener('click', closeMenu);
closeMenuMobile.addEventListener('touchstart', closeMenu);


link.forEach((link)=> {
    link.addEventListener('click', closeMenu);
});

























