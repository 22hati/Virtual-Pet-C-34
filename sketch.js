var dog,happyDog,database,foodStock;
var foodS=1;

function preload() {
  database = firebase.database();

  dog=loadImage("images/dogImg.png");
  happyDog=loadImage("images/dogImg1.png");

  foodStalk=database.ref("food");
  foodStalk.on("value",readStock);
}

function setup() {
	createCanvas(500, 500);
  
  doggy= createSprite(250,250);
  doggy.addImage(dog);
  doggy.scale=0.15;
}


function draw() { 
  background("green"); 

  textSize(15);
  textAlign(CENTER);
  fill("white");
  text("feed Clifford by pressing the space key",250,15);
  text("food remaining : "+foodS,250,100);

  writeStock(foodS);

  drawSprites();
  //add styles here

}

function readStock(data) {
  foodS=data.val();
  
}

function writeStock(x) {
  if(keyCode===32) {
    if(x<=0) {
      x=0;
    }else {
      x=x-1;
    }
    doggy.addImage(happyDog);
  }

  database.ref("/").update({
    food:x
  })
}



