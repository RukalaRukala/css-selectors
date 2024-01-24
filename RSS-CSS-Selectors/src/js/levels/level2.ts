import { TotalLevel } from './totalLevelClass';

const level = 2;
const inputSelector = 'sword#defense';
const tags = [['<shield/>'], ['<shield id="defense"/>'], ['<shield/>']];
const images = [['shield.svg'], ['shield.svg', 'deleted'], ['shield.svg']];
const behavior = 'bit';

export const level2 = new TotalLevel(level, inputSelector, tags, images, behavior);
