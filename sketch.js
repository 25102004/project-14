//Gamne States
var PLAY = 1;
var END = 0;
var gameState = 1;
var sword,monster,fruit,fruit1,fruit2,
fruit3,fruit4,gameover;
var frouitGroup,enemyGroup;
var r,score,ramdomFruit;
var monsterImage

function preload(){
swordImage = loadImage("sword.png");
fruit1 = loadImage("fruit1.png");
fruit2 = loadImage("fruit2.png");
fruit3 = loadImage("fruit3.png");
fruit4 = loadImage("fruit4.png");
monsterImage = loadImage("alien1.png","alien2.png");
gameover= loadImage("gameover.png");
 
}

function setup(){
createCanvas(600, 600);

// creating sword
sword = createSprite(40,200,20,20);
sword.addImage(swordImage);
sword.scale = 0.7

  // creating fruits and monsters
  fruitGroup = createGroup();
  enemyGroup = createGroup();
  
  // setting collider for sword
   sword.setCollider("rectangle",0,0,40,40);
   sword.debug = true;
  
  
score = 0;
}

  function draw(){
       
    
  background("blue"); 
 
  text("score : "+ score,300,30);
  
    
  
    
  // giving two Game States 
  if(gameState === PLAY){
    
    // moving sword with mouse
    sword.y = World.mouseY;
    sword.x = World.mouseX;
    
    // calling the fruit and monster function
     fruits();
     enemy();
    
    
   
    
  // Increase score if sword is touching fruits
    if(fruitGroup.isTouching(sword)){
      fruitGroup.destroyEach();
      score = score + 2;
      
   
    }
    
    else{ // if the sword touches monster 
  if(enemyGroup.isTouching(sword)){
    fruitGroup.destroyEach();
    enemyGroup.destroyEach();
    
    fruitGroup.setVelocityEach(0);
    enemyGroup.setVelocityEach(0);
    gameState = END;
    
       // change the animation of the sword to gameover and reset its position
    
    sword.addImage(gameover);
    sword.x = 200;
    sword.y = 200;
     
      
    
    }
    
  }
  
  

    
    
    sword.X = 200;
    sword.Y = 200;
 
    }
 
  drawSprites();

  }
  // creating functions
   function fruits(){
  if(World.frameCount % 80 === 0){
   fruit = createSprite(400,200,20,20);
   fruit.scale = 0.2
   // fruit.deburg = true;
    r = Math.round(random(1,4));
   if (r === 1){
   fruit.addImage(fruit1);
  }else if (r === 2){
    fruit.addImage(fruit2);
  }else if (r === 3){
   fruit.addImage(fruit3);
  }else  {
   fruit.addImage(fruit4); 
  }

   fruit.y = Math.round(random(50,340));
    fruit.velocityX = -5;
    fruit.lifetime = 100;

    fruitGroup.add(fruit);
  }
   }

  // creating function for monster
     function enemy(){
   if(World.frameCount % 200 === 0){
     monster = createSprite(400,200,20,20)
    monster.addAnimation("moving",monsterImage);
  monster.y = Math.round(random(100,300));
  monster.velocityX = -7;
  monster.lifetime = 50;

  enemyGroup.add(monster);
  }
  }



