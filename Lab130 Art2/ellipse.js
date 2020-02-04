class Ellipse {
  constructor(x, y, width, height, radius) {
//r is the point of rotation
//radius is distance from r to center of ellipse
  this.r = createVector(x, y)
  this.width = width;
  this.height = height;
  this.radius = radius;
  this.a = 0
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
    this.a = this.a + 10;
  }

  render() {
    noFill();
    stroke(136, 207, 155);
    var center = this.getCenter();
    ellipse(center.x, center.y, this.width, this.height);
  //double check if this is the right values for the ellipse values
  }
}
