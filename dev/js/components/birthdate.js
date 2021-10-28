export default class {
  constructor ( element, APP ) {
    this.element = element
    this.input = document.getElementById('birthdate')
    this.button = document.getElementById('getsign')
    this.template = document.getElementById('template')
    this.placeholder = document.getElementById('placeholder')
    this.data = APP.data.signs
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
      console.log(this.input.value);
      let result
      let info =  this.input.value;
      let digits = ('' + info).split('').filter(v => v !== '-').map((i) => Number(i));
      let calculation = digits.reduce((a, b) => a + b, 0);

      result = this.getResults(calculation);

      if (result > 9) {
        result = this.getResults(calculation);
      }

      this.render(result);
    })
  }

  render(entry) {
    let data = this.data[entry];
    let template = this.template.innerHTML;
    let render = MicroTemplate(template);

    this.placeholder.innerHTML = "";

    function MicroTemplate(template) {
      return new Function(
        "data",
        "var output=" +
        JSON.stringify(template)
        .replace(/{{ (.+?) }}/g, '"+($1)+"')
        .replace(/{%(.+?)%}/g, '";$1\noutput+="') +
        ";return output;"
      );
    }

    this.placeholder.innerHTML = render(data);
  }

  init ( ) {
    this.birthdate();
    this.getsign();
  }
}
