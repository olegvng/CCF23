function setup() {
  createCanvas(800, 600);
}

function draw() {
  stroke(0)
  strokeWeight(0);
  background(0,0,50);

  fill(204,204,0);
  rect(0,350,800,300); 

  let y_coord = 0;

  //background
  stroke(0);
  for (let i = 0; i < 11; i++){
    let x_coord = 0;
    y_coord += 30;
    for (let j = 0; j < 50; j++){ 
      fill(255,255,255);
      ellipse(x_coord, y_coord, 20, 30);
      fill(0,0,50);
      ellipse(x_coord, y_coord, 18, 28);
      x_coord += 19;
    }
  }

  //background
  for (let i = 0; i < 11; i++){
    let x_coord = 0;
    y_coord += 30;
    for (let j = 0; j < 50; j++){ 
      fill(0,0,50);
      ellipse(x_coord, y_coord, 20, 30);
      fill(204,204,0);
      ellipse(x_coord, y_coord, 18, 28);
      x_coord += 19;
    }
  }

  //watermelon different layers
  fill(180, 0, 0);
  arc(400, 220, 400, 400, 0, PI, PI);

  fill(102, 0, 0);
  arc(400, 344, 295, 150, 0, PI, PI);

  fill(255, 255, 255);
  arc(400, 220, 350, 350, 0, PI, PI);

  fill(0,255,255);
  arc(400, 345, 240, 100, 0, PI, PI);



  //watermelon seeds
  fill(0,0,0);
  ellipse(260, 230, 7, 16);
  ellipse(300, 230, 10, 20);
  ellipse(340, 230, 10, 20);
  ellipse(380, 230, 7, 17);
  ellipse(420, 230, 10, 20);
  ellipse(460, 230, 9, 17);
  ellipse(500, 230, 10, 20);
  ellipse(540, 230, 8, 18);

  ellipse(280, 255, 8, 18);
  ellipse(320, 255, 10, 20);
  ellipse(360, 255, 7, 17);
  ellipse(400, 255, 10, 20);
  ellipse(440, 255, 8, 17);
  ellipse(480, 255, 10, 20);
  ellipse(520, 255, 8, 17);

  ellipse(300, 280, 9, 17);
  ellipse(340, 280, 10, 20);
  ellipse(380, 280, 8, 16);
  ellipse(420, 280, 12, 20);
  ellipse(460, 280, 10, 20);
  ellipse(500, 280, 7, 17);

  ellipse(320, 300, 7, 15);
  ellipse(360, 300, 10, 20);
  ellipse(400, 300, 8, 16);
  ellipse(440, 300, 10, 20);
  ellipse(480, 300, 8, 18);

  fill(0,0,0);
  rotate(0.2);
  ellipse(400, 450, 40, 70);
  stroke('black')
  strokeWeight(15)
  line(400, 450, 400, 370)

  strokeWeight(14)
  line(210, 400, 240, 400)
  line(210, 420, 300, 420)
  line(210, 440, 240, 440)
  line(240, 440, 240, 400)

  rotate(-0.6)

  //watermelon red marks
  fill(180, 0, 0);
  stroke(180,0,0);
  strokeWeight(12);
  point(400, 450);
  strokeWeight(8);
  point(250, 420);
  strokeWeight(10);
  point(300, 460);
  strokeWeight(7);
  point(200, 410);
  strokeWeight(12);
  point(150, 380);
  strokeWeight(10);
  point(160, 320);
  strokeWeight(10);
  point(360, 400);
  strokeWeight(10);
  point(370, 460);
  strokeWeight(10);
  point(300, 380);
  strokeWeight(10);
  point(200, 340);
  strokeWeight(10);
  point(300, 430);
  strokeWeight(10);
  point(250, 380);
  strokeWeight(10);
  point(270, 380);
  strokeWeight(10);
  point(300, 500);
  strokeWeight(10);
  point(280, 510);
  strokeWeight(10);
  point(210, 450);
  strokeWeight(10);
  point(260, 470);
  strokeWeight(10);
  point(220, 450);

  stroke('red');
  strokeWeight(14);
  rotate(0.8);
  line(210, 400, 240, 400);
  line(210, 420, 300, 420);
  line(210, 440, 240, 440);
  line(240, 440, 240, 400);

  rotate(PI +8.5);
  line(210, 700, 240, 700);
  line(210, 720, 300, 720);
  line(210, 740, 240, 740);
  line(240, 740, 240, 700);

  noStroke();
  fill(0,0,0)
  ellipse(400, 700, 60, 30);

  rotate(this.actualAngle);
  fill(0,255,255);
  triangle(300, 700, 380, 680, 380, 720);


};
