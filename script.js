let cart_btn = document.querySelector('.cart-btn');
let mini_cart = document.querySelector('.shop-minicart');
let close_cart = document.querySelector('.shop-minicart-close');



cart_btn.addEventListener("click", () =>{
    mini_cart.classList.add('active-cart');
})
close_cart.addEventListener("click", () =>{
    mini_cart.classList.remove('active-cart');
})


