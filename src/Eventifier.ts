import * as $ from 'jquery';

export class Eventifier {
    
    on(event, handler) {
        let t : any = this;
        if (t.EventObject)
            $(t.EventObject).on(event, handler);
        else
            $(this).on(event, handler);
        
    }

    trigger(event, params) {
        let t : any = this;
        if (t.EventObject)
            $(t.EventObject).trigger(event, params);
        else
            $(this).trigger(event, params);
    }

    off(event) {
        let t : any = this;
        if (t.EventObject)
            $(t.EventObject).off(event);
        else
            $(this).off(event);
    }
}