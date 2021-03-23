hr=hour();
mn=minute();
sc=second();

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
angleMode(DEGREES);
scAngle=map(0,60,0,360);
hrAngle=map(0,12,0,360);
mnAngle=map(0,60,0,360);
  background(255,255,255);
  
  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();






  push();
  rotate(HrAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();





  push();
  rotate(MnAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();
  
  
  
  
  
  drawSprites();
}