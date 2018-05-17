import {ViewBase} from './index';

export class ViewModelBase {
    public View : ViewBase

    constructor(view : ViewBase) {
        if (view) {
            this.View = view;
            this.View.Context = this;
        }
    }

    on(event, handler) {
        $(this).on(event, handler);
    }

    trigger(event, params) {
        $(this).trigger(event, params);
    }

    off(event) {
        $(this).off(event);
    }
}
