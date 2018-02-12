class Planet { 
  constructor(d,id,hue,opacity, asteroid){
  this.d = d
  this.x = floor(random(width))
  this.y = floor(random(height))
  this.id = id
  this.hit = true
  this.bumping = false
  this.hue = hue
  this.opacity = opacity
}

place(objArray) {
  for(var i=0;i<objArray.length;i++){
        if(this.id != i+5){ //dont do the check if it is looking at itself
          this.hit = collideCircleCircle(this.x, this.y, this.d, objArray[i].x, objArray[i].y, objArray[i].d);
          this.isCenter = collideCircleCircle(this.x,this.y,this.d,windowWidth/2,windowHeight/2,40)//make sure we never spawn an asteroid under the ship
          if(this.hit == true ||  this.isCenter == true){ // if we ever get a true we have to try again, this works since we iterate down through the objects one by one.
            //try again:
            this.x = floor(random(width))
            this.y = floor(random(height))
          }
        }
      }
}

display(d,opacity) {
  push()
  translate(this.x, this.y)
  noStroke()
  // fill(this.hue,70,100,this.opacity)
  // ellipse(this.x, this.y,this.d,this.d)
  rotate(this.hue)
  // tint(this.hue,70,100)
  image(asteroid,0,0,this.d,this.d)
  pop()
}
}