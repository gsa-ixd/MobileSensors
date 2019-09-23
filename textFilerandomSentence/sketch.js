/*
In P5 loadStrings automatically creates an array of text. Automatically detecting a new line and putting each new line into an index of the array

no need to splitTokens, join() or create arrays. 
*/
var results;
var numSentence = 5;
var index = 0;


function preload() {
  results = loadStrings('test.txt'); //load txt file
  //nothing else in here
}

function setup() {
  createCanvas(400, 400);
  //view the text automatically put into an array
    console.log(results);


}

function draw() {
  background(220);
  textAlign(CENTER,CENTER);
  textSize(32);
  text(results[index], width / 2, height / 2);

}

//change this for another mobile event -eg: deviceShaken?
function mousePressed() {
  index = round(random(numSentence));

}