export class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameScene' })
    }

    create(): void {
        this.add.bitmapText(128, 128, 'PressStart2P-White', 'You made it to the actual game,\nI\'m so proud of you!', undefined, Phaser.GameObjects.BitmapText.ALIGN_CENTER)
            .setOrigin(0.5, 0.5);
    }

    update(): void {

    }
}