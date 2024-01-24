import { TotalLevel } from './totalLevelClass';

const level = 6;
const inputSelector = '*';
const tags = [
    ['<shield class="defense"/>'],
    ['<heart/>'],
    ['<sword id="weapon"/>'],
    ['<pigeon/>'],
    ['<shield class="defense"/>'],
];
const images = [
    ['shield.svg', 'deleted'],
    ['heart.png', 'deleted'],
    ['sword.svg', 'deleted'],
    ['pigeon.png', 'deleted'],
    ['shield.svg', 'deleted'],
];
const behavior = 'pierce';

export const level6 = new TotalLevel(level, inputSelector, tags, images, behavior);
