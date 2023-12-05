let size_balloon;
let pop_number;

function setup() {
  createCanvas(800, 600);
  size_balloon = 50;
  pop_number = floor(random(100, 400));
}

function draw() {
  if (size_balloon != pop_number){
  background(64,220,150);
  textSize(36);
  fill(255);
  text("Balloon Risk Game", 160, 50);
  fill(255, 0, 0);
  noStroke(); 
  ellipse(width / 2, height / 2, size_balloon, size_balloon);
  if (mouseIsPressed && isMouseInsideEllipse(width / 2, height / 2, 100, 80)) {
    size_balloon += 1;  
    console.log(pop_number);
    console.log(size_balloon);
  }
}
  else if(size_balloon == pop_number){
    background(64,220,150);
    textSize(36);
    fill(255);
    text("YOU LOST", 160, 50);
  }
}


function isMouseInsideEllipse(x, y, w, h) {
  let d = dist(mouseX, mouseY, x, y);
  return d < w / 2 && d < h / 2;
}