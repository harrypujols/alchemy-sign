export default class {
  constructor ( element, APP ) {
    this.element = element
    this.input = document.getElementById('birthdate')
    this.button = document.getElementById('getsign')
    this.template = document.getElementById('template')
    this.placeholder = document.getElementById('placeholder')
    this.data = APP.data
  }

  birthdate() {
    this.input.valueAsDate = new Date();

    this.input.addEventListener('change', ( event ) => {
      this.input.value = event.target.value;
      console.log(this.input.value);
    })
  }

  sumDigits(numbers) {
    return numbers.toString().split('').map(Number).reduce(function (a, b) {return a + b;}, 0);
  }

  getResults(numbers) {
    if (numbers % 10) {
      if (numbers > 10) {
        return this.sumDigits(numbers);

      } else {
        return numbers;
      }

    } else {
      return 0;
    }
  }

  getsign() {
    this.button.addEventListener('click', ( event ) => {
      console.log(this.input.value);
      let result
      let info =  this.input.value;
      let digits = ('' + info).split('').filter(v => v !== '-').map((i) => Number(i));
      let calculation = digits.reduce((a, b) => a + b, 0);
      
      console.log(digits);
      console.log(calculation);

      result = this.getResults(calculation);

      if (result > 9) {
        result = this.getResults(calculation);
      }

      console.log(result);
      this.render(result);
    })
  }

  render(entry) {
    let clone = this.template.content.cloneNode(true);
    let slots = clone.querySelectorAll('[slot]');
    let sign = this.data.signs[entry];

    this.placeholder.innerHTML = "";

    for (let [key, value] of Object.entries(sign)) {
      slots.forEach((item) => {
        if (key == item.slot) {
          item.innerHTML = value;
        }
      });
    }

    this.placeholder.appendChild(clone);
  }

  init ( ) {
    this.birthdate();
    this.getsign();
  }
}
