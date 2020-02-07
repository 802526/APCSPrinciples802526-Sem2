class Ellipse {
  constructor(x, y, w) {
    this.loc = createVector(x, y);
    this.w = w;
    this.clr = color(random(100, 122), random(140, 210), random(150, 200), 32);
  }

  run() {
    this.update();
    this.render();
  }

  update() {
    if (this.loc.x > mouseX + 80 ||
        this.loc.x - 80 < mouseX ||
        this.loc.y > mouseY + 80 ||
        this.loc.y - 80 < mouseY) {
          this.loc.x = mouseX + random(-50, 50)
          this.loc.y = mouseY + random(-50, 50)
        }
  }

  render() {
    fill(this.clr);
    ellipse(this.loc.x, this.loc.y, this.w)
  }

}
