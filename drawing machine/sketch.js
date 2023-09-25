//defining variables to generate random colors
//when the mouse is pressed
let red;
let blue;
let green;

function setup() {
  red = random(0,255);
  green = random(0,255);
  blue = random(0,255);
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  console.log(red);
  //making background white when q is pressed
  if((keyIsPressed)&(key == "q")){
    background(255);
  }
  //making background black when b is pressed
  if((keyIsPressed)&(key == "b")){
    background(0);
  }
  //randomizing the background when r is pressed
  if((keyIsPressed)&(key == "r")){
    background(red, green, blue);
  }

  //when the mouse is pressed we are generating random rgb color
  //and drawing an ellipse of that color
  if(mouseIsPressed){
    red = random(0,255);
    green = random(0,255);
    blue = random(0,255);
    fill(red, green, blue);
    stroke(10);
    ellipse(mouseX, mouseY, mouseX/5, mouseY/5);
  }
}
