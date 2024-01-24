export function deleteLevelsDoneFromStorage(levToStart: number) {
    const storageLevelDone = JSON.parse(localStorage.levelsDone);
    for (let i = 0; i < storageLevelDone.length; i += 1) {
        if (storageLevelDone[i] === levToStart) {
            delete storageLevelDone[i];
        }
    }
    localStorage.levelsDone = JSON.stringify(storageLevelDone);
}
