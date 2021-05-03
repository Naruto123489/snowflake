var backgroundImg
var snow
var snowImg








function preload() {

backgroundImg = loadImage("snow3.jpg");
snowImg = loadImage("snow5.jpg");


}




function setup() {
  createCanvas(800,400);
  for(var s=50;s<=800;s=s+70){
  snow = createSprite(s, 20, 50, 50);
  snow.addImage(snowImg);
  snow.scale=0.1
snow.velocityY=1;
  }

}



function draw() {
  background(backgroundImg);  
  drawSprites();
}