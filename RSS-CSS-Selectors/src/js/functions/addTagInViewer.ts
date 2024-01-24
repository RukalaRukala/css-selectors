import { constants } from '../constants/constants';
import { ILevel } from '../interfaces/levelInterface';

function setAttributes(elem: HTMLElement, id: string, className: string, content: string) {
    elem.setAttribute('id', id);
    elem.setAttribute('class', className);
    elem.textContent = content;
}

export function addTagsInViewer(level: ILevel) {
    level.tags.forEach((elem, i) => {
        const tag = document.createElement('div');
        if (elem.length === 1) {
            setAttributes(tag, String(i), 'tag', elem[0]);
            constants.viewerTags.appendChild(tag);
        } else {
            const innerTag1 = document.createElement('div');
            const innerTag2 = document.createElement('pre');
            const innerTag3 = document.createElement('div');
            tag.setAttribute('id', String(i));
            tag.setAttribute('class', 'tag');

            setAttributes(innerTag1, String(i), 'tag', elem[0]);
            setAttributes(innerTag2, String(i) + 1, 'tagIn', elem[1]);
            setAttributes(innerTag3, String(i), 'tag', elem[0].replace('<', '</'));

            tag.appendChild(innerTag1);
            tag.appendChild(innerTag2);
            tag.appendChild(innerTag3);

            constants.viewerTags.appendChild(tag);
        }
    });
}
