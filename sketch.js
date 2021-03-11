var mainHero, hero1, hero2, hero3, hero4;
var backImage, captAm, hulk, antMan, spidMan, thor;
var coinImg, rockImg, puddleImg, rockGroup, coinGroup, puddleGroup;
var gameOver, restart, gameOverImg, restartImg;
var x = 70;
var rand;
var gameState = "wait";

function preload() {

  backImage = loadImage("images/track.jpg");

  captAm = loadImage("images/captam.png");
  hulk = loadImage("images/hulk.png");
  antMan = loadImage("images/antman.png");
  spidMan = loadImage("images/spiderman.png");
  thor = loadImage("images/thor.png");

  rockImg = loadImage("images/rock.png");
  coinImg = loadImage("images/coin.png");
  puddleImg = loadImage("images/puddle.png");

  gameOverImg = loadImage("images/gameover.png");
  restartImg = loadImage("images/reset.png");

}

function setup() {
  createCanvas(1500,500);

  var game = new Game();
  
  track = createSprite(100,250,1600,500);
  track.x = track.width/2
  track.addImage(backImage);
  track.velocityX = -2;
  track.scale = 2.5;
  
  mainHero = createSprite(x,250,10,10);
  mainHero.shapeColor = 'blue';
  
  rockGroup = createGroup();
  puddleGroup = createGroup();
  coinGroup = createGroup();
  heroGroup = createGroup();

  gameOver = createSprite(750,150);
  gameOver.addImage(gameOverImg);
  gameOver.visible = false;
  gameOver.scale = 3;

  restart = createSprite(750,330);
  restart.addImage(restartImg);
  restart.visible = false;
  restart.scale = 0.3;
}

function draw() {
  background(0,244,233);

  if (gameState === "wait") {
    var form = new Form()
    form.display();
  }
}