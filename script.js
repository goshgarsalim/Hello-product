let cart_btn = document.querySelector('.cart-btn');
let mini_cart = document.querySelector('.shop-minicart');
let close_cart = document.querySelector('.shop-minicart-close');
let overlay_cart = document.querySelector('.overlay-cart');


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

