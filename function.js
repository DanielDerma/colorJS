// Variables...
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
var Case = 0;
  
// Funciones...
function getRandomRGB() { //depeniente random_pallet 1 
  var slotR = (Math.floor(Math.random() * (255 - 0 + 1)) + 0).toString();
  var slotG = (Math.floor(Math.random() * (255 - 0 + 1)) + 0).toString();
  var slotB = (Math.floor(Math.random() * (255 - 0 + 1)) + 0).toString();
  return `RGB(${slotR},${slotG},${slotB})`; 
}

function randomSelectColor() { //dependiente randomCaseColor 2
  return randomSelect = (Math.floor(Math.random() * (8 - 0 + 1)) + 0);
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
}

function randomCaseColor() {
  Case=0;
  switch(randomSelectColor()) {
    case 1:
      displayRgb.textContent = cuadro1.style.backgroundColor;
      Case = 1;
      break;
    case 2:
      displayRgb.textContent = cuadro2.style.backgroundColor;
      Case = 2;
      break;
    case 3:
      displayRgb.textContent = cuadro3.style.backgroundColor;
      Case = 3;
      break;
    case 4:
      displayRgb.textContent = cuadro4.style.backgroundColor;
      Case = 4;
      break;
    case 5:
      displayRgb.textContent = cuadro5.style.backgroundColor;
      Case = 5;
      break;
    case 6:
      displayRgb.textContent = cuadro6.style.backgroundColor;
      Case = 6;
      break;
    case 7:
      displayRgb.textContent = cuadro7.style.backgroundColor;
      Case = 7;
      break;
    case 8:
      displayRgb.textContent = cuadro8.style.backgroundColor;
      Case = 8;
      break;
    case 9:
      displayRgb.textContent = cuadro9.style.backgroundColor;
      Case = 9;
      break;
    default:
      alert('error');
  }
}

// Acciones...
cuadro1.addEventListener("click", function(){
  if (1 == Case) {
    displayRgb.textContent = 'i did 1';
  }
});

cuadro2.addEventListener("click", function(){
  if (2 == Case) {
    displayRgb.textContent = 'i did 2';
  }
});

cuadro3.addEventListener("click", function(){
  if (3 == Case) {
    displayRgb.textContent = 'i did 3';
  }
});

cuadro4.addEventListener("click", function(){
  if (4 == Case) {
    displayRgb.textContent = 'i did 4';
  }
});

cuadro5.addEventListener("click", function(){
  if (5 == Case) {
    displayRgb.textContent = 'i did 5';
  }
});

cuadro6.addEventListener("click", function(){
  if (6 == Case) {
    displayRgb.textContent = 'i did 6';
  }
});

cuadro7.addEventListener("click", function(){
  if (7 == Case) {
    displayRgb.textContent = 'i did 7';
  }
});

cuadro8.addEventListener("click", function(){
  if (8 == Case) {
    displayRgb.textContent = 'i did 8';
  }
});

cuadro9.addEventListener("click", function(){
  if (9 == Case) {
    displayRgb.textContent = 'i did 9';
  }
});

random_pallet();
randomCaseColor();

