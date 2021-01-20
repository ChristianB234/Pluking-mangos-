
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var groundobj
var treeobj
var kidobj
var stoneobj

function preload()
{
	
}

function setup() {
	createCanvas(1600, 1600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundobj=new ground(400,600,200,80)
	treeobj=new tree(200,400,80,200)
    kidobj=new kid(200,200,80,80)
	stoneobj=new kid(80,80,40,40)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,255,255);
  groundobj.display()
  treeobj.display()
kidobj.display()
stoneobj.display()

  drawSprites();
 
}



