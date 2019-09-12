/*global Phaser*/
import * as ChangeScene from './ChangeScene.js'

export default class Scene4 extends Phaser.Scene {
  constructor () {
    super('Scene4');
  }

  init (data) {
    // Initialization code goes here
  }

  preload () {
    // Preload assets
    this.load.image("player", './assets/sprites/player_sprite.png');

    // Declare variables for center of the scene
    this.centerX = this.cameras.main.width / 2;
    this.centerY = this.cameras.main.height / 2;
  }

  create (data) {
    //add addSceneEventListeners
    ChangeScene.addSceneEventListeners(this);
    //Create the scene
    this.cameras.main.setBackgroundColor(0xcc66ff);

    var a1 = this.add.sprite(100,150, 'player');
    var a2 = this.add.sprite(250,150, 'player');
    var a3 = this.add.sprite(400,500, 'player');
    var a4 = this.add.sprite(700,150, 'player');
    var a5 = this.add.sprite(300,300, 'player');



    this.tweens.add({
      targets: a1,
      x: 100,
      y: 500,
      ease: "Cubic",
      duration: 2000
    });
    this.tweens.add({
      targets: a2,
      x: 100,
      y: 150,
      ease: "Elastic",
      duration: 1000
    });
    this.tweens.add({
      targets: a3,
      y: 100,
      ease: "Circ",
      duration: 1500
    });
    this.tweens.add({
      targets: a4,
      x: 500,
      y: 500,
      ease: "Linear",
      delay: 1000,
      duration: 1000,
      yoyo: true,
      repeat: -1
    });
    this.tweens.add({
      targets: a5,
      alpha: 0,
      duration: 5000,
      ease: "bounce"
    });

  }

  update (time, delta) {
    // Update the scene
  }
}
