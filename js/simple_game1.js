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
  this.player = this.add.sprite(40, this.sys.game.config.height / 2, 'player');
  this.player.setScale(0,5);
}


gameScene.create = function(){
  let background = this.add.sprite(0,0, 'background');
  background.setOrigin(0,0);
  this.add.sprite(180,180, 'background');
  this.add.sprite(0,0, 'player');
  this.add.sprite(100,200, 'treasure');
}

gameScene.update = function(){
  if(this.input.activePointer.isDown){
    this.player.x += this.playerSpeed;
  }
}
