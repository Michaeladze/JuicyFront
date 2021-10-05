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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
require("./Input.scss");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var Close_1 = __importDefault(require("../../../assets/icons/Close"));
var Input = react_1.forwardRef(function (_a, ref) {
    var _b, _c;
    var className = _a.className, onClear = _a.onClear, _d = _a.debounce, debounce = _d === void 0 ? 300 : _d, icon = _a.icon, _e = _a.variant, variant = _e === void 0 ? 'base' : _e, startAdornment = _a.startAdornment, endAdornment = _a.endAdornment, disabled = _a.disabled, invalid = _a.invalid, onFocus = _a.onFocus, onBlur = _a.onBlur, onDebounce = _a.onDebounce, props = __rest(_a, ["className", "onClear", "debounce", "icon", "variant", "startAdornment", "endAdornment", "disabled", "invalid", "onFocus", "onBlur", "onDebounce"]);
    /** Ref */
    var inputRef = react_1.useRef(null);
    /** Значение поля */
    var _f = react_1.useState(((_b = props.defaultValue) === null || _b === void 0 ? void 0 : _b.toString()) || ((_c = props.value) === null || _c === void 0 ? void 0 : _c.toString()) || ''), value = _f[0], setValue = _f[1];
    /** Находится ли инпут в состоянии фокуса */
    var _g = react_1.useState(false), isFocused = _g[0], setFocused = _g[1];
    // ------------------------------------------------------------------------------------------------------------------
    react_1.useEffect(function () {
        /** Подписываемся на ввод текста */
        var sub;
        if (inputRef.current) {
            sub = rxjs_1.fromEvent(inputRef.current, 'keyup')
                .pipe(operators_1.debounceTime(debounce), operators_1.distinctUntilChanged())
                .subscribe(function (e) {
                var debounceString = e.target.value;
                setValue(debounceString);
                if (onDebounce) {
                    onDebounce({
                        event: e,
                        debounceString: debounceString
                    });
                }
            });
        }
        return function () {
            sub && sub.unsubscribe();
        };
    }, [debounce, onDebounce]);
    // ------------------------------------------------------------------------------------------------------------------
    /** Очистка поля ввода и сброс результатов поиска */
    var clearInput = function () {
        if (inputRef.current) {
            inputRef.current.value = '';
            setValue('');
            onDebounce && onDebounce({ debounceString: '' });
            onClear && onClear();
        }
    };
    /** Кнопка поиска и сброса */
    var closeButton = onClear && value.length > 0 && (react_1.default.createElement("button", { type: 'button', className: 'rf-input__action', onClick: clearInput, "aria-label": '\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C' },
        react_1.default.createElement(Close_1.default, null)));
    // ------------------------------------------------------------------------------------------------------------------
    var onInputFocus = function (event) {
        setFocused(true);
        if (onFocus) {
            onFocus(event);
        }
    };
    var onInputBlur = function (event) {
        setFocused(false);
        if (onBlur) {
            onBlur(event);
        }
    };
    // ------------------------------------------------------------------------------------------------------------------
    // Делаем проверку на className для обратной совместимости.
    var isInvalid = invalid || className && className.indexOf('invalid') !== -1;
    return (react_1.default.createElement("label", { ref: ref, className: "\n        rf-input \n        " + (variant === 'inline' ? 'rf-input--inline' : '') + " \n        " + (disabled ? 'rf-input--disabled' : '') + " \n        " + (isFocused ? 'rf-input--focused' : '') + " \n        " + (isInvalid ? 'rf-input--invalid' : '') + "\n        " + (className || '') },
        !!startAdornment && react_1.default.createElement("div", { className: 'rf-input__adornment rf-input__adornment--start' }, startAdornment),
        react_1.default.createElement("input", __assign({}, props, { ref: inputRef, className: 'rf-input__field', autoComplete: 'off', type: props.type || 'text', disabled: disabled, onFocus: onInputFocus, onBlur: onInputBlur })),
        !!endAdornment && react_1.default.createElement("div", { className: 'rf-input__adornment rf-input__adornment--end' }, endAdornment),
        icon ? react_1.default.createElement("button", { type: 'button', className: 'rf-input__action' }, icon) : closeButton));
});
exports.default = Input;
