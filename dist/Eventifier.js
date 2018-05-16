"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var $ = require("jquery");
var Eventifier = /** @class */ (function () {
    function Eventifier() {
    }
    Eventifier.prototype.on = function (event, handler) {
        var t = this;
        if (t.EventObject)
            $(t.EventObject).on(event, handler);
        else
            $(this).on(event, handler);
    };
    Eventifier.prototype.trigger = function (event, params) {
        var t = this;
        if (t.EventObject)
            $(t.EventObject).trigger(event, params);
        else
            $(this).trigger(event, params);
    };
    Eventifier.prototype.off = function (event) {
        var t = this;
        if (t.EventObject)
            $(t.EventObject).off(event);
        else
            $(this).off(event);
    };
    return Eventifier;
}());
exports.Eventifier = Eventifier;
