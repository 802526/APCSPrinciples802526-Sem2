//Sky Gastinel
//28 Septmeber 2019
//this is a coment
//  The setup function function is called once when your program begins
class Paddle {
  constructor(x, y, w, h) {
    this.loc = createVector(x, y);
    this.w = w;
    this.h = h;
  }

  run(){
    this.checkEdges();
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

  update(){

   this.loc = createVector(mouseX, height-100);
  // this.loc = p5.Vector.lerp(this.loc, mouseLoc, .09);
  }

  render(){
    fill(84, 46, 255)
    rect(this.loc.x, this.loc.y, this.w, this.h)
  }
}
