var caja;
console.log("holaaaa");
var trex ,trex_running;
function preload(){
  

}

function setup(){
  createCanvas(400,400)
  
  caja=createSprite(200,200,30,30);
 
}

function draw(){
  background("blue")
  if(keyIsDown(RIGHT_ARROW)){ caja.position.x=caja.position.x+5;}
  drawSprites();

}
