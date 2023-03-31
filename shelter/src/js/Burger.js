
export class Burger {
  constructor(bool, button){
    this.overlay = null
    this.menu = null
    this.page = bool
    this.active = false
    this.button = button
  }

  generateBurger() {
    const overlay = document.createElement('div')
    overlay.className = 'burger-overlay'

    const menu = document.createElement('ul')
    menu.classList = 'burger-menu'

    let menuItems

    if(this.page) {
      menuItems = `
      <li class="burger-menu__item">
          <a href="" class="burger-menu__link burger-menu__link_active">About the shelter</a>
        </li>
        <li class="burger-menu__item">
          <a href="./pets.html" class="burger-menu__link">Our pets</a>
        </li>
        <li class="burger-menu__item">
          <a href="#help" class="burger-menu__link">Help the shelter</a>
        </li>
        <li class="burger-menu__item">
          <a href="#footer" class="burger-menu__link">Contacts</a>
        </li>`
    } else {
      menuItems = `
      <li class="burger-menu__item">
          <a href="./main.html" class="burger-menu__link">About the shelter</a>
        </li>
        <li class="burger-menu__item">
          <a href="#" class="burger-menu__link  burger-menu__link_active">Our pets</a>
        </li>
        <li class="burger-menu__item">
          <a href="./main.html#help" class="burger-menu__link">Help the shelter</a>
        </li>
        <li class="burger-menu__item">
          <a href="#footer" class="burger-menu__link">Contacts</a>
        </li>
      `
    }
    menu.innerHTML = menuItems
    this.menu = menu
    overlay.append(menu)
    this.overlay = overlay
    
    return overlay
  }

  openBurger() {
    this.active = true
    document.body.append(this.generateBurger())
    let that = this
    this.overlay.addEventListener('click', function(e){
      if(!e.target.closest('.burger-menu') || e.target.closest('.burger-menu__item')) {
        that.closeBurger()  
      }
    })
    document.body.classList.toggle('body-locked')
    this.button.classList.add('burger_active')
    this.button.disabled = true
    setTimeout(()=> {
      this.menu.classList.add('burger-menu_active')
      this.button.disabled = false
    }, 300)
  }

  closeBurger() {
    this.active = false
    this.menu.classList.remove('burger-menu_active')
    document.body.classList.toggle('body-locked')
    this.button.classList.remove('burger_active')
    this.button.disabled = true
    setTimeout(()=> {
      this.overlay.remove()
      this.button.disabled = false
    }, 300)
  }

  toggleBurger() {
    if(!this.active) {
      this.openBurger()
    } else {
      this.closeBurger()
    }
  }
}