export default class {
  constructor ( element ) {
    this.element = element
    this.input = document.getElementById('birthdate')
    this.button = document.getElementById('getsign')
  }

  birthdate() {
    var result
    this.input.valueAsDate = new Date();

    this.input.addEventListener('change', ( event ) => {
      this.input.value = event.target.value;
      console.log(this.input.value);
    })
  }

  getsign() {
    this.button.addEventListener('click', ( event ) => {
      console.log(this.input.value);
      console.log('clicked');
    })
  }

  init ( ) {
    this.birthdate();
    this.getsign();
  }
}
