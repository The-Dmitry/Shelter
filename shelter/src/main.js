import home from './style/pages/main.scss'

import slider from './js/slider'

import { Burger } from './js/Burger'



const burgerButton = document.querySelector('.burger')
let menu = new Burger(true, burgerButton)

burgerButton.addEventListener('click', function(e) {
  menu.toggleBurger()
})

console.log(burgerButton);