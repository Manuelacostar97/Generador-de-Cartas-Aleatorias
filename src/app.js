/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pinta = ["♦", "♥", "♠", "♣"];
  let pintaIndex = Math.floor(Math.random() * pinta.length);
  pinta = pinta[pintaIndex];
  document.querySelector("#pintaTop").innerHTML = pinta;
  document.querySelector("#pintaBot").innerHTML = pinta;

  let color = ["red", "black"];
  let colorIndex = Math.floor(Math.random() * color.length);
  color = color[colorIndex];
  document.querySelector("#pintaTop").style.color = color;
  document.querySelector("#pintaBot").style.color = color;

  document.querySelector("#cardNum").innerHTML = onloadCard();
  function onloadCard() {
    let number = ["A", 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"];
    let numberIndex = Math.floor(Math.random() * number.length);
    return number[numberIndex];
  }
};
//test
