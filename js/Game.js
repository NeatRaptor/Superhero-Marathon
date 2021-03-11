class Game {
  constructor() {}

  play() {
    if (gameState === "play") {
      if(track.x < 550) {
        track.x = 950
      }
    
      if(keyIsDown(RIGHT_ARROW)) {
        mainHero.x = mainHero.x + 5;
      }
    
      if(keyIsDown(UP_ARROW)) {
        mainHero.y = mainHero.y - 5;
      }
    
      if(keyIsDown(DOWN_ARROW)) {
        mainHero.y = mainHero.y + 5;
      }
    
      rand = Math.round(random(1,3));
      if (rand === 1){
        spawnRocks();
      } else if (rand === 2){
        spawnCoins();
      } else {
        spawnPuddles();
      }
    
      var obj = Math.round(random(1,4));
      if (frameCount%100 === 0) {
        if (obj === 1) {
          object1();
        } else if (obj === 2) {
          object2();
        } else if (obj === 3) {
          object3();
        } else {
          object4();
        }
      }
    
      if (mainHero.isTouching(puddleGroup) || 
          mainHero.isTouching(rockGroup)) {
        gameState = "end";
      }
    
    
      if (gameState === "end") {
        gameOver.visible = true;
        restart.visible = true;
        track.velocityX = 0;
        rockGroup.setVelocityXEach(0);
        puddleGroup.setVelocityXEach(0);
        coinGroup.setVelocityXEach(0);
        rockGroup.destroyEach();
        coinGroup.destroyEach();
        puddleGroup.destroyEach();
        /*hero1.velocityX = 0;
        hero2.velocityX = 0;
        hero3.velocityX = 0;
        hero4.velocityX = 0;*/
        heroGroup.setVelocityXEach(0);
    
        if(mousePressedOver(restart)){
          reset();
        }
      }
      drawSprites();
    }
  
    function spawnRocks() {
      if(frameCount%100===0) {
        var rock = createSprite(1500,Math.round(random(20,480)),10,10);
        rock.addImage(rockImg);
        rock.scale = 0.04;
        rock.velocityX = -4;
        rock.lifetime = 375;
        rockGroup.add(rock);
      }
    }
    
    function spawnCoins() {
      if(frameCount%150===0) {
        var coin = createSprite(1500,Math.round(random(20,480)),10,10);
        coin.addImage(coinImg);
        coin.scale = 0.04;
        coin.velocityX = -4;
        coin.lifetime = 375;
        coinGroup.add(coin);
      }
    }
    
    function spawnPuddles() {
      if(frameCount%200===0) {
        var puddle = createSprite(1500,Math.round(random(20,480)),10,10);
        puddle.addImage(puddleImg);
        puddle.scale = 0.07;
        puddle.velocityX = -4;
        puddle.lifetime = 375;
        puddleGroup.add(puddle);
      }
    }
    
    function object1() {
      hero1 = createSprite(x,Math.round(random(50,450)),10,10);
      hero1.velocityX = 3;
      heroGroup.add(hero1);
    }
    
    function object2() {
      hero2 = createSprite(x,Math.round(random(50,450)),10,10);
      hero2.velocityX = 3;
      heroGroup.add(hero2);
    }
    
    function object3() {
      hero3 = createSprite(x,Math.round(random(50,450)),10,10);
      hero3.velocityX = 3;
      heroGroup.add(hero3);
    }
    
    function object4() {
      hero4 = createSprite(x,Math.round(random(50,450)),10,10);
      hero4.velocityX = 3;
      heroGroup.add(hero4);
    }
    
    function reset(){
      gameState = "play";
      track.velocityX = -2;
      mainHero.x = x;
      mainHero.y = 250;
    
      restart.visible = false;
      gameOver.visible = false;
      
      rockGroup.destroyEach();
      coinGroup.destroyEach();
      puddleGroup.destroyEach();
      
      mainHero.visible = true;
    
    }
  }
}