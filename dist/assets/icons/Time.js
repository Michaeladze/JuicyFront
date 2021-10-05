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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
exports.default = (function (props) {
    return react_1.default.createElement("svg", __assign({ width: '24', height: '24', viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, props),
        react_1.default.createElement("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM12 7.50342C12.359 7.50342 12.65 7.79443 12.65 8.15342L12.65 12.0034H16C16.359 12.0034 16.65 12.2944 16.65 12.6534C16.65 13.0124 16.359 13.3034 16 13.3034H12C11.641 13.3034 11.35 13.0124 11.35 12.6534L11.35 8.15342C11.35 7.79443 11.641 7.50342 12 7.50342Z', fill: 'currentColor' }));
});
