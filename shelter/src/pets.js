import pets from './style/pages/pets.scss'

import pagination from './js/pagination'


import { Burger } from './js/Burger'



const burgerButton = document.querySelector('.burger')
let menu = new Burger(false, burgerButton)

burgerButton.addEventListener('click', function(e) {
  menu.toggleBurger()
})