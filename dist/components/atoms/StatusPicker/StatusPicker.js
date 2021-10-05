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
require("./StatusPicker.scss");
var StatusPicker = function (_a) {
    var _b = _a.getRate, getRate = _b === void 0 ? function () { } : _b, pickedValues = _a.pickedValues, position = _a.position, props = __rest(_a, ["getRate", "pickedValues", "position"]);
    var statusColors = ['low', 'medium', 'high'];
    var clickStatusHandler = function (selectIndex, currentIndex) { return function (e) {
        if (pickedValues[position][currentIndex] === '' || pickedValues[position][currentIndex] === '0') {
            var htmlFor = e.target.htmlFor;
            var res_1 = +htmlFor;
            var newArr = pickedValues.map(function (pv, index) {
                if (index === selectIndex) {
                    pv = pv.map(function (a, i) { return res_1 - 1 === i ? a = '0' : 'X'; });
                    return pv;
                }
                return pv = pv.map(function (a, i) { return res_1 - 1 === i ? a = 'X' : a; });
            });
            getRate(res_1, newArr, position);
        }
    }; };
    var status = [
        {
            value: 1,
            name: 'Низкий'
        },
        {
            value: 2,
            name: 'Средний'
        },
        {
            value: 3,
            name: 'Высокий'
        }
    ];
    var statusComponent = status.map(function (item, index) {
        var statusComponentLabelClass = "status-picker__label--" + (pickedValues[position][index] !== '' ?
            pickedValues[position][index] === '0' ?
                statusColors[item.value - 1] :
                'disabled' :
            '');
        return react_1.default.createElement("div", { key: item.value, className: 'status-picker__items' },
            react_1.default.createElement("input", { type: 'radio', id: item.value.toString(), value: item.value }),
            react_1.default.createElement("label", __assign({ className: statusComponentLabelClass, onClick: clickStatusHandler(position, index), htmlFor: item.value.toString() }, props), item.name));
    });
    return (react_1.default.createElement("div", { className: 'status-picker' },
        react_1.default.createElement("div", { className: 'status-picker__container' }, statusComponent)));
};
exports.default = StatusPicker;
