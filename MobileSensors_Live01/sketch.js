// Run this example on a mobile device
// Move the device around
// to change the value.

let value = 0;
let image1;
let image2;

function preload() {
  image1 = loadImage('0.png');
  image2 = loadImage('1.png');
}


function setup() {
  createCanvas(400, 400);

}

function draw() {
  // fill(value);
  // rect(25, 25, 50, 50);
  background(value);
  //value = constrain(value - 2, 0, 255); //make the value decrease and use  this to detect movement. 
  fill(255, 0, 0);
  textAlign(CENTER, CENTER);
  textSize(50);
  text(value, width / 2, 100); //visulaise the changing variable

  // if (value > 10) {
  //   //I've moved do something...
  //   text("I'M MOVING", width / 2, height / 2);
  // } else {
  //   //I am still
  //   text("I'M STILL", width / 2, height / 2);
  // }
  tint(255, 255);
  image(image1, 0, 0, width, height);
  tint(255,value);
  image(image2, 0, 0, width, height);
}

function deviceTurned() {
  if (value === 0) {
    value = 255;
  } else if (value === 255) {
    value = 0;
  }
}