export const gameConfig: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    render: {
        antialias: false
    },
    scale: {
        mode: Phaser.Scale.MAX_ZOOM
    },
    parent: 'game-parent',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    width: 256,
    height: 256,
    scene: []
};