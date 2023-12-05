let options = ["rock","paper","scissors"];
let computer_score = 0;
let user_score = 0;
let computer_option = "";
let user_option = ""
function setup() {
  createCanvas(800, 600);
}

function draw() {
  if(computer_score < 3 && user_score < 3){
  background(64,220,150);
  textSize(36);
  fill(255);
  
  text("Rock Paper Scissors Game", 160, 50);
  text("Your score: " + user_score, 80, 150);
  text("Computer's score: " + computer_score, 380, 150);

  text("Make a decision: ", 250, 420);
  text("Computer's choice: " + computer_option, 100, 300);

  rock_button = createButton('Rock');
  rock_button.position(80, 450);
  rock_button.size(180,70)
  rock_button.mousePressed(rock_button_click);

  paper_button = createButton('Paper');
  paper_button.position(300, 450);
  paper_button.size(180,70);
  paper_button.mousePressed(paper_button_click);

  scissors_button = createButton('Scissors');
  scissors_button.position(520, 450);
  scissors_button.size(180,70);
  scissors_button.mousePressed(scissors_button_click);
  }
  else if (computer_score == 3){
    background(64,220,150);
    textSize(36);
    fill(255);
    text("Computer Won... Computer's choice was " + computer_option, 30, 200);
    scissors_button.hide();
    paper_button.hide();
    rock_button.hide();
  }
  else if(user_score == 3){
    background(64,220,150);
    textSize(36);
    fill(255);
    text("You won :) Computer's choice was " + computer_option, 30, 200);
    scissors_button.hide();
    paper_button.hide();
    rock_button.hide();
  }
 
}

function rock_button_click() {
  computer_option = random(options);
  if(computer_option == "paper"){
    computer_score += 1;
  }
  else if(computer_option == "scissors"){
    user_score += 1;
  }
  
}

function paper_button_click() {
  computer_option = random(options);
  if(computer_option == "scissors"){
    computer_score += 1;
  }
  else if(computer_option == "rock"){
    user_score += 1;
  }
}

function scissors_button_click() {
  computer_option = random(options);
  if(computer_option == "paper"){
    user_score += 1;
  }
  else if(computer_option == "rock"){
    computer_score += 1;
  }
}

