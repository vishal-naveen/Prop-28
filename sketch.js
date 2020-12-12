var kid, kidi

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	kidi = loadImage("images/boy.png");
}

function setup() {
	createCanvas(800, 700);

	kid = createSprites(100,100,100,100);
	kid.addImage(kidi);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	tree1 = new Tree(10,20,600,100);
	ground = new Ground(300,680,1000,10);
	rock = new Stone(10,10, 400, 400);
	mango1 = new mango(100,100)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
//   tree1.display();
  ground.display();
  
  rock.display();

  drawSprites();
 
}



