let gameScene = new Phaser.Scene('game');
let config ={
  type:Phaser.AUTO,
  width: 640,
  height: 360,
  scene: gameScene
};

let game = new Phaser.Game(config);
gameScene.init = function(){
  this.playerspeed = 1.5;
  this.enemyMaxY = 280;
  this.enemyMinY = 80;
}
gameScene.preload = function(){
  this.load.image('background', 'assets/background.png');
  this.load.image('dragon', 'assets/dragon.png');
  this.load.image('player', 'assets/player.png');
  this.load.image('treasure', 'assets/treasure.png');
}


gameScene.create = function(){

  //create pplayer and background
  this.add.sprite(180,180, 'background');
  let background = this.add.sprite(0,0, 'background');
  background.setOrigin(0,0);
  this.player = this.add.sprite(40, this.sys.game.config.height / 2, 'player');
  this.player.setScale(0.5);
  //create the treasure
  this.treasure = this.add.sprite(this.sys.game.config.width - 80, this.sys.game.config.height / 2, 'treasure');
  this.treasure.setScale(0.6);
  //create enemies
  this.enemies = this.add.group({
    key:'dragon',
    repeat: 5,
    setXY: {
      x: 110,
      y: 100,
      stepX: 80,
      stepY: 20
    }

  })
}

gameScene.update = function(){
  //if pointer is pressed down move in that direction
  if(this.input.activePointer.isDown){
    this.player.x += this.playerSpeed;
  }
  //call gameover when the player collides with a treasure
  if(Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), this.treasure.getBounds())){
    this.gameOver();
  }
  //this restarts the game
  gameScene.gameOver = function(){
    this.scene.restart();
  }
}
