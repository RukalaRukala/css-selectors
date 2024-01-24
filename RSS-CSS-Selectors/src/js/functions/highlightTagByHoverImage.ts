import { constants } from '../constants/constants';
import { createInfoWindow } from './createInfoWindow';

export function highlightTagByHoverImage() {
    constants.createImagesList().forEach((elem) => {
        elem.addEventListener('mouseover', () => {
            const infoWindow = document.createElement('div');
            const tagsList = Array.from(constants.createTagList()).concat(Array.from(constants.createTagInList()));
            let tag: Element;
            for (tag of tagsList) {
                const tagId = tag.getAttribute('id') as string;
                const highlightTag = document.getElementById(tagId) as HTMLElement;
                if (tagId === elem.getAttribute('idi')) {
                    highlightTag.style.color = 'white';
                    createInfoWindow(tag, elem, infoWindow);
                }
                elem.addEventListener('mouseout', (event) => {
                    const target = event.target as HTMLElement;
                    highlightTag.style.color = '';
                    infoWindow.remove();
                    target.style.boxShadow = '';
                });
            }
        });
    });
}
