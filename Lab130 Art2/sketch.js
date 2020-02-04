//  Sky Gastinel
// 	3 February 2020
//  This is a comment
//  The setup function function is called once when your program begins
var spirograph;
function setup() {
  console.log('test')
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  loadEllipse();
  angleMode(DEGREES);
}

//  The draw function is called @ 30 fps
function draw() {
  spirograph.run();
}

function loadEllipse() {
  spirograph = new Ellipse(400, 400, 200, 50, 50);
}
