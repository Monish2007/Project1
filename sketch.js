var bg_img, bird_img,platform_img, spikeplatform_img,cloud_img;
var bg,bird,platform,spikeplatform,cloud, platform_Group;
var invisibleBlock;
var score = 0;

function preload(){

bg_img = loadImage("bg.jpg");
bird_img = loadImage("bird.png");
platform_img = loadImage("platform.png");
spikeplatform_img = loadImage("spikedplatform.png");
cloud_img = loadImage("cloud.png");

}

function setup() {
  createCanvas(600,700)

  /*bg = createSprite(600,700);
  bg.addImage(bg_img);
  bg.velocityY =1;*/ 

  bird = createSprite(300,200,100,300);
  bird.addImage(bird_img);
  bird.scale = 0.4;
  bird.setCollider("circle",0,0,100);

  

  
  
  //bg.addImage(bg_img);
  //bg.scale = 6;

  platform_Group = new Group();
  invisibleBlock_Group = new Group();
  cloud_Group = new Group();
  spikeplatform_Group = new Group();

}

function draw() {
  background(0);
  textSize(20);
  fill("white");
  text("Score:"+score,500,50);
  

  if(keyDown(LEFT_ARROW)){

    bird.x -= 6;

  }
  if(keyDown(RIGHT_ARROW)){

    bird.x += 6;

  }

  /*if(bg.y>500)
  {
    bg.y = 300;
  }*/ 

  createPlatform();
  
  
  if(spikeplatform_Group.isTouching(bird)){

    console.log("touched");
    bird.destroy();
    stroke("red");
    fill("red");
    textSize(40);
    text("Game Over",200,200);
    
  
  }


  drawSprites();
}

function createPlatform()
{

if (frameCount % 270 === 0) {
  var platform = createSprite(300,100,140,4);
  var invisibleBlock = createSprite(platform.x,platform.y-15,140,4);
  
  platform.x = Math.round(random(90,550));
  invisibleBlock.x = platform.x;
  platform.scale = 0.4;
  
  platform.addImage(platform_img);
  
  platform.velocityY = 1;
  invisibleBlock.velocityY = 1;
  
  bird.depth = platform.depth;
 
  //assign lifetime to the variable
  platform.lifetime = 800;
  invisibleBlock.lifetime = 800;

  
  //add each door to the group
  platform_Group.add(platform);
  invisibleBlock_Group.add(invisibleBlock);
   invisibleBlock.debug = true;
  platform.debug = true;
}
if (frameCount % 240 === 0) {
  cloud = createSprite(400,100,200,300);
  cloud.x = Math.round(random(90,550));
  cloud.velocityY = 1;
  cloud.lifetime = 800;
  cloud.scale = 0.5;
  cloud.addImage(cloud_img);
  
  cloud_Group.add(cloud);

  
}
if (frameCount % 400 === 0) {
  spikeplatform = createSprite(400,350,400,40);
  spikeplatform.x = Math.round(random(100,500));
  spikeplatform.y = Math.round(random(10,350));
  spikeplatform.velocityY = 1;
  spikeplatform.lifetime = 800;
  spikeplatform.addImage(spikeplatform_img);
  spikeplatform_Group.add(spikeplatform);
  spikeplatform.scale = 0.4;
  spikeplatform.debug = true;
  
}

if(keyDown("SPACE")){

  bird.velocityY -= 0.5;
  
}

  bird.velocityY += 0.09;
/*else{

  bird.velocityY += 0.06;

}*/

if(bird.isTouching(invisibleBlock_Group)){

     bird.velocityY = -5;
      score += 100;

      

}
//bird.debug = true;
//platform.debug = true;
}

