var fixedRect,movingRect;
var ball1,ball2;
function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(400, 200, 50, 80);
  fixedRect.shapeColor="green";
  movingRect = createSprite(600,400,50,80);
  movingRect.shapeColor="green";
  ball1=createSprite(200, 200, 50, 80);
  ball1.shapeColor="yellow";
  ball1.velocityY=+2;
  ball2 = createSprite(200,800,50,80);
  ball2.shapeColor="green";
  ball2.velocityY=-2;
}

function draw() {
  background(0); 
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  if(movingRect.x-fixedRect.x < movingRect.width/2+fixedRect.width/2
     && fixedRect.x - movingRect.x < movingRect.width/2+fixedRect.width/2
     &&movingRect.y-fixedRect.y < movingRect.height/2+fixedRect.height/2
     &&fixedRect.y - movingRect.y < movingRect.height/2+fixedRect.height/2 ){
    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";
  }
  else{
    fixedRect.shapeColor="green";
    movingRect.shapeColor="green";
  }
  if(ball1.y-ball2.y<ball1.height/2+ball2.height/2&&ball2.y-ball1.y<ball1.height/2+ball2.height/2){
    ball1.velocityY=-2;
    ball2.velocityY=+2
  }
  drawSprites();
}