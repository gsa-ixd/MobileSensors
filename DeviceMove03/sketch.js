/*
referenced from
https://p5js.org/reference/#/p5/deviceMoved
*/
let value = 0;
let image1;
let image2;
let fade=0;
function preload() {
  image1 = loadImage('0.jpg');
  image2 = loadImage('1.jpg');

}


function setup() {
  createCanvas(400, 400);
}

function draw() {
  noStroke();
  background(value);
  value = constrain(value - 2, 0, 255) //make value count down to use to detect moevemnt. 

  //rect(width/2, height/2, 250, 250);
  fill(255, 0, 0);
  textAlign(CENTER, CENTER);
  textSize(50);
  text(value, width / 2, height / 2);


  fade = value;
  tint(255, 255);
  image(image1,0,0, width, height);
  tint(255, fade);
  image(image2, 0,0,width, height);
}

//try keep moving it to see it start counting from 255 again. 
function deviceMoved() {
  value = value + 5;
  value = constrain(value + 5, 0, 255); //constrain for the bg colour values
}