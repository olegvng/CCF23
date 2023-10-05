//variables to store ratio of each minute and hour that is drawn
//variables to keep track of how many seconds and hours have been
//drawn, and a variable to store whether or not it is a day
let vertical_line_distance = 800 / 60;
let horizontal_line_distance = 600 / 12;
let seconds_drawn = 0;
let hours_drawn = 0;
let day = true;
let hour_counter = 0;

//setting up initial canvas of our canvas
//and slowing down frame rate to 20, so that
//it is easier to see the minutes
function setup() {
  createCanvas(800, 600);
  frameRate(20);
}


function draw() {
  background(255);
  stroke(10);

  //conditional to check if it is a day
 if(day){
  let x = seconds_drawn * vertical_line_distance;
  fill(0);

  rect(0, 0, x, 600);

  let y = hours_drawn * horizontal_line_distance;

  //drawing rectangle to represent minutes passed
  rect(0, 0, 800, y);

  seconds_drawn += 0.75;

  //if seconds drawn reach 60, then we reset it back to 0
  if (seconds_drawn >= 60) {
    seconds_drawn = 0;
    hours_drawn = hours_drawn + 1;
    hour_counter += 1;
  }
  //checking if our 12 hour cycle has passed and if that's the case
  //then we are resetting everything to 0, in order to start a new
  //cycle
  if (hour_counter >= 12){
    day = false;
    seconds_drawn = 0;
    hours_drawn = 0;
    hour_counter = 0;
  }
}
//checking if day is false, and starting AM cycle then
if (day == false) {
  noStroke();
  background(0);
  let x = seconds_drawn * vertical_line_distance;
  fill(255);

  rect(0, 0, x, 600);

  let y = hours_drawn * horizontal_line_distance;

  rect(0, 0, 800, y);

  seconds_drawn += 0.75;
  //if seconds drawn reach 60, then we reset it back to 0
  if (seconds_drawn >= 60) {
    seconds_drawn = 0;
    hours_drawn = hours_drawn + 1;
    hour_counter += 1;
  }
  //checking if our 12 hour cycle has passed and if that's the case
  //then we are resetting everything to 0, in order to start a new
  //cycle
  if (hour_counter >= 12){
    day = true;
    seconds_drawn = 0;
    hours_drawn = 0;
    hour_counter = 0;
  }
}
}


