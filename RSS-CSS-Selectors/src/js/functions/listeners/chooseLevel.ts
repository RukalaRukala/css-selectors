import { levelList } from '../../levels/levelList';

export function chooseLevel() {
    localStorage.input = '';
    levelList.forEach((level) => {
        level.choose();
    });
}
