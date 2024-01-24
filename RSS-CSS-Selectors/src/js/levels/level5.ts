import { TotalLevel } from './totalLevelClass';

const level = 5;
const inputSelector = 'shield swordPierce';
const tags = [
    ['<shield>', '    <swordPierce/>'],
    ['<sword/>'],
    ['<heart/>'],
    ['<sword/>'],
    ['<shield>', '    <swordPierce/>'],
];
const images = [
    ['shield.svg', 'swordPierce.png', 'deleted'],
    ['sword.svg'],
    ['heart.png'],
    ['sword.svg'],
    ['shield.svg', 'swordPierce.png', 'deleted'],
];
const behavior = 'pierce';

export const level5 = new TotalLevel(level, inputSelector, tags, images, behavior);
