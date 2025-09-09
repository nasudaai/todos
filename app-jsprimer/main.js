import { App } from "./src/app.js";

const app = new App();
console.log("main");

const formElement = document.querySelector("#js-form");
formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("test");
})
