import { TotalLevel } from './totalLevelClass';

const level = 10;
const inputSelector = ':nth-of-type(odd)';
const tags = [
    ['<heart id="love"/>'],
    ['<heart/>'],
    ['<heart class="life"/>'],
    ['<heart class="life"/>'],
    ['<heart/>'],
    ['<heart/>'],
];
const images = [
    ['heart.png', 'deleted'],
    ['heart.png'],
    ['heart.png', 'deleted'],
    ['heart.png'],
    ['heart.png', 'deleted'],
    ['heart.png'],
];
const behavior = 'bit';

export const level10 = new TotalLevel(level, inputSelector, tags, images, behavior);
