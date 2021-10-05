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
var FlagRU = function (props) {
    return (react_1.default.createElement("svg", __assign({ width: '24', height: '24', viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, props),
        react_1.default.createElement("rect", { x: '1', y: '4', width: '22', height: '15.75', rx: '2', fill: '#C4C4C4' }),
        react_1.default.createElement("rect", { x: '1.25', y: '4.25', width: '21.5', height: '15.2143', rx: '1.75', fill: 'white', stroke: '#F5F5F5', strokeWidth: '0.5' }),
        react_1.default.createElement("mask", { id: 'mask0', style: { maskType: 'alpha' }, maskUnits: 'userSpaceOnUse', x: '1', y: '4', width: '22', height: '16' },
            react_1.default.createElement("rect", { x: '1.25', y: '4.25', width: '21.5', height: '15.2143', rx: '1.75', fill: 'white', stroke: 'white', strokeWidth: '0.5' })),
        react_1.default.createElement("g", { mask: 'url(#mask0)' },
            react_1.default.createElement("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M1 14.4764H23V9.23828H1V14.4764Z', fill: '#0C47B7' }),
            react_1.default.createElement("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M1 19.7147H23V14.4766H1V19.7147Z', fill: '#E53B35' }))));
};
exports.default = FlagRU;
