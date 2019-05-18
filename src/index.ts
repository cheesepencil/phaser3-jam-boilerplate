require('./index.html');
require('./styles/master.css');

import 'phaser';
import { PhaserGame } from './game';
import { PhaserGameConfig } from './gameConfig';

window.onload = () => {
    let game = new PhaserGame(PhaserGameConfig);
};