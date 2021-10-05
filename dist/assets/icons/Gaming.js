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
    return react_1.default.createElement("svg", __assign({ width: '40', height: '40', viewBox: '0 0 40 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, props),
        react_1.default.createElement("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M22 9.15479C20.7624 8.44026 19.2376 8.44026 18 9.15479L11.6077 12.8454C10.3701 13.5599 9.60767 14.8804 9.60767 16.3095V23.6907C9.60767 25.1198 10.3701 26.4403 11.6077 27.1548L18 30.8454C19.2376 31.5599 20.7624 31.5599 22 30.8454L28.3923 27.1548C29.6299 26.4403 30.3923 25.1198 30.3923 23.6907V16.3095C30.3923 14.8804 29.6299 13.5599 28.3923 12.8454L22 9.15479ZM20 24.5001C22.4853 24.5001 24.5 22.4854 24.5 20.0001C24.5 17.5148 22.4853 15.5001 20 15.5001C17.5147 15.5001 15.5 17.5148 15.5 20.0001C15.5 22.4854 17.5147 24.5001 20 24.5001Z', fill: 'currentColor' }));
});
