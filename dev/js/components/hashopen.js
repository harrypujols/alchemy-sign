export default class {
  constructor(element) {
    this.element = element;
  }

  openDetailsByHash() {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;
    const details = document.getElementById(hash);
    if (details && details.tagName.toLowerCase() === "details") {
      details.open = true;
    }
  }

  init() {
    this.openDetailsByHash();
  }
}
