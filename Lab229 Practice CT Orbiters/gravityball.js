class Gravityball extends Normalball{
  constructor(x, y, w, dx, dy, xacc, yacc) {
    super(x, y, w, dx, dy);
    this.acc = createVector(xacc, yacc);
  }

  update() {
    super.update();
    this.vel.add(this.acc);
    if(this.vel.mag() > 10.0) {
      this.vel.div(this.vel.mag()/10.0)
    }
  }
}
