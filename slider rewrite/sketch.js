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
  red_slide = createSlider(0, 255, 0);
  red_slide.position(10, 20);
  green_slide = createSlider(0, 255, 0);
  green_slide.position(10, 40);
  blue_slide = createSlider(0, 255, 0);
  blue_slide.position(10, 60);
}

function draw() {
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
  //setting to the slider color
  if((keyIsPressed)&(key == "s")){
    background(red_slide.value(), green_slide.value(), blue_slide.value());
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