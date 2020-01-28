class Boids {
  constructor(x, y, dx, dy) {
  this.loc = createVector(x, y);
  this.vel = createVector(dx, dy);
  this.acc = createVector(0,0);
  this.clr = color(random(0, 256), random(0, 256), random(0, 256))
  }

  run() {
    this.update();
    this.checkEdges();
    this.render();
  }

  update() {
    this.vel = this.vel + this.acc
    this.loc = this.loc + this.vel
    this.vel < 10
  }

  checkEdges() {

  }

  render() {
    fill(this.clr)

  }

}
