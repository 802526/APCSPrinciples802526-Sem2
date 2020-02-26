//  Sky Gastinel
// 26 February 2020
//  This is a comment
//  The setup function function is called once when your program begins
var snake;
var food;
var gameState = 1;
var button = []
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(188, 235, 190);
  fill(114, 100, 100);
  frameRate(10);
  loadSnakes(1);
  loadFood();
  // gameStateButtons();
}

//  The draw function is called @ 30 fps
function draw() {
  background(190, 235, 190);
  if(gameState === 1) {
    startGame()
  }else if (gameState === 2) {
    playGame();
  }else if (gameState === 3) {
    endGame();
  }
  for(var i = 0; i<button.length; i++){
    button[i].run();
  }
}

function startGame() {
  button = []
fill(196, 155, 114);
rect(50, 50, 700, 700);
//box
fill(188, 235, 190);
textSize(50);
textAlign(CENTER);
textStyle(BOLD);
text('~Snake Game~', 400, 300);
fill(237, 102, 92);
textSize(20);
textStyle(BOLD);
text('by: Sky Gastinel', 130, 745);
//by: Sky Gastinel
var playCallback = function() {
  loadFood();
  loadSnakes(1);
  gameState = 2
}
var buttonPlay = new Button(200, 500, 400, 100, 'click to play', color(237, 102, 92), playCallback)
button.push(buttonPlay);
}

function mouseClicked() {
  for(var i = 0; i<button.length; i++) {
  button[i].mouseClicked();
  }
}


function playGame() {
button = []
snake.run();
food.run();
}

//loading snakes and food
function loadSnakes(n) {
    snake = new Snake (20, 20, 20, 20, 1);
}

function  loadFood() {
    food = new Food (Math.floor(random(0, 39)), Math.floor(random(0, 39)), 20, 20)
}

function endGame() {
  background(237, 102, 92)
  button = []
  fill(55, 183, 230);
  textSize(80);
  textAlign(CENTER);
  textStyle(BOLD);
  text('You Lose!', 400, 330)
  var homeCallback = function() {
    gameState = 1;
  }
  var homeButton = new Button(100, 550, 600, 50, 'click here to return to home screen', color(55, 183, 230), homeCallback)
  button.push(homeButton);
}

//moves the snake code
function keyPressed() {
  if(keyCode === UP_ARROW) {
    if(snake.vel.equals(createVector(0, 1)) &&
      snake.segments.length >=2){
    }else{
        snake.vel = createVector(0,-1);
    }
  }
  if(keyCode === DOWN_ARROW) {
    if(createVector(0, -1).equals(snake.vel) &&
      snake.segments.length >=2){
    }else{
        snake.vel = createVector(0,1);
    }
  }
  if(keyCode === LEFT_ARROW) {
    if(createVector(1, 0).equals(snake.vel) &&
      snake.segments.length >=2){
    }else{
        snake.vel = createVector(-1, 0);
    }
  }
  if(keyCode === RIGHT_ARROW) {
    if(createVector(-1, 0).equals(snake.vel) &&
      snake.segments.length >=2){
    }else{
        snake.vel = createVector(1, 0);
    }
  }
}
