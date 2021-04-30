var movingRect, fixedRect;
function setup() {
  createCanvas(800,400);
  movingRect = createSprite(150,200,30,30)
  movingRect.shapeColor = "red"
  fixedRect = createSprite(600,100,30,30)
  fixedRect.shapeColor = "green"
}

function draw() {
  background(255,255,255);  
  movingRect.x = World.mouseX
  movingRect.y = World.mouseY
  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2
    && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2
    && movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2
     && fixedRect.y - movingRect.y < movingRect.height/2 +fixedRect.height/2 ){
    movingRect.shapeColor = "yellow"
    fixedRect.shapeColor = "yellow"
  }
  else{
    movingRect.shapeColor = "red"
    fixedRect.shapeColor = "green"
  }
  drawSprites();
}