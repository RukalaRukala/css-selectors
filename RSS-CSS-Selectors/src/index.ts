import './global.css';
import { level1 } from './js/levels/level1';
import { setInputInStorage } from './js/functions/storage/setInputInStorage';
import { startStorage } from './js/functions/storage/startStorage';
import { startListeners } from './js/functions/listeners/startListeners';

if (localStorage.level) {
    startStorage();
} else {
    level1.start();
}
startListeners();
setInputInStorage();
