class CanonBall {
  constructor(x, y) {
    var options = {
      "density" :   1.5,
      "friction" : 1.0,
      "restitution" : 0.8,
      "frictionAir":0.06

   .body = Bodies.rectangle(x, y,50, 50, options)
    .width = 50
  .height = 50
    .Body.setAngle(this.body, angle)
      .image=CanonBall.png

    .add(world, this.body)
  }
display()
    var pos =this.body.position;
     pos.x= mouseX;
     pos.y=mouseY;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(2);
    stroke("white");
    fill("red");
    rect(0, 0, this.width, this.height);
    pop()
  }
};