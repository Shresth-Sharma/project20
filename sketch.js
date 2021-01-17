var wall,car;
var speed,weight
function setup() {
  createCanvas(1600,400);
  wall=createSprite(1350, 200, 60, height/2);
  car=createSprite(50,200,50,50)
  wall.shapeColor=(80,80,80);
  car.velocityX=(speed);
}

function draw() {
  speed=Math.round(random(55,90));
  weight=Math.round(random(400,1500));
  background("red");  
  drawSprites();
}