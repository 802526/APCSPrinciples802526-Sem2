//  Sky Gastinel
// 	29 February 2020
//  This is a comment
//  The setup function function is called once when your program begins
var balls = [];
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadPlanetballs(10);
  loadNormalballs(0);
  loadGravityballs(0);
}

//  The draw function is called @ 30 fps
function draw() {
  background(5, 5, 5, 50)
  for(var i = 0; i < balls.length; i++) {
  balls[i].run();
  }
}

function loadPlanetballs(n) {
  for(var i = 0; i < n; i++){
  balls[i] = new Planetball (random(10, 790), random(10, 790), 20, random(0.25, 2), random(0.25, 2), 0, 0.05)
  }
}

function loadNormalballs(n) {
  for(var i = 0; i < n; i++){
    balls.push(new Normalball(random(10, 790), random(10, 790), 20, random(0.25, 2), random(0.25, 2)))
  }
}

function loadGravityballs(n) {
  for(var i = 0; i < n; i++){
    balls.push(new Gravityball(random(10, 790), random(10, 790), 20, random(0.25, 2), random(0.25, 2), 0, 0.05))
  }
}
