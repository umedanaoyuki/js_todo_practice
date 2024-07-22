console.log("App.js: loaded");

export class App {
  mount() {
    // form
    const formElement = document.querySelector("#js-form");

    // input
    const inputElement = document.querySelector("#js-form-input");

    formElement.addEventListener("submit", (event) => {
      event.preventDefault();
      console.log(`入力欄の値：${inputElement.value}`);
    });
  }
}
