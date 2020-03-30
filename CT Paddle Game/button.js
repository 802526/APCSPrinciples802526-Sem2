//Sky Gastinel
//28 Septmeber 2019
//this is a coment
//  The setup function function is called once when your program begins
class Button {
  constructor(x, y, w, h, msg, clr, callback){
    this.loc = createVector(x, y);
    this.w = w;
    this.h = h;
    this.msg = msg;
    this.clr = clr;
    this.callback = callback;
  }

  run() {
    this.render();
  }

  mouseClicked() {
    if(mouseX>this.loc.x &&
        mouseX<this.loc.x + this.w &&
        mouseY>this.loc.y &&
        mouseY<this.loc.y + this.h) {
          this.callback();
        }
  }

  render() {
    fill(this.clr);
    rect(this.loc.x, this.loc.y, this.w, this.h);
    fill(0, 0, 0);
    textSize(20);
    textStyle(BOLD);
    textAlign(CENTER);
    text(this.msg, this.loc.x + this.w/2, this.loc.y + this.h/2 + 10);
  }
}
