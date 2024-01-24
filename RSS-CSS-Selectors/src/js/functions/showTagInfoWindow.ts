import { constants } from '../constants/constants';
import { createInfoWindow } from './createInfoWindow';

export function showTagInfoWindow() {
    constants.getViewerTagNodes().forEach((tag) => {
        tag.addEventListener('mouseover', (event) => {
            const images = document.querySelectorAll('.image') as NodeListOf<Element>;
            images.forEach((image) => {
                const infoWindow = document.createElement('div');
                const target = event.target as HTMLElement;
                const img = image as HTMLElement;
                if (target.className === 'tagIn') {
                    constants.getViewerTagNodes().forEach((elem) => {
                        const element = elem as HTMLElement;
                        element.style.color = 'rgba(161, 174, 204, 0.9)';
                    });
                    target.style.color = 'white';
                }
                createInfoWindow(target, image, infoWindow);
                tag.addEventListener('mouseout', () => {
                    infoWindow.remove();
                    img.style.boxShadow = '';
                    target.style.color = '';
                    constants.getViewerTagNodes().forEach((elem) => {
                        const element = elem as HTMLElement;
                        element.style.color = '';
                    });
                });
            });
        });
    });
}
