import { constants } from '../../constants/constants';
import { levelList } from '../../levels/levelList';
import { print } from '../printInputSelector';

export function help() {
    const rightSide = document.querySelector('.right-side') as HTMLElement;
    rightSide.addEventListener('click', (event) => {
        const target = event.target as HTMLElement;
        if (target.getAttribute('class') === 'help-button') {
            levelList.forEach((level) => {
                if (level.levelLink.getAttribute('class') === 'level red-highlight') {
                    constants.input.value = '';
                    print(level.inputSelector, 0);
                }
            });
        }
    });
}
