
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  score = 0;
  FoodGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {
background(255);
  if(ground.x<0){
    ground.x = ground.width/2;
  }
  if(keyDown("space")){
    monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY +0.8; 
  monkey.collide(ground);
  if( obstacleGroup.isTouching(monkey)){
    ground.velocityX = 0;
    monkey.velocityY = 0;
    obstacleGroup.setVelocityXEach(0);
    FoodGroup.setVelocityXEach(0);
    obstacleGroup.setLifetimeEach(-1); 
    FoodGroup.setLifetimeEach(-1);
  }
  SpawnFood();
  Spawnobstacle();
  drawSprites();
  score =score+ Math.ceil(frameRate()/60)
  text ("score: "+score,100,150);
}
function SpawnFood(){
  if(frameCount%80 === 0){
    var banana = createSprite(600,250,40,10);
    banana.addImage(bananaImage);
    banana.scale = 0.05;
    banana.y = random(120,200);
    banana.velocityX = -5;
    banana.lifetime = 300;
    monkey.depth = banana.depth+1;
    FoodGroup.add(banana);
  }
  
  
}

function Spawnobstacle(){
  if(frameCount%100 === 0){
    var obstacle = createSprite(800,320,10,40);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.15;
    obstacle.velocityX = -5;
    obstacle.lifetime = 300;
   obstacleGroup.add(obstacle);  
  }
  
  
}




