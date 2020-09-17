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
  contact();


  drawSprites();
}

function contact()
{
  if(car.x + car.width/2 >= wall.x - wall.width/2 )
  {
    car.shapeColor = "green";
    car.velocityX = 0;
  }

}
