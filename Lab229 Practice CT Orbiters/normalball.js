class Normalball {
  constructor(x, y, w, dx, dy) {
    this.loc = createVector(x, y);
    this.w = w
    this.vel = createVector(dx, dy);
    this.clr = color(95, 2, 166)
  }


  run() {
    this.update();
    this.colorUpdate();
    this.checkEdges();
    this.render();
  }

  colorUpdate() {
    if (this.isOverlap() === true) {
      this.clr = color(random(0, 255), random(0, 255), random(0, 255))
    }else {
      this.clr = color(95, 2, 166)
    }
    //attempting to change the color when two balls overlapp
  }

  isOverlap() {
    var overlap = false;
    for(var i = 0; i < balls.length; i++) {
      if(dist(this.loc.x, this.loc.y, balls[i].loc.x, balls[i].loc.y) < this.w + balls[i].w &&
        this !== balls[i]) {
          overlap = true;
          break;
      }
    }
    return overlap;
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
    //makes the balls bounce off of the walls
  }

  update() {
    this.loc.x = this.loc.x + this.vel.x;
    this.loc.y = this.loc.y + this.vel.y
    //moves the ball
  }

  render() {
    fill(0,0,0);
    stroke(this.clr)
    ellipse(this.loc.x, this.loc.y, this.w);
    //draws the balls
  }

}
