import { Modal } from "./Modal"
import petsList from "./pets"

export function showModal(e) {
  const overlay = document.createElement('div')
  overlay.className = 'overlay'
  if(e.target.closest('.pet-card')){
    const objectId = +e.target.closest('.pet-card').getAttribute('data-id')
    const object = petsList.find(el => el.id === objectId)
    const result = new Modal(object).buildModal()
    overlay.append(result)
    document.body.append(overlay)
    document.body.classList.add('body-locked')
    overlay.addEventListener('click', function(event){
      if(!event.target.closest('.modal') || event.target.closest('.modal__button')) {
        this.remove()
        document.body.classList.remove('body-locked')
      }
    })
  }
}