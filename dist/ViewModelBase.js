"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ViewModelBase = /** @class */ (function () {
    function ViewModelBase(view) {
        if (view) {
            this.View = view;
            this.View.Context = this;
        }
    }
    return ViewModelBase;
}());
exports.ViewModelBase = ViewModelBase;
