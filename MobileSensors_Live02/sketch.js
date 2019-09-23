//referenced from Dan Shiffman teaching e xmaple 
// https://github.com/shiffman/p5_mobile/blob/gh-pages/05_deviceShaken_color/sketch.js
// ICM-2015

// Take a look at the HTML file where some things have been
// added for mobile viewing

//every shake a random colour 

var allImages =[];
var totalImages = 5;
var index =0;
function preload(){
for(var i =0; i<totalImages;i ++){
allImages[i]=loadImage(i + ".png");//make sure image type is png or change to jpg. 
  
  
}

}

function setup() {
  createCanvas(windowWidth, windowWidth);
  setShakeThreshold(50);
  colorMode(HSB);
  background(0);
}

function draw(){
image(allImages[index],0,0,width,height);
}

function deviceShaken() {
  // var h = random(255);
  // background(h, 255, 255);
  
  index =round(random(totalImages-1));
  textSize(42);
  text(index,width/2,height/2);
}