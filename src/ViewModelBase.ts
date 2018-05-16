import {ViewBase} from './index';
import { Eventifier } from './Eventifier';

export class ViewModelBase extends Eventifier {
    public View : ViewBase

    constructor(view : ViewBase) {
        super();
        if (view) {
            this.View = view;
            this.View.Context = this;
        }
    }
}
