"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var $ = require("jquery");
var ViewModelBase = /** @class */ (function () {
    function ViewModelBase(view) {
        if (view) {
            this.View = view;
            this.View.Context = this;
        }
    }
    ViewModelBase.prototype.on = function (event, handler) {
        $(this).on(event, handler);
    };
    ViewModelBase.prototype.trigger = function (event, params) {
        $(this).trigger(event, params);
    };
    ViewModelBase.prototype.off = function (event) {
        $(this).off(event);
    };
    return ViewModelBase;
}());
exports.ViewModelBase = ViewModelBase;
