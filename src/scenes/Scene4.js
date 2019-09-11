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
    var text = this.add.text(this.centerX - 20, this.centerY, 'Scene4');
  }

  update (time, delta) {
    // Update the scene
  }
}
