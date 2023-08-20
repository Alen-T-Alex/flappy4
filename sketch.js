var bird,obstacle,bottomBoundry,background;



function preload(){
  birdImg =loadImage("bird.png");
  pipeImg=loadImage("flappy pipe.png");
backImg = loadImage("flappy backround.png");
}

function setup() {
  createCanvas(400,400);


obstacle=createSprite(300,200);
obstacle.addImage(pipeImg);

bg=createSprite(200,200,20,20);
bg.addImage(backImg);
bg.scale=1.6;
bg.x = bg.width /2;
bird=createSprite(100,200,);
bird.addImage(birdImg);
bird.scale=0.12;




}

function draw() 
{

  background(30);



  if(keyDown("space")&& bird.y >=-400) {
    bird.velocityY = -5;
}

bird.velocityY=bird.velocityY+0.5;








drawSprites();
}

 

