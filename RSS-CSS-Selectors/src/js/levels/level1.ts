import { TotalLevel } from './totalLevelClass';

const level = 1;
const inputSelector = 'heart';
const tags = [['<sword/>'], ['<shield/>'], ['<heart/>'], ['<shield/>'], ['<sword/>']];
const images = [['sword.svg'], ['shield.svg'], ['heart.png', 'deleted'], ['shield.svg'], ['sword.svg']];
const behavior = 'bit';

export const level1 = new TotalLevel(level, inputSelector, tags, images, behavior);
