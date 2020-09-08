
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ball1,string,block1,block2,block3,block4,block5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

 
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball1= new Ball(100,500);
block1=new Block(180,108,0,0);
block3=new Block(545,400,300,10);
string=new Constraints(ball1.body,block1.body);
block4=new Box(525,200,20,20);
block5=new Box(515,200,20,20);
block6=new Box(535,200,20,20);
block7=new Box(516,250,100,20);
block8=new Box(516,300,60,60);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
 block3.display();
  ball1.display();
 block4.display();
 block5.display();
 block6.display();
 block7.display();
 block8.display();
  string.display();
  text("press space to bring back the stone",300,50);
  drawSprites();
 
}
function mouseDragged(){
	Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
	string.fly();
}
function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(ball1.body,{x:100,y:500});
		string.attach(ball1.body);
	}
}




