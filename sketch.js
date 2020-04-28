const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var wall1,walll2,wall3,wall4;
var box1,box2,box3,box4,box5,box6,box7;
var stick1,stick2,stick3,stick4;

function setup() {
  createCanvas(800,800);
  
  engine = Engine.create();
	world = engine.world;

  Engine.run(engine);

  wall1 = new Wall(400,790,800,20);
  wall2 = new Wall(400,10,800,20);
  wall3 = new Wall(790,400,20,800);
  wall4 = new Wall(10,400,20,800);

  box1 = new Box(420,680,80,80);
  box2 = new Box(380,680,80,80);
  box3 = new Box(360,680,80,80);
  box4 = new Box(440,680,80,80);
  box5 = new Box(420,660,80,80);
  box6 = new Box(380,660,80,80);
  box7 = new Box(400,610,80,80);

  stick1 = new Stick(440,750,80,200);
  stick2 = new Stick(420,750,80,200);
  stick3 = new Stick(380,750,80,200);
  stick4 = new Stick(360,750,80,200);
}

function draw() {
  background("cyan");

  Engine.update(engine);

  wall1.display();
  wall2.display();
  wall3.display();
  wall4.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();

  stick1.display();
  stick2.display();
  stick3.display();
  stick4.display();

  spawnBubble();
  drawSprites();

textSize(75);
fill("violet");
text("Palace of Atlantis",100,200);
}

function spawnBubble(){
  var rand = random(20,60);

  if(frameCount % 100 === 0){
    var bubble1;
    bubble1 = createSprite(random(45,200),900,rand,rand);
    bubble1.velocityY = -3;
    bubble1.shapeColor = "#87CEEB";
  }

  if(frameCount % 100 === 25){
    var bubble2;
    bubble2= createSprite(random(755,600),900,rand,rand);
    bubble2.velocityY = -3;
    bubble2.shapeColor = "#87CEEB";
  }
}