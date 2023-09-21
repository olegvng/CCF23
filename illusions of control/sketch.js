//variable definition for the x and y position
//as well as the direction of x and y, and
//size of the shape
let x;
let y;
let xDir;
let yDir;
let size;
//variables to change background everytime ellipse hits an edge
let background1;
let background2;
let background3;
let randomsign;

function setup() {
  //creating the canvas, and setting variables with the values
  createCanvas(windowWidth, windowHeight);
  xDir = random(-10, 10);
  yDir = random(-10, 10);
  //randomize the shape every time
  size = random(50, 200);
  x = random(size, width - size);
  y = random(size, height - size);
  stroke(10);
  background1 = random(0,255);
  background2 = random(0,255);
  background3 = random(0,255);
  randomsign = random(0,2);
}

function draw() {
  //allowing user to have control of background by mouse
  background(background1, background2, background3, 50);
  ellipse(x, y, size, size + 50);
  //conditions when the ellipse hits right or left
  if (x >= width - size / 2 || x <= size / 2) {
    background1 = random(0,255);
    background2 = random(0,255);
    background3 = random(0,255);
    y = height / 2;
    x = height / 2;
    xDir = random(-10, 10);
    yDir = random(-10, 10);
    //changing the direction of ellipse to opposite when it hits the edge
    xDir *= -1;
    fill(random(0,255), random(0,255), random(0,255))
    ellipse(x, y, size, size + 50);
    background(0);
  }
  //condition when the ellipse hits bottom or top
  if (y >= height - size / 2 || y <= size / 2) {
    background1 = random(0,255);
    background2 = random(0,255);
    background3 = random(0,255);
    //changing the direction of ellipse to opposite when it hits the edge
    y = height / 2;
    x = height / 2;
    xDir = random(-10, 10);
    yDir = random(-10, 10);
    yDir *= -1;
    fill(random(0,255), random(0,255), random(0,255))
    ellipse(x,y, size, size + 50);
    background(0);
  }

  //movement of the ellipse
  x += xDir;
  y += yDir;
}



