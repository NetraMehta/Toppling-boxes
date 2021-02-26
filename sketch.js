const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, ground, box1, box2;

function setup() {
  createCanvas(400,400);
  
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(200, 390, 400, 20);

  box1 = new Box(200, 350, 30, 30);
  box2 = new Box(220, 290, 30, 30);
}

function draw() {
  background(0);  
  
  Engine.update(engine);

  ground.display();

  box1.display();
  box2.display();
}