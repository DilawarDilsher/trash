var paper ,box1 ,box2 ,box3 ,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
paperImg=loadImage("paper.png");
box1Img=loadImage("dustbingreen.png");

}

function setup() {
	createCanvas(800, 700);
    paper= image ("paperImg");
	box1=createSprite(500,610,20,100);
	/*box2=createSprite(700,610,20,100);
	box3=createSprite(600,660,200,10);
	box1.shapeColor=color("blue");
	box2.shapeColor=color("blue");
	box3.shapeColor=color("blue");
*/
box1= image ("box1Img");

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	paper = createSprite(100,648,25,25);
	paper.x=World.mouseX;
	paper.y=World.mouseY;
	


	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	//World.add(world, ground);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  paper.x=mouseX;
	paper.y=mouseY;
  
	




	drawSprites();
 
}

function keyPressed() {

if(keyCode === UP_ARROW){

	Matter.Body.applyForce(paperOblect.body,paperOblect.body.position,{x:85,y:85});

}



}

