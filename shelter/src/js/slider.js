import{ Article } from './Article'
import{ Modal } from './Modal'
import petsList from './pets.js'
import { showModal } from './modal-window'
import randomArray from './randomArray'

const slider = document.querySelector('.slider__container')

const next = document.querySelector('.slider__next')
const prev = document.querySelector('.slider__prev')


let isEnabled = true
let arrayOfNumbers = new Array(petsList.length).fill(0).map((e,i) => i)

let shuffle = shuffleObjects()

function createSLiderRow(className = 'slider__row') {
  let template = document.createElement('ul')
  template.append(...shuffle().reduce((acc, curr) => {
    acc.push(new Article(petsList[curr]).buildArticle())
    return acc
  }, []))
  template.className = className
  slider.append(template)
}

createSLiderRow()


next.addEventListener('click', ()=> {
  rollTheCarousel('slider__row from-right', 'to-left')
})

prev.addEventListener('click', ()=> {
  rollTheCarousel('slider__row from-left', 'to-right')
})


function rollTheCarousel(rowClassName, direction,) {
  if(isEnabled){
    isEnabled = false
    createSLiderRow(rowClassName)
    slider.children[0].classList.add(direction)
    slider.children[0].addEventListener('animationend', function(){
      this.remove()
    })
    slider.children[1].addEventListener('animationend', function(){
      this.classList.remove('from-right', 'from-left')
      isEnabled = true
    })
  }
}




function shuffleObjects() {
  let slides = randomArray(arrayOfNumbers)  /*1 2 3 4 5 6 7 8 */
  let currentSlides
  return ()=> {
    currentSlides = slides.slice(0, 3) /* 1 2 3 */
    slides.splice(0, 3) /*4 5 6 7 8 */
    slides = [...randomArray(slides), ...currentSlides] /*4 5 6 7 8 +  1 2 3 */
    return currentSlides
  }
}

const body = document.querySelector('body')

slider.addEventListener('click', showModal)



