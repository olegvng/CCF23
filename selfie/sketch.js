function setup() {
  createCanvas(400, 400);
  background(180, 220, 220);
}

function draw() {
  fill(255, 219, 172);
  ellipse(200, 200, 175, 225);

  fill(255);
  ellipse(160, 150, 50, 30);
  ellipse(240, 150, 50, 30);

  fill(0);
  ellipse(170, 150, 20, 20);
  ellipse(250, 150, 20, 20);

  fill(255, 219, 172);
  triangle(200, 165, 190, 210, 210, 210);

  fill(255,215,215);
  arc(200, 230, 100, 80, 0, PI);
  line(250, 230, 150, 230);

  stroke(51, 25, 0);
  strokeWeight(2); 
  for (let i = 150; i <= 190; i += 2.5) {
    line(190, i - 80, 290, i - 30);
  }

  for (let i = 150; i <= 190; i += 2.5) {
    line(110, i - 35, 190, i - 80);
  }

  fill(0, 102, 204);
  arc(200, 392, 160, 160, PI, TWO_PI);

}

