export class PreloadScene extends Phaser.Scene {
    private bmtLoading: Phaser.GameObjects.BitmapText;

    constructor() {
        super({ key: 'PreloadScene' })
    }

    preload(): void {
        // bitmap text resource already loaded, safe to use
        this.bmtLoading = this.add.bitmapText(128, 128, 'PressStart2P-White', 'Loading...')
            .setOrigin(0.5, 0.5);

        // load all resources here
    }

    create(): void {
        this.scene.start('TitleScene');
    }
}