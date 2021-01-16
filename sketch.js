
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boyImg,stone,chain;

function preload()
{
boyImg= loadImage("sprites/boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

tree= new Tree(100,100,100,100);

ground=new Ground(400,350,800,700);

stone=new Stone(200,510,20,20);

mango1=new Mango(650,510,5,5);
mango2=new Mango(670,560,5,5);
mango3=new Mango(580,490,5,5);
mango4=new Mango(560,590,5,5);

chain = new Chain(stone.body, {x:200, y:510});

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  tree.display();

  ground.display();

  stone.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();

  chain.display();

  image(boyImg,200, 400, 50,150);

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);

  keyPressed();

  drawSprites();
 
}

function mouseDragged(){
Matter.Body.setPosition (stone.body,{x:mouseX, y:mouseY});
}

function mouseReleased(){
chain.fly();
}

function detectCollision(stone,mango1){
  mango1BodyPosition=mango1.body.position;
  stoneBodyPosition=stone.body.position;

  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mango1BodyPosition.x, mango1BodyPosition.y);

  if (distance<-mango1.r+stonestone.r){
    Matter.Body.setStatic(mango1.body, false);
  }

}

function detectCollision(stone,mango2){
  mango2BodyPosition=mango2.body.position;
  stoneBodyPosition=stone.body.position;

  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mango2BodyPosition.x, mango2BodyPosition.y);

  if (distance<-mango2.r+stonestone.r){
    Matter.Body.setStatic(mango2.body, false);
  }

}

function detectCollision(stone,mango3){
  mango3BodyPosition=mango3.body.position;
  stoneBodyPosition=stone.body.position;

  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mango3BodyPosition.x, mango3BodyPosition.y);

  if (distance<-mango3.r+stonestone.r){
    Matter.Body.setStatic(mango3.body, false);
  }

}

function detectCollision(stone,mango4){
  mango4BodyPosition=mango4.body.position;
  stoneBodyPosition=stone.body.position;

  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mango4BodyPosition.x, mango4BodyPosition.y);

  if (distance<-mango4.r+stone.r){
    Matter.Body.setStatic(mango4.body, false);
  }

}

function keyPressed (){
if (keyCode===32){
 Matter.Body.setPosition(stone.body,{x:200, y:510});
  chain.attach(stone.body);
}
}