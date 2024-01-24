import { constants } from '../../constants/constants';

export function putWinCounterInStorage() {
    if (localStorage.winCounter) {
        localStorage.winCounter = JSON.stringify(constants.winCounter);
    } else {
        localStorage.setItem('winCounter', JSON.stringify(constants.winCounter));
    }
}
