import CardGame from "./src/components/CardGame/index.js";

const $root = document.querySelector("#root");

const $htmlCardGame =  CardGame();

$root.insertAdjacentHTML("beforeend", $htmlCardGame)