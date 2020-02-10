const colors = new Array(
  [95, 78, 150],
  [212, 140, 153],
  [97, 119, 146],
  [243, 106, 106],
  [891, 144, 212],
  [226, 181, 92],
  [112, 175, 186],
  [176, 226, 227]
)

let step = 0
// color table indices for:
// current color left
// next color left
// current color right
// next color right
const colorIndices = [0, 1, 2, 3, 4, 5, 6, 7]

// transition speed
const gradientSpeed = 0.002

function updateGradient() {
  const c0_0 = colors[colorIndices[0]]
  const c0_1 = colors[colorIndices[1]]
  const c1_0 = colors[colorIndices[2]]
  const c1_1 = colors[colorIndices[3]]
  const c2_0 = colors[colorIndices[4]]
  const c2_1 = colors[colorIndices[5]]
  const c3_0 = colors[colorIndices[6]]
  const c3_1 = colors[colorIndices[7]]

  const istep = 1 - step
  const r1 = Math.round(istep * c0_0[0] + step * c0_1[0])
  const g1 = Math.round(istep * c0_0[1] + step * c0_1[1])
  const b1 = Math.round(istep * c0_0[2] + step * c0_1[2])
  const color1 = `rgb(${r1},${g1},${b1})`

  const r2 = Math.round(istep * c1_0[0] + step * c1_1[0])
  const g2 = Math.round(istep * c1_0[1] + step * c1_1[1])
  const b2 = Math.round(istep * c1_0[2] + step * c1_1[2])
  const color2 = `rgb(${r2},${g2},${b2})`

  const r3 = Math.round(istep * c2_0[0] + step * c2_1[0])
  const g3 = Math.round(istep * c2_0[1] + step * c2_1[1])
  const b3 = Math.round(istep * c2_0[2] + step * c2_1[2])
  const color3 = `rgb(${r3},${g3},${b3})`

  const r4 = Math.round(istep * c3_0[0] + step * c3_1[0])
  const g4 = Math.round(istep * c3_0[1] + step * c3_1[1])
  const b4 = Math.round(istep * c3_0[2] + step * c3_1[2])
  const color4 = `rgb(${r4},${g4},${b4})`

  const m = document.getElementsByClassName('gradient')
  for (let i = 0; i < m.length; i++) {
    c = m[i].style
    c.background = `-webkit-gradient(linear, left top, left bottom, from(${color1}), to(${color2}))`
    c.background = `-moz-linear-gradient(bottom, ${color1} 0%, ${color2} 100%)`
  }

  const n = document.getElementById('_how')
  d = n.style
  d.background = `-webkit-gradient(linear, left top, left bottom, from(${color4}), to(${color3}))`
  d.background = `-moz-linear-gradient(bottom, ${color4} 0%, ${color3} 100%)`

  step += gradientSpeed
  if (step >= 1) {
    step %= 1
    colorIndices[0] = colorIndices[1]
    colorIndices[2] = colorIndices[3]
    colorIndices[4] = colorIndices[5]
    colorIndices[6] = colorIndices[7]

    // pick two new target color indices
    // do not pick the same as the current one
    colorIndices[1] =
      (colorIndices[1] + Math.floor(1 + Math.random() * (colors.length - 1))) %
      colors.length
    colorIndices[3] =
      (colorIndices[3] + Math.floor(1 + Math.random() * (colors.length - 1))) %
      colors.length
    colorIndices[5] =
      (colorIndices[3] + Math.floor(1 + Math.random() * (colors.length - 1))) %
      colors.length
    colorIndices[7] =
      (colorIndices[3] + Math.floor(1 + Math.random() * (colors.length - 1))) %
      colors.length
  }
}

setInterval(updateGradient, 10)
