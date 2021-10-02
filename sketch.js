var player;
var ground;
var edges;
var platform, platform2;
var platformGroup;
var score = 0;
var num = 0;
function setup() {
  createCanvas(displayWidth,500);
  
  player = createSprite(225, 200, 50, 50);
  ground = createSprite(225, 450, 450, 10);
  platformGroup = new Group();
  
}

function draw() {
  background("yellow");  
  
  if(keyDown("space")){
    player.velocityY = -20;
   
  }
  if(keyDown(LEFT_ARROW)){
    player.x = player.x - 8;

  }
  if(keyDown(RIGHT_ARROW)){
    player.x = player.x + 8;
   
  }
  player.velocityY = player.velocityY + 2;
  player.collide(platformGroup);
  spawn();
  spawn2();
  edges = createEdgeSprites();
  player.collide(ground);
  player.collide(edges[0])
  text("Score: "+ score, 400, 400);
  num = Math.round(random(1, 5));
  if (player.isTouching(platformGroup)){
    score = score + Math.round(random(1, 5));
  }
  console.log(num);
  drawSprites();
}

function spawn(){
  if(frameCount % 80 == 0){
platform = createSprite(displayWidth, random(420, 480), 100, 10)
platform.velocityX = platform.velocityX - 10
if(platform.x == 0){
  platform.lifetime = 0;
}
platform.debug = true;
platformGroup.add(platform);

  }
}

function spawn2(){
  if(frameCount % 65 == 0){
platform2 = createSprite(displayWidth, random(420, 480), 100, 10)
platform2.velocityX = platform2.velocityX - 10;
if(platform2.x == 0){
  platform2.lifetime = 0;
}
platform2.debug = true;
platformGroup.add(platform2) 
  }
}

