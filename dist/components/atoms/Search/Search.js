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
require("./Search.scss");
var index_1 = require("../../../index");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var Search = function (_a) {
    // -------------------------------------------------------------------------------------------------------------------
    var onClear = _a.onClear, _b = _a.isShowClear, isShowClear = _b === void 0 ? true : _b, _c = _a.debounce, debounce = _c === void 0 ? 500 : _c, _d = _a.onDebounce, onDebounce = _d === void 0 ? function () { } : _d, props = __rest(_a, ["onClear", "isShowClear", "debounce", "onDebounce"]);
    var _e = react_1.useState(props.value ? props.value.toString() : ''), value = _e[0], setValue = _e[1];
    var ref = react_1.useRef(null);
    // =======================
    react_1.useEffect(function () {
        /** Подписываемся на ввод текста */
        var sub;
        ref.current && (sub = rxjs_1.fromEvent(ref.current, 'keyup')
            .pipe(operators_1.debounceTime(debounce), operators_1.distinctUntilChanged())
            .subscribe(function (e) {
            var debounceString = e.target.value;
            setValue(debounceString);
            onDebounce({
                event: e,
                debounceString: debounceString
            });
        }));
        return function () { return sub && sub.unsubscribe(); };
    }, [debounce, onDebounce]);
    react_1.useEffect(function () {
        setValue(props.value ? props.value.toString() : '');
    }, [props.value]);
    // -------------------------------------------------------------------------------------------------------------------
    var onChangeHandler = function (e) {
        setValue(e.target.value);
        props.onChange && props.onChange(e);
    };
    //* ***************
    var onClearClickHandler = function () {
        setValue('');
        onClear && onClear();
        onDebounce({ debounceString: '' });
    };
    // -------------------------------------------------------------------------------------------------------------------
    return (react_1.default.createElement("div", { className: 'rf-search' },
        react_1.default.createElement("input", __assign({}, props, { ref: ref, type: 'text', className: 'rf-search__input', placeholder: props.placeholder || 'Поиск', value: value, onChange: onChangeHandler })),
        react_1.default.createElement(index_1.SearchIcon, { className: 'rf-search__search-icon' }),
        value.length > 0 && isShowClear && react_1.default.createElement(index_1.Close, { className: 'rf-search__close-icon', onClick: onClearClickHandler })));
};
exports.default = Search;
