class DeathBall extends Ball {
  constructor(x, y, dx, dy, sizeX, sizeY, img) {
    super(x,y,dx,dy,sizeX,sizeY);
    this.img = img;
  }

  onCollision() {
    health--
    this.vel.y *= -1
  }

  render() {
    image(this.img, this.loc.x - this.sizeX/2,
      this.loc.y - this.sizeY/2, this.sizeX, this.sizeY);
  }

}
