//variables to store all the memes
let back_to_school
let cat_meme;
let cat;
let dog;
let inflation_meme;
//list to store all the memes
let meme_lst = [];
let appearance_sound;
let no_more_sound;

//preloading all the images
function preload() {
  back_to_school = loadImage("back_to_school.jpg"); 
  cat = loadImage("cat.jpg");
  cat_meme = loadImage("cat_meme.jpg");
  dog = loadImage("dog.jpg");
  inflation_meme = loadImage("inflation-meme.jpg");
  //preloading sound effect when memes are appearing on the screen
  appearance_sound = loadSound("appearance_sound.mp3");
  no_more_sound = loadSound("no_more.mp3");
}

//filling up the list with the memes
function setup() {
  createCanvas(windowWidth, windowHeight);
  meme_lst.push(back_to_school);
  meme_lst.push(cat_meme);
  meme_lst.push(dog);
  meme_lst.push(cat);
  meme_lst.push(inflation_meme);
  //resizing all the images to make sure that all images fit on the screen
  for (let i = 0; i < meme_lst.length; i++) {
    meme_lst[i].resize(windowWidth, windowHeight);
  }
}


//when mouse is clicked a random meme appears
//on the screen at random location
function mouseClicked() {
  //playing different sounds based on if there
  //are more memes to appear or not
  if(meme_lst.length>0){
    appearance_sound.play();
  }
  else{
    no_more_sound.play()
  }
  let rand_int = int(random(0, meme_lst.length));
  let x = random(width - meme_lst[rand_int].width);
  let y = random(height - meme_lst[rand_int].height);
  image(meme_lst[rand_int], x, y);
  //removing memes from the list to prevent duplicates
  meme_lst.splice(rand_int, 1)
}