class Ellipse {
  constructor(x, y, width, height, radius) {
//r is the point of rotation
//radius is distance from r to center of ellipse
  this.r = createVector(x, y)
  this.width = width;
  this.height = height;
  this.radius = radius;
  }

  run() {
    center = getCenter();
  }

  getCenter(angle) {
    var x = this.radius*cos(angle) + this.r.x;
    var y = this.radius*sin(angle) + this.r.y;
    return createVector(x, y);
  }

}
