class Ball
 {
  constructor(x, y) {
    var options = {
      "density" :   1.5,
      "friction" : 1.0,
      "restitution" : 0.8,
      "frictionAir":0.06
       .body = Bodies.rectangle(x, y, 20, height, options)
      .width = 20
      .height = height
      .Body.setAngle(this.body, angle)
      
      .add(world, this.body)
    }
    display()
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(2);
      stroke("yellow");
      fill("orange");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };