import { chooseLevel } from './chooseLevel';
import { enterByKeyboard } from './enterByKeyboard';
import { enterByMouse } from './enterByMouse';
import { help } from './help';
import { levelsObserver } from './levelsObserver';
import { pushResetButton } from './pushResetButton';
import { removeCongratulation } from './removeCongratulation';

export function startListeners() {
    chooseLevel();
    pushResetButton();
    help();
    enterByKeyboard();
    enterByMouse();
    levelsObserver();
    removeCongratulation();
}
