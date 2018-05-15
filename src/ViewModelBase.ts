import {ViewBase} from './index';

export class ViewModelBase {
    public View : ViewBase

    constructor(view : ViewBase) {
        if (view) {
            this.View = view;
            this.View.Context = this;
        }
    }
}
