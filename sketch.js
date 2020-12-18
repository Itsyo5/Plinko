const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground;
var stand1, stand2, stand3, stand4, stand5, stand6, stand7;
var particles = [];
var plinkos = [];


function setup() {
  createCanvas(700,700);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 680, 1200, 10);

  stand1 = new Stand(60, 580, 10, 200);
  stand2 = new Stand(120, 580, 10, 200);
  stand3 = new Stand(180, 580, 10, 200);
  stand4 = new Stand(240, 580, 10, 200);
  stand5 = new Stand(300, 580, 10, 200);
  stand6 = new Stand(360, 580, 10, 200);
  stand7 = new Stand(420, 580, 10, 200);
  stand8 = new Stand(480, 580, 10, 200);
  stand9 = new Stand(540, 580, 10, 200);
  stand10 = new Stand(600, 580, 10, 200);

  for (var j = 75; j <=width; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,75,10));
  }

  for (var j = 50; j <=width-10; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,175,10));
  }

   for (var j = 75; j <=width; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,275,10));
  }

   for (var j = 50; j <=width-10; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,375,10));
     
  }
  
}

function draw() {
   background(0);

   Engine.update(engine);

   ground.display();

   stand1.display();
   stand2.display();
   stand3.display();
   stand4.display();
   stand5.display();
   stand6.display();
   stand7.display();
   stand8.display();
   stand9.display();
   stand10.display();

   for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }
  
  if(frameCount%60===0){
   particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
   
 }

 for (var j = 0; j < particles.length; j++) {
  
    particles[j].display();
  }
}
