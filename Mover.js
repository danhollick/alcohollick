class Mover {
  constructor(x,y, w, h,img) {
  this.mass = 4
  this.position = createVector(x,y)
  this.velocity = createVector(0,0)
  this.acceleration = createVector(0,0)
  this.angle = 0
  this.width = w
  this.height = h,
  this.x = x
  this.y = y 
  this.bumping = false
  this.rocket = rocket
}

// Newton's 2nd law: F = M * A
// or A = F / M
applyForce(force) {
  var f = p5.Vector.div(force,this.mass);
  this.acceleration.add(f);
};
  
update() {
  // Velocity changes according to acceleration
  this.velocity.add(this.acceleration);
  // position changes by velocity
  this.position.add(this.velocity);
  // We must clear acceleration each frame
  this.acceleration.mult(0);
};

display() {
  push()
  translate(this.position.x, this.position.y)
  this.angle = atan2((this.velocity.y),(this.velocity.x))
  rotate(this.angle)
  // fill(359,70,96)
  noStroke()
  rect(0, 0,this.height,this.height)
  rotate(90)
  image(this.rocket,0,0,28,36)
  pop()
}

bump(objArray) {
      var l = this.position;
       for(var i=0;i<objArray.length;i++){
        var poly = []
        poly[0] = createVector(this.position.x-this.width/2, this.position.y-this.height/2)
        poly[1] = createVector(this.position.x+this.width/2, this.position.y-this.height/2)
        poly[2] = createVector(this.position.x+this.width/2, this.position.y+this.height/2)
        poly[3] = createVector(this.position.x-this.width/2, this.position.y+this.height/2)
        this.bumping = collideCirclePoly(objArray[i].x, objArray[i].y, objArray[i].d,poly)

        //this.bumping = collideRectCircle(l.x,l.y,this.w,this.h,objArray[i].x, objArray[i].y, objArray[i].d)
        if (this.bumping){
          this.velocity.mult(-0.9)
        }
      }
}

// Bounce off bottom of window
checkEdges() {
  if (this.position.y > (height)) {
    // A little dampening when hitting the bottom
    this.position.y = (0);
  }
  if (this.position.y < (0)) {
    // A little dampening when hitting the bottom
    this.position.y = (height);
  }
  if (this.position.x > (width )) {
    // A little dampening when hitting the bottom
    this.position.x = (0);
  }
  if (this.position.x < (0)) {
    // A little dampening when hitting the bottom
    this.position.x = (width);
  }
}};