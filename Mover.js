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
  this.velocity.limit(10)
  // position changes by velocity
  this.position.add(this.velocity);
  // We must clear acceleration each frame
  this.acceleration.mult(0);
  var friction = mover.velocity.copy()
  friction.normalize()
  var c = -0.1
  friction.mult(c)

  //mover funcs
  if ((mover.velocity.mag()) > 0.2){
   mover.applyForce(friction)
  }
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

gravity(objArray){
       for(var i=0;i<objArray.length;i++){
        this.bumping = collideCircleCircle(objArray[i].x, objArray[i].y, objArray[i].d, this.position.x, this.position.y, 34)
        if (this.bumping){
          this.velocity.mult(-1.1)
        }
      }
}

bump(objArray) {
       for(var i=0;i<objArray.length;i++){
        this.bumping = collideCircleCircle(objArray[i].x, objArray[i].y, objArray[i].d, this.position.x, this.position.y, 34)
        if (this.bumping){
          this.velocity.mult(-1.1)
          var rate = map(this.velocity.mag(),0,10,0.5,2.0) 
          ping.play(0,rate,0.6,0,0.4)
          ping.playMode('untilDone')
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