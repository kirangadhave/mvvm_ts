"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Eventifier_1 = require("./Eventifier");
var ViewModelBase = /** @class */ (function (_super) {
    __extends(ViewModelBase, _super);
    function ViewModelBase(view) {
        var _this = _super.call(this) || this;
        if (view) {
            _this.View = view;
            _this.View.Context = _this;
        }
        return _this;
    }
    return ViewModelBase;
}(Eventifier_1.Eventifier));
exports.ViewModelBase = ViewModelBase;
