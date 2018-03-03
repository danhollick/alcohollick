class popUp { 
  constructor(company, year, pos, blurb,link,img) {
  this.company = company
  this.year = year
  this.pos = pos
  this.blurb = blurb
  this.link = link
  this.img = img
}
  
  //create elements
  create(){
  reset()
  var container = select('#container')
  var mainDiv = createDiv().addClass('fixed z-2 bg-black-40 w-100 vh-100 flex items-center justify-center')
  var card = createDiv().addClass('w-70 br2 vh-75 bg-white flex')
  var imgBG = createDiv().addClass('w-50 h-100 br2 bg-near-white flex items-center justify-center ph4').style("background-image: url('assets/loading.png');background-repeat: no-repeat; background-position: center;background-size: 100px;")
  var imgCont = createImg(this.img,"portfolio item").style("max-height: 450px")
  var textCont = createDiv().addClass('pa4 w-50 flex items-center justify-center')
  var textBound = createDiv()
  var year = createElement('h2', this.year,).addClass('f2 fw8 moon-gray mb0')
  var comp = createA(this.link, this.company,'_blank').addClass('f1 link fw8 dark-gray ma0 dim') 
  var pos = createElement('h2', this.pos).addClass('f2 fw6 gray mt0')
  var blurb = createP(this.blurb).addClass('f6 lh-copy word-wrap gray')
  var btnCnt = createA('javascript:resetDiv()',"").addClass('link ml3')
  var btnBG = createDiv().addClass('br2 w-25 flex items-center justify-center pointer grow o-80 glow').style('background-color: #F0484C;')
  var btnTxt = createP("Done").addClass('mh3 f7 fw6 white')

  //organise tree
  container.child(mainDiv)
  mainDiv.child(card)
  card.child(imgBG)
  imgBG.child(imgCont)
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
}