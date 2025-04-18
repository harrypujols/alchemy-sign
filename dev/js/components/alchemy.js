import Include from "./include.js"; // Ensure you import the Include class

export default class {
  constructor(element, APP) {
    this.element = element;
    this.form = document.getElementById("alchemy-form");
    this.results = document.getElementById("alchemy-results");
    this.input = document.getElementById("input");
    this.button = document.getElementById("submit");
    this.template = document.getElementById("template");
    this.placeholder = document.getElementById("placeholder");
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
    // Check if the number is less than 10 and not divisible by 10
    // If it is, we can return it directly
    if (numbers % 10) {
      if (numbers > 9) {
        return this.sumDigits(numbers);
      }
      return numbers;
    }
    // If the number is divisible by 10, we need to check if the sum of its digits equals 1
    // If it does, return 1, otherwise return 0
    if (this.sumDigits(numbers) == 1) {
      return 1;
    }
    return 0;
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

      // Reinitialize Include.js for dynamically added elements
      const includeElements = this.placeholder.querySelectorAll(
        '[data-js="include"]'
      );
      includeElements.forEach((element) => {
        const includeInstance = new Include(element);
        includeInstance.init();
      });

      this.form.classList.add("hidden");
      this.reset.classList.remove("hidden");
      this.results.classList.remove("hidden");
    });
  }

  resetForm() {
    this.reset.addEventListener("click", (event) => {
      this.placeholder.innerHTML = "";
      this.results.classList.add("hidden");
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
