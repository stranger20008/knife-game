var knife,knife_image
var fruit1,fruit1_image
var fruit2,fruit2_image
var fruit3,fruit3_image
var fruit4,fruit4_image,r
var fruit,microbes,microbes_animation
var gameover,gameover_sound,gameover_image
var PLAY=1
var END=0
var gamestate=1
var score=0
var knife_sound


function preload(){
  knife_image=loadImage("sword.png"); 
  fruit1_image=loadImage("fruit1.png");  
  fruit2_image=loadImage("fruit2.png");
  fruit3_image=loadImage("fruit3.png");
  fruit4_image=loadImage("fruit4.png");
  microbes_animation=loadAnimation("alien1.png","alien2.png");
  gameover_sound=loadSound("gameover.mp3");
  gameover_image=loadImage("gameover.png");
  knife_sound=loadSound("knifeSwooshSound.mp3")
}

function setup(){
  createCanvas(600,400);
  knife=createSprite(200,200,10,10);
  knife.addImage(knife_image);
  knife.scale=0.6
  
  fruitg=createGroup();
  enemyg=createGroup();
  
  //knife.debug=true;
  
score=0;
    
}

function draw(){
  background("lightblue");
  
  if(gamestate===PLAY){
    
  
  textSize(30);  
  text(score,550,40);
    
    text("score:",465,38)
  
  fruits();
  enemy();
  
  knife.y=World.mouseY
  knife.x=World.mouseX
  

  
  
  
  
if(fruitg.isTouching(knife)){
  fruitg.destroyEach();
  score=score+1;
  knife_sound.play();
}  
   else{
      if(enemyg.isTouching(knife)){
        gamestate=END;
    fruitg.destroyEach();
        console.log("hello");
    enemyg.destroyEach();
    fruitg.setVelocityXEach(0);
    enemyg.setVelocityXEach(0);
    enemyg.visible=false;
    knife.addImage(gameover_image);
    gameover_sound.play();
    knife.x=300;
    knife.y=200;   
    
    
    
  }
   } 
     
  }   

  if(score===5){
    fruit.velocityX=-10;
  }
    if(score===6){
    fruit.velocityX=-10;
  }
    if(score===7){
    fruit.velocityX=-10;
  }
    if(score===8){
    fruit.velocityX=-10;
  }
      if(score===9){
    fruit.velocityX=-10;
  }
      if(score===10){
    fruit.velocityX=-10;
  }
        if(score===11){
    fruit.velocityX=-13;
  }
        if(score===12){
    fruit.velocityX=-13;
  }
     
        if(score===13){
    fruit.velocityX=-13;
          }
  if(score===14){
    fruit.velocityX=-13;
  }
        if(score===15){
    fruit.velocityX=-13;
  }

        if(score===16){
    fruit.velocityX=-13;
  }
        if(score===17){
    fruit.velocityX=-13;
  }
        if(score===18){
    fruit.velocityX=-13;
  }
        if(score===19){
    fruit.velocityX=-13;
  }
        if(score===20){
    fruit.velocityX=-13;
  }
  
  
  
  
  
  drawSprites();
}

function fruits(){
     if(World.frameCount%80===0){
    fruit=createSprite(400,200,20,20);
    fruit.scale=0.2;
    r=Math.round(random(1,4));
    if(r == 1){
      fruit.addImage(fruit1_image)
    }else if(r == 2){
      fruit.addImage(fruit2_image)
    }else if(r == 3){
      fruit.addImage(fruit3_image)
    }else if(r == 4){
      fruit.addImage(fruit4_image)
    }
    
    fruit.y=Math.round(random(50,340));
    
    fruit.velocityX=-7;
    fruit.setLifetime=50;
    
    fruitg.add(fruit)
  }
}
function enemy(){

  if(World.frameCount % 200===0){
  microbes=createSprite(200,200,10,10);
  microbes.addAnimation("moving",microbes_animation);
  microbes.y=Math.round(random(1,390))
  microbes.velocityX=5
  microbes.setLifetime=50;
  enemyg.add(microbes);
  }  
}