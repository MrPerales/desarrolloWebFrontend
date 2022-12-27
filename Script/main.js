const menuEmail=document.querySelector(".navbar-Email");
const desktopMenu=document.querySelector(".menu-desktop");
const burgerMenu=document.querySelector(".burgerMenu");
const mobileMenu=document.querySelector(".mobile-menu");
const menuCarritoIcon=document.querySelector(".navbar-carrito-icon");
const aside=document.querySelector(".product-datail");
const cardsContainer=document.querySelector('.cards-container');

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

const productList=[];
productList.push({
    name: "Sad Cheems",
    price: 120,
    image:"https://i.seadn.io/gae/uAJta1YRdB-fhq0Z1ZKB6SuOirVng9PyExwdEZu2Rl7uxDN_YLqgKI-L3egZZ0kWevHSsKVWd3MwOlLdtiDuVnknjcYoyBXTFCUQ?auto=format&w=1000",
});
productList.push({
    name: "Cheems",
    price: 500,
    image:"https://i.pinimg.com/originals/96/58/06/9658067fff13e81f249daf74b18e03e2.jpg",
});
productList.push({
    name: "Sad",
    price: 300,
    image:"https://i.seadn.io/gae/e6sg5Ab9Ox9wR1_ZNVryncm6dRVv0W6ru4nhgNJ0bCExby3Q9eCvfMVpBgWepbfMFnMS69CamFNBlelEnjaFEDBH5SSBGxwRKMjV?auto=format&w=1000",
});

for(product of productList){
    ///creamos variables con elementos y les agregamos sus clases 
    const productCard=document.createElement('div');
    productCard.classList.add('product-card');

    const productImg=document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.classList.add('producto-img');
    productImg.setAttribute('alt', 'product');

    const divEspecificaciones=document.createElement('div');
    divEspecificaciones.classList.add('div-especificaciones');

    const especificaciones=document.createElement('div');
    especificaciones.classList.add('especificaciones');

    const productPrice=document.createElement('p');
    productPrice.innerText= '$' + product.price;

    const productName=document.createElement('p');
    productName.innerText= product.name;
    
    const figureIconContainer =document.createElement('figure');
    figureIconContainer.classList.add('icon-container');

    const imgIconAddCar=document.createElement('img');
    imgIconAddCar.setAttribute('src','https://icons.veryicon.com/png/o/transport/vehicle-management-icon-library/add-vehicles.png')
    imgIconAddCar.setAttribute('alt','icon-add-car');

    /*maquetamos el html con append y appendChild*/
    /*append para varios elementos */
    /*appendChild para un solo elemento*/  
    cardsContainer.appendChild(productCard);
    productCard.append(productImg,divEspecificaciones);
    divEspecificaciones.append(especificaciones,figureIconContainer);
    especificaciones.append(productPrice,productName);
    figureIconContainer.append(imgIconAddCar);


}
