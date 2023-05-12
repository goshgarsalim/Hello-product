let cart_btn = document.querySelector('.cart-btn'); 
let mini_cart = document.querySelector('.shop-minicart'); 
let close_cart = document.querySelector('.shop-minicart-close'); 
let overlay_cart = document.querySelector('.overlay-cart');
let search_box = document.querySelector('.search-box');
let search_btn = document.querySelector('.search-btn');
let search_close = document.querySelector('.search-close');


cart_btn.addEventListener("click", () =>{
    mini_cart.classList.add('active-cart');
});

cart_btn.addEventListener("click", () =>{
    overlay_cart.classList.add('overlay-active');
});

close_cart.addEventListener("click", () =>{
    overlay_cart.classList.remove('overlay-active');
});

close_cart.addEventListener("click", () =>{
    mini_cart.classList.remove('active-cart');
});

overlay_cart.addEventListener("click", () =>{
    mini_cart.classList.remove('active-cart');
});

overlay_cart.addEventListener("click", () =>{
    overlay_cart.classList.remove('overlay-active');
});

search_btn.addEventListener("click", () =>{
    search_box.classList.add('search-active');
});
search_close.addEventListener("click", () =>{
    search_box.classList.remove('search-active');
});

