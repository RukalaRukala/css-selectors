export function createInfoWindow(tag: Element, image: Element, infoWindow: HTMLElement) {
    const coordinate = image.getBoundingClientRect();
    const img = image as HTMLElement;
    if (tag.getAttribute('id') === image.getAttribute('idi')) {
        document.body.prepend(infoWindow);
        infoWindow.style.left = String(coordinate.x) + 'px';
        infoWindow.style.top = String(coordinate.y - 60) + 'px';
        infoWindow.textContent = tag.textContent;
        infoWindow.setAttribute('id', 'window');
        img.style.boxShadow = '0px 5px 10px 0px rgba(255, 0, 0, 1)';
    }
}
