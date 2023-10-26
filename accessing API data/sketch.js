let data;

function preload() {
  data = loadJSON('animals.json');
}

function setup() {
  createCanvas(400, 400);

  //printing name of the animal to the console
  let name = data.name;
  console.log(name);

  //printing the kingdom of the animal to the console
  let animal_class = data.taxonomy.class;
  console.log(animal_class)

  //printing all possible locations of the animal to the console
  for(let i = 0; i < data.locations.length; i++){
    console.log(data.locations[i]);
  }

  //printing estimated population of the animal
  let estimated_population = data.characteristics.estimated_population_size;
  console.log(estimated_population)

}

