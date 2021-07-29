let player;
let bgImage;
let playerImage;
let obstacleImage;
let obstacles = [];
let wordClassifier;

function preload() {
  bgImage = loadImage("background.jpg");
  playerImage = loadImage("player.png");
  obstacleImage = loadImage("obstacle.jpg");
  let options = {
    probabilityThreshold: 0.85,
  };
  wordClassifier = ml5.soundClassifier("SpeechCommands18w", options);
}

function setup() {
  createCanvas(800, 400);
  player = new Player();
  wordClassifier.classify(heardWord);
}

function heardWord(error, results) {
  let word = results[0].label;
  if (word === "up") {
    player.jump();
  }
  console.log(results[0].label, results[0].confidence);
}

function keyPressed() {
  if (key === " ") {
    player.jump();
    console.log("up");
  }
}
// Runs 60 times per second
function draw() {
  // in 1% of frames, add new obstacle
  if (random(1) < 0.01) {
    obstacles.push(new obstacle());
  }
  background(bgImage);

  for (let obs of obstacles) {
    obs.show();
    obs.move();
    if (player.collided(obs) === true) {
      console.log("GAME OVER!");
      noLoop();
    }
    if (obs.X < 0) {
    }
  }

  player.show();
  player.move();
}
