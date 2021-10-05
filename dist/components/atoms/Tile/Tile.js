"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("./Tile.scss");
var Tile = function (_a) {
    var children = _a.children, _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.type, type = _c === void 0 ? 'default' : _c, _d = _a.hideBackground, hideBackground = _d === void 0 ? false : _d;
    var stretchClass = type === 'stretch' ? 'rf-tile--stretch' : '';
    var backgroundClass = !hideBackground ? 'rf-tile__background' : '';
    return react_1.default.createElement("div", { className: "rf-tile " + backgroundClass + " " + stretchClass + " " + className }, children);
};
exports.default = Tile;
