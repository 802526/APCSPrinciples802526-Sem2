//  Sky Gastinel
// 	28 January 2020
//  This is a comment
//  The setup function function is called once when your program begins
boids = []
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadBoids();

}

//  The draw function is called @ 30 fps
function draw() {

}

function loadBoids() {

}

runBoids(){
  boids.run();
}
