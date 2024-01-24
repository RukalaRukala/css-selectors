import { ILevel } from './levelInterface';

export interface IConstants {
    congratulation: HTMLElement;
    back: HTMLElement;
    winCounter: number;
    levels: NodeListOf<HTMLElement>;
    mapElements: Element;
    input: HTMLInputElement;
    enterButton: HTMLElement;
    helpButton: HTMLElement;
    resetButton: HTMLElement;
    editor: HTMLElement;
    viewer: Element;
    viewerTags: HTMLElement;
    map: HTMLElement;
    getViewerTagNodes: () => NodeListOf<Element>;
    createDeletedList: () => NodeListOf<Element>;
    createTagList: () => NodeListOf<Element>;
    createTagInList: () => NodeListOf<Element>;
    createImagesList: () => NodeListOf<Element>;
    getLevelDone: (curLev: ILevel) => HTMLElement;
    getLevelLinkId: (level: HTMLElement) => number;
}
