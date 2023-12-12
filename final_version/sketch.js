
let current_game = 0;
let options = ["rock","paper","scissors"];
let computer_score = 0;
let user_score = 0;
let computer_option = "";
let user_option = ""
let size_balloon;
let pop_number;
let score = 0;
let sequence = [];
let userInput = "";
let startTime;
let sequenceDisplayTime = 1000;
let user_score1 = 0;
let lost = false;
let number_to_guess;
let attempts = 0;
let hint = "";
let check = 1000;
let red_color = 50;
let green_color = 220;
let blue_color = 220;
let questions = ["What is the name of the largest ocean on Earth?",
"Which planet is known as the Blue Planet?","In which year did the Titanic sink?",
"What year was the very first model of the iPhone released?", "What year was NYU founded?"];
let answers = ["Pacific Ocean", "Earth", 1945, 2007, 1831];
let question_num;
let message_to_user = ""

function setup() {
  createCanvas(800, 600);
  size_balloon = 50;
  pop_number = floor(random(100, 400));
  number_to_guess = floor(random(1, 100));
  user_input_num = createInput();
  next_game_button = createButton('Next Game');
  start_button = createButton('Start');
  rock_button = createButton('Rock');
  paper_button = createButton('Paper');
  scissors_button = createButton('Scissors');
  ball_risk_game_button = createButton('No more risk!')
  button = createButton('Submit');
  user_answer = createInput();
  answer_button = createButton('Submit');
  question_num = floor(random(0,5));
}

function preload() {
  mini_games_img = loadImage('mini_games.png');
  ball_risk_img = loadImage('rock_paper_scissors.png');
  popped_img = loadImage('popped.png');
  memory_test_img = loadImage('memory_test.png');
  guess_img = loadImage('guess.png');
  trivia_img = loadImage('trivia.png');
}

function draw() {
  background(64,220,150);
  textSize(36);
  fill(255);
  image(mini_games_img, 0, 0, width, height);
  text("welcome to mini games!!!", 200, 50);
  text("click start to begin", 260, 100);
  start_button.position(300, 460);
  start_button.size(180,70);
  start_button.mousePressed(startGame);
  if(current_game == 1){
    if(computer_score < 3 && user_score < 3){
      background(red_color,green_color,blue_color);
      textSize(36);
      fill(0);
      
      text("Rock Paper Scissors Game", 160, 50);
      text("Your score: " + user_score, 80, 150);
      text("Computer's score: " + computer_score, 380, 150);
    
      text("Make a decision: ", 250, 420);
      text("Computer's choice: " + computer_option, 100, 300);
    
      //rock_button = createButton('Rock');
      rock_button.position(80, 450);
      rock_button.size(180,70)
      rock_button.mousePressed(rock_button_click);
    
      //paper_button = createButton('Paper');
      paper_button.position(300, 450);
      paper_button.size(180,70);
      paper_button.mousePressed(paper_button_click);
    
      //scissors_button = createButton('Scissors');
      scissors_button.position(520, 450);
      scissors_button.size(180,70);
      scissors_button.mousePressed(scissors_button_click);
      }
      else if (computer_score == 3){
        background(64,220,150);
        textSize(36);
        fill(255);
        text("Computer Won... Computer's choice was " + computer_option, 30, 200);
        scissors_button.remove();
        paper_button.remove();
        rock_button.remove();
        next_game_button.position(300, 450);
        next_game_button.size(180,70);
        next_game_button.mousePressed(nextGame);
        //current_game += 1;
      }
      else if(user_score == 3){
        background(64,220,150);
        textSize(36);
        fill(255);
        text("You won :) Computer's choice was " + computer_option, 30, 200);
        scissors_button.remove();
        paper_button.remove();
        rock_button.remove();
        next_game_button.position(300, 450);
        next_game_button.size(180,70);
        next_game_button.mousePressed(nextGame);
        //current_game += 1;
      }
  }
  if(current_game == 2){
    if (size_balloon != pop_number){
      background(64,220,150);
      image(ball_risk_img, 0, 0, width, height);
      textSize(36);
      fill(255);
      text("Balloon Risk Game", 160, 50);
      text("Score: " + score, 150, 120);
      fill(255, 0, 0);
      noStroke(); 
      ellipse(width / 2, height / 2, size_balloon, size_balloon);
      ball_risk_game_button.position(300, 450);
          ball_risk_game_button.size(180,70);
          ball_risk_game_button.mousePressed(noRiskStop); 
      if (mouseIsPressed && isMouseInsideEllipse(width / 2, height / 2, 100, 80)) {
        size_balloon += 1;  
        score = size_balloon / 10;
      }
    }
      else if(size_balloon == pop_number){
          background(64,220,150);
          image(popped_img, 0, 0, width, height);
          textSize(36);
          fill(255);
          text("YOU LOST", 160, 50); 
          text("you were too risky today", 30, 100); 
          ball_risk_game_button.mousePressed(noRiskStop); 
      }
  }
  if(current_game == 3){
    background(64,220,150);
    image(memory_test_img, 0, 0, width, height);
    text("Welcome to memory test game", 400, 70);
  if (millis() - startTime < sequenceDisplayTime) {
    textAlign(CENTER, CENTER);
    textSize(38);
    //fill(0);
    text(sequence.join(" "), width / 2, height / 2);
  } else {
    textAlign(CENTER, CENTER);
    textSize(38);
    //fill(0);
    text("Your guess: " + userInput, width / 2, height / 2 + 40);
    if (userInput.length === sequence.length) {
      if (userInput === sequence.join("")) {
        generateSequence();
        userInput = "";
        displaySequence();
        startTime = millis();
        user_score1 += 1;
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
      current_game += 1;
  }
  }
  if(current_game == 4){
    background(64,220,150);
    image(guess_img, 0, 0, width, height);
    user_input_num.position(width/2 - 100, 420);
    user_input_num.size(200,50);
    user_input_num.style('font-size', '20px');
    button.size(150,50)
    button.position(width/2 - 70, 500);
    button.mousePressed(submitText);
    textSize(40);
    fill(255);
    textAlign(CENTER, CENTER);
    text("Guess the number from 1 to 100 range", width/2, 80);
    textSize(50);
    text("Attempts: " + attempts, width/2, 250);
    text(hint, width/2, 350);
  }
  if(current_game == 5){
    background(64,220,150);
    image(trivia_img, 0, 0, width, height);
    textSize(36);
    fill(255);
    textAlign(CENTER, CENTER);
    text("Welcome to TRIVIA!! ", width/2, 50);
    text(questions[question_num], width/2, 150);
    text(message_to_user, width/2, 250);
    user_answer.position(width/2 - 100, 420);
    user_answer.size(200,50);
    console.log(questions[question_num]);
    button.mousePressed(submitAnswer);
  }
  if(current_game == 6){
    background(64,220,150);
    text("Thank you for playing mini games", width/2, 50);
    user_input_num.remove();
    button.remove();
  }
}

function startGame(){
  current_game += 1
  start_button.hide();
}

function nextGame(){
  current_game += 1;
  computer_score = 0
  user_score = 0;
  next_game_button.remove();
}

function noRiskStop(){
  current_game += 1;
  ball_risk_game_button.remove()
}

function rock_button_click() {
  computer_option = random(options);
  if(computer_option == "paper"){
    computer_score += 1;
    red_color = 255;
    green_color = 51;
    blue_color = 51;
  }
  else if(computer_option == "scissors"){
    user_score += 1;
    red_color = 64;
    green_color = 220;
    blue_color = 150;
  }
  else if(computer_option == "rock"){
    red_color = 255;
    green_color = 255;
    blue_color = 20;
  }
  
}

function paper_button_click() {
  computer_option = random(options);
  if(computer_option == "scissors"){
    computer_score += 1;
    red_color = 255;
    green_color = 51;
    blue_color = 51;
  }
  else if(computer_option == "rock"){
    user_score += 1;
    red_color = 64;
    green_color = 220;
    blue_color = 150;
  }
  else if(computer_option == "paper"){
    red_color = 255;
    green_color = 255;
    blue_color = 20;
  }
}

function scissors_button_click() {
  computer_option = random(options);
  if(computer_option == "paper"){
    user_score += 1;
    red_color = 64;
    green_color = 220;
    blue_color = 150;
  }
  else if(computer_option == "rock"){
    computer_score += 1;
    red_color = 255;
    green_color = 51;
    blue_color = 51;
  }
  else if(computer_option == "scissors"){
    red_color = 255;
    green_color = 255;
    blue_color = 20;
  }
}


function isMouseInsideEllipse(x, y, w, h) {
  let d = dist(mouseX, mouseY, x, y);
  return d < w / 2 && d < h / 2;
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



function submitText() {
  let userText = user_input_num.value();
  console.log(number_to_guess);
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
    current_game += 1;
  }
}

function submitAnswer() {
  let userText = user_answer.value();
  if (userText == answers[question_num]){
    message_to_user = "This is correct!!"
    question_num = floor(random(0,5));
    text(questions[question_num], width/2, 150);
  }
  else{
    message_to_user = "Incorrect, try again";
  }
}