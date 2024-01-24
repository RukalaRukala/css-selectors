import { constants } from '../../constants/constants';
import { checkInputValue } from './checkInputValue';

export function enterByMouse() {
    constants.enterButton.addEventListener('click', () => {
        checkInputValue();
    });
}
