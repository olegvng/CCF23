function setup() {
  createCanvas(400, 400);
  background(180, 220, 220);
}

function draw() {
  stroke(0);
  //face 
  fill(255, 219, 172);
  ellipse(200, 200, 175, 225);
  //ears
  ellipse(108, 190, 20, 80);
  ellipse(288, 190, 20, 80);

  //eyes and pupils
  fill(255);
  ellipse(160, 150, 50, 30);
  ellipse(240, 150, 50, 30);
  fill(0);
  ellipse(170, 150, 20, 20);
  ellipse(250, 150, 20, 20);

  //nose
  fill(255, 219, 172);
  triangle(200, 165, 190, 210, 210, 210);

  //mouth
  fill(255,215,215);
  arc(200, 230, 100, 80, 0, PI);
  line(250, 230, 150, 230);

  //shirt
  fill(0, 102, 204);
  arc(200, 392, 160, 160, PI, TWO_PI);

  //hair
  stroke(110, 70, 45);
  fill(110, 70, 45);
  ellipse(200, 100, 120, 50);
  rotate(PI / 7);
  ellipse(175, 55, 20, 80);
  rotate(-PI / 3.8); 
  ellipse(200, 215, 20, 80);



}

