//  Sky Gastinel
// 22 March 2020
// This is a comment
//The setup function function is called once when your program begins
var balls = []
var deathballs = []
var buttons = []
var paddle;
var gameState = 1;
var difficulty;
var health;
var score;
let img;

function preload() {
  img = loadImage('https://i.imgur.com/kC051jb.png')
}

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(209, 209, 209);
  gameState1Buttons();
}

//  The draw function is called @ 30 fps
function draw() {
  background(209, 209, 209, 50);
  // image(img, 0, 0)
    if (gameState === 1) {
      startGame();
    }else if (gameState === 2) {
      playGame();
    }else if (gameState === 3) {
      endGame();
    }
    if (gameState === 1.5) {
      instructions();
    }
    runButtons();
  }

function startGame() {
  fill(90, 125, 242);
  rect(50, 50, 700, 700);
  //blue box
  fill(237, 135, 255);
  textSize(50);
  textAlign(CENTER);
  textStyle(BOLD);
  text('~Paddle Game~', 400, 300);
  //Paddle Game title
  rect(200, 500, 400, 100);
  //pink box for buttons
  fill(44, 66, 138);
  textSize(15);
  textStyle(BOLD);
  text('by: Sky Gastinel', 115, 745);
  //by: Sky Gastinel
}

function mouseClicked() {
  for(var i = 0; i<buttons.length; i++) {
  buttons[i].mouseClicked();
  }
}

function playGame() {
  runPaddle();
  runBalls();
  runDeathballs();
  fill(0, 0, 0);
  textSize(20);
  textStyle(BOLD);
  text('Health: '+health, 60, 30);
  if(health <= 0) {
    endGameSetup();
  }
  textSize(20);
  textStyle(BOLD);
  text('Score: '+score, 60, 60);
  //score
  if(balls.length<1) {
    loadBalls(12);
  }
}

function endGame() {
  fill(255, 74, 74);
  rect(50, 50, 700, 700);
  //red background
  fill(168, 12, 12);
  textStyle(BOLD);
  textSize(100);
  textAlign(CENTER);
  text('YOU LOSE!', 400, 400);
//you lose text
  textSize(40);
  textAlign(CENTER);
  text('Score: '+score, 400, 500);
}

function  loadBalls(n) {
    balls = [];
    for(var i = 0; i<n; i++){
    balls[i] = new Ball (random (width), random(0, 650),
              random(-4, 4), random(-4,4), 15, 15);
      }
}

function loadDeathballs(n) {
    deathballs = [];
    for(var i = 0; i<n; i++) {
      deathballs[i] = new DeathBall(random (width), random(0, 650),
                    random(-4, 4), random(-4,4), 20, 20, img);
    }
}

function loadPaddle() {
    paddle = new Paddle(random(width), random(height), 150, 15);
  }

function gameState1Buttons() {
  buttons = [];
  var btn1callback = function() {
    difficulty = 'E';
    playSetup();
  }
  var btn2callback = function() {
    difficulty = 'M'
    playSetup();
  }
  var btn3callback = function() {
    difficulty = 'H'
    playSetup();
  }
  var btn4callback = function() {
    gameState = 1.5;
    gameState15Buttons();
  }
  // if(gameState = 1.5) {
  //   var btn5callback = function() {
  //     gameState = 1;
  //   }
  // }
  var btn1 = new Button(210, 510, 80, 80, 'Easy', color(156, 255, 182), btn1callback);
//easy button
  var btn2 = new Button(360, 510, 80, 80, 'Medium', color(244, 250, 137), btn2callback);
  //medium button
  var btn3 = new Button(510, 510, 80, 80, 'Hard', color(255, 89, 120), btn3callback);
  //hard button
  var btn4 = new Button(330, 620, 140, 30, 'Instructions', color(237, 135, 255), btn4callback);
  // instructions button
  buttons.push(btn1);
  buttons.push(btn2);
  buttons.push(btn3);
  buttons.push(btn4);
}

function gameState15Buttons() {
  buttons = [];
  var btn5callback = function() {
    gameState = 1;
    gameState1Buttons();
  }
  var btn5 = new Button(300, 680, 200, 50, 'Return to Home', color(101, 168, 91), btn5callback);
  buttons.push(btn5);
}

function runPaddle() {
  paddle.run();
  }

function runBalls() {
  for(var i =0; i<balls.length; i++){
    balls[i].run();
  }
}

function runButtons() {
  for( var i = 0; i<buttons.length; i++) {
    buttons[i].run();
  }
}

function runDeathballs() {
  for(var i = 0; i<deathballs.length; i++) {
    deathballs[i].run();
  }
}

function playSetup() {
  if (difficulty === 'E') {
    health = 10
  }
  if (difficulty === 'M') {
    health = 7
  }
  if (difficulty === 'H') {
    health = 4
  }
  score = 0;
  buttons = [];
  loadBalls(10);
  loadPaddle();
  loadDeathballs(1);
  gameState = 2;
}

function endGameSetup() {
  gameState = 3;
  buttons = [];
  var btn6callback = function() {
    gameState = 1;
    gameState1Buttons();
  }
  var btn6 = new Button(300, 680, 200, 50, 'Return to Home?', color(114, 185, 252), btn6callback);
  buttons.push(btn6);
}

function instructions() {
  fill(62, 173, 118);
  rect(50, 50, 700, 700);
  //green background
  fill(0, 0, 0);
  textSize(50);
  textStyle(BOLD);
  textAlign(CENTER);
  text('Instructions', 400, 180);
  //instructions title
  fill(0, 0, 0);
  textSize(20);
  textStyle(BOLD);
  text('Move the mouse in order to move your paddle. The goal of the game', 400, 400);
  text('is to survive as long as possible. When a ball hits the bottom of the', 400, 425);
  text('paddle, health is lost. When a ball hits the top of the paddle, the ball', 400, 450);
  text('disappears and your score increases. After all the balls disappear,', 400, 475);
  text('another round begins and more balls are added to the screen.', 400, 500);
  text('If you hit the death ball, you will also lose health minus one.', 400, 525);
  text('Good luck', 400, 545);
  //Instructions
  // fill(18, 184, 153);
  // rect(300, 680, 200, 50);
  // //blue button
  // fill(14, 117, 107);
  // textSize(25);
  // textStyle(BOLD);
  // text('Return to Home', 400, 715);
}
