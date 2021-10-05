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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
require("./InputPhone.scss");
var react_input_mask_1 = __importDefault(require("react-input-mask"));
var Input_1 = __importDefault(require("../Input"));
var Menu_1 = __importStar(require("../Menu"));
var useUpdateEffect_1 = __importDefault(require("../../../hooks/useUpdateEffect"));
var ChevronDown_1 = __importDefault(require("../../../assets/icons/ChevronDown"));
var FlagDisabled_1 = __importDefault(require("../../../assets/icons/FlagDisabled"));
var FlagRU_1 = __importDefault(require("../../../assets/icons/FlagRU"));
/** Список стран для выбора по умолчанию */
var DEFAULT_COUNTRIES = [
    {
        flag: FlagRU_1.default,
        text: 'Россия',
        code: 7
    }
];
var InputPhone = function (_a) {
    var defaultValue = _a.defaultValue, _b = _a.countries, countries = _b === void 0 ? DEFAULT_COUNTRIES : _b, defaultCountry = _a.defaultCountry, name = _a.name, disabled = _a.disabled, onChange = _a.onChange, props = __rest(_a, ["defaultValue", "countries", "defaultCountry", "name", "disabled", "onChange"]);
    var _c = react_1.useState(defaultValue || ''), inputValue = _c[0], setInputValue = _c[1];
    var _d = react_1.useState(defaultValue || ''), displayValue = _d[0], setDisplayValue = _d[1];
    var _e = react_1.useState(defaultCountry || countries[0]), country = _e[0], setCountry = _e[1];
    var _f = react_1.useState(null), inputElement = _f[0], setInputElement = _f[1];
    var onInputChange = function (event) {
        setDisplayValue(event.target.value);
    };
    var onCountryChange = function (c) { return function () {
        setCountry(c);
    }; };
    react_1.useEffect(function () {
        var v = displayValue.replace(/(\s|-|_|\(|\))/g, '');
        setInputValue(v);
        if (onChange) {
            onChange({
                target: {
                    value: v,
                    name: name
                }
            });
        }
    }, [displayValue, name, onChange]);
    useUpdateEffect_1.default(function () {
        setDisplayValue('');
    }, [country]);
    var mask = react_1.useMemo(function () {
        return __spreadArray(__spreadArray([
            '+'
        ], country.code.toString().split('')), [
            ' ',
            '(',
            /[0-9]/,
            /[0-9]/,
            /[0-9]/,
            ')',
            ' ',
            /[0-9]/,
            /[0-9]/,
            /[0-9]/,
            ' ',
            '-',
            ' ',
            /[0-9]/,
            /[0-9]/,
            ' ',
            '-',
            ' ',
            /[0-9]/,
            /[0-9]/
        ]);
    }, [country]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_input_mask_1.default, { mask: mask, value: displayValue, disabled: disabled, onChange: onInputChange },
            react_1.default.createElement(Input_1.default, __assign({}, props, { name: name + "-display", ref: setInputElement, "data-testid": 'input-display', startAdornment: react_1.default.createElement(Menu_1.default, { portal: true, anchorElement: inputElement, content: countries.length > 1 && react_1.default.createElement(Menu_1.MenuContext.Consumer, null, function (_a) {
                        var onClose = _a.onClose;
                        return (react_1.default.createElement("ul", { className: 'rf-list', onClick: onClose }, countries.map(function (c) { return (react_1.default.createElement("li", { key: c.code, className: 'rf-li' },
                            react_1.default.createElement("button", { type: 'button', className: 'rf-list__element rf-phone-input__option', onClick: onCountryChange(c) },
                                react_1.default.createElement(c.flag, { className: 'rf-phone-input__option-flag' }),
                                react_1.default.createElement("span", { className: "\n                                rf-phone-input__option-text \n                                " + (country.code === c.code ? 'rf-phone-input__option-text--selected' : '') + "\n                              " }, c.text),
                                react_1.default.createElement("span", { className: "\n                                rf-phone-input__option-code \n                                " + (country.code === c.code ? 'rf-phone-input__option-code--selected' : '') + "\n                              " },
                                    "+",
                                    c.code)))); })));
                    }) },
                    react_1.default.createElement("div", { className: 'rf-phone-input__country' },
                        disabled ? react_1.default.createElement(FlagDisabled_1.default, { className: 'rf-phone-input__flag' }) : react_1.default.createElement(country.flag, { className: 'rf-phone-input__flag' }),
                        countries.length > 1 && (react_1.default.createElement(Menu_1.MenuContext.Consumer, null, function (_a) {
                            var show = _a.show;
                            return (react_1.default.createElement("button", { className: "rf-phone-input__button " + (show ? 'rf-phone-input__button--rotate' : ''), type: 'button', disabled: disabled, "aria-label": '\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0441\u0442\u0440\u0430\u043D\u0443' },
                                react_1.default.createElement(ChevronDown_1.default, null)));
                        })))) }))),
        react_1.default.createElement("input", { "data-testid": 'input', type: 'hidden', name: name, value: inputValue })));
};
exports.default = InputPhone;
