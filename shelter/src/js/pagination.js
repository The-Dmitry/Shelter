import{ Article } from './Article'
import petsList from './pets.js'
import { showModal } from './modal-window'
import randomArray from './randomArray'


// 1190 910 630

const list = document.querySelector('.our-friends-list')
const pagination = document.querySelector('.pagination')
const paginationContainer = document.querySelector('.our-friends-list')
const currentIndicator = document.querySelector('.current')

let currentPage = 0


let arr = new Array(8).fill(0).map((el, i) => i)
let allObjects = new Array(6).fill(arr).map(el => randomArray([...el])).flat()
let splittedArray



window.onload = function(){
  let width = paginationContainer.offsetWidth
  console.log(width);
  if(width < 550) {
    splitTheArray(allObjects , 3)
    return
  }
  if(width < 830) {
    splitTheArray(allObjects , 6)
    return
  }
  if(width > 829) {
    splitTheArray(allObjects , 8)
    return
  }
}

function splitTheArray(array ,num){
  let result = []
  for(let i = 0; i < array.length; i+=num) {
    result.push(array.slice(i, i+num))
  }
  splittedArray = result
  insertArticles(currentPage)
}



function insertArticles(num) {
  [...list.children].forEach(el => el.remove())

  list.append(...splittedArray[num].reduce((acc, curr) => {
    acc.push(new Article(petsList[curr]).buildArticle())
    return acc
  }, []))
}


function changePage(e) {
  if(e.target.classList.contains('current')) {
    return
  }
  if(e.target.classList.contains('next')) {
    currentPage++
  }
  if(e.target.classList.contains('previous')) {
    currentPage--
  }
  if(e.target.classList.contains('start')) {
    currentPage = 0
  }
  if(e.target.classList.contains('end')) {
    currentPage = splittedArray.length - 1
  }
  insertArticles(currentPage)
  currentIndicator.textContent = currentPage+1
  switchPaginationButtons(this.children)
}

function switchPaginationButtons(buttons) {
  [...buttons].forEach(el => el.disabled = false)
  if(currentPage === 0) {
    [buttons[0], buttons[1]].forEach(el => el.disabled = true)
  }
  if(currentPage === splittedArray.length-1) {
    [buttons[buttons.length-1], buttons[buttons.length-2]].forEach(el => el.disabled = true)
  }
}


list.addEventListener('click', showModal)
pagination.addEventListener('click', changePage)


