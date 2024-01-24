import { constants } from '../../constants/constants';
import { getStorageLevel } from './getStorageLevel';
import { levelList } from '../../levels/levelList';

export function startStorage() {
    getStorageLevel().start();
    constants.input.value = localStorage.input ? localStorage.input : '';
    if (localStorage.levelsDone) {
        JSON.parse(localStorage.levelsDone).forEach((levelNumber: number) => {
            levelList.forEach((level) => {
                if (level.level === levelNumber) {
                    level.levelLink.textContent = `Level ${levelNumber} passed`;
                    level.levelLink.style.color = 'green';
                }
            });
        });
    }
    constants.winCounter = localStorage.winCounter ? +JSON.parse(localStorage.winCounter) : 0;
    if (localStorage.congratulation) {
        constants.congratulation.style.display = localStorage.congratulation;
        constants.back.style.display = localStorage.back;
    }
}
