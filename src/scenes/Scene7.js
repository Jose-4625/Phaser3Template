/*global Phaser*/
import * as ChangeScene from './ChangeScene.js'

export default class Scene7 extends Phaser.Scene {
  constructor () {
    super('Scene7');
  }

  init (data) {
    // Initialization code goes here
  }

  preload () {
    // Preload assets
    this.load.image('arrow', './assets/sprites/arrow.png');

    // Declare variables for center of the scene
    this.centerX = this.cameras.main.width / 2;
    this.centerY = this.cameras.main.height / 2;
  }

  create (data) {
    //add addSceneEventListeners
    ChangeScene.addSceneEventListeners(this);
    //Create the scene
    this.cameras.main.setBackgroundColor(0xaaffdd);

    var arrow = this.add.sprite(this.centerX, this.centerY, 'arrow');
    var downX, upX, downY, upY, swipeDirection, threshold = 80;
    this.input.on('pointerdown', function(pointer){
      downX = pointer.x;
      downY = pointer.y;
    });

    this.input.on('pointerup', function(pointer){
      upX = pointer.x;
      upY = pointer.y;
      if (upX < downX - threshold){
        swipeDirection = 270;
      }else if (upX > downX + threshold){
        swipeDirection = 90;
      }else if (upY < downY - threshold){
        swipeDirection = 0;
      }else if (upY > downY + threshold){
        swipeDirection = 180;
      }
      arrow.angle = swipeDirection;
    });
  }

  update (time, delta) {
    // Update the scene
  }
}
