var colors = new Array(
    [95,78,150],
    [212,140,153 ],
    [97,119,146],
    [243,106,106],
    [891,144,212],
    [226,181,92],
    [112,175,186],
    [176,226,227]);
  
  var step = 0;
  //color table indices for: 
  // current color left
  // next color left
  // current color right
  // next color right
  var colorIndices = [0,1,2,3,4,5,6,7];
  
  //transition speed
  var gradientSpeed = 0.002;
  
  function updateGradient()
  {
    
  var c0_0 = colors[colorIndices[0]];
  var c0_1 = colors[colorIndices[1]];
  var c1_0 = colors[colorIndices[2]];
  var c1_1 = colors[colorIndices[3]];
  var c2_0 = colors[colorIndices[4]];
  var c2_1 = colors[colorIndices[5]];
  var c3_0 = colors[colorIndices[6]];
  var c3_1 = colors[colorIndices[7]];
  
  
  
  var istep = 1 - step;
  var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
  var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
  var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
  var color1 = "rgb("+r1+","+g1+","+b1+")";
  
  var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
  var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
  var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
  var color2 = "rgb("+r2+","+g2+","+b2+")";

  var r3 = Math.round(istep * c2_0[0] + step * c2_1[0]);
  var g3 = Math.round(istep * c2_0[1] + step * c2_1[1]);
  var b3 = Math.round(istep * c2_0[2] + step * c2_1[2]);
  var color3 = "rgb("+r3+","+g3+","+b3+")";

  var r4 = Math.round(istep * c3_0[0] + step * c3_1[0]);
  var g4 = Math.round(istep * c3_0[1] + step * c3_1[1]);
  var b4 = Math.round(istep * c3_0[2] + step * c3_1[2]);
  var color4 = "rgb("+r4+","+g4+","+b4+")";

  var m = document.getElementsByClassName('gradient') 
  for (let i= 0; i < m.length; i++) {
      c = m[i].style;
      c.background = "-webkit-gradient(linear, left top, left bottom, from("+color1+"), to("+color2+"))";
      c.background =  "-moz-linear-gradient(bottom, "+color1+" 0%, "+color2+" 100%)";}

  var n = document.getElementById('_how')
        d = n.style;
        d.background = "-webkit-gradient(linear, left top, left bottom, from("+color4+"), to("+color3+"))";
        d.background =  "-moz-linear-gradient(bottom, "+color4+" 0%, "+color3+" 100%)";


    
    step += gradientSpeed;
    if ( step >= 1 )
    {
      step %= 1;
      colorIndices[0] = colorIndices[1];
      colorIndices[2] = colorIndices[3];
      colorIndices[4] = colorIndices[5]
      colorIndices[6] = colorIndices[7]
      
      //pick two new target color indices
      //do not pick the same as the current one
      colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
      colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
      colorIndices[5] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
      colorIndices[7] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    }
  }
  
  setInterval(updateGradient,10);