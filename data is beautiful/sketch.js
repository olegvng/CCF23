//creating variables for api key and all the variables
//that are used in the program
const api_key = 'e8061af2e1e69106e578609d7c4c4333';
//variable to store the lattitude
let latitudeUserInput;
//variable to store the longitude
let longitudeUserInput;
let submitButton;
//variable to store the data
let weatherData;

function setup() {
  createCanvas(600, 400);
  //slider for the lattitude
  latitudeUserInput = createSlider(-90, 90, 0, 0.01); 
  latitudeUserInput.position(20, 20);

  //slider for the longitude
  longitudeUserInput = createSlider(-180, 180, 0, 0.01); 
  longitudeUserInput.position(20, 50);
  
  submitButton = createButton('Click to get the weather');
  submitButton.position(20, 80);
  submitButton.mousePressed(getWeather);
}

function draw() {
  textSize(18)
  //adjusting background color for fun depending on the latitude and longitude
  background(latitudeUserInput.value()+150, longitudeUserInput.value()+150, latitudeUserInput.value()+150);
  text('Lattitude:', 20, 18);
  text('Longitude:', 20, 48);
  text('Latitude: ' + latitudeUserInput.value(), 20, 120);
  text('Longitude: '+ longitudeUserInput.value(), 20, 140);

  if (weatherData) {
    //displaying the information by parsing the data
    text("Temperature: " + weatherData.main.temp + "C", 20, 160);
    text("Humidity: " + weatherData.main.humidity + "%", 20, 180);
    text("Weather: " + weatherData.weather[0].description, 20, 200);
  } 
  else {
    text('Enter latitude and longitude, then click "Get Weather"', 20, 160);
  }
}

//function to make an API call and store the data
function getWeather() {
  const lat = latitudeUserInput.value();
  const lon = longitudeUserInput.value();
  var api_call = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=' + api_key;
  loadJSON(api_call, storeData);
}

function storeData(data) {
  weatherData = data;
}


