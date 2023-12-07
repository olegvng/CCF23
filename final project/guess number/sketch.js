let number_to_guess;
let attempts = 0;
let hint = "";

function setup() {
  createCanvas(800, 600);
  number_to_guess = floor(random(1, 100));
  user_input = createInput();
  user_input.position(width/2 - 100, 420);
  user_input.size(200,50);
  let button = createButton('Submit');
  user_input.style('font-size', '20px');
  button.size(150,50)
  button.position(width/2 - 70, 500);
  button.mousePressed(submitText);
}

function draw() {
  background(64,220,150);
  textSize(36);
  fill(255);
  textAlign(CENTER, CENTER);
  text("Guess the number from 1 to 100 range", width/2, 50);
  text("Attempts: " + attempts, width/2, 150);
  text(hint, width/2, 250);
}

function submitText() {
  let userText = user_input.value();
  if(userText < number_to_guess){
    hint = "your guess is too low";
    attempts += 1;
  }
  else if(userText > number_to_guess){
    hint = "your guess is too high";
    attempts += 1;
  }
  else{
    hint = "you guessed the right number";
  }
}