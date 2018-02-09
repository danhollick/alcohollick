
function setup() {
  createCanvas(windowWidth, windowHeight)
  rectMode(CENTER)
  reset()
}

function draw() {
  background(59,49,56)
  // holes funcs
  for (var h = 0; h < numHoles; h++) {
    holes[h].place(holes)
    holes[h].contain(mover)
    holes[h].attract(mover)
    holes[h].display()
  }
  //planet funcs
  for (var j = 0; j < numPlanets; j++) {
    planets[j].place(holes)
    planets[j].place(planets)
    //planets[j].bump(mover)
    planets[j].display()
  }

  Steer()
  //friction
  var friction = mover.velocity.copy()
  friction.normalize()
  var c = -0.1
  friction.mult(c)
  //mover funcs
  mover.applyForce(friction)
  mover.update()
  mover.bump(planets)
  mover.display()
  mover.checkEdges() 
}

function reset() {

  numHoles = 5
  holes = []
  company = ["Levergy", "Maven Agency", "Barclays Africa", "Fuse", "The Fucking Weather"]
  year = ["2014", "2015", "2015 - 2016", "2016 - Present", "2018"]
  pos = ["Art Director", "UI Designer", "Product Designer", "Lead Product Designer", "Designer, Developer"]
  blurb = ["In today’s net-savvy world it has become common for any business to have a website which they use mostly for advertising their products and services.",
   "In today’s net-savvy world it has become common for any business to have a website which they use mostly for advertising their products and services.",
    "In today’s net-savvy world it has become common for any business to have a website which they use mostly for advertising their products and services.",
    "In today’s net-savvy world it has become common for any business to have a website which they use mostly for advertising their products and services.",
    "In today’s net-savvy world it has become common for any business to have a website which they use mostly for advertising their products and services."]
  link = ["http://www.levergy.co.za/", "http://www.mavenagency.co.za/", "https://www.barclaysafrica.com/barclaysafrica/", "https://www.fusetools.com/", ""]
  numPlanets = 100
  planets = []
  mover = new Mover(windowWidth/2,windowHeight/2,28,8)

  for (var l = 0; l < numHoles; l++) {
    h = new Hole(150, l, company[l], year[l],pos[l],blurb[l],link[l]) // generate a random sized circObj and store it's ID for later
    holes.push(h)
  }

  for (var k = 0; k < numPlanets; k++) {
    p = new Planet(random(8,40), k+5) // generate a random sized circObj and store it's ID for later
    planets.push(p)
  }
}

function resetDiv() {
  removeElements()
}

function popUp(company, year, pos, blurb,link) {
  reset()
  //create elements
  var container = select('#container')
  var mainDiv = createDiv().addClass('fixed z-2 bg-black-40 w-100 vh-100 flex items-center justify-center')
  var card = createDiv().addClass('w-70 br2 vh-75 bg-white flex')
  var imgBG = createDiv().addClass('w-50 h-100 br2 bg-near-white')
  var textCont = createDiv().addClass('pa4 w-50 flex items-center justify-center')
  var textBound = createDiv()
  var year = createElement('h2', year,).addClass('f2 fw8 moon-gray mb0')
  var comp = createA(link, company,'_blank').addClass('f1 link fw8 dark-gray ma0') 
  var pos = createElement('h2', pos).addClass('f2 fw6 gray mt0')
  var blurb = createP(blurb).addClass('f6 lh-copy word-wrap gray')
  var btnCnt = createA('javascript:resetDiv()',"",'_blank').addClass('link ml3')
  var btnBG = createDiv().addClass('br2 w-25 flex items-center justify-center bg-blue pointer grow')
  var btnTxt = createP("Done").addClass('mh3 f7 fw6 white o-80 glow')

  //organise tree
  container.child(mainDiv)
  mainDiv.child(card)
  card.child(imgBG)
  card.child(textCont)
  textCont.child(textBound)
  textBound.child(year)
  textBound.child(comp)
  textBound.child(pos)
  textBound.child(blurb)
  textBound.child(btnCnt)
  btnCnt.child(btnBG)
  btnBG.child(btnTxt)
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

function Planet(d,id){
  this.d = d
  this.x = random(width)
  this.y = random(height)
  this.id = id
  this.hit = true
  this.bumping = false
}

Planet.prototype.place =function(objArray) {
  for(i=0;i<objArray.length;i++){
        if(this.id != i+5){ //dont do the check if it is looking at itself
          this.hit = collideCircleCircle(this.x, this.y, this.d, objArray[i].x, objArray[i].y, objArray[i].d); //colliding with anything?
          if(this.hit == true){ // if we ever get a true we have to try again, this works since we iterate down through the objects one by one.
            //try again:
            this.x = random(width)
            this.y = random(height)
          }
        }
      }
}

Planet.prototype.display = function() {
  fill(0);
  ellipse(this.x, this.y,this.d,this.d)
  stroke(255,255,255,80)
  fill(255,255,255,70)
  ellipse(this.x, this.y,this.d,this.d)
}

function Hole(d,id, company, year, pos, blurb, link) {
  this.d = d
  this.x = random(0 + this.d/2, width - this.d/2)
  this.y = random(0 + this.d/2, height - this.d/2)
  this.hit = true
  this.isIn = false
  this.id = id
  this.company = company
  this.year = year
  this.pos = pos
  this.blurb = blurb
  this.link = link
}

Hole.prototype.place = function(objArray) {
  for(var i=0;i<objArray.length;i++){
        if(this.id != i){ //dont do the check if it is looking at itself
          this.hit = collideCircleCircle(this.x, this.y, this.d, objArray[i].x, objArray[i].y, objArray[i].d*3); //colliding with anything?
          if(this.hit === true){ // if we ever get a true we have to try again, this works since we iterate down through the objects one by one.
            //try again:
            this.x = random(0 + this.d/2, width - this.d/2)
            this.y = random(0 + this.d/2, height - this.d/2)
          }
        }
    }
}

Hole.prototype.display = function() {
  fill(0);
  ellipse(this.x, this.y,this.d/3, this.d/3)
  stroke(255,255,255,20)
  fill(255,255,255,10)
  ellipse(this.x, this.y,this.d, this.d)
  labelWidth = textWidth(this.company)
  fill(255)
  text(this.company, this.x - labelWidth/2, this.y)
  
}

Hole.prototype.contain = function(m) {
  var poly = []
  poly[0] = createVector(m.position.x, m.position.y)
    this.isIn = collideCirclePoly(this.x,this.y,this.d/3,poly)
      if (this.isIn){
       popUp(this.company,this.year,this.pos,this.blurb)
      }
}

Hole.prototype.attract = function(m) {
  var poly = []
  poly[0] = createVector(m.position.x, m.position.y)
  var l = m.position;
  var h = createVector(this.x,this.y)
  if (collideCirclePoly(this.x,this.y,this.d,poly))
    {
      var force = p5.Vector.sub(h,l)
      var distance = force.magSq()
      distance = constrain(distance, 0,50)
      force.normalize()
      var strength = 10/distance
      force.mult(strength)
      m.applyForce(force)
    }
}

function Mover(x,y, w, h) {
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
}

// Newton's 2nd law: F = M * A
// or A = F / M
Mover.prototype.applyForce = function(force) {
  var f = p5.Vector.div(force,this.mass);
  this.acceleration.add(f);
};
  
Mover.prototype.update = function() {
  // Velocity changes according to acceleration
  this.velocity.add(this.acceleration);
  // position changes by velocity
  this.position.add(this.velocity);
  // We must clear acceleration each frame
  this.acceleration.mult(0);
};

Mover.prototype.display = function() {
  push()
  translate(this.position.x, this.position.y)
  this.angle = atan2((this.velocity.y),(this.velocity.x))
  rotate(this.angle)
  strokeWeight(2)
  stroke(255,100)
  rect(0, 0,this.width,this.height)
  pop()
};

Mover.prototype.bump = function(objArray) {
      var l = this.position;
       for(var i=0;i<objArray.length;i++){
        var poly = []
        poly[0] = createVector(this.position.x, this.position.y)
        this.bumping = collideCirclePoly(objArray[i].x, objArray[i].y, objArray[i].d,poly)

        //this.bumping = collideRectCircle(l.x,l.y,this.w,this.h,objArray[i].x, objArray[i].y, objArray[i].d)
        if (this.bumping){
          this.velocity.mult(-0.9)
        }
      }
}

// Bounce off bottom of window
Mover.prototype.checkEdges = function() {
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
};