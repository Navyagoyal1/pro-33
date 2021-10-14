const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

var bg;
var snowParticles = [];



function preload() {
  bg = loadImage("snow2.jpg");

}





function setup() {
  createCanvas(800, 400);
  engine = Engine.create();
  world = engine.world;
  for (var i = 0; i < 100; i++) {
    snowParticles.push(new Snow(random(0, 800), random(0, 400), 10));

  }


}

function draw() {
  background(bg);

  Engine.update(engine);
  for (var i = 0; i < 100; i++) {
    snowParticles[i].display();
    if (snowParticles[i].body.position.y > 400) {
      Matter.Body.setPosition(snowParticles[i].body, { x: random(0, 800), y: random(0, 400) });
    }
  }
  drawSprites();
}