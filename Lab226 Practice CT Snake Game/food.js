class Food {
  constructor(x, y, w, h) {
    this.loc = createVector(x, y);
    this.w = w;
    this.h = h;
  }

  run() {
    this.update();
    this.render();
  }

  update(){
    if(snake.segments[0].x === this.loc.x &&
    snake.segments[0].y === this.loc.y) {
      this.loc.x = Math.floor(random(0, 39));
      this.loc.y = Math.floor(random(0, 39));
      snake.segments.push(createVector(0, 0))
    }
  }

  render() {
    fill(199, 52, 52);
    rect(20*this.loc.x, 20*this.loc.y, this.w, this.h)
  }
}
