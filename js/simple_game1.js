let gameScene = new Phaser.Scene('game');
let config ={
  type:Phaser.AUTO,
  width: 640,
  height: 360,
  scene: gameScene
};

let game = new Phaser.Game(config);