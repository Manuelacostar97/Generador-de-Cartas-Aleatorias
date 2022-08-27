/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pintaTop = document.querySelector("#pintaTop");
  let pintaBot = document.querySelector("#pintaBot");

  let pinta = ["♦", "♥", "♠", "♣"];
  let pintaIndex = Math.floor(Math.random() * pinta.length);
  pinta = pinta[pintaIndex];

  pintaTop.innerHTML = pinta;
  pintaBot.innerHTML = pinta;

  if (pinta === "♦" || pinta === "♥") {
    pintaTop.style.color = "red";
    pintaBot.style.color = "red";
  }
  if (pinta === "♠" || pinta === "♣") {
    pintaTop.style.color = "black";
    pintaBot.style.color = "black";
  }

  document.querySelector("#cardNum").innerHTML = onloadCard();
  function onloadCard() {
    let number = ["A", 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"];
    let numberIndex = Math.floor(Math.random() * number.length);
    return number[numberIndex];
  }
};
