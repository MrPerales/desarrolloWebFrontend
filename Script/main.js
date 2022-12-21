const menuEmail=document.querySelector(".navbar-Email");
const desktopMenu=document.querySelector(".menu-desktop");

menuEmail.addEventListener("click",toggleDesktopMenu);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle("inactive");
}


