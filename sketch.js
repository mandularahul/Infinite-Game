var zombie, zombieImg;
var candy, candyImg;
var pumpkin, pumpkinImg;
var start, startImg;
var bg, bgImg
var over, overImg

function preload(){
zombieImg = loadImage("zombie.png");
candyImg = loadImage("candy.png");
pumpkinImg = loadImage("pumpkin.png");
startImg = loadImage("start.png");
bgImg = loadImage("background.jpg");
overImg = loadImage("over.png");
}

function setup(){
createCanvas(860, 400)
bg = createSprite(430, 200, 400, 1000);
bg.scale = 1.6
bg.addImage("bg", bgImg);

zombie = createSprite(100, 300, 20, 20);
zombie.addImage("zombie", zombieImg)
zombie.scale = 0.5;

candyGroup = new Group();
obstaclesGroup = new Group();

ground = createSprite(600, 385, 1200 ,10);

start = createSprite(430, 80, 100, 50)
start.addImage("game", startImg);

over = createSprite(430, 80, 50,50);
over.addImage("gameOver", overImg)
over.visible = false;
over.scale = 0.2
}
function draw(){
    background("white");
       food();
    obstacles();
    if(keyWentDown("space")) {
        zombie.velocityY = -40;
        start.visible = false;
      }
      if(keyWentUp("space")){
        zombie.velocityY = 14;
    }
    zombie.velocityY = zombie.velocityY + 0.8

    if(candyGroup.isTouching(zombie)){
        candyGroup.destroyEach();
     }
     if(obstaclesGroup.isTouching(zombie)){
        over.visible = true;
         ground.velocityX = 0;
         obstaclesGroup.setVelocityXEach(0);
         candyGroup.setVelocityXEach(0);
         zombie.velocityY = 0;
    }
      zombie.collide(ground);
  
drawSprites();
}
function food(){
if (frameCount % 250 === 0) {
    var candy = createSprite(1200, random(80, 200), 20, 20)
    candy.addImage("candy", candyImg);
     candy.scale = 0.1;
     candy.velocityX = -8;
      
      candyGroup.add(candy);
      }
    }
function obstacles(){
    if (frameCount % 150 === 0) {
      var pumpkin = createSprite(1200, 350, 20, 20)
      pumpkin.addImage("pumpkin", pumpkinImg);
     pumpkin.scale = 0.3;
      pumpkin.velocityX = -8;
      obstaclesGroup.add(pumpkin)
    }
    }