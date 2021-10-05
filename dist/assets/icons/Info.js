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
        react_1.default.createElement("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12ZM11.7955 17.7285C11.2307 17.7285 10.7728 17.2706 10.7728 16.7058V10.9785C10.7728 10.4137 11.2307 9.95579 11.7955 9.95579C12.3603 9.95579 12.8182 10.4137 12.8182 10.9785V16.7058C12.8182 17.2706 12.3603 17.7285 11.7955 17.7285ZM11.7952 6.47847C11.2304 6.47847 10.7725 6.93636 10.7725 7.5012C10.7725 8.06604 11.2304 8.52393 11.7952 8.52393C12.36 8.52393 12.8179 8.06604 12.8179 7.5012C12.8179 6.93636 12.36 6.47847 11.7952 6.47847Z', fill: 'currentColor' }));
});
