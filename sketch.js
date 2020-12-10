//Create variables here
var dog, happyDog, foods, foodStock;
var database;
function preload()
{
  //load images here
  dogImg = loadImage ("images/dogImg.png");
  happyDogImg = loadImage ("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  
  var dog = createSpite (300,300);
  dog.addImage(dogImg,dog);
}


function draw() {  

  drawSprites();
  //add styles here

}



