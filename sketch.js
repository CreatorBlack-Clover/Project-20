var wall,car;
var weight,speed,Deformation;

function setup() {
  createCanvas(1300,400);
  // weight and speed
  speed = random(55,90);
  weight = random(400,1500);

  // walls
  wall = createSprite(1250,200, 60, 200);
  wall.shapeColor = "brown";
  wall.debug = true;

  // cars
  car = createSprite(50,200, 50, 50);
  car.shapeColor = "white";
  car.velocityX = speed;
  car.debug = true;

  // deformation
  Deformation = weight / 2 * speed * speed / 22500;
  console.log(Math.round(weight));
  console.log(Math.round(speed));
  console.log(Math.round(Deformation));
}

function draw() 
{
  background("black");  
  rectMode(CENTER);
  contact(car,wall);


  drawSprites();
}

function contact(object1,object2)
{
  if(object1.x + object1.width/2 >= object2.x - object2.width/2 )
  {
    object1.shapeColor = "green";
    object1.velocityX = 0;
  }

}