
//defining variables to store which game is currently played
let current_game = 0;
//variable to store all the options for rock paper scissors game
let options = ["rock","paper","scissors"];
//variable for computers score in rock paper scissors game
let computer_score = 0;
//variable for users score in rock paper scissors game
let user_score = 0;
//variable to store computers option for rock paper scissors
let computer_option = "";
//variable to store users option for rock paper scissors
let user_option = ""
//variable to store the size of the balloon
let size_balloon;
//number that stores when the balloon pops
let pop_number;
//variable to store the score for the memory game
let score = 0;
//storing the sequence generated in memory game
let sequence = [];
//variable to store what the user enters for the memory game
let userInput = "";
//variables to store the start time and the end time
let startTime;
let sequenceDisplayTime = 1000;
//storing users score for memory game, and 
//if the user enters correct sequence
let user_score1 = 0;
let lost = false;
//storing number that has to be guessed in guessing number game
//as well number of attempts taken by user to guess the number,
//and a hint string.
let number_to_guess;
let attempts = 0;
let hint = "";
let check = 1000;
//storing varialbes for the bakcground color
let red_color = 50;
let green_color = 220;
let blue_color = 220;
//storing the trivia questions and answers at the identical indexes.
let questions = ["What is the name of the \n largest ocean on Earth?",
"Which planet is known \n as the Blue Planet?","In which year did the Titanic sink?",
"What year was the very first \n model of the iPhone released?", "What year was NYU founded?","How many stripes are there on the US flag?",
"What’s the capital of Canada?", "How many keys does a classic piano have?", "How many minutes are in a full week?"];
let answers = ["Pacific Ocean", "Earth", 1945, 2007, 1831, 13, "Ottawa", 88, 10080];
//varialbe to store the number of current question
let question_num;
//message to user in the trivia
let message_to_user = ""
//score of the user and generation range for the questions
let generation_range = 8;
let total_score = 0;


//in the set up I create all the buttons, and initialize
//all the variables that are constant
//also I created the submit field.
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
  question_num = floor(random(0,generation_range));
}

//preload function that I used for preloading the images,
//that are displayed in different games
function preload() {
  mini_games_img = loadImage('mini_games.png');
  ball_risk_img = loadImage('rock_paper_scissors.png');
  popped_img = loadImage('popped.png');
  memory_test_img = loadImage('memory_test.png');
  guess_img = loadImage('guess.png');
  trivia_img = loadImage('trivia.png');
  game_over_img = loadImage('game_over.png');
  you_won_img = loadImage('you_won.png');
  you_lost_img = loadImage('lost.png');
}

function draw() {
  console.log(total_score);
  background(64,220,150);
  textSize(36);
  fill(255);
  //displaying the start screen of mini games
  image(mini_games_img, 0, 0, width, height);
  text("welcome to mini games!!!", 200, 50);
  text("click start to begin", 260, 100);
  start_button.position(300, 460);
  start_button.size(180,70);
  start_button.mousePressed(startGame);
  //starting the rock paper scissors game
  if(current_game == 1){
    //checking if both scores are less than 3
    if(computer_score < 3 && user_score < 3){
      background(red_color,green_color,blue_color);
      textSize(36);
      fill(0);
      
      //displaying computers and players scores
      text("Rock Paper Scissors Game", 160, 50);
      text("Your score: " + user_score, 80, 150);
      text("Computer's score: " + computer_score, 380, 150);
    
      text("Make a decision: ", 250, 420);
      text("Computer's choice: " + computer_option, 100, 300);
    
      //calling a function when rock button is clicked
      rock_button.position(80, 450);
      rock_button.size(180,70)
      rock_button.mousePressed(rock_button_click);
    
      //calling a function when paper button is clicked
      paper_button.position(300, 450);
      paper_button.size(180,70);
      paper_button.mousePressed(paper_button_click);
    
      //calling a function when scissors button is clicked
      scissors_button.position(520, 450);
      scissors_button.size(180,70);
      scissors_button.mousePressed(scissors_button_click);
      }
      //checking if computer won, and displaying it to the screen
      else if (computer_score == 3){
        background(64,220,150);
        textSize(34);
        fill(255);
        image(you_lost_img, 0, 0, width, height);
        text("Computer Won... Computer's choice was " + computer_option, 30, 200);
        scissors_button.remove();
        paper_button.remove();
        rock_button.remove();
        next_game_button.position(300, 450);
        next_game_button.size(180,70);
        next_game_button.mousePressed(nextGame);
      }
      //checking if the user won and displaying it to the screen
      else if(user_score == 3){
        background(64,220,150);
        textSize(34);
        fill(255);
        image(you_won_img, 0, 0, width, height);
        text("You won :) Computer's choice was " + computer_option, 30, 200);
        scissors_button.remove();
        paper_button.remove();
        rock_button.remove();
        next_game_button.position(300, 450);
        next_game_button.size(180,70);
        next_game_button.mousePressed(nextGame);
      }
  }
  //starting the balloon pop game
  if(current_game == 2){
    if (size_balloon != pop_number){
      background(64,220,150);
      image(ball_risk_img, 0, 0, width, height);
      textSize(36);
      fill(0);
      text("Balloon Risk Game", 160, 50);
      text("Score: " + score, 150, 120);
      fill(255, 0, 0);
      noStroke(); 
      ellipse(width / 2, height / 2, size_balloon, size_balloon);
      ball_risk_game_button.position(300, 450);
          ball_risk_game_button.size(180,70);
          //stopping the game in case user decides not to continue inflating the balloon
          ball_risk_game_button.mousePressed(noRiskStop); 
          //inflating the balloon in case the mouse is clicked on the balloon
      if (mouseIsPressed && isMouseInsideEllipse(width / 2, height / 2, 100, 80)) {
        size_balloon += 1;  
        score = size_balloon / 10;
      }
    }
    //checking if the balloon popped
      else if(size_balloon == pop_number){
          background(64,220,150);
          image(popped_img, 0, 0, width, height);
          textSize(36);
          fill(255);
          text("YOU LOST", 160, 50); 
          text("you were too risky today", 30, 100); 
          score = 0
          ball_risk_game_button.mousePressed(noRiskStop); 
      }
  }
  //starting the memory test game
  if(current_game == 3){
    background(64,220,150);
    image(memory_test_img, 0, 0, width, height);
    text("Welcome to memory test game", 400, 70);
    //displaying the number for one second
  if (millis() - startTime < sequenceDisplayTime) {
    textAlign(CENTER, CENTER);
    textSize(38);
    text(sequence.join(" "), width / 2, height / 2);
  } else {
    textAlign(CENTER, CENTER);
    textSize(38);
    text("Your guess: " + userInput, width / 2, height / 2 + 40);
    //checking if the user entered the number that was displayed on the screen
    if (userInput.length === sequence.length) {
      if (userInput === sequence.join("")) {
        generateSequence();
        userInput = "";
        displaySequence();
        startTime = millis();
        user_score1 += 1;
        total_score += 3;
      } 
      //if user did not enter the correct number displaying that they lost
      else {
        fill(255, 0, 0);
        text("Incorrect! Try again.", width / 2, height / 2 + 80);
        userInput = "";
        lost = true;
      }
    }
  }
  //if user lost, we are starting the next game
  if (lost == true){
    background(64,220,150);
      text("YOU LOST", 400, 100);
      current_game += 1;
  }
  }
  //starting the guessing number game
  if(current_game == 4){
    background(64,220,150);
    image(guess_img, 0, 0, width, height);
    user_input_num.position(width/2 - 100, 420);
    user_input_num.size(200,50);
    user_input_num.style('font-size', '20px');
    button.size(150,50)
    button.position(width/2 - 70, 500);
    //when user enters a number in the submit field and 
    //presses the button, we are calling the function that
    //checks if the user entered the correct number
    button.mousePressed(submitText);
    textSize(40);
    fill(255);
    textAlign(CENTER, CENTER);
    text("Guess the number from 1 to 100 range", width/2, 80);
    textSize(50);
    text("Attempts: " + attempts, width/2, 250);
    text(hint, width/2, 350);
  
  }
  //starting the trivia game
  if(current_game == 5){
    background(64,220,150);
    image(trivia_img, 0, 0, width, height);
    textSize(36);
    fill(255);
    textAlign(CENTER, CENTER);
    //displaying the question to the user that has to be answered
    text("Welcome to TRIVIA!! ", width/2, 50);
    text(questions[question_num], width/2, 150);
    text(message_to_user, width/2, 300);
    user_answer.position(width/2 - 100, 420);
    user_answer.size(200,50);
    //when user enters an answer, we are calling a function that
    //checks if the answer is correct or not, and displays the
    //appropriate result
    button.mousePressed(submitAnswer);
  }
  //when user is done with all the games, we are 
  //displaying the final score to the user
  if(current_game == 6){
    background(64,220,150);
    image(game_over_img, 0, 0, width, height);
    textSize(40);
    text("your score is " + total_score, width/2, 60);
    user_input_num.remove();
    user_answer.remove()
    button.remove();
  }
}

//starting the first mini game when the
//user clicks a start button
function startGame(){
  current_game += 1
  start_button.hide();
}

//going to a next game whenever user clicks next game
function nextGame(){
  current_game += 1;
  computer_score = 0
  user_score = 0;
  next_game_button.remove();
}

//storing users progress, when user decides not to keep
//inflating the balloon, and going to the next game
function noRiskStop(){
  current_game += 1;
  ball_risk_game_button.remove()
  total_score+=score;
}

//function that's called when the user picks rock, and itchanges the
//score and the background based on what computer's option was
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
    total_score += 5;
  }
  else if(computer_option == "rock"){
    red_color = 255;
    green_color = 255;
    blue_color = 20;
  }
  
}

//function that's called when the user picks paper, and it changes the
//score and the background based on what computer's option was
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
    total_score += 5;
  }
  else if(computer_option == "paper"){
    red_color = 255;
    green_color = 255;
    blue_color = 20;
  }
}

//function that's called when the user picks scissors, and it changes the
//score and the background based on what computer's option was
function scissors_button_click() {
  computer_option = random(options);
  if(computer_option == "paper"){
    user_score += 1;
    red_color = 64;
    green_color = 220;
    blue_color = 150;
    total_score += 5;
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

//function that checks if the mouse is inside the ellipse, to make sure
//user is clicking exactly within the range of balloon when inflating it
function isMouseInsideEllipse(x, y, w, h) {
  let d = dist(mouseX, mouseY, x, y);
  return d < w / 2 && d < h / 2;
}

//checking if the user entered sequence and displaying new sequence
//for one second
function keyTyped() {
  if (millis() - startTime >= sequenceDisplayTime) {
    userInput += key;
  }
}

//function that generated a random number to a sequence for
//a memory test game
function generateSequence() {
  sequence.push(floor(random(10)));
}

//function to display a sequence to the user
function displaySequence() {
  startTime = millis();
}


//a function that is called in guessing number game, and it increments the 
//attempts if the number was not guessed, as well as updates the hint
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
    total_score += 30 - (attempts*2);
    current_game += 1;
  }
}

//a function that is called when the user submits the answer for the 
//trivia question, and checks if the answer was right or not and
//updats the score, and the question, in the case if the previous question
//was answered correctly.
function submitAnswer() {
  let userText = user_answer.value();
  if(generation_range == 4){
    current_game += 1;
  }
  if (userText == answers[question_num]){
    total_score += 8;
    message_to_user = "This is correct!! \n here is a next question";
    questions.splice(question_num,1);
    answers.splice(question_num,1);
    generation_range -= 1;
    question_num = floor(random(0,generation_range));
    text(questions[question_num], width/2, 150);
  }
  else if (userText == -1){
    message_to_user = "at least you tried";
    questions.splice(question_num,1);
    answers.splice(question_num,1);
    generation_range -= 1;
    question_num = floor(random(0,generation_range));
    text(questions[question_num], width/2, 150);
  }
  else{
    message_to_user = "Incorrect, try again";
  }
}