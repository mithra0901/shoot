const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;




function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    Ground = new Ground(600,height,1200,20);
    Tanker = new Tanker(700,320,70,70);
    
   

    ShootBall= new ShootBall (810,260,300,PI/2);

    
   
   
  CanonBall= new CanonBall (810,180,300,PI/2);


}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
  CanonBall.display();
    ShootBall.display();
    Ground.display();
    Tanker.display();
    Ball.display();

}