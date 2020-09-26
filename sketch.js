var monkey , monkey_running,ground
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0;
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  //creating monkey
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  //creating ground
  ground = createSprite (400,350,900,10);
  ground.velocityX = -4;
 
  FoodGroup = createGroup();
  obstacleGroup= createGroup();

  
}


function draw() {
   background("white");
  
   ground.x = ground.width/2;
  
 //jump when the space key is pressed
    if(keyDown("space")&& monkey.y >= 100) {
     monkey.velocityY = -12;
    }
  
   //add gravity
    monkey.velocityY = monkey.velocityY + 0.8
    monkey.collide(ground);
  
  score = score + Math.round(getFrameRate()/80);
  text ("Score:" + score, 300,50);
  
  survivalTime = Math.ceil(frameCount/frameRate());
  text ("survival Time:" + survivalTime , 100,50);
  food ();
  obstacles ();
  
  monkey.setCollider("rectangle",0,0,500,520);
  monkey.debug = true;
  
  if(obstacleGroup.isTouching(monkey)){
  monkey.velocityY=0;
  banana.velocity=0;
  ground.velocity=0;
  }
  drawSprites();
}

function food (){
if (frameCount%80===0){
  banana = createSprite(600,165,10,40);
  banana.addImage(bananaImage);
  banana.scale = 0.1;
  banana.y =Math.round (random (120,200));
  banana.velocityX = -7;
  banana.lifetime = 150;

  FoodGroup.add(banana);
}
  
}

 function obstacles () {
 if (frameCount % 300 === 0){
   obstacle = createSprite(600,325,10,40);
   obstacle.addImage(obstacleImage);
   obstacle.scale = 0.1;
   obstacle.velocityX = -6;
   obstacle.lifetime = 350;
   
   obstacleGroup.add(obstacle);
 }
 
 }


