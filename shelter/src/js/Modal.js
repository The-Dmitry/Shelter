export class Modal {
  constructor({
    id,
    name,
    img,
    type,
    breed,
    description,
    age,
    inoculations,
    diseases,
    parasites,
  }) {
    this.id = id;
    this.name = name;
    this.img = img;
    this.type = type;
    this.breed = breed;
    this.description = description;
    this.age = age;
    this.inoculations = inoculations;
    this.diseases = diseases;
    this.parasites = parasites;
  }

  buildModal() {
    const modal = this.generateElement("article", "modal");

    const modalImg = this.generateElement(
      "img",
      "modal__image",
      null,
      this.img
    );
    const modalContent = this.generateElement("div", "modal__content content");
    const button = this.generateElement("button", "modal__button");

    const name = this.generateElement("h3", "content__name", this.name);
    const type = this.generateElement(
      "h4",
      "content__type",
      `${this.type} - ${this.breed}`
    );
    const description = this.generateElement(
      "p",
      "content__description",
      this.description
    );

    const infoList = this.generateElement("ul", "content-list");
    infoList.innerHTML = this.buildList();

    modalContent.append(name, type, description, infoList);
    modal.append(modalImg, modalContent, button);
    return modal;
  }

  buildList() {
    const list = `<li class="content-list__item age"><span class="bold-text">Age: </span>${this.age}</li>
            <li class="content-list__item inoculations"><span class="bold-text">Inoculations: </span>${this.inoculations}</li>
            <li class="content-list__item diseases"><span class="bold-text">Diseases: </span>${this.inoculations}</li>
            <li class="content-list__item parasites"><span class="bold-text">Parasites: </span>${this.parasites}</li>`;
    return list;
  }

  generateElement(tag, className, text = null, img = null) {
    const element = document.createElement(tag);
    element.className = className;
    if (img) {
      element.src = img;
      element.alt = `pet-${this.name}`;
    }
    text && (element.textContent = text);
    return element;
  }
}
