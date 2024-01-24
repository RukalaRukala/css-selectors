import { constants } from '../constants/constants';
import { ILevel } from '../interfaces/levelInterface';

export function highlightLevelLink(curLev: ILevel) {
    constants.levels.forEach((levelLink) => {
        if (curLev.level === constants.getLevelLinkId(levelLink)) {
            constants.levels.forEach((levLink) => {
                levLink.setAttribute('class', 'level');
            });
            levelLink.setAttribute('class', 'level red-highlight');
        }
    });
}
