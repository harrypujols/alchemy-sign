export default class {
  constructor ( element, APP ) {
    this.element = element
    this.input = document.getElementById('birthdate')
    this.button = document.getElementById('getsign')
    this.template = document.getElementById('template')
    this.placeholder = document.getElementById('placeholder')
    this.data = APP.data.signs
    this.render = APP.methods.render
  }

  birthdate() {
    this.input.valueAsDate = new Date();
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
      let result
      let info =  this.input.value;
      let date = new Date(info.replace(/-/g, '/')).toDateString();
      let digits = ('' + info).split('').filter(v => v !== '-').map((i) => Number(i));
      let calculation = digits.reduce((a, b) => a + b, 0);

      result = this.getResults(calculation);

      if (result > 9) {
        result = this.getResults(calculation);
      }

      let data = this.data[result];
      let template = this.template.innerHTML;

      data['date'] = date;
      this.placeholder.innerHTML = this.render(data, template);
    })
  }

  init ( ) {
    this.birthdate();
    this.getsign();
  }
}
