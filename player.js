class Player {
  constructor() {
    this.size = 100;
    this.X = this.size;
    this.y = height - this.size;
    this.velocityY = 0;
    this.gravity = 2;
  }

  jump() {
    if (this.y === height - this.size) {
      this.velocityY = -25;
    }
  }
  move() {
    this.y += this.velocityY;
    this.velocityY = this.velocityY + this.gravity;
    this.y = constrain(this.y, 0, height - this.size);
  }

  show() {
    image(playerImage, this.X, this.y, this.size, this.size);
  }

  collided(obstacleToCheck) {
    let isColliding = collideRectRect(
      this.X,
      this.y,
      this.size - 5,
      this.size - 5,
      obstacleToCheck.X,
      obstacleToCheck.y,
      obstacleToCheck.size - 5,
      obstacleToCheck.size - 5
    );
    return isColliding;
  }
}
