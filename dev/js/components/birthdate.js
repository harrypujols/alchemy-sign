export default class {
  constructor ( element ) {
    this.element = element
  }

  birthdate() {
    this.element.addEventListener('change', ( event ) => {
      console.log(this.element.value);
      return this.element.value;
    })
  }

  init ( ) {
    this.birthdate();
  }
}
