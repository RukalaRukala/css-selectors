import { constants } from '../constants/constants';
import { putInputInStorage } from './storage/putInputInStorage';

export function print(selector: string, count: number) {
    if (count < selector.length) {
        constants.input.value += selector.charAt(count);
        putInputInStorage();
        count++;
        setTimeout(() => print(selector, count), 100);
    }
}
