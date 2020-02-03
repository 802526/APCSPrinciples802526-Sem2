//  Sky Gastinel
// 	3 February 2020
//  This is a comment
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  loadEllipse();
  angleMode(DEGREES);
}

//  The draw function is called @ 30 fps
function draw() {
  Ellipse.run();
  //is this the right function name
}

function loadEllipse() {
  Ellipse = new Ellipse(450, 400, 200, 50)
}
