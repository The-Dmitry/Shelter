import{ Article } from './Article'
import petsList from './pets.js'
const slider = document.querySelector('.slider')





function test() {
  let template = document.createElement('ul')
  template.className = 'slider__row'
  let list = []
  for(let i = 0; i < 3; i++) {
    list.push(new Article(petsList[i]).buildArticle())
  }
  template.append(...list)
  slider.append(template)
  // slider.append(new Article(petsList[0]).buildArticle())
}

test()

// let test = [1, 2, 3, 4, 5, 6, 7, 8]



// console.log(petsList.length);
