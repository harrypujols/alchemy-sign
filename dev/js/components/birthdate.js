export default class {
  constructor ( element ) {
    this.element = element
    this.input = document.getElementById('birthdate')
  }

  birthdate() {
    this.input.addEventListener('change', ( event ) => {
      console.log(this.input.value);
      return this.input.value;
    })
  }

  init ( ) {
    this.birthdate();
  }
}
