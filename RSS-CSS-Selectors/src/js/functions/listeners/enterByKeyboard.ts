import { checkInputValue } from './checkInputValue';

export function enterByKeyboard() {
    document.addEventListener('keyup', (event) => {
        if (event.code === 'Enter') {
            checkInputValue();
        }
    });
}
