class Monster{
  constructor(x1, y1, dx, dy, angle){
    this.loc = createVector(x1,y1);
    this.vel = createVector(dx, dy);
    this.acc = createVector(0,0);
    this.clr = color(112, 31, 219);
    this.angle = angle
  }

  run(){
    this.checkEdges();
    this.gravity();
    this.update();
    this.render();
  }

  checkEdges(){
    if (this.loc.x > width) {
      this.loc.x = 0
    }
    if (this.loc.x < 0) {
      this.loc.x = width
    }
    if (this.loc.y > height) {
      this.loc.y = 0
    }
    if (this.loc.y < 0) {
      this.loc.y = height
    }
  }

  gravity() {
    var direction = createVector(snake.loc.x - this.loc.x, snake.loc.y - this.loc.y);
    direction.normalize();
    direction.mult(0.5);
    this.acc = direction
  }

  update(){
    //speed limit
    if(this.vel.mag() > 5 {
      this.vel.normalize();
      this.vel.mult(5)
    }
    this.loc.add(this.vel);
    this.vel.add(this.acc);
    this.angle = this.vel.heading() - PI/2;
  }

  render(){

    push()
    translate(this.loc.x, this.loc.y);
    rotate(this.angle);
    fill(this.clr)
    triangle(-8, 0, 8, 0, 0, 15);
    pop();
  }


}
