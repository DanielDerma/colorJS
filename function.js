var cuadro1 = document.querySelectorAll(".col-lg-3")[0];
var cuadro2 = document.querySelectorAll(".col-lg-3")[1];
var cuadro3 = document.querySelectorAll(".col-lg-3")[2];
var cuadro4 = document.querySelectorAll(".col-lg-3")[3];
var cuadro5 = document.querySelectorAll(".col-lg-3")[4];
var cuadro6 = document.querySelectorAll(".col-lg-3")[5];
var cuadro7 = document.querySelectorAll(".col-lg-3")[6];
var cuadro8 = document.querySelectorAll(".col-lg-3")[7];
var cuadro9 = document.querySelectorAll(".col-lg-3")[8];
var displayRgb = document.querySelector(".displayRgb");


function getRandomRGB() {
  min = 0;
  max = 255;
  var slotR = (Math.floor(Math.random() * (max - min + 1)) + min).toString();
  var slotG = (Math.floor(Math.random() * (max - min + 1)) + min).toString();
  var slotB = (Math.floor(Math.random() * (max - min + 1)) + min).toString();
  return `rgb(${slotR},${slotG},${slotB})`; 
}
function random_pallet() {
  cuadro1.style.backgroundColor = getRandomRGB();
  cuadro2.style.backgroundColor = getRandomRGB();
  cuadro3.style.backgroundColor = getRandomRGB();
  cuadro4.style.backgroundColor = getRandomRGB();
  cuadro5.style.backgroundColor = getRandomRGB();
  cuadro6.style.backgroundColor = getRandomRGB();
  cuadro7.style.backgroundColor = getRandomRGB();
  cuadro8.style.backgroundColor = getRandomRGB();
  cuadro9.style.backgroundColor = getRandomRGB();
  displayRgb.textContent = getRandomRGB();
}