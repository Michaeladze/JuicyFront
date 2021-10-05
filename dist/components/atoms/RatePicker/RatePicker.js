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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
require("./RatePicker.scss");
var RatePicker = function (_a) {
    var _b = _a.isActive, isActive = _b === void 0 ? true : _b, _c = _a.defaultPickedValue, defaultPickedValue = _c === void 0 ? 0 : _c, _d = _a.getRate, getRate = _d === void 0 ? function () { } : _d, _e = _a.sizePicker, sizePicker = _e === void 0 ? 10 : _e, _f = _a.textContent, textContent = _f === void 0 ? '' : _f, _g = _a.isUnderline, isUnderline = _g === void 0 ? true : _g, _h = _a.isReverse, isReverse = _h === void 0 ? false : _h, props = __rest(_a, ["isActive", "defaultPickedValue", "getRate", "sizePicker", "textContent", "isUnderline", "isReverse"]);
    var _j = react_1.useState(defaultPickedValue), rating = _j[0], setRating = _j[1];
    react_1.useEffect(function () {
        setRating(defaultPickedValue);
    }, [defaultPickedValue, isActive]);
    if (sizePicker < 1) {
        sizePicker = 1;
    }
    var clickRateHandler = function (e) {
        var _a;
        if (typeof ((_a = e === null || e === void 0 ? void 0 : e.currentTarget) === null || _a === void 0 ? void 0 : _a.textContent) === 'string') {
            isActive && setRating(+e.currentTarget.textContent);
            getRate(e.currentTarget.textContent);
        }
        else {
            setRating(0);
        }
    };
    var rates = Array.from(Array(sizePicker), function (_, index) { return index + 1; });
    if (isReverse) {
        rates = rates.reverse();
    }
    var rateComponent = rates.map(function (item) {
        var labelClassName = +rating >= item && !isReverse ?
            "rate-picker__label_picked_" + (isActive ?
                'primary' :
                'tertiary') :
            isReverse && +rating <= item ?
                "rate-picker__label_picked_" + (isActive ?
                    'primary' :
                    'tertiary') :
                '';
        var containerClassName = "\n    " + (isReverse && item === 1 ? 'rate-picker__item--right' : '') + "\n      " + (isReverse && rates.length === item ? 'rate-picker__item--left' : '') + "\n       " + (!isReverse && item === 1 ? 'rate-picker__item--left' : '') + " \n       " + (!isReverse && rates.length === item ? 'rate-picker__item--right' : '');
        return react_1.default.createElement("div", { key: item.toString(), className: containerClassName },
            react_1.default.createElement("input", { type: 'radio', id: "input-" + item, value: item }),
            react_1.default.createElement("label", __assign({ className: labelClassName, onClick: clickRateHandler, htmlFor: "input-" + item }, props), item));
    });
    if (isReverse) {
        rates.reverse();
    }
    return (react_1.default.createElement("div", { className: isUnderline ? 'rate-picker' : '' },
        react_1.default.createElement("p", { className: 'rate-picker__content' }, textContent),
        react_1.default.createElement("div", { className: 'rate-picker__container' }, rateComponent)));
};
exports.default = RatePicker;
