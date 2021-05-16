var bullet; wall;

var weight, speed,thickness ;

function setup() {
  createCanvas(1550,400);
 
 speed=random(55,90);
 weight=random(400,1500);
 thickness=random(22,83)

  bullet=createSprite(50, 200, 50, 10);
  bullet.velocityX =  speed;
  bullet.shapeColor =color(225)

  wall =createSprite(1200,200,thickness,height/2)
  wall.shapeColor=color(80,80,80)
}

function draw() {
  background(0); 
  
  if(wall.x-bullet.x<(bullet.width+wall.width)/2)
  {
    bullet.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;
    if(deformation>180)
    {
      bullet.shapeColor="white";
    }
    if(deformation<180 &&deformation>100)
    {
      bullet.shapeColor="white";
    }
    if(deformation<100)
    {
      bullet.shapeColor="white";
    }
  }
 if(hascollided(bullet,wall))
 {
  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
  if(damage>10)
  {
    wall.shapeColor="red";
  }
  if(damage<10 )
  {
    wall.shapeColor="green";
  }
  
 }
 
 drawSprites();
}

function hascollided(bullet,wall)
{
bulletRightEdge=bullet.x+bullet .width;
wallLeftEdge=wall.x;
if(bulletRightEdge>=wallLeftEdge){
  return true

}
  return false
}