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
exports.InputHook = void 0;
var react_1 = __importStar(require("react"));
require("./Input.scss");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var index_1 = require("../../../index");
var Input = react_1.default.forwardRef(function (props, ref) {
    var _a, _b;
    var onClear = props.onClear, onKeyUp = props.onKeyUp, _c = props.debounce, debounce = _c === void 0 ? 300 : _c, icon = props.icon, attrs = __rest(props, ["onClear", "onKeyUp", "debounce", "icon"]);
    var inputRef = react_1.useRef(null);
    /** Значение поля */
    var _d = react_1.useState(((_a = props.defaultValue) === null || _a === void 0 ? void 0 : _a.toString()) || ((_b = props.value) === null || _b === void 0 ? void 0 : _b.toString()) || ''), value = _d[0], setValue = _d[1];
    // ------------------------------------------------------------------------------------------------------------------
    react_1.useEffect(function () {
        if (typeof ref === 'function') {
            ref(inputRef.current);
        }
        else if (ref && 'current' in ref) {
            ref.current = inputRef.current;
        }
        return function () {
            if (typeof ref === 'function') {
                ref(null);
            }
            else if (ref && 'current' in ref) {
                ref.current = null;
            }
        };
    }, [ref, inputRef]);
    react_1.useEffect(function () {
        /** Подписываемся на ввод текста */
        var sub;
        if (inputRef.current) {
            sub = rxjs_1.fromEvent(inputRef.current, 'keyup')
                .pipe(operators_1.map(function (e) { return e; }), operators_1.debounceTime(debounce), operators_1.distinctUntilChanged())
                .subscribe(function (e) {
                setValue(e.target.value);
                onKeyUp && onKeyUp(e);
            });
        }
        return function () {
            try {
                sub && sub.unsubscribe();
            }
            catch (e) {
                console.log(e);
            }
        };
    }, [onClear, debounce, props.onKeyUp]);
    // ------------------------------------------------------------------------------------------------------------------
    /** Очистка поля ввода и сброс результатов поиска */
    var clearInput = function () {
        if (inputRef === null || inputRef === void 0 ? void 0 : inputRef.current) {
            inputRef.current.value = '';
            setValue('');
            onClear && onClear();
        }
    };
    /** Кнопка поиска и сброса */
    var closeButton = onClear && value.length > 0 && (react_1.default.createElement("button", { type: 'button', className: 'rf-input__action', onClick: clearInput },
        react_1.default.createElement(index_1.Close, null)));
    // ------------------------------------------------------------------------------------------------------------------
    return (react_1.default.createElement("div", { className: "rf-input " + (props.className || '') },
        react_1.default.createElement("input", __assign({ ref: inputRef, className: 'rf-input__field', autoComplete: 'off', type: props.type || 'text' }, attrs)),
        icon ? react_1.default.createElement("button", { type: 'button', className: 'rf-input__action' }, icon) : closeButton));
});
exports.InputHook = Input;
