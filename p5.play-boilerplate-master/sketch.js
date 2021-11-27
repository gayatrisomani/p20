function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}
preLoad(){
  bath = loadImage("dr/bath1.png")
  bath2 = loadImage("dr/bath2.png")
  brush = loadImage("dr/brush.png")
  drink1 = loadImage("dr/drink1.png")
  drink2 = loadImage("dr/drink1.png")
  eat1 = loadImage("dr/eat1.png")
  eat2 = loadImage("dr/eat2.png")
  gym1 = loadImage("dr/gym1.png")
  gym2 = loadImage("dr/gym2.png")
  gym11 = loadImage("dr/gym11.png")
  gym12 = loadImage("dr/gym12.png")
  iss = loadImage("dr/iss.png")
  move = loadImage("dr/move.png")
  move1 = loadImage("dr/move1.png")
  sleep = loadImage("dr/sleep.png")
}
function draw() {
  background(255,255,255);  
  drawSprites();
}