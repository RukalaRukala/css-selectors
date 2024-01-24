import { TotalLevel } from './totalLevelClass';

const level = 8;
const inputSelector = 'cloud > pigeon';
const tags = [['<cloud>', '    <pigeon/>'], ['<clouds/>'], ['<heart/>'], ['<sword/>'], ['<shield>', '    <pigeon/>']];
const images = [
    ['cloud.svg', 'pigeon.png', 'deleted'],
    ['clouds.png'],
    ['heart.png'],
    ['sword.svg'],
    ['shield.svg', 'pigeon.png', 'fixed'],
];
const behavior = 'fly';

export const level8 = new TotalLevel(level, inputSelector, tags, images, behavior);
