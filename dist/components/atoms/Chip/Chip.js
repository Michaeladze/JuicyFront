"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("./Chip.scss");
var helpers_1 = require("../../../utils/helpers");
var index_1 = require("../../../index");
var Chip = function (_a) {
    var children = _a.children, onClick = _a.onClick, onRemove = _a.onRemove, _b = _a.size, size = _b === void 0 ? 'm' : _b, _c = _a.type, type = _c === void 0 ? 'primary' : _c, icon = _a.icon, iconPosition = _a.iconPosition, disabled = _a.disabled;
    var handleClick = function (e) {
        e.preventDefault();
        e.stopPropagation();
        onClick && onClick();
    };
    var handleRemove = function (e) {
        e.stopPropagation();
        onRemove && !disabled && onRemove();
    };
    // -------------------------------------------------------------------------------------------------------------------
    var clickableClass = onClick && !disabled ? 'rf-chip--clickable' : '';
    // -------------------------------------------------------------------------------------------------------------------
    return (react_1.default.createElement("div", { className: "rf-chip rf-chip--" + (disabled ? 'secondary' : type) + " " + helpers_1.sizeClass[size] + " " + clickableClass, onClick: handleClick },
        icon && iconPosition && iconPosition === 'left' && react_1.default.createElement("div", { className: 'rf-chip__left-icon' }, icon),
        children,
        onRemove && react_1.default.createElement("div", { className: "rf-chip__right-icon " + (disabled ? 'rf-chip__not-clickable' : ''), onClick: handleRemove },
            react_1.default.createElement(index_1.Close, null)),
        icon && iconPosition && iconPosition === 'right' && react_1.default.createElement("div", { className: 'rf-chip__right-icon' }, icon)));
};
exports.default = Chip;
