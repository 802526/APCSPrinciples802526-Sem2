class Mainball {
  constructor(x, y, w, dx, dy) {
    this.loc = createVector(x, y);
    this.w = w
    this.vel = createVector(dx, dy);
    this.angle = random(TWO_PI)
    this.orbiters = [];
    this.loadOrbiters(1);
  }

  loadOrbiters(n) {
    for(var i = 0; i < n; i++) {
      this.orbiters.push(new Orbiter(5, color(120, 88, 40)));
    }
  }

  run() {
    this.update();
    this.checkEdges();
    this.render();
  }

  update() {
    this.loc.x = this.loc.x + this.vel.x;
    this.loc.y = this.loc.y + this.vel.y
    this.angle += 0.41
  }

  checkEdges() {
    if(this.loc.x > 800 - this.w/2 ||
      this.loc.x < this.w/2) {
        this.vel.x = -1*this.vel.x
    }
    if(this.loc.y > 800 - this.w/2 ||
      this.loc.y < this.w/2) {
        this.vel.y = -1*this.vel.y
    }
  }

  render() {
    fill(255, 248, 117);
    ellipse(this.loc.x, this.loc.y, this.w);
    fill(163, 247, 146);
    for(var i = 0; i < this.orbiters.length; i++) {
      var ox = this.loc.x + 30*cos(0);
      var oy = this.loc.x + 30*sin(0);

      ellipse(ox, oy, 5)
    }
  }

}
