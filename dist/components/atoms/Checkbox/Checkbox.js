"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("./Checkbox.scss");
var index_1 = require("../../../index");
var Checkbox = function (_a) {
    var label = _a.label, value = _a.value, _b = _a.icon, icon = _b === void 0 ? true : _b, _c = _a.align, align = _c === void 0 ? 'flex-start' : _c, _d = _a.halfChecked, halfChecked = _d === void 0 ? false : _d, _e = _a.position, position = _e === void 0 ? 'left' : _e, _f = _a.round, round = _f === void 0 ? false : _f, _g = _a.fullWidth, fullWidth = _g === void 0 ? false : _g, _h = _a.titleAtt, titleAtt = _h === void 0 ? '' : _h, props = __rest(_a, ["label", "value", "icon", "align", "halfChecked", "position", "round", "fullWidth", "titleAtt"]);
    var roundClass = round ? 'rf-checkbox__check--round' : '';
    var fullWidthClass = fullWidth ? 'rf-checkbox__check--fullWidth' : '';
    var disabledClass = props.disabled ? 'disabled' : '';
    var alignClass = {
        'flex-start': 'rf-checkbox--flex-start',
        'center': 'rf-checkbox--center',
        'flex-end': 'rf-checkbox--flex-end',
    };
    var showIconClass = icon ? '' : 'rf-checkbox__label--no-icon';
    var positionClass = position === 'left' ? 'rf-checkbox--left' : 'rf-checkbox--right';
    return (react_1.default.createElement("label", { className: "rf-checkbox " + (props.className || '') + " " + disabledClass + " " + alignClass[align] + " " + positionClass + " " + fullWidthClass },
        react_1.default.createElement("input", __assign({}, props, { type: 'checkbox', className: "rf-checkbox__input " + (halfChecked ? 'rf-checkbox__input--half-checked' : ''), value: value })),
        !!icon && react_1.default.createElement("span", { className: "rf-checkbox__check " + roundClass },
            react_1.default.createElement("span", { className: 'rf-checkbox__mark' }, halfChecked ? react_1.default.createElement(index_1.Reduce, null) : react_1.default.createElement(index_1.Success, null))),
        label && react_1.default.createElement("div", { title: titleAtt, className: "rf-checkbox__label " + showIconClass, tabIndex: -1 }, label)));
};
exports.default = Checkbox;
