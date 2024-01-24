import { TotalLevel } from './totalLevelClass';

const level = 3;
const inputSelector = '.enemy';
const tags = [['<heart/>'], ['<sword/>'], ['<shield/>'], ['<shield/>'], ['<dragon class="enemy"/>']];
const images = [['heart.png'], ['sword.svg'], ['shield.svg'], ['shield.svg'], ['dragon.png', 'deleted']];
const behavior = 'bit';

export const level3 = new TotalLevel(level, inputSelector, tags, images, behavior);
