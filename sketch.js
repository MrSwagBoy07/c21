var sun,Sunimg;
var mercuryimg,venusimg,earthimg,marsimg,jupiterimg,saturnimg,uranusimg,neptuneimg;
var Mercury,Venus,Earth,Mars,Jupiter,Saturn,Uranus,Neptune;
function preload(){
  Sunimg=loadImage("sun.png");
  mercuryimg=loadImage("mercury.png");
  venusimg=loadImage("venus.png");
  earthimg=loadImage("earth.png");
  marsimg=loadImage("mars.png");
  jupiterimg=loadImage("jupiter.png");
  saturnimg=loadImage("saturn.png");
  uranusimg=loadImage("uranus.png");
  neptunimg=loadImage("neptune.png");
}
function setup() {
  createCanvas(800,400);

  sun=createSprite(50, 50, 50, 50);
  sun.addImage(Sunimg);
  sun.scale=0.2;
  Mercury=createSprite(150,20,50,50);
  Mercury.addImage(mercuryimg);
  Mercury.scale=0.1;
  Venus=createSprite(160,200,50,50);
  Venus.addImage(venusimg);
  Venus.scale=0.1
 Earth=createSprite(270,300,50,50);
 Earth.addImage(earthimg);
 Earth.scale=-0.2; 
 Mars=createSprite(390,190,50,50);
 Mars.addImage(marsimg);
 Mars.scale=-0.1; 
 Jupiter=createSprite(450,50,50,50);
 Jupiter.addImage(jupiterimg);
 Jupiter.scale=-0.1; 
 Saturn=createSprite(560,110,50,50);
 Saturn.addImage(saturnimg);
 Saturn.scale=-0.1; 
 Uranus=createSprite(560,300,50,50);
 Uranus.addImage(uranusimg);
 Uranus.scale=-0.1;
 Neptune=createSprite(700,200,50,50);
 Neptune.addImage(neptunimg);
 Neptune.scale=-0.1;
}

function draw() {
  background(0);  
  if(World.frameCount%30===0){
    sun.scale=sun.scale+0.1;

  }
  if(sun.isTouching(Mercury)){
    Mercury.destroy();
  }
 if(sun.isTouching(Venus)){
    Venus.destroy();
  }
  if(sun.isTouching(Earth)){
    Earth.destroy();
  }
  if(sun.isTouching(Mars)){
    Mars.destroy();
  }
  if(sun.isTouching(Jupiter)){
    Jupiter.destroy();
  }
  if(sun.isTouching(Saturn)){
    Saturn.destroy();
  }
  if(sun.isTouching(Uranus)){
    Uranus.destroy();
  }
  if(sun.isTouching(Neptune)){
    Neptune.destroy();
  }
  drawSprites();
}