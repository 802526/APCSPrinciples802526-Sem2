class Planetball extends Normalball {
  constructor(x, y, w, dx, dy) {
    super(x, y, w, dx, dy);
    this.angle = random(TWO_PI)
    this.orbiters = [];
    this.loadOrbiters(1);
  }

  loadOrbiters(n) {
    for(var i = 0; i < n; i++) {
      this.orbiters.push(new Orbiter(5, color(120, 88, 40)));
    }
  }

  update() {
    super.update();
    this.angle += 0.05
  }

  render() {
    super.render();
    fill(255, 150, 238);
    stroke(255, 255, 255);
    for(var i = 0; i < this.orbiters.length; i++) {
      var ox = this.loc.x + 30*cos(this.angle);
      var oy = this.loc.y + 30*sin(this.angle);

      ellipse(ox, oy, 5)
    }
  }

}
