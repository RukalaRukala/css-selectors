import { ILevel } from '../interfaces/levelInterface';
import { addTagsInViewer } from '../functions/addTagInViewer';
import { addImagesOnTheMap } from '../functions/addImagesOnTheMap';
import { highlightTagByHoverImage } from '../functions/highlightTagByHoverImage';
import { showTagInfoWindow } from '../functions/showTagInfoWindow';
import { highlightLevelLink } from '../functions/highlightLevelLink';
import { constants } from '../constants/constants';
import { showCongratulatoryWindow } from '../functions/showCongratulatoryWindow';
import { clearBlocks } from '../functions/clearBlocks';

export class TotalLevel implements ILevel {
    level: number;
    levelLink: HTMLElement;
    inputSelector: string;
    tags: Array<string[]>;
    images: Array<string[]>;
    behavior: string;
    constructor(
        curLevel: number,
        curSelector: string,
        curTags: Array<string[]>,
        curImages: Array<string[]>,
        curBehavior: string
    ) {
        this.level = curLevel;
        this.inputSelector = curSelector;
        this.tags = curTags;
        this.images = curImages;
        this.behavior = curBehavior;
        this.levelLink = document.getElementById(`Level-${curLevel}`) as HTMLElement;
    }

    start() {
        addTagsInViewer(this);
        addImagesOnTheMap(this);
        highlightTagByHoverImage();
        showTagInfoWindow();
        highlightLevelLink(this);
        this.storage();
    }

    win() {
        this.spinning();
        setTimeout(() => {
            constants.winCounter += 1;
            constants.getLevelDone(this).style.color = 'green';
            constants.getLevelDone(this).textContent = `Level ${this.level} passed`;
            if (constants.winCounter === 10) {
                showCongratulatoryWindow();
            }
        }, 700);
    }

    fail() {
        constants.editor.setAttribute('class', 'editor stress');
        setTimeout(() => constants.editor.setAttribute('class', 'editor'), 500);
    }

    clear() {
        const linkText = this.levelLink.getAttribute('id') as string;
        this.levelLink.textContent = linkText.replace('-', ' ');
        this.levelLink.style.color = '';
        clearBlocks();
    }

    spinning() {
        constants.createDeletedList().forEach((elem) => {
            const spinning = elem as HTMLElement;
            spinning.setAttribute('class', spinning.getAttribute('class') + ' spinning');
        });
    }

    choose() {
        this.levelLink.addEventListener('click', () => {
            if (this.levelLink.style.color === 'green') {
                constants.winCounter -= 1;
            }
            this.clear();
            this.start();
        });
    }

    storage(): void {
        if (localStorage.level) {
            localStorage.level = JSON.stringify(this.level);
        } else {
            localStorage.setItem('level', JSON.stringify(this.level));
        }
    }
}
