import{ Article } from './Article'
import petsList from './pets.js'
import { showModal } from './modal-window'
import { randomArray } from './randomArray'


const list = document.querySelector('.our-friends-list')





function insertArticles() {
  // list.append(new Article(petsList[0]).buildArticle())

  list.append(...petsList.reduce((acc, curr) => {
    acc.push(new Article(curr).buildArticle())
    return acc
  }, []))
}


insertArticles()


list.addEventListener('click', showModal)

// window.onclick = test

function test(){
  console.log();
  [...list.children].forEach(el => el.remove())
}


