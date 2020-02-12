let rocket
let blackhole
let carrier
let modulator
let isMuted
let someNoise
let data

function preload() {
  rocket = loadImage('assets/Rocket.png')
  blackhole = loadImage('assets/Blackhole.png')
  data = loadJSON('./data.json')
  soundFormats('mp3', 'ogg')
  ping = loadSound('assets/ping.mp3')
  suck = loadSound('assets/suck.mp3')
}

function setup() {
  if (displayWidth < displayHeight && displayWidth < 1025) {
    createCanvas(windowWidth, windowHeight)
    const bgDiv = createDiv().addClass(
      'absolute tc bg-red pa5 vh-100 w-100 flex items-center justify-center'
    )
    const cntDiv = createDiv()
    const heading = createElement(
      'h1',
      'The site requires a keyboard to run.'
    ).addClass('f1 fw6 white')
    const info = createElement(
      'h2',
      "(If you are seeing this and you do have a keyboard, it's because I am using your screen size to guess. So it's probably because your screen is quite small.)"
    ).addClass('f3 fw3 white measure')
    // smlCanvas.parent('error')
    bgDiv.parent('#error')
    cntDiv.parent(bgDiv)
    heading.parent(cntDiv)
    info.parent(cntDiv)
    noLoop()
  } else {
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
    modulator.disconnect() // disconnect the modulator from master output
    modulator.freq(5)
    modulator.amp(1)
    modulator.start()
    // Modulate the carrier's amplitude with the modulator
    // Optionally, we can scale the signal.
    carrier.amp(modulator.scale(-1, 1, 1, -1))

    masterVolume(0.2)
    isMuted = false
  }
}

function draw() {
  background(206, 39, 14)
  // for (var h = 0; h < numStars; h++) {
  //   stars[h].display()
  // }
  for (let h = 0; h < numHoles; h++) {
    holes[h].contain(mover)
    holes[h].attract(mover)
    holes[h].display()
  }
  for (let j = 0; j < numPlanets; j++) {
    planets[j].display()
  }

  Steer()
  // friction
  mover.update()
  mover.bump(planets)
  mover.display()
  mover.checkEdges()

  speed = mover.velocity.mag()
  const panning = map(mover.position.x, 0, width, -1.0, 1.0)
  carrier.pan(panning)

  const modFreq = map(speed, 0, 10, 0, 60)
  modulator.freq(modFreq)

  const modAmp = map(speed, 0.2, 10, 0.0, 1, true)
  modulator.amp(modAmp, 0.01)
}

function reset() {
  numHoles = 7
  holes = []
  numPlanets = windowWidth / 20
  planets = []
  mover = new Mover(windowWidth / 2, windowHeight / 2, 28, 8, rocket)

  for (let l = 0; l < numHoles; l++) {
    h = new Hole(
      150,
      l,
      data[l].company,
      data[l].year,
      data[l].position,
      data[l].blurb,
      data[l].link,
      data[l].img,
      blackhole
    )
    holes.push(h)
    holes[l].place(holes)
  }

  for (let k = 0; k < numPlanets; k++) {
    const d = map(noise(k), 0, 1, 8, 32)
    const s = map(noise(k), 0, 1, 0, 60)
    const b = map(noise(k), 0, 1, 40, 100)
    var h = map(noise(k), 0, 1, 150, 220)
    p = new Planet(d, k + numHoles, h, s, b) // generate a random sized circObj and store it's ID for later
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
    var thrust = createVector(-0.2, 0)
    mover.applyForce(thrust)
  }

  if (keyIsDown(RIGHT_ARROW)) {
    var thrust = createVector(0.2, 0)
    mover.applyForce(thrust)
  }

  if (keyIsDown(UP_ARROW)) {
    var thrust = createVector(0, -0.2)
    mover.applyForce(thrust)
  }

  if (keyIsDown(DOWN_ARROW)) {
    var thrust = createVector(0, 0.2)
    mover.applyForce(thrust)
  }
}
