
const Engine = Matter.Engine;
const World = Matter.World;

//create Bodies
const Bodies = Matter.Bodies;

//For applying properties
const Body = Matter.Body;

var engine;
var world;
var ground;
var wall1,wall2,wall3;
var ball;
function setup() {
  createCanvas(400,400);

  engine=Engine.create();
  world=engine.world;
  
  //Creating object
  ground=new Ground(200,390,400,20);
  wall1=new Ground(150,200,30,20);
  wall2=new Ground(250,200,30,20);
  wall3=new Ground(350,200,30,20);

  var balloptions={
    restitution:0.8
  }

  ball=Bodies.circle(100,200,20,balloptions);
  World.add(world,ball);

  btn = createImg("up.png"); 
  btn.position(20,30); 
  btn.size(50,50); 
  btn.mouseClicked(hforce);
}
function draw() 
{
  background(51);
  Engine.update(engine);

  ground.display();
  wall1.display();
  wall2.display();
  wall3.display();

  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20);
  
}

function hforce(){
 Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:0.05})
}
