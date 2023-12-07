let questions = ["What is the name of the largest ocean on Earth?",
"Which planet is known as the Blue Planet?","In which year did the Titanic sink?",
"What year was the very first model of the iPhone released?"]
let answers = ["Pacific Ocean", "Earth", 1945, 2007]
let question_num;
let message_to_user = ""

function setup() {
  createCanvas(800, 600);
  user_answer = createInput();
  user_answer.position(width/2 - 100, 420);
  user_answer.size(200,50);
  let button = createButton('Submit');
  user_answer.style('font-size', '20px');
  button.size(150,50)
  button.position(width/2 - 70, 500);
  button.mousePressed(submitText);
  question_num = floor(random(0,3));
}

function draw() {
  background(64,220,150);
  textSize(36);
  fill(255);
  textAlign(CENTER, CENTER);
  text("Welcome to TRIVIA!! ", width/2, 50);
  text(questions[question_num], width/2, 150);
  text(message_to_user, width/2, 250);
  console.log(questions[question_num]);
}


function submitText() {
  let userText = user_answer.value();
  if (userText == answers[question_num]){
    message_to_user = "This is correct!!"
    question_num = random(0,3);
    text(questions[question_num], width/2, 150);
  }
  else{
    message_to_user = "Incorrect, try again";
  }
}