//  First Constructor Function
// eettlin
// March 10, 2020

class Ball{
 //  Ball Properties  +++++++++++++++++++++++++++++++++++++++++++++
 constructor(x, y, dx, dy, id){
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
    this.acc = createVector(0,0.016);
    this.clr = this.getColor();//random(255), random(255),random(255));
    this.w = 15;
    this.id = id;
    if(this.id < 0) {this.w = 50;}
 }

 getColor(){
   if(this.id%2 === 0) {

   }else{

   }
 }

 run(){
   this.checkEdges();
 }


  checkEdges(){//+++++++++++++++++++++++++++++++++++++++++++++++++++
    if(this.loc.x < 0){
      this.vel.x = -this.vel.x;
    }
    if(this.loc.x > width){
      this.vel.x = -this.vel.x;
    }
    if(this.loc.y < 0){
      this.vel.y = -this.vel.y;
    }
    if(this.loc.y > height){
      this.vel.y = -this.vel.y;
      this.loc.y = height-2;
    }
     this.update();
  } //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  update(){//++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    var distToMainBall;
    if(this.id >= 0){//  if not mainBall


    }
      if(this.id < 0 &&
        this.loc.x > paddle.loc.x &&
        this.loc.x < paddle.loc.x + paddle.w &&
        this.loc.y > paddle.loc.y &&
        this.loc.y < paddle.loc.y + paddle.h) {
          textSize(80)
          text('YOU LOSE', 200, 400)
        }

      if (this.id%2 === 0 &&
          this.loc.x > paddle.loc.x &&
          this.loc.x < paddle.loc.x + paddle.w &&
          this.loc.y > paddle.loc.y &&
          this.loc.y < paddle.loc.y + paddle.h) {
        //If ball hits the top, ball disappears
        if (this.vel.y >= 0) {
          balls.splice(balls.indexOf(this), 1);
        }
        //if ball hits the bottom, more balls added
        else{
          this.vel.y *= -1
          // for(var b = 0; b<3; b++) {
          //   balls.push(new Ball(random (width), random(0, 650), 4, 4, 15, 15));
          // }
        }
      }

      if (this.id%2 !== 0 &&
          this.id > 0 &&
          this.loc.x > paddle.loc.x &&
          this.loc.x < paddle.loc.x + paddle.w &&
          this.loc.y > paddle.loc.y &&
          this.loc.y < paddle.loc.y + paddle.h) {
        //If ball hits the top, ball disappears
        if (this.vel.y >= 0) {
          balls.splice(balls.indexOf(this), 1);
        }
        else{
          this.vel.y *= -1
        }
      }

    this.vel.add(this.acc);
    this.vel.limit(5);
    this.loc.add(this.vel);
    this.render();
  }//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

 render(){
  //  **************************************************************
   if(this.id < 0){
    fill(0, 0, 255)
  }else if(this.id%2 === 0){
     fill(0, 255, 0)
   }else{
     fill(255, 0, 0)
   }
   ellipse(this.loc.x, this.loc.y, this.w, this.w);
 }//***************************************************************
}//  end Ball class
