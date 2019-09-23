//referenced from Dan Shiffman teaching e xmaple 
// https://github.com/shiffman/p5_mobile/blob/gh-pages/05_deviceShaken_color/sketch.js
// ICM-2015

// Take a look at the HTML file where some things have been
// added for mobile viewing

//every shake a random colour 

function setup() {
  createCanvas(windowWidth, windowWidth);
  setShakeThreshold(50);
  colorMode(HSB);
  background(0);
}


function deviceShaken() {
  var h = random(255);
  background(h, 255, 255);
}