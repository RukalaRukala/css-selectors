import { IConstants } from '../interfaces/constantsInterface';

export const constants: IConstants = {
    congratulation: document.getElementById('congratulation') as HTMLElement,
    back: document.getElementById('back') as HTMLElement,
    winCounter: 0,
    levels: document.querySelectorAll('.level') as NodeListOf<HTMLElement>,
    mapElements: document.querySelector('.objects') as Element,
    input: document.querySelector('.input-selector') as HTMLInputElement,
    enterButton: document.querySelector('.enter-button') as HTMLElement,
    helpButton: document.querySelector('.help-button') as HTMLElement,
    resetButton: document.querySelector('.reset-button') as HTMLElement,
    viewer: document.querySelector('.viewer') as Element,
    editor: document.querySelector('.editor') as HTMLElement,
    viewerTags: document.querySelector('.viewer') as HTMLElement,
    map: document.querySelector('.objects') as HTMLElement,
    getViewerTagNodes: () => document.querySelectorAll('.tag') as NodeListOf<Element>,
    createDeletedList: () => document.querySelectorAll('.deleted') as NodeListOf<Element>,
    createTagList: () => document.querySelectorAll('.tag') as NodeListOf<Element>,
    createTagInList: () => document.querySelectorAll('.tagIn') as NodeListOf<Element>,
    createImagesList: () => document.querySelectorAll('.image') as NodeListOf<Element>,
    getLevelDone: (curLev) => document.getElementById(`Level-${curLev.level}`) as HTMLElement,
    getLevelLinkId: (levelLink) => +levelLink.id.split('-')[1],
};
