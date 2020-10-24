
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	
line1 = new Line(600,400,200,20);
line2 = new Line(500,350,20,100);
line3 = new Line(700,350,20,100);

ball1 = new Ball(50,100);

ground = new Lime(400,410,800,20);

	Engine.run(engine);
  
}


function draw() {
  
  background(0);

  Engine.update(engine);
   
line1.display();
line2.display();
line3.display();

ground.display();

ball1.display(); 

  drawSprites();
 
}



