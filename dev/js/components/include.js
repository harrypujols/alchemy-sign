export default class {
  constructor(element, file) {
    this.element = element;
    this.file = file || this.element.dataset.file;
  }

  init() {
    fetch(this.file)
      .then((response) => response.text())
      .then((text) => {
        this.element.innerHTML = text;
      })
      .catch(console.error.bind(console));
  }
}
