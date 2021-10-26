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
    function sumdigits(numbers) {
      return numbers.toString().split('').map(Number).reduce(function (a, b) {return a + b;}, 0);
    }

    function geresults(numbers) {
      if (numbers % 10) {
        if (numbers > 10) {
          return sumdigits(numbers);
  
        } else {
          return numbers;
        }

      } else {
        return 0;
      }
    }

    this.button.addEventListener('click', ( event ) => {
      console.log(this.input.value);
      let result
      let info =  this.input.value;
      let digits = ('' + info).split('').filter(v => v !== '-').map((i) => Number(i));
      let calculation = digits.reduce((a, b) => a + b, 0);
      
      console.log(digits);
      console.log(calculation);

      result = geresults(calculation);

      if (result > 9) {
        result = geresults(calculation);
      }

      console.log(result);
    })
  }

  init ( ) {
    this.birthdate();
    this.getsign();
  }
}
