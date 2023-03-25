export class Article{
  constructor({id, name, img}){
    this.id = id
    this.name = name
    this.img = img
  }
  
  buildArticle(){
    let card = document.createElement('li')
    card.className = 'pet-card'

    let div = document.createElement('div')
    div.className = 'pet-card__image'

    let img = document.createElement('img')
    img.className = 'pet-card-photo'
    img.src = this.img

    div.append(img)

    let sliderText = document.createElement('p')
    sliderText.className = 'pet-card__text'
    sliderText.textContent = this.name

    let button = document.createElement('button')
    button.className = 'pet-card__button button'
    button.textContent = 'Learn more'

    card.append(div, sliderText, button)
    card.setAttribute('data-id', this.id)
    return card
  }

}