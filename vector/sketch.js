function setup() {
  createCanvas(windowWidth, windowHeight);
  //creates random x and y direction vector
  ball_direction = createVector(random(-10, 10), random(-10, 10));
  //creates sizes of the ball
  size = random(50, 200);
  //creating position vector of the shape
  ball_position = createVector(random(size, width - size), random(size, height - size));
  noStroke();
}

function draw() {
  //creating the shape and updating postition of the shape
  background(255, 50);
  ellipse(ball_position.x, ball_position.y, size);
  shape = random(0,2)
  ball_position.add(ball_direction);
  //if statement if the with is touched
  //changes direction, size, and color
  if (ball_position.x >= width - size / 2 || ball_position.x <= size / 2) {
    ball_direction.x *= -1;
    size = random(50, 200);
    fill(random(0,255), random(0,255), random(0,255))
    if (shape == 1){
      ellipse(ball_position.x, ball_position.y, size);
    }
    else{
      rect(ball_position.x, ball_position.y, size, size);
    }
  }
  //if statement if the height is touched
  //changes direction, size, and color
  if (ball_position.y >= height - size / 2 || ball_position.y <= size / 2) {
    ball_direction.y *= -1;
    size = random(50, 200);
    fill(random(0,255), random(0,255), random(0,255))
    if (shape == 1){
      ellipse(ball_position.x, ball_position.y, size);
    }
    else{
      rect(ball_position.x, ball_position.y, size, size);
    }
  }
}