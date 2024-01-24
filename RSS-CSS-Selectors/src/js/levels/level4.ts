import { TotalLevel } from './totalLevelClass';

const level = 4;
const inputSelector = 'dragon, .weapon';
const tags = [
    ['<heartInHands/>'],
    ['<shield/>'],
    ['<swordPierce class="weapon"/>'],
    ['<shield>', '    <swordPierce class="weapon"/>'],
    ['<dragon/>'],
];
const images = [
    ['heart-in-hands.png'],
    ['shield.svg'],
    ['sword.svg', 'deleted'],
    ['shield.svg', 'swordPierce.png', 'deleted'],
    ['dragon.png', 'deleted'],
];
const behavior = 'pierce';

export const level4 = new TotalLevel(level, inputSelector, tags, images, behavior);
