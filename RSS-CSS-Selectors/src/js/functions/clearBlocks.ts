import { constants } from '../constants/constants';

export function clearBlocks() {
    constants.mapElements.innerHTML = '';
    constants.viewer.innerHTML = '';
    constants.input.value = '';
}
