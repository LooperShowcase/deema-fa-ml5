class obstacle {
  constructor() {
    this.size = 50;
    this.X = width;
    this.y = height - this.size;
  }

  show() {
    image(obstacleImage, this.X, this.y, this.size, this.size);
  }

  move() {
    this.X -= 10;
  }
}
