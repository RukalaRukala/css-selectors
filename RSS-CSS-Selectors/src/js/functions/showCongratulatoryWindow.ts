import { constants } from '../constants/constants';

export function showCongratulatoryWindow() {
    constants.congratulation.style.display = 'flex';
    constants.back.style.display = 'block';

    if (localStorage.congratulation) {
        localStorage.congratulation = 'flex';
        localStorage.back = 'block';
    } else {
        localStorage.setItem('congratulation', 'flex');
        localStorage.setItem('back', 'block');
    }
}
