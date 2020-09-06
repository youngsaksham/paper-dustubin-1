 var packageBody,ground,world,box1,engine,dustubin1,dustubin2,dustubin3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var red3 , red1, red2;
var groundSprites,dustubinSprites2,dustubinSprites1,dustubinSprites3;

function preload()
{
 
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	engine = Engine.create();
    world = engine.world;

	var pac = {
		isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
    }
 
	groundSprites = createSprite(400,650,800,8);

	dustubinSprites1 = createSprite(410,542,8,150);
	dustubinSprites2 = createSprite(580,542,8,150);
	dustubinSprites3 = createSprite(495,620,179,8);
	 
	box1 = new Box(50, 260, 50,50);
	World.add(world,box1 );

	//Create a Ground
	ground = Bodies.rectangle(400, 650, 800, 8 , {isStatic:true} );
	 World.add(world, ground);

	 dustubin1 = Bodies.rectangle(410,542,8,150, {isStatic:true} );
	 World.add(world, dustubin1);

	 dustubin2 = Bodies.rectangle(580,542,8,150, {isStatic:true} );
	 World.add(world, dustubin2);

	 dustubin3 = Bodies.rectangle(495,620,179,8, {isStatic:true} );
	 World.add(world, dustubin3);
	 keyPressed();

	Engine.run(engine);
} 



function draw() {
  rectMode(CENTER);
  background(0); 

  drawSprites();
  Engine.update(engine);
  box1 .display();
 
}

function keyPressed() {
 if (keyCode === UP_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on
	 
Matter.Body.applyForce(box1.body, box1.body.position, {x:130,y:-130})
	 
 }
}