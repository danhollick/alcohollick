class Hole {
  constructor(d, id, company, year, pos, blurb, link, img, blackhole) {
    this.d = d
    this.x = random(0 + this.d / 2, width - this.d / 2)
    this.y = random(0 + this.d / 2, height - this.d / 2)
    this.hit = true
    this.isCenter = true
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
    for (let i = 0; i < objArray.length; i++) {
      if (this.id !== i) {
        // dont do the check if it is looking at itself
        this.hit = collideCircleCircle(
          this.x,
          this.y,
          this.d,
          objArray[i].x,
          objArray[i].y,
          objArray[i].d * 3
        )
        this.isCenter = collideCircleCircle(
          this.x,
          this.y,
          this.d,
          windowWidth / 2,
          windowHeight / 2,
          150
        ) // Don't start in the center
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
    image(this.blackhole, this.x, this.y, this.d, this.d)
    const labelWidth = textWidth(this.company)
    textStyle(BOLD)
    fill(220, 0, 60)
    text(this.company, this.x - labelWidth / 2, this.y + 4)
  }

  contain(m) {
    const popup = new popUp(
      this.company,
      this.year,
      this.pos,
      this.blurb,
      this.link,
      this.img
    )
    this.isIn = collideCircleCircle(
      this.x,
      this.y,
      this.d / 3,
      m.position.x,
      m.position.y,
      16
    )
    if (this.isIn) {
      popup.create()
      suck.play(0, 2, 1.2)
    }
  }

  attract(m) {
    const l = m.position
    const h = createVector(this.x, this.y)
    if (
      collideCircleCircle(
        this.x,
        this.y,
        this.d + 20,
        m.position.x,
        m.position.y,
        40
      )
    ) {
      const force = p5.Vector.sub(h, l)
      let distance = force.magSq()
      distance = constrain(distance, 0, 50)
      force.normalize()
      const strength = 10 / distance
      force.mult(strength)
      m.applyForce(force)
    }
  }
}
