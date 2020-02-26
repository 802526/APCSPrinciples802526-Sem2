class Snake {
  constructor(x, y, w, h, size) {
    this.segments = []
    this.vel = createVector(0, 0);
    this.w = w;
    this.h = h;
    this.size = size;
    this.clr = color(58, 133, 82);
    for(var i = 0; i < size; i++) {
      this.segments[i] = createVector(x+i, y);
    }
  }

  run() {
    this.update();
    this.checkEdges();
    this.tangled();
    this.render();
  }

  update() {
    for(var i = this.segments.length - 1; i > 0; i--) {
      this.segments[i].x = this.segments[i - 1].x;
      this.segments[i].y = this.segments[i - 1].y;
    }
    this.segments[0].add(this.vel);
  }

  checkEdges() {
    if(20 * this.segments[0].x > 800 ||
       20 * this.segments[0].x < 0 ||
       20 * this.segments[0].y > 800 ||
       20 * this.segments[0].y < 0) {
         gameState = 3
    }
  }

  tangled() {
    for (var i = 1; i < this.segments.length; i++) {
      if (this.segments[0].x === this.segments[i].x &&
          this.segments[0].y === this.segments[i].y) {
        gameState = 3
      }
    }
  }

  render() {
    fill(this.clr);
    for (var i = 0; i < this.segments.length; i++){
      rect(20*this.segments[i].x, 20*this.segments[i].y, this.w, this.h);
    }
  }
}
