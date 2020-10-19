var car,wall;
var speed,weight;
var deform;
function setup() {
  createCanvas(1600,400);
  car=createSprite(50, 200, 50, 50);
  wall=createSprite(1500,200,60,height/2);
  wall.shapeColor=(80,80,80);
  speed=Math.round(random(55,90));
  weight=Math.round(random(400,1500));
}

function draw() {
  background(255,255,255);  
  car.velocityX=speed;
  if(wall.x-car.x<wall.width/2+car.width/2&&car.x-wall.x<wall.width/2+car.width/2){
    
    car.velocityX=0;
    deform=(0.5*weight*speed*speed)/22500;
    if(deform<100){
      car.shapeColor="green";
    }
    else if(deform>100&&deform<180){
      car.shapeColor="yellow";
    }
    else if(deform>180){
      car.shapeColor="red";
    }
  }

  drawSprites();
}
