import { constants } from '../../constants/constants';
import { levelList } from '../../levels/levelList';

export function checkInputValue() {
    if (constants.input.value !== '') {
        constants.levels.forEach((levLink) => {
            if (levLink.getAttribute('class') === 'level red-highlight') {
                const curLev = levelList[constants.getLevelLinkId(levLink) - 1];
                if (constants.input.value === curLev.inputSelector) {
                    curLev.win();
                } else {
                    curLev.fail();
                }
            }
        });
    }
}
