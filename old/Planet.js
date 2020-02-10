class Planet {
  constructor(d, id, hue, sat, bright) {
    this.d = d
    // this.x = map(noise(id)0,1,-width,width)
    // this.y = map(noise(id)0,1,-height,height)
    this.x = floor(random(width))
    this.y = floor(random(height))
    this.id = id
    this.hit = true
    this.bumping = false
    this.hue = hue
    this.sat = sat
    this.bright = bright
    this.dot1x = random(0 - this.d / 4, 0 - this.d / 4)
    this.dot1y = random(0 - this.d / 4, 0 + this.d / 4)
    this.dot2x = random(0 - this.d / 4, 0 - this.d / 4)
    this.dot2y = random(0 + this.d / 4, 0 - this.d / 4)
    this.dot3x = random(0 - this.d / 6, 0 + this.d / 6)
    this.dot3y = random(0 - this.d / 6, 0 - this.d / 6)
  }

  place(objArray) {
    for (let i = 0; i < objArray.length; i++) {
      if (this.id !== i + 7) {
        // dont do the check if it is looking at itself
        this.hit = collideCircleCircle(
          this.x,
          this.y,
          this.d,
          objArray[i].x,
          objArray[i].y,
          objArray[i].d
        )
        this.isCenter = collideCircleCircle(
          this.x,
          this.y,
          this.d,
          windowWidth / 2,
          windowHeight / 2,
          40
        ) // colliding with anything?
        if (this.hit === true || this.isCenter === true) {
          // if we ever get a true we have to try again, this works since we iterate down through the objects one by one.
          // try again:
          this.x = random(0 + this.d / 2, width - this.d / 2)
          this.y = random(0 + this.d / 2, height - this.d / 2)
          this.place(objArray)
        }
      }
    }
  }

  display() {
    push()
    translate(this.x, this.y)
    noStroke()
    fill(this.hue, this.sat, this.bright)
    ellipse(0, 0, this.d, this.d)
    fill(this.hue, this.sat, this.bright - 20)
    ellipse(this.dot1x, this.dot1y, this.d / 3, this.d / 3)
    ellipse(this.dot2x, this.dot2y, this.d / 4, this.d / 4)
    ellipse(this.dot3x, this.dot3y, this.d / 6, this.d / 6)
    pop()
  }
}
