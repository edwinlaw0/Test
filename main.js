var config = {
	type: Phaser.AUTO,
	width: 900,
	height: 600,
	// physics: {
	// 	default: 'arcade',
	// 	arcade: {
	// 		gravity: {x: 0, y: 3000}
	// 	}
	// },
	scene: [MainScene]
}

var game = new Phaser.Game(config);