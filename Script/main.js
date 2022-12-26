const menuEmail=document.querySelector(".navbar-Email");
const desktopMenu=document.querySelector(".menu-desktop");
const burgerMenu=document.querySelector(".burgerMenu");
const mobileMenu=document.querySelector(".mobile-menu");
const menuCarritoIcon=document.querySelector(".navbar-carrito-icon");
const aside=document.querySelector(".product-datail")

menuEmail.addEventListener("click" ,toggleDesktopMenu);
burgerMenu.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click",toggleCarritoAside);

function toggleDesktopMenu(){
    const isAsideClosed=aside.classList.contains("inactive");

    if(!isAsideClosed){
        aside.classList.add("inactive");
    }


    desktopMenu.classList.toggle("inactive");

}

function toggleMobileMenu(){
    const isAsideClosed=aside.classList.contains("inactive");

    if(!isAsideClosed){
        aside.classList.add("inactive");
    }

    mobileMenu.classList.toggle("inactive");
}
function toggleCarritoAside(){

    const isMobileMenuClosed=mobileMenu.classList.contains("inactive");

    if(!isMobileMenuClosed){
        mobileMenu.classList.add("inactive");
    }
    aside.classList.toggle("inactive");
}

