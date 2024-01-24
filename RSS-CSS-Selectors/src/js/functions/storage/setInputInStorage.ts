import { constants } from '../../constants/constants';
import { putInputInStorage } from './putInputInStorage';

export function setInputInStorage() {
    constants.input.addEventListener('input', () => {
        putInputInStorage();
    });
}
