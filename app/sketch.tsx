'use client'
import dynamic from 'next/dynamic'

// Will only import `react-p5` on client-side
const Sketch = dynamic(() => import('react-p5').then(mod => mod.default), {
  ssr: false,
})

interface VectorfieldProps {
  dimensions: Dimensions
}

interface Dimensions {
  width: number
  height: number
}

var inc = 0.1
var scl = 60
var cols, rows

var zoff = 0

var rate = 60
var fr
var rotationSpeed = 2.2

var flowfield
let from
let to

const Vectorfield = ({ grid, mode, wave, color }) => {
  const setup = (p5, canvasParentRef) => {
    // console.log('setup', grid.innerWidth, grid.innerHeight)
    p5.createCanvas(grid.outerWidth, grid.outerHeight)
      .parent(canvasParentRef)
      .class('absolute top-0 bottom-0 left-0 right-0 h-screen w-screen -z-10 ')
    from = p5.color(180, 180, 180)
    to = p5.color(0, 56, 254)

    rotationSpeed = p5.map(grid.outerWidth, 1800, 2000, 2.4, 1.6, true)
    scl = grid.size
    cols = grid.innerWidth / scl
    rows = grid.innerHeight / scl
    // fr = p5
    //   .createP('')
    //   .class(
    //     'font-mono text-sm  text-gray-700 absolute md:left-4 md:text-left left-0 text-center  md:mr-0 bottom-4 md:w-auto w-full'
    //   )
    console.log('rows * cols', cols * rows, rows, cols)
    flowfield = new Array(cols * rows)

    p5.background(250)
  }

  const windowResized = p5 => {
    console.log('resize')
    p5.resizeCanvas(grid.outerWidth, grid.outerHeight)

    rotationSpeed = p5.map(grid.outerWidth, 1800, 2000, 2.4, 1.6, true)
    scl = grid.size
    cols = grid.innerWidth / scl
    rows = grid.innerHeight / scl
  }

  const draw = p5 => {
    if (color === 'gradient') {
      p5.colorMode(p5.HSB)
      to = p5.color(p5.abs(((p5.frameCount / 2) % 720) - 360), 100, 80)
    } else {
      to = p5.color(color)
    }
    p5.colorMode(p5.RGB)
    if (mode === 'debug') {
      p5.background(250)
    } else {
      p5.background(250, 120)
    }

    var yoff = 0
    for (var y = 0; y < rows; y++) {
      var xoff = 0
      for (var x = 0; x < cols; x++) {
        var index = (x + y * (cols * scl)) * 4
        xoff += inc

        if (wave === 'sine') {
          var n = p5.sin(zoff - p5.sin(xoff) + p5.sin(yoff))
        } else {
          var n = p5.noise(xoff, yoff, zoff)
        }

        var angle = n * p5.TWO_PI * rotationSpeed
        var v = p5.constructor.Vector.fromAngle(angle)
        v.setMag(10)

        var velocity
        if (flowfield[index]) {
          velocity =
            p5.dist(flowfield[index].x, flowfield[index].y, v.x, v.y) *
            (scl * 0.25)
        }

        let lineColor = p5.lerpColor(from, to, p5.map(velocity, 0, 5, 0, 1))
        let normalizedVelocity = p5.map(velocity, 0, 10, scl * 0.15, scl * 0.5)
        p5.stroke(lineColor, normalizedVelocity)
        p5.strokeWeight(p5.map(velocity, 0, 10, 1, scl * 0.0625))
        // p5.strokeWeight(4)

        p5.push()
        p5.translate(
          x * scl + grid.horizontalPadding + scl / 2,
          y * scl + grid.verticalPadding + scl / 2
        )
        p5.rotate(v.heading())
        if (mode === 'debug') {
          p5.beginShape()
          p5.vertex(normalizedVelocity * 0.99, normalizedVelocity * 0.8)
          p5.vertex(normalizedVelocity, normalizedVelocity)
          p5.vertex(normalizedVelocity * 0.8, normalizedVelocity * 0.99)
          p5.vertex(normalizedVelocity, normalizedVelocity)
          // p5.vertex(normalizedVelocity, normalizedVelocity)
          p5.vertex(0, 0)
          p5.endShape()
        } else {
          p5.line(0, 0, normalizedVelocity, normalizedVelocity)
        }
        p5.pop()
        flowfield[index] = v
      }
      yoff += inc

      zoff += 0.0001
    }

    if (p5.frameCount % 30 == 0) {
      rate = p5.floor(p5.frameRate())
    }

    // fr.html(
    //   `[fps:${rate}] / [count: ${cols * rows}] / [duration: ${p5.round(
    //     p5.frameCount / 60
    //   )}]`
    // )
  }

  return <Sketch setup={setup} draw={draw} windowResized={windowResized} />
}

export default Vectorfield
