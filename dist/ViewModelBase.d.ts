import { ViewBase } from './index';
export declare class ViewModelBase {
    View: ViewBase;
    constructor(view: ViewBase);
    on(event: any, handler: any): void;
    trigger(event: any, params: any): void;
    off(event: any): void;
}
