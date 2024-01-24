import { ILevel } from '../../interfaces/levelInterface';
import { level1 } from '../../levels/level1';
import { levelList } from '../../levels/levelList';

export function getStorageLevel(): ILevel {
    let lev = level1;
    if (localStorage.getItem('level')) {
        const storage = localStorage.getItem('level') as string;
        const levelNumber = +storage - 1;
        for (let i = 0; i < levelList.length; i += 1) {
            if (i === levelNumber) {
                lev = levelList[i];
            }
        }
    }
    return lev;
}
