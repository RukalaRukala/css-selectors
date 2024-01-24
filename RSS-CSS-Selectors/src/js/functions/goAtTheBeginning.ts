import { constants } from '../constants/constants';
import { level1 } from '../levels/level1';
import { levelList } from '../levels/levelList';

export function goAtTheBeginning() {
    levelList.forEach((level) => {
        level.clear();
    });
    constants.winCounter = 0;
    level1.start();
}
