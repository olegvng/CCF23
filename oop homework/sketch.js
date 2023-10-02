//variables for the shape and background color;
let drawingShape;
//setting default background color to white
let backgroundColor = 255;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //creating new instance of DrawingShape object
  drawingShape = new DrawingShape();
}

function draw() {
  // Set the default background color white
  background(backgroundColor);

//checking what key is pressed to properly update the background color
//if q is clicked then we reset background color to white
  if (key === 'q' && keyIsPressed) {
    backgroundColor = 255; 
//if b is clicked then we set the background color to black
  } else if (key === 'b' && keyIsPressed) {
    backgroundColor = 0; 
//if r is clicked that we set background color to a random color
  } else if (key === 'r' && keyIsPressed) {
    backgroundColor = color(random(0, 255), random(0, 255), random(0, 255)); // Random background color
  }
  

//checking if the mouse is currently pressed, and if it is
//the we generate random new colors for the drawing shape,
//as well as update the position of mouseX and mouseY of our shape
  if (mouseIsPressed) {
    drawingShape.red = random(0, 255);
    drawingShape.green = random(0, 255);
    drawingShape.blue = random(0, 255);
    drawingShape.x_pos = mouseX;
    drawingShape.y_pos = mouseY;
    fill(drawingShape.red, drawingShape.green, drawingShape.blue);
    stroke(10);
    ellipse(drawingShape.x_pos, drawingShape.y_pos, drawingShape.x_pos / 5, drawingShape.y_pos / 5);
  }
}

//definition of our DrawingShpae class
class DrawingShape {
  //constructing our DrawingShape class with attributes
  //such as color and position of the shape
  constructor() {
    this.red = random(0, 255);
    this.green = random(0, 255);
    this.blue = random(0, 255);
    this.x_pos = mouseX;
    this.y_pos = mouseY;
  }
}