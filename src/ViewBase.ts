import {ViewModelBase} from './index';

export class ViewBase {
    Context : any;
    Root : HTMLElement;

    constructor(root : HTMLElement) {
        this.Root = root;
    }

    // public ReloadContext() : void {
    //     let dc : ViewModelBase = this.Context;
    //     this.Context = null;
    //     this.Context = dc;
    // }
}