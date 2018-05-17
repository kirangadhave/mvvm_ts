export declare class ViewBase {
    Context: any;
    Root: HTMLElement;
    constructor(root: HTMLElement);
    create(): void;
    update(event?: any, param?: any): void;
}
