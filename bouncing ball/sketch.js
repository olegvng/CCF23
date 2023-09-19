let x, y;
let xDir, yDir; 
let size;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //creates random x and y direction
  xDir = random(-10, 10);
  yDir = random(-10, 10);
  //creates sizes of the ball
  size = random(50, 200);

  x = random(size, width - size);
  y = random(size, height - size);
  noStroke();
}

function draw() {
  //adds 
  background(255, 50);
  ellipse(x, y, size);
  //if statement if the with is touched
  //changes direction, size, and color
  if (x >= width - size / 2 || x <= size / 2) {
    xDir *= -1;
    size = random(50, 200);
    fill(random(0,255), random(0,255), random(0,255))
  }
  //if statement if the height is touched
  //changes direction, size, and color
  if (y >= height - size / 2 || y <= size / 2) {
    yDir *= -1;
    size = random(50, 200);
    fill(random(0,255), random(0,255), random(0,255))
  }

  //movement in both direction 
  x += xDir;
  y += yDir;
}