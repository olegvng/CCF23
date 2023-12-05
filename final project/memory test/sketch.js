let sequence = [];
let userInput = "";
let startTime;
let sequenceDisplayTime = 1000;
let user_score = 0;
let lost = false;

function setup() {
  createCanvas(800, 600);
  generateSequence();
  displaySequence();
  startTime = millis();
}

function draw() {
  background(64,220,150);
  text("Welcome to memory test game", 400, 100);
  if (millis() - startTime < sequenceDisplayTime) {
    textAlign(CENTER, CENTER);
    textSize(36);
    fill(0);
    text(sequence.join(" "), width / 2, height / 2);
  } else {
    textAlign(CENTER, CENTER);
    textSize(32);
    fill(0);
    text("Your guess: " + userInput, width / 2, height / 2 + 40);
    if (userInput.length === sequence.length) {
      if (userInput === sequence.join("")) {
        generateSequence();
        userInput = "";
        displaySequence();
        startTime = millis();
        user_score += 1;
      } else {
        fill(255, 0, 0);
        text("Incorrect! Try again.", width / 2, height / 2 + 80);
        userInput = "";
        lost = true;
      }
    }
  }
  if (lost == true){
    background(64,220,150);
      text("YOU LOST", 400, 100);
  }
}

function keyTyped() {
  if (millis() - startTime >= sequenceDisplayTime) {
    userInput += key;
  }
}

function generateSequence() {
  sequence.push(floor(random(10)));
}

function displaySequence() {
  startTime = millis();
}
