export function putLevelsDoneInStorage(levToStart: number) {
    if (localStorage.levelsDone) {
        const storageLevelDone = JSON.parse(localStorage.levelsDone);
        storageLevelDone.push(levToStart);
        localStorage.levelsDone = JSON.stringify(storageLevelDone);
    } else {
        localStorage.setItem('levelsDone', JSON.stringify([levToStart]));
    }
}
