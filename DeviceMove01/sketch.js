/*
referenced from
https://p5js.org/reference/#/p5/deviceMoved
*/
let value = 0;

function setup(){
createCanvas(400,400);
}
function draw() {
  noStroke();
  fill(value);
  rect(width/2, height/2, 250, 250);
}
function deviceMoved() {
  value = value + 5;
  if (value > 255) {
    value = 0;
  }
}