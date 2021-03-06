const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var world, engine, ground;
var box1;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground();

  box1 = new Box(200, 300, 50, 50);

  box2 = new Box(240, 100, 50, 100);

}

function draw() {
  background("blue"); 
  
  Engine.update(engine);
  
  box1.display();
  box2.display();
  ground.display();
  
}