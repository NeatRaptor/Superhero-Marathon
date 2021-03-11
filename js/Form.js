class Form {
    constructor() {
        this.title = createElement('h2');
        this.button = createButton('Play');
        this.greeting = createElement('h2');
        this.image1 = loadImage('images/antman.png');
        this.image2 = loadImage('images/captam.png');
        this.image3 = loadImage('images/hulk.png');
        this.image4 = loadImage('images/spiderman.png');
        this.image5 = loadImage('images/thor.png');

  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.title.hide();
  }

  display(){
    this.title.html("Superhero Marathon");
    this.title.position(displayWidth/2 - 50, 0);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    image(this.image1,300,200,10,10);
    this.button.mousePressed(()=>{
      
      this.input.hide();
      this.button.hide();
      game.play();
    });
  }
}