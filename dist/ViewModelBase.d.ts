import { ViewBase } from './index';
import { Eventifier } from './Eventifier';
export declare class ViewModelBase extends Eventifier {
    View: ViewBase;
    constructor(view: ViewBase);
}
