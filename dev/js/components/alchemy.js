export default class {
  constructor(element, APP) {
    this.element = element;
    this.form = document.getElementById("alchemy-form");
    this.input = document.getElementById("input");
    this.button = document.getElementById("submit");
    this.template = document.getElementById("template");
    this.placeholder = document.getElementById("placeholder");
    // this.svg = document.getElementById('alchemy-wheel')
    this.reset = document.getElementById("reset");
    this.data = APP.data.signs;
    this.render = APP.methods.render;
  }

  birthdate() {
    this.input.valueAsDate = new Date();
  }

  sumDigits(numbers) {
    return numbers
      .toString()
      .split("")
      .map(Number)
      .reduce(function (a, b) {
        return a + b;
      }, 0);
  }

  getResults(numbers) {
    if (numbers % 10) {
      if (numbers > 9) {
        return this.sumDigits(numbers);
      }
      return numbers;
    } else {
      return 0;
    }
  }

  getsign() {
    this.button.addEventListener("click", (event) => {
      let info = this.input.value;
      let date = new Date(info.replace(/-/g, "/")).toDateString();
      let digits = ("" + info)
        .split("")
        .filter((v) => v !== "-")
        .map((i) => Number(i));
      let calculation = digits.reduce((a, b) => a + b, 0);
      let result = this.getResults(calculation);

      if (result > 9) {
        result = this.getResults(result);
      }

      let content = this.data[result];
      content["date"] = date;

      this.placeholder.innerHTML = this.render({
        data: content,
        template: this.template.innerHTML,
      });

      // this.svg.classList = "";
      // this.svg.classList.add(content['element'], 'alchemy-wheel');
      this.form.classList.add("hidden");
      this.reset.classList.remove("hidden");
    });
  }

  resetForm() {
    this.reset.addEventListener("click", (event) => {
      this.placeholder.innerHTML = "";
      this.form.classList.remove("hidden");
      this.reset.classList.add("hidden");
    });
  }

  init() {
    this.birthdate();
    this.getsign();
    this.resetForm();
  }
}
