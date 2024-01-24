import { ILevel } from '../interfaces/levelInterface';
import '../../assets/images/heart.png';
import '../../assets/images/dragon.png';
import '../../assets/images/pigeon.png';
import '../../assets/images/cloud.svg';
import '../../assets/images/clouds.png';
import '../../assets/images/heart-in-hands.png';
import '../../assets/images/shield.svg';
import '../../assets/images/sword.svg';
import '../../assets/images/swordPierce.png';
import { constants } from '../constants/constants';

export function addImagesOnTheMap(level: ILevel) {
    level.images.forEach((elem, i) => {
        const div = document.createElement('div');
        const innerDiv = document.createElement('div');
        const img = document.createElement('img');
        const innerImg = document.createElement('img');
        img.setAttribute('src', '../assets/images/' + elem[0]);
        img.setAttribute('alt', 'картинка');
        img.setAttribute('idi', String(i));

        if (elem.length === 2) {
            img.setAttribute('class', elem[1] + ' image ' + level.behavior);
            div.append(img);
        } else if (elem.length === 1) {
            img.setAttribute('class', 'image');
        } else {
            innerImg.setAttribute('src', '../assets/images/' + elem[1]);
            innerImg.setAttribute('alt', 'картинка');
            innerImg.setAttribute('idi', String(i) + 1);
            if (elem[2] === 'deleted') {
                innerImg.setAttribute('class', elem[2] + ' image inner ' + level.behavior);
            } else {
                innerImg.setAttribute('class', 'image inner');
            }
            innerDiv.appendChild(innerImg);
            img.setAttribute('class', 'image');
            div.appendChild(img);
            div.appendChild(innerDiv);
        }
        constants.map.appendChild(elem.length > 1 ? div : img);
    });
}
