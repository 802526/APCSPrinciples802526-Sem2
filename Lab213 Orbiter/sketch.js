//  Sky Gastinel
// 	14 February 2020
//  This is a comment
//  The setup function function is called once when your program begins
var mainballs = [];
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadMainballs(5);
}

//  The draw function is called @ 30 fps
function draw() {
  background(5, 5, 5, 50)
  for(var i = 0; i < mainballs.length; i++) {
  mainballs[i].run();
  }
}

function loadMainballs(n) {
  for(var i = 0; i < n; i++){
  mainballs[i] = new Mainball(random(10, 790), random(10, 790), 20, random(0.25, 2), random(0.25, 2))
  }
}
