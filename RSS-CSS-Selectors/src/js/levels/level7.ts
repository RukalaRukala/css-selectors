import { TotalLevel } from './totalLevelClass';

const level = 7;
const inputSelector = 'shield *';
const tags = [
    ['<shield>', '    <pigeon/>'],
    ['<shield>', '    <heart class="small"/>'],
    ['<heartInHands/>'],
    ['<shield>', '    <pigeon id="bird"/>'],
    ['<shield>', '    <heart/>'],
];
const images = [
    ['shield.svg', 'pigeon.png', 'deleted'],
    ['shield.svg', 'heart.png', 'deleted'],
    ['heart-in-hands.png'],
    ['shield.svg', 'pigeon.png', 'deleted'],
    ['shield.svg', 'heart.png', 'deleted'],
];
const behavior = 'bit';

export const level7 = new TotalLevel(level, inputSelector, tags, images, behavior);
