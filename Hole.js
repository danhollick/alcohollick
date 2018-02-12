class Hole {
  constructor(d,id, company, year, pos, blurb, link,img,blackhole) {
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
  this.img = img
  this.blackhole = blackhole
}

place(objArray) {
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

display() {
  image(this.blackhole,this.x,this.y,this.d,this.d)
  var labelWidth = textWidth(this.company)
  textStyle(BOLD)
  fill(220,0,60)
  text(this.company, this.x - labelWidth/2, this.y+4)
}

contain(m){
  var popup = new popUp(this.company,this.year,this.pos,this.blurb,this.link, this.img)
  var poly = []
  poly[0] = createVector(m.position.x-m.width/2, m.position.y-m.height/2)
  poly[1] = createVector(m.position.x+m.width/2, m.position.y-m.height/2)
  poly[2] = createVector(m.position.x+m.width/2, m.position.y+m.height/2)
  poly[3] = createVector(m.position.x-m.width/2, m.position.y+m.height/2)
  poly[0] = createVector(m.position.x, m.position.y)
    this.isIn = collideCirclePoly(this.x,this.y,this.d/3,poly)
      if (this.isIn){
       popup.create()
      }
}

attract(m) {
  var poly = []
  poly[0] = createVector(m.position.x-m.width/2, m.position.y-m.height/2)
  poly[1] = createVector(m.position.x+m.width/2, m.position.y-m.height/2)
  poly[2] = createVector(m.position.x+m.width/2, m.position.y+m.height/2)
  poly[3] = createVector(m.position.x-m.width/2, m.position.y+m.height/2)
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
}}