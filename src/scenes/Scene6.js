/*global Phaser*/
import * as ChangeScene from './ChangeScene.js'

export default class Scene6 extends Phaser.Scene {
  constructor () {
    super('Scene6');
  }

  init (data) {
    // Initialization code goes here
  }

  preload () {
    // Preload assets
    this.load.image('orange', './assets/sprites/orBall.png');
    this.load.image('red', './assets/sprites/redBall.png');    this.load.image('orange', './assets/sprites/orBall.png');
    this.load.image('volcano', './assets/sprites/volcano.png');


    // Declare variables for center of the scene
    this.centerX = this.cameras.main.width / 2;
    this.centerY = this.cameras.main.height / 2;
  }

  create (data) {
    //add addSceneEventListeners
    ChangeScene.addSceneEventListeners(this);
    //Create the scene
    this.cameras.main.setBackgroundColor(0x5555ff);

    var volcano = this.add.sprite(this.centerX, 460, 'volcano');
    volcano.setScale(0.5);

    var particles0 = this.add.particles('orange');
    var particles1 = this.add.particles('red');

    var emitter0 = particles0.createEmitter({
      lifespan: 2000,
      speedX: {min: -500, max: 500},
      speedY: {min: -400, max: -100},
      scale: {start: 1, end: 0},
      blendMode: 'ADD'
    });
    emitter0.setPosition(this.centerX, 350);
    emitter0.setGravityY(800);

    var emitter1 = particles1.createEmitter({
      lifespan: 2000,
      speedX: {min: -500, max: 500},
      speedY: {min: -400, max: -100},
      scale: {start: 1, end: 0},
      blendMode: 'ADD'
    });
    emitter1.setPosition(this.centerX, 350);
    emitter1.setGravityY(800);

  }

  update (time, delta) {
    // Update the scene
  }
}
