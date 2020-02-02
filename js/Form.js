class Form {

  //create constructor
  constructor() {
    //create input button
    this.input = createInput("Name");

    //create play button
    this.button = createButton('Play');

    //set greeting element
    this.greeting = createElement('h2');
    this.title = createElement('h2');

    //create reset button
    this.reset=createButton('RESET');
  }

  //create hide function
  hide()
  {
    //hide the all things
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  //create display function
  display()
  {

    //set background when gamestate is 1
    background(bg);

    //set the title  position
    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2 - 50, 0);

    // set the position of all buttons
    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    this.reset.position(displayWidth-100,30);

    //create the function when we pressed the play button
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 40, displayHeight/2-80);
    });

    //create function when we click on reset button
    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
    })

  }
}
