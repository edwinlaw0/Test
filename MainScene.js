class MainScene extends Phaser.Scene {
	constructor() {
		super('MainScene');
	}
	preload() {
		this.load.image('tiles', 'TileTextures.svg');
	}
	create() {
		this.cameras.main.backgroundColor = Phaser.Display.Color.HexStringToColor("#107010");
		let circle = this.add.circle(450, 300, 120, 0xff1010);
		this.physics.add.existing(circle);
		this.add.sprite(450, 300, 'tiles');
	}
}