var m,s;

function setup() {
  createCanvas(800,400);
  m = createSprite(400, 200, 50, 50);
  m.shapeColor='red';
  s = createSprite(200, 100, 20, 20);
  s.shapeColor='red';
}

function draw() {
  background(255,255,255);  
  m.x=World.mouseX;
  m.y=World.mouseY;
  console.log(m.x-s.x)
  if(m.x-s.x<m.width/2+s.width/2&&s.x-m.x<m.width/2+s.width/2)
  {m.shapeColor='green';
  s.shapeColor='green';
}
else{m.shapeColor='green';
s.shapeColor='green';}
  drawSprites();
}