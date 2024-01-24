import { constants } from '../../constants/constants';
import { goAtTheBeginning } from '../goAtTheBeginning';

export function removeCongratulation() {
    constants.back.addEventListener('click', () => {
        constants.congratulation.style.display = 'none';
        constants.back.style.display = 'none';
        if (localStorage.congratulation) {
            localStorage.congratulation = 'none';
            localStorage.back = 'none';
        }
        goAtTheBeginning();
    });
}
