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
      let info =  this.input.value;
      let digits = ('' + info).split('').filter(v => v !== '-').map((i) => Number(i));
      let calculation = digits.reduce((a, b) => a + b, 0);
      let result = (--calculation % 9);
      console.log(digits);
      console.log(calculation);
      console.log(result);
    })
  }

  init ( ) {
    this.birthdate();
    this.getsign();
  }
}
