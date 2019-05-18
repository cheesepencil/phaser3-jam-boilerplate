import { BootScene } from './boot';
import { PreloadScene } from './preload';
import { TitleScene } from './titleScene';
import { GameScene } from './gameScene';

export const PhaserGameConfig: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    render: {
        antialias: false
    },
    scale: {
        mode: Phaser.Scale.FIT
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
    // use class def instead of instance when/if #4522 is resolved
    scene: [
        new BootScene(),
        new PreloadScene(),
        new TitleScene(),
        new GameScene()
    ] 
};