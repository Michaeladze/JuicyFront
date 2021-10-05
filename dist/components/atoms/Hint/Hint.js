"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("./Hint.scss");
var index_1 = require("../../../index");
var Hint = function (_a) {
    var children = _a.children, button = _a.button, _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.variant, variant = _c === void 0 ? 'default' : _c, icon = _a.icon, title = _a.title, _d = _a.maxWidth, maxWidth = _d === void 0 ? '648px' : _d, _e = _a.showLine, showLine = _e === void 0 ? false : _e;
    var lineClass = showLine ? 'line' : '';
    return (react_1.default.createElement("div", { style: { maxWidth: maxWidth }, className: "rf-hint__wrapper rf-hint__" + variant + " " + lineClass + " " + className + " " },
        icon === 'info' &&
            react_1.default.createElement("div", { className: 'rf-hint__icon' },
                react_1.default.createElement(index_1.Info, null)),
        react_1.default.createElement("div", { className: 'rf-hint__body' },
            title && react_1.default.createElement("div", { className: 'rf-hint__title-text' },
                " ",
                title),
            children && react_1.default.createElement("div", { className: 'rf-hint__message' },
                " ",
                children,
                " "),
            button && react_1.default.createElement("div", { className: 'rf-hint__button' },
                " ",
                button,
                " "))));
};
exports.default = Hint;
