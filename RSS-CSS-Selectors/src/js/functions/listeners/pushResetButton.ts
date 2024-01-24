import { constants } from '../../constants/constants';
import { goAtTheBeginning } from '../goAtTheBeginning';

export function pushResetButton() {
    constants.resetButton.addEventListener('click', () => {
        goAtTheBeginning();
    });
}
