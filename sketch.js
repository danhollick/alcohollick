
var rocket
var blackhole
var carrier
var modulator
var isMuted 
var someNoise

function preload() {
  rocket = loadImage('assets/Rocket.png')
  blackhole = loadImage('assets/Blackhole.png')
  soundFormats('mp3', 'ogg')
  ping = loadSound('assets/ping.mp3')
  suck = loadSound('assets/suck.mp3')
}

function setup() {
  if (displayWidth < displayHeight && displayWidth < 1025){
    createCanvas(windowWidth, windowHeight);
    var bgDiv = createDiv().addClass('absolute tc bg-red pa5 vh-100 w-100 flex items-center justify-center')
    var cntDiv = createDiv()
    var heading = createElement('h1', "The site requires a keyboard to run.").addClass('f1 fw6 white')
    var info = createElement('h2', "(If you are seeing this and you do have a keyboard, it's because I am using your screen size to guess. So it's probably because your screen is quite small.)").addClass('f3 fw3 white measure')
    // smlCanvas.parent('error')
    bgDiv.parent('#error')
    cntDiv.parent(bgDiv)
    heading.parent(cntDiv)
    info.parent(cntDiv)
    console.log("display: "+ displayWidth)
    console.log("window: "+ windowWidth)
    console.log("p-density: "+ pixelDensity())
    console.log("window/p-density: "+ windowWidth/pixelDensity())
    noLoop()
  }
  else {
  createCanvas(windowWidth, windowHeight) 
  rectMode(CENTER)
  imageMode(CENTER)
  colorMode(HSB)
  angleMode(DEGREES)
  reset()

  carrier = new p5.Oscillator() // connects to master output by default
  carrier.freq(340)
  carrier.amp(0)
  // carrier's amp is 0 by default, giving our modulator total control
  carrier.start()

  modulator = new p5.Oscillator('triangle')
  modulator.disconnect()  // disconnect the modulator from master output
  modulator.freq(5)
  modulator.amp(1)
  modulator.start()
  // Modulate the carrier's amplitude with the modulator
  // Optionally, we can scale the signal.
  carrier.amp(modulator.scale(-1,1,1,-1))

  masterVolume(0.2)
  isMuted = false
  }
}

function draw() {
  background(206,39,14)
  // for (var h = 0; h < numStars; h++) {
  //   stars[h].display()
  // }
  for (var h = 0; h < numHoles; h++) {
    holes[h].contain(mover)
    holes[h].attract(mover)
    holes[h].display()
  }
  for (var j = 0; j < numPlanets; j++) {
    planets[j].display()
  }

  Steer()
  //friction
  mover.update()
  mover.bump(planets)
  mover.display()
  mover.checkEdges() 

  speed = mover.velocity.mag()
  var panning = map(mover.position.x, 0., width,-1.0, 1.0)
  carrier.pan(panning)

  var modFreq = map(speed, 0, 10, 0, 60);
  modulator.freq(modFreq);

  var modAmp = map(speed, 0.2, 10, 0.0, 1,true);
  modulator.amp(modAmp, 0.01);
}

function reset() {
  numHoles = 6
  holes = []
  numPlanets = windowWidth/15
  planets = []
  // numStars = 200
  // stars = []
  mover = new Mover(windowWidth/2,windowHeight/2,28,8,rocket)
  data = new Data()

  // for (var z = 0; z < numStars; z++) {
  //   var sx = map(noise(z),0,1,0,width)
  //   var sy = map(noise(z+200),0,1,0,height)
  //   s = new Stars(sx,sy)
  //   stars.push(s)
  // }

  for (var l = 0; l < numHoles; l++) {
    h = new Hole(150, l, data.company[l], data.year[l], data.pos[l],data.blurb[l], data.link[l], data.img[l],blackhole) // generate a random sized circObj and store it's ID for later
    holes.push(h)
    holes[l].place(holes)
  }

  for (var k = 0; k < numPlanets; k++) {
    var d = map(noise(k),0,1,8,32)
    var s = map(noise(k),0,1,0,60)
    var b = map(noise(k),0,1,40,100)
    var h = map(noise(k),0,1,150,220)
    p = new Planet(d, k + numHoles, h,s,b) // generate a random sized circObj and store it's ID for later
    planets.push(p)
    planets[k].place(planets)
    planets[k].place(holes)
  }
}

function mute() {
  if (isMuted == false) {
    masterVolume(0.0)
    isMuted = true
  } else {
    masterVolume(0.2)
    isMuted = false
  }
}

function resetDiv() {
  removeElements()
  suck.stop()
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

// function Stars(opacity,sx,sy) {
//   this.x = sx
//   this.y = sy
// }

// Stars.prototype.display = function() {
//   push()
//   stroke(0,0,100)
//   point(this.x, this.y)
//   pop()
// }
