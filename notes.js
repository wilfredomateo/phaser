//HTML Setup
<!DOCTYPE html>
<html>
<head>
    <script src="phaser.js"></script>
</head>
<body>

    <script>
	//Gaming stuff lives here
    </script>

</body>
</html>

//////////////////////////////////////////////////

//Preload Assets
function preload() {

}

//////////////////////////////////////////////////

//Create the Game
function create() {

}

//////////////////////////////////////////////////

//Create an Update Function
function update() {
	// move that circle to the right
	circle.x += 1;
	or
	gameState.circle.x += 1;
  }

//////////////////////////////////////////////////

//Create a gameState Object
const gameState = {};

//////////////////////////////////////////////////

//Set Interactive
gameState.rect1.setInteractive();

//////////////////////////////////////////////////

//Enable an Event Handler 
gameState.rect1.on('pointerup', function() {
	gameState.rect1.fillColor = 0xaaffaa;
});

//////////////////////////////////////////////////

//Enable a Keypress Handler
gameState.circle = this.add.circle(30, 30, 10, 0xFF0000);
  this.input.keyboard.on('keyboard-W', function() {
    gameState.circle.fillColor = 0xFFFF00;
  });

//////////////////////////////////////////////////

//Enable the use of Cursor Keys
function create() {
	gameState.circle = this.add.circle(50, 50, 20, 0xFF0000);
	gameState.cursors = this.input.keyboard.createCursorKeys();
  }
  
  function update() {
	if (gameState.cursors.left.isDown) {
	  // move the circle left!
	  gameState.circle.x -= 3;
	}
  }

//////////////////////////////////////////////////

//Game setup or Config setup
const config = {
	type: Phaser.AUTO,
	width: 450,
	height: 600,
	backgroundColor: "#083A6B",
	scene: {
    create,
    preload
	}
};

const game = new Phaser.Game(config);

//////////////////////////////////////////////////

//Load an Image
this.load.image('name', 'link');

//////////////////////////////////////////////////

//Load Sounds
function preload() {
	this.load.audio('theme', 'assets/music/theme.wav');
  }
  
  function create() {
	gameState.music = this.sound.add('theme');
	gameState.music.play();
  }

//////////////////////////////////////////////////

//Add Sprite
this.add.sprite(x,y,'name');

//////////////////////////////////////////////////

//Add Image
this.add.image(200, 200, 'name');

//////////////////////////////////////////////////

//Add Text
this.add.text(30, 40, 'Hello There');

//////////////////////////////////////////////////

//Create a circle
this.add.circle(20, 20, 5, 0xff0000);
or 
gameState.circle = this.add.circle(20, 20, 5, 0xff0000);

//////////////////////////////////////////////////

//Create a rectangle 
this.add.rectangle(40, 60, 90, 10, 0x00ff00);
or
gameState.rectangle = this.add.rectangle(40, 60, 90, 10, 0x00ff00);

//////////////////////////////////////////////////