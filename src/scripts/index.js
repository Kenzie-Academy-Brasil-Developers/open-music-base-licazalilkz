/* Desenvolva sua lógica aqui ... */
import { products } from "./productsData.js";
import { categories } from "./productsData.js";

/*****--------------Dark Mode--------------- */
const renderDarkMode=()=>{
     const darkmodebutton = document.querySelector('.button__darkMode');
     const html = document.querySelector('html');
     const img = document.querySelector('.button__img');
     const theme = JSON.parse(localStorage.getItem('darkmode'));
     if(theme){
          html.classList.add('dark___mode');
          img.src = "./src/assets/img/sun.png";
     }else{
          html.classList.remove('dark___mode');
          img.src = "./src/assets/img/moon.png";
     }

     darkmodebutton.addEventListener('click',()=>{
          html.classList.toggle('dark___mode');
          if(html.classList.contains('dark___mode')){
               img.src = "./src/assets/img/sun.png";
               localStorage.setItem('darkmode', true);
          }else{
               img.src = "./src/assets/img/moon.png";
               localStorage.setItem('darkmode', false);
          }
     })
}
/**----------------------------------------- */
/**-----------Renderizar Albuns ------------- */
const renderProducts = (product) => {
    const mainProducts = document.querySelector('.header__album')
    const productsList = document.createElement('ul');
    productsList.className='album__cards';

    product.forEach(element => {
        const album = document.createElement('li');
        album.className = 'album__card';

        const albumImg = document.createElement('img');

        const infoDiv = document.createElement('div')
        infoDiv.className = 'card__info';

        const divBandInfo = document.createElement('div');
        divBandInfo.className = 'info__band';

        const bandName = document.createElement('p')

        const albumYear = document.createElement('p');

        const albumtitle = document.createElement('p');

        const divBuy = document.createElement('div');
        divBuy.className = 'info__buy';

        const albumPrice = document.createElement('p');

        const albumBuy = document.createElement('button');

        albumImg.src = element.img;
        bandName.innerText = element.band;
        albumYear.innerText = element.year;

        albumtitle.innerText = element.title;
        
        albumPrice.innerText = `R$ ${element.price}`;
        albumBuy.innerText = 'Comprar';
        
        divBandInfo.appendChild(bandName);
        divBandInfo.appendChild(albumYear);
        divBuy.appendChild(albumPrice);
        divBuy.appendChild(albumBuy);

        infoDiv.appendChild(divBandInfo);
        infoDiv.appendChild(albumtitle);
        infoDiv.appendChild(divBuy);


        album.appendChild(albumImg);
        album.appendChild(infoDiv);
        productsList.appendChild(album);
    });
    mainProducts.appendChild(productsList);
}
/**------------------------------------------ */
/** ------------ Filtros da app ------------- */
const categoryProducts = (product) => {
    const filterProducts = document.querySelectorAll('.filter');
    const buttonall = document.querySelector('.music__all');
    const buttonpop = document.querySelector('.music__pop');
    const buttonmpb = document.querySelector('.music__mpb');
    const buttonforro = document.querySelector('.music__forro');
    const buttonsamba = document.querySelector('.music__samba');
    const buttonbaiao = document.querySelector('.music__baiao');
    const buttonrap = document.querySelector('.music__rap');
    const buttonhiphop = document.querySelector('.music__hiphop');
    const buttonrock = document.querySelector('.music__rock');
    const buttonraggea = document.querySelector('.music__raggea');
    const buttoncountry = document.querySelector('.music__country');
    const buttongospel = document.querySelector('.music__gospel');

   buttonall.addEventListener('click',() => {
        clearScreen();
        renderProducts(products);
        console.log(buttonall);
   })
   buttonpop.addEventListener('click',() => {
        console.log(buttonpop.value);
        clearScreen();
        console.log(buttonpop.value);
        const filteredalbum = filterProduct(product, Number(buttonpop.value));
        console.log(filteredalbum);
        renderProducts(filteredalbum);
   })
   buttonmpb.addEventListener('click',() => {
        console.log(buttonmpb.value);
        clearScreen();
        console.log(buttonmpb.value);
        const filteredalbum = filterProduct(product, Number(buttonmpb.value));
        console.log(filteredalbum);
        renderProducts(filteredalbum);
   })
   buttonforro.addEventListener('click',() => {
        console.log(buttonforro.value);
        clearScreen();
        console.log(buttonforro.value);
        const filteredalbum = filterProduct(product, Number(buttonforro.value));
        console.log(filteredalbum);
        renderProducts(filteredalbum);
   })
   buttonsamba.addEventListener('click',() => {
        console.log(buttonsamba.value);
        clearScreen();
        console.log(buttonsamba.value);
        const filteredalbum = filterProduct(product, Number(buttonsamba.value));
        console.log(filteredalbum);
        renderProducts(filteredalbum);
        
   })
   buttonbaiao.addEventListener('click',() => {
        console.log(buttonbaiao.value);
        clearScreen();
        console.log(buttonbaiao.value);
        const filteredalbum = filterProduct(product, Number(buttonbaiao.value));
        console.log(filteredalbum);
        renderProducts(filteredalbum);
   })
   buttonrap.addEventListener('click',() => {
        console.log(buttonrap.value);
        clearScreen();
        console.log(buttonrap.value);
        const filteredalbum = filterProduct(product, Number(buttonrap.value));
        console.log(filteredalbum);
        renderProducts(filteredalbum);
   })
   buttonhiphop.addEventListener('click',() => {
        console.log(buttonhiphop.value);
        clearScreen();
        console.log(buttonhiphop.value);
        const filteredalbum = filterProduct(product, Number(buttonhiphop.value));
        console.log(filteredalbum);
        renderProducts(filteredalbum);
   })
   buttonrock.addEventListener('click',() => {
        clearScreen();
        console.log(buttonrock.value);
        const filteredalbum = filterProduct(product, Number(buttonrock.value));
        console.log(filteredalbum);
        renderProducts(filteredalbum);
   })
   buttonraggea.addEventListener('click',() => {
        console.log(buttonraggea.value);
        clearScreen();
        console.log(buttonraggea.value);
        const filteredalbum = filterProduct(product, Number(buttonraggea.value));
        console.log(filteredalbum);
        renderProducts(filteredalbum);
   })
   buttoncountry.addEventListener('click',() => {
        console.log(buttoncountry.value);
        clearScreen();
        console.log(buttoncountry.value);
        const filteredalbum = filterProduct(product, Number(buttoncountry.value));
        console.log(filteredalbum);
        renderProducts(filteredalbum);
   })
   buttongospel.addEventListener('click',() => {
        console.log(buttongospel.value);
        clearScreen();
        console.log(buttongospel.value);
        const filteredalbum = filterProduct(product, Number(buttongospel.value));
        console.log(filteredalbum);
        renderProducts(filteredalbum);
   })

    // filterProducts.addEventListener('click', () =>{
    //     filterProducts.forEach(filtered => {
    //         console.log(filtered.value);
    //     })
    // })
}

const filterProduct = (product, filterOption) =>{
    const filteredProducts = product.filter((products) => {
        if(products.category === filterOption){
            return products;
        }
    })
    return filteredProducts;
}
/**------------------------------------------- */
/**------------------------------------------- */
const filterByRange = (products) =>{
    const inputrange = document.querySelector('#inputRange');

    inputrange.addEventListener('input',()=>{
        const span = document.querySelector('#inputID');
        span.innerText = inputrange.value ; 

        const filteredProducts = products.filter((products) =>{
            return products.price >= inputrange.value;
        })
        clearScreen();
        renderProducts(filteredProducts);
        categoryProducts(filteredProducts);
    })
}
/**---------------Limpa Tela------------------ */
function clearScreen(){
    const remover = document.querySelector('.album__cards');
    console.log(remover)
    remover.remove();
}
/**------------------------------------------- */

renderProducts(products);
categoryProducts(products);
filterByRange(products);
renderDarkMode();