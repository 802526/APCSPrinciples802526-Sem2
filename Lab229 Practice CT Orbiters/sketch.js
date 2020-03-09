//  Sky Gastinel
// 	29 February 2020
//  This is a comment
//  The setup function function is called once when your program begins
var balls = [];
// balls array contains all of the different types of balls
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);

  loadPlanetballs(10);
  loadNormalballs(5);
  loadGravityballs(5);
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
//Planetballs are balls with a gravitational force and an orbiter each

function loadNormalballs(n) {
  for(var i = 0; i < n; i++){
    balls.push(new Normalball(random(10, 790), random(10, 790), 20, random(0.25, 2), random(0.25, 2)))
  }
}
//normalballs just bounce off the walls, no gravity. The Normalballs class is referred to
//using "extend" in the other ball classes

function loadGravityballs(n) {
  for(var i = 0; i < n; i++){
    balls.push(new Gravityball(random(10, 790), random(10, 790), 20, random(0.25, 2), random(0.25, 2), 0, 0.05))
  }
}
//Gravityballs bounce up and down with their gravitational force, no orbiters
