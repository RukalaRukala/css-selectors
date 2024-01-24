import { TotalLevel } from './totalLevelClass';

const level = 9;
const inputSelector = 'inHands:first-of-type';
const tags = [
    ['<shield/>'],
    ['<inHands class="care"/>'],
    ['<pigeon/>'],
    ['<shield>', '    <heart/>'],
    ['<inHands class="care"/>'],
];
const images = [
    ['shield.svg'],
    ['heart-in-hands.png', 'deleted'],
    ['pigeon.png'],
    ['shield.svg', 'heart.png', 'fixed'],
    ['heart-in-hands.png'],
];
const behavior = 'bit';

export const level9 = new TotalLevel(level, inputSelector, tags, images, behavior);
