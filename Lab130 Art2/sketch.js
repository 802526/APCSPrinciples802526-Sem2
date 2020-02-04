//  Sky Gastinel
// 	3 February 2020
//  This is a comment
//  The setup function function is called once when your program begins
var spirograph;
let radiusSlider;
let widthSlider;
function setup() {
  console.log('test')
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  loadEllipse();
  angleMode(DEGREES);

  radiusSlider = createSlider(10, 300, 145);
  radiusSlider.position(50, 30);

  widthSlider = createSlider(100, 500, 300);
  widthSlider.position(50, 60);
}

//  The draw function is called @ 30 fps
function draw() {
  background(5, 5, 5, 6)
  spirograph.run();
}

function loadEllipse() {
  spirograph = new Ellipse(400, 400, 300, 50, 50);
}
