"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
require("./Switch.scss");
var classnames_1 = require("../../../utils/classnames");
var Switch = function (_a) {
    var label = _a.label, helperText = _a.helperText, _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.value, value = _c === void 0 ? false : _c, _d = _a.disabled, disabled = _d === void 0 ? false : _d, onChange = _a.onChange, _e = _a.size, size = _e === void 0 ? 'm' : _e, style = _a.style;
    var _f = react_1.useState(value), s = _f[0], toggle = _f[1];
    react_1.useEffect(function () {
        toggle(value);
    }, [value]);
    var changeState = function () {
        if (!disabled) {
            onChange && onChange(!s);
            toggle(!s);
        }
    };
    return (react_1.default.createElement("div", { className: classnames_1.classnames('rf-switch', disabled && 'rf-switch--disable', "rf-switch--" + size, className), onClick: changeState, style: style },
        react_1.default.createElement("div", { className: "rf-switch__toggle " + (s ? 'on' : 'off') },
            react_1.default.createElement("div", { className: 'rf-switch__circle' })),
        label && react_1.default.createElement("p", { className: 'rf-switch__label' }, label),
        helperText && react_1.default.createElement("p", { className: 'rf-switch__helper-text' }, helperText)));
};
exports.default = Switch;
