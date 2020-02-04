class Ellipse {
  constructor(x, y, width, height, radius) {
//r is the point of rotation
//radius is distance from r to center of ellipse
  this.r = createVector(x, y)
  this.width = width;
  this.height = height;
  this.radius = radius;
  this.a = 0
  this.clr = color(random(73, 242), random(73, 242), random(73, 242))
  }

  run() {
    this.update();
    this.render();
  }

  getCenter() {
    var x = this.radius*cos(this.a) + this.r.x;
    var y = this.radius*sin(this.a) + this.r.y;
    return createVector(x, y);
  }

  update() {
    this.a = this.a + 11;
    this.radius = radiusSlider.value();
    this.width = widthSlider.value();
  }

  render() {
    noFill();
    stroke(this.clr, 255);
    var center = this.getCenter();

    push();
    translate(center.x, center.y)
    rotate(this.a);
    ellipse(0, 0, this.width, this.height);
    pop();
  }
}
