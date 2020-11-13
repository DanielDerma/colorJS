// Variables...
var displayRgb = document.querySelector(".displayRgb");
var newColor = document.querySelector("h3.new");
var easy = document.querySelector("h3.easy");
var hard = document.querySelector("h3.hard");
var Case = 0;

// Funciones...
function getRandomRGB() { //depeniente randomPallet 1 
  var slotR = (Math.floor(Math.random() * (255 - 0 + 1)) + 0).toString();
  var slotG = (Math.floor(Math.random() * (255 - 0 + 1)) + 0).toString();
  var slotB = (Math.floor(Math.random() * (255 - 0 + 1)) + 0).toString();
  return `RGB(${slotR},${slotG},${slotB})`; 
}

function randomSelectColor() { //dependiente randomCaseColorHard 2
  return randomSelect = (Math.floor(Math.random() * (8 - 0 + 1)) + 0);
}


// Variables Discriminativas
function variablesHard() {
  var cuadro1 = document.querySelectorAll(".col-lg-3")[0]; 
  var cuadro2 = document.querySelectorAll(".col-lg-3")[1];
  var cuadro3 = document.querySelectorAll(".col-lg-3")[2];
  var cuadro4 = document.querySelectorAll(".col-lg-3")[3];
  var cuadro5 = document.querySelectorAll(".col-lg-3")[4];
  var cuadro6 = document.querySelectorAll(".col-lg-3")[5];  
}
// function variablesEasy() {
// }
var cuadro1 = document.querySelectorAll(".col-lg-3")[0]; 
var cuadro2 = document.querySelectorAll(".col-lg-3")[1];
var cuadro3 = document.querySelectorAll(".col-lg-3")[2]; 

// Funciones Discriminativas

function randomPalletHard() { 
  cuadro1.style.backgroundColor = getRandomRGB();
  cuadro2.style.backgroundColor = getRandomRGB();
  cuadro3.style.backgroundColor = getRandomRGB();
  cuadro4.style.backgroundColor = getRandomRGB();
  cuadro5.style.backgroundColor = getRandomRGB();
  cuadro6.style.backgroundColor = getRandomRGB();

}

function randomPalletEasy() { 
  cuadro1.style.backgroundColor = getRandomRGB();
  cuadro2.style.backgroundColor = getRandomRGB();
  cuadro3.style.backgroundColor = getRandomRGB();
}

function randomCaseColorHard() {
  // Case=0;
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
    default:
      // pass
  }
}
function randomCaseColorEasy() {
  // Case=0;
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
    default:
      // pass
  }
}

// Acciones navbar... 
newColor.addEventListener("click", function(){
  run(); //Hard
});
easy.addEventListener("click", function(){

});
hard.addEventListener("click", function(){
  run(); //Hard
});

// Acciones discriminativas
function accionHard() {
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

}

function accionEasy() {
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

}


function run() { //Hard
  randomPallet(); //Hard
  randomCaseColorHard(); //Hard
}


