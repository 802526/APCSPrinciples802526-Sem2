class Ball {
  constructor(x, y, w, dx, dy) {
    this.loc = createVector(x, y);
    this.w = w
    this.vel = createVector(dx, dy);
  }

  run() {
    this.update();
    this.checkEdges();
    this.render();
  }

  update() {
    this.loc.x = this.loc.x + this.vel.x;
    this.loc.y = this.loc.y + this.vel.y
  }

  checkEdges() {
    if(this.loc.x > windowWidth - this.w/2 ||
      this.loc.x < this.w/2) {
        this.vel.x = -1*this.vel.x
    }
    if(this.loc.y > windowHeight - this.w/2 ||
      this.loc.y < this.w/2) {
        this.vel.y = -1*this.vel.y
    }
  }

  render() {
    fill(255, 223, 41, 50);
    ellipse(this.loc.x, this.loc.y, this.w);
  }

}
