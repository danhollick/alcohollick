
var rocket
var asteroid
var blackhole
// var boosters
function preload() {
  rocket = loadImage('assets/Rocket.png')
  asteroid = loadImage('assets/Asteroid.png')
  blackhole = loadImage('assets/Blackhole.png')
  // soundFormats('mp3', 'ogg')
  // boosters = loadSound('assets/boosters.mp3')
}

function setup() {
  if (windowWidth < windowHeight && windowWidth < 1100){
    createCanvas(windowWidth, windowHeight) 
    // background(0,0,0)
    var labelWidth = textWidth("This site does not support mobile devices")
    fill(0)
    text("This site does not support mobile devices", windowWidth/2-labelWidth/2, windowHeight/2)
    noLoop()
  }
  else {
  createCanvas(windowWidth, windowHeight) 
  rectMode(CENTER)
  imageMode(CENTER)
  colorMode(HSB)

  angleMode(DEGREES)
  reset()
  }
}

function draw() {
  background(206,39,14)
  for (var h = 0; h < numStars; h++) {
    stars[h].display()
  }
  
  //planet funcs
  
  // holes funcs
  for (var h = 0; h < numHoles; h++) {
    holes[h].place(holes)
    holes[h].contain(mover)
    holes[h].attract(mover)
    holes[h].display()
  }
  for (var j = 0; j < numPlanets; j++) {
    planets[j].place(holes)
    planets[j].place(planets)
    planets[j].display()
  }

  Steer()
  //friction
  var friction = mover.velocity.copy()
  friction.normalize()
  var c = -0.1
  friction.mult(c)

  //mover funcs
  if ((mover.velocity.mag()) > 0.2){
   mover.applyForce(friction)
  }
  mover.update()
  mover.bump(planets)
  mover.display()
  mover.checkEdges() 
}

function reset() {
  numHoles = 6
  holes = []
  numPlanets = 100
  planets = []
  numStars= 200
  stars = []
  mover = new Mover(windowWidth/2,windowHeight/2,28,8,rocket)
  data = new Data()

  for (var l = 0; l < numStars; l++) {
    s = new Stars(floor(random(1,2)),floor(random(10,40)))
    stars.push(s)
  }

  for (var l = 0; l < numHoles; l++) {
    h = new Hole(150, l, data.company[l], data.year[l], data.pos[l],data.blurb[l], data.link[l], data.img[l],blackhole) // generate a random sized circObj and store it's ID for later
    holes.push(h)
  }

  for (var k = 0; k < numPlanets; k++) {
    var d = map(noise(k),0,1,8,32)
    var s = map(noise(k),0,1,0,60)
    var b = map(noise(k),0,1,40,100)
    var h = map(noise(k),0,1,150,220)
    p = new Planet(d, k+ holes.length, h,s,b) // generate a random sized circObj and store it's ID for later
    planets.push(p)
  }
}
function drawGradient(x, y) {
  var radius = dim/2;
  var h = random(0, 360);
  var s = random(0, 360);
  var b = random(0, 360);
  for (var r = radius; r > 0; --r) {
    fill(h, s, 90);
    ellipse(x, y, r, r);
    h = (h + 1) % 360;
  }
}

function resetDiv() {
  removeElements()
}

function Steer() {
  if (keyIsDown(LEFT_ARROW)) {
    var thrust = createVector(-0.2,0)
    mover.applyForce(thrust)
  }

  if (keyIsDown(RIGHT_ARROW)) {
    var thrust = createVector(0.2,0)
    mover.applyForce(thrust)
  }

  if (keyIsDown(UP_ARROW)) {
    var thrust = createVector(0,-0.2)
    mover.applyForce(thrust)
  }

  if (keyIsDown(DOWN_ARROW)) {
    var thrust = createVector(0,0.2)
    mover.applyForce(thrust)
  }
}

function Stars(d,opacity) {
  this.x = random(width)
  this.y = random(height)
  this.d = d
  this.opacity
}

Stars.prototype.display = function() {
  noStroke()
  fill(0,0,100,this.opacity)
  ellipse(this.x, this.y,this.d,this.d)
}
