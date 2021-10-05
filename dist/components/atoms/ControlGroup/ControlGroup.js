"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("./ControlGroup.scss");
var ControlGroup = function (_a) {
    var className = _a.className, _b = _a.direction, direction = _b === void 0 ? 'vertical' : _b, inset = _a.inset, children = _a.children;
    return (react_1.default.createElement("div", { className: "rf-control-group rf-control-group--" + direction + " " + (inset ? 'rf-control-group--inset' : '') + " " + (className || '') }, children));
};
exports.default = ControlGroup;
