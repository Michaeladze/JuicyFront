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
var helpers_1 = require("../../../utils/helpers");
require("./Button.scss");
var Preloader_1 = __importDefault(require("../Preloader"));
var Button = function (_a) {
    var _b = _a.type, type = _b === void 0 ? 'button' : _b, _c = _a.size, size = _c === void 0 ? 'm' : _c, _d = _a.fullWidth, fullWidth = _d === void 0 ? false : _d, _e = _a.buttonType, buttonType = _e === void 0 ? 'primary' : _e, preloader = _a.preloader, _f = _a.textColor, textColor = _f === void 0 ? 'default' : _f, _g = _a.round, round = _g === void 0 ? false : _g, pressedCondition = _a.pressedCondition, children = _a.children, startAdornment = _a.startAdornment, endAdornment = _a.endAdornment, props = __rest(_a, ["type", "size", "fullWidth", "buttonType", "preloader", "textColor", "round", "pressedCondition", "children", "startAdornment", "endAdornment"]);
    var classesMap = {
        primary: 'rf-button--primary',
        light: 'rf-button--light',
        secondary: 'rf-button--secondary',
        ghost: 'rf-button--ghost',
        danger: 'rf-button--danger',
        icon: 'rf-button--icon',
        iconFill: 'rf-button--iconFill',
        text: 'rf-button--text',
        white: 'rf-button--white',
    };
    var widthClass = fullWidth ? 'rf-button__full-width' : '';
    var roundClass = round ? 'rf-button--round' : '';
    var colorClass = buttonType === 'text' ? "rf-button--text-" + textColor : '';
    return (react_1.default.createElement("button", __assign({}, props, { type: type, className: "rf-button " + classesMap[buttonType] + " " + helpers_1.sizeClass[size] + " " + widthClass + " " + (props.className || '') + " " + colorClass + " " + roundClass }),
        react_1.default.createElement("div", { "data-testid": 'rf-button__content', className: "rf-button__content " + (preloader ? 'rf-button__content--hidden' : '') },
            !!startAdornment && react_1.default.createElement("div", { className: 'rf-button__adornment rf-button__adornment--start' }, startAdornment),
            !!children && react_1.default.createElement("div", { className: 'rf-button__text' }, children),
            !!endAdornment && react_1.default.createElement("div", { className: 'rf-button__adornment rf-button__adornment--end' }, endAdornment)),
        !!preloader && react_1.default.createElement(Preloader_1.default, { size: 's', variant: 'inherit' })));
};
exports.default = Button;
