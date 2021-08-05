
var player;
var target;
var edges;

function preload(){
  carrotImage = loadImage("images/carrot.png");
  playerImage = loadImage("images/bunny.png");
  backgroundImage = loadImage("images/field.jpg");
  }

function setup() {
createCanvas(600,600);

edges=createEdgeSprites();
snakeGroup = createSprite(10,50,300,300);
ground = createSprite(300,300,300,300);
ground.addImage(backgroundImage);
player = createSprite(40,550,30,30); 
target = createSprite(560,40,30,30);
target.addImage(carrotImage);
target.scale=0.4;
obs1 = createSprite(300,120,100,20);
obs1.velocityX = 12;
obs2 = createSprite(300,320,100,20);
obs2.velocityX = -5;
obs3 = createSprite(300,300,100,20);
obs3.velocityX = 7;
obs3.shapeColor = "red"
obs4 = createSprite(300,200,100,20);
obs4.velocityX = 10;
obs4.shapeColor = "red"
obs5 = createSprite(300,350,100,20);
obs5.velocityX = 12;
obs5.shapeColor = "red"
target.shapeColor = "blue"
obs2.shapeColor = "red"
obs1.shapeColor = "red"
}

function draw() {
background("black");  

player.bounceOff(edges[0]);
player.bounceOff(edges[1]);
player.bounceOff(edges[2]);
player.bounceOff(edges[3]);
obs1.bounceOff(edges[1]);
obs1.bounceOff(edges[0]);
obs2.bounceOff(edges[1]);
obs2.bounceOff(edges[0]);
obs3.bounceOff(edges[1]);
obs3.bounceOff(edges[0]);
obs4.bounceOff(edges[1]);
obs4.bounceOff(edges[0]);
obs5.bounceOff(edges[1]);
obs5.bounceOff(edges[0]);

if(frameCount % 30==0){
  var snake = createSprite(600,random(70,300),random(30,300),5);
}
for(var i = 0 ;i<(snakeGroup).length ; i++){
  var temp = (snakeGroup).get(1);
  if (player.isTouching(temp)){
    player.x = 40;
    player.y = 550;
  }
}
if(keyDown("up")){
  player.y=player.y-3;
}
if(keyDown("down")){
  player.y=player.y+3;
}
if(keyDown("left")){
  player.x=player.x-3;
}
if(keyDown("right")){
  player.x=player.x+3;
}
if(player.isTouching(target)){
  textSize(40);
  text("YOU WIN",200,200);
  
}
if(player.isTouching(obs1)){
  obs1.velocityX=0;
  textSize(40);
  textColor("red");
  text("YOU LOSE",200,200);
  
}
if(player.isTouching(obs2)){
  obs2.velocityX=0;
  textSize(40);
  text("YOU LOSE",200,200);
  
}
if(player.isTouching(obs4)){
  obs3.velocityX=0;
  player(200,200);
  textSize(40);
  text("YOU LOSE",200,200);
  
}
if(player.isTouching(obs4)){
  obs4.velocityX=0;
  textSize(40);
  text("YOU LOSE",200,200);
  
}
if(player.isTouching(obs5)){
  obs5.velocityX=0;
  textSize(40);
  text("YOU LOSE",200,200);
  
}
  drawSprites();
}

