export class Article{
  constructor({id, name, img}){
    // , type, breed, description, age, inoculations, diseases, parasites
    this.id = id
    this.name = name
    this.img = img
    // this.type = type
    // this.breed = breed
    // this.description = description
    // this.age = age
    // this.inoculations = inoculations
    // this.diseases = diseases
    // this.parasites = parasites
  }
  
  buildArticle(){
    let card = document.createElement('li')
    card.className = 'slider__item'

    let div = document.createElement('div')
    div.className = 'slider__image'

    let img = document.createElement('img')
    img.className = 'slider-photo'
    img.src = this.img

    div.append(img)

    let sliderText = document.createElement('p')
    sliderText.className = 'slider__text'
    sliderText.textContent = this.name

    let button = document.createElement('button')
    button.className = 'slider__button button'
    button.textContent = 'Learn more'

    card.append(div, sliderText, button)
    return card
  }
  

}