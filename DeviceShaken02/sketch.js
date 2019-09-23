//referenced from Dan Shiffman teaching e xmaple 
// https://github.com/shiffman/p5_mobile/blob/gh-pages/05_deviceShaken_color/sketch.js
//expanded upon  for GSA teaching 

// Take a look at the HTML file where some things have been
// added for mobile viewing

//every shake a random colour 
var allImages = []; //notice in an image array we no longer need  to define PImage type like in processing. Not data ttype in js. 
var totalImages = 11; //how many image in the array?
var index = 0; //global declare to display first image. 


function preload() {
  // Populate the array with images!
  for (var i = 0; i < totalImages; i++) {

    // .length is a property of an array meaning 'how many elements does it have?'
    //alternate method.  
    // for (var i = 0; i < allImages.length; i++) {
    allImages[i] = loadImage(i + ".png"); // all images must be in sequence and named 0.jpg, 1.jpg, 2.jpg, etc.

  }
}


function setup() {
  createCanvas(windowWidth, windowWidth);
  setShakeThreshold(50);
  colorMode(HSB);
  background(0);

}

function draw() {

  image(allImages[index], 0, 0, width, height);
}

function deviceShaken() {
  index = round(random(10)); //remember to round in js. otherwise its a floating number. 

  //background(h, 255, 255);

  textSize(50);
  text(index, width / 2, height / 2);
}