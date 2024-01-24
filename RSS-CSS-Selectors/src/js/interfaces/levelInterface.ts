export interface ILevel {
    level: number;
    levelLink: HTMLElement;
    inputSelector: string;
    tags: Array<string[]>;
    images: Array<string[]>;
    behavior: string;
    start(): void;
    win(): void;
    fail(): void;
    clear(): void;
    spinning(): void;
    choose(): void;
    storage(): void;
}
