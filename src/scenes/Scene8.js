/*global Phaser*/
import * as ChangeScene from './ChangeScene.js'

export default class Scene8 extends Phaser.Scene {
  constructor () {
    super('Scene8');
  }

  init (data) {
    // Initialization code goes here
  }

  preload () {
    // Preload assets
    this.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1/webfont.js');
    // Declare variables for center of the scene
    this.centerX = this.cameras.main.width / 2;
    this.centerY = this.cameras.main.height / 2;
  }

  create (data) {
    //add addSceneEventListeners
    ChangeScene.addSceneEventListeners(this);
    //Create the scene
    WebFont.load({
      google: {
        families: ['Candal', 'Finger Paint', 'Modak']
      }
    });


    this.cameras.main.setBackgroundColor(0x99e6e6);

    var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    this.spellOutText(100, 75, 550, text, 20, 20, "#fff", 'Candal');
    this.spellOutText(100, 350, 550, text, 20, 80, "#000", 'Modak');


  }

  update (time, delta) {
    // Update the scene
  }

  spellOutText(x,y, width, text, fontSize, speed, fill, font){
    var sentence = this.add.text(x, y, "", {
      fontSize: fontSize,
      fill: fill,
      fontFamily: font
    });
    var currentLine = this.add.text(10, 10, "", {
      fontSize: fontSize,
      fontFamily: font
    })
    currentLine.alpha = 0;
    var index = 0;
    var timer;

    //start the text startLoop
    startLoop(this);

    function startLoop(that){
      timer = that.time.addEvent({
        delay: speed,
        callback: addChar,
        callbackScope: this,
        loop: true
      });
      function addChar(){
        sentence.text += text[index]
        currentLine.text += text[index]

        if (currentLine.width > width && text[index] === " "){
          sentence.text += "\n";
          currentLine.text = "";
        }
        if (index >= text.length - 1){
          timer.remove();
          console.log("stop");
        }
        index += 1;
      }
    }
  }

}
