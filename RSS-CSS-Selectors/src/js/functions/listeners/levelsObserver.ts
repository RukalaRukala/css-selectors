import { constants } from '../../constants/constants';
import { levelList } from '../../levels/levelList';
import { clearBlocks } from '../clearBlocks';
import { deleteLevelsDoneFromStorage } from '../storage/deleteLevelsDoneFromStorage';
import { putWinCounterInStorage } from '../storage/purWinCounterInStorage';
import { putLevelsDoneInStorage } from '../storage/putLevelsDoneInStorage';

export function levelsObserver() {
    const observer = new MutationObserver((mutationRecords) => {
        mutationRecords.forEach((mutation) => {
            if (mutation.type === 'childList') {
                const levelDone = mutation.target as HTMLElement;
                const levToStart = constants.getLevelLinkId(levelDone);
                if (mutation.addedNodes[0].textContent?.split(' ').length === 3) {
                    putLevelsDoneInStorage(levToStart);
                    putWinCounterInStorage();

                    if (levToStart === 10 || levelList[levToStart].levelLink.style.color === 'green') {
                        levelList.forEach((level) => {
                            if (!level.levelLink.textContent?.split(' ')[2]) {
                                clearBlocks();
                                level.start();
                            }
                        });
                    } else {
                        clearBlocks();
                        levelList[levToStart].start();
                    }
                } else {
                    deleteLevelsDoneFromStorage(levToStart);
                    putWinCounterInStorage();
                    localStorage.input = '';
                }
            }
        });
    });
    const elem = document.body.childNodes[3];
    observer.observe(elem, {
        attributes: true,
        childList: true,
        subtree: true,
        characterData: true,
    });
}
