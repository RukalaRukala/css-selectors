import { constants } from '../../constants/constants';

export function putInputInStorage() {
    if (localStorage.input) {
        localStorage.input = constants.input.value;
    } else {
        localStorage.setItem('input', constants.input.value);
    }
}
