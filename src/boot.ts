const pressStart_white_png = require('./fonts/PressStart2P-White.png');
const pressStart_white_xml = require('./fonts/PressStart2P-White.xml');

export class BootScene extends Phaser.Scene {
    constructor() {
        super({ key: 'BootScene' })
    }

    preload(): void {
        this.load.bitmapFont('PressStart2P-White', pressStart_white_png, pressStart_white_xml);
    }

    create():void{
        this.scene.start('PreloadScene');
    }
}