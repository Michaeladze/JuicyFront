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
require("./Select.scss");
var useClickOutside_1 = __importDefault(require("../../../hooks/useClickOutside"));
var Chip_1 = __importDefault(require("../Chip"));
var index_1 = require("../../../index");
var Checkbox_1 = __importDefault(require("../Checkbox/Checkbox"));
var Select = function (_a) {
    var options = _a.options, onChange = _a.onChange, onSearch = _a.onSearch, _b = _a.values, values = _b === void 0 ? [] : _b, _c = _a.multiselect, multiselect = _c === void 0 ? false : _c, _d = _a.placeholder, placeholder = _d === void 0 ? '' : _d, _e = _a.disabled, disabled = _e === void 0 ? false : _e, _f = _a.readOnly, readOnly = _f === void 0 ? false : _f, _g = _a.maxOptions, maxOptions = _g === void 0 ? options.length : _g, _h = _a.preloader, preloader = _h === void 0 ? false : _h, _j = _a.tagsPosition, tagsPosition = _j === void 0 ? 'inside' : _j, _k = _a.clearOnSelect, clearOnSelect = _k === void 0 ? false : _k, clearHook = _a.clearHook, _l = _a.variant, variant = _l === void 0 ? 'base' : _l;
    var _m = react_1.useState(false), showDropdown = _m[0], toggleDropdown = _m[1];
    var componentNode = react_1.useRef(null);
    // -------------------------------------------------------------------------------------------------------------------
    /** Клик в сторону */
    var handleClickOutside = react_1.useCallback(function () {
        if (showDropdown) {
            toggleDropdown(false);
        }
    }, [showDropdown, multiselect]);
    useClickOutside_1.default(componentNode, handleClickOutside);
    // -------------------------------------------------------------------------------------------------------------------
    var _o = react_1.useState(function () {
        return values.length > 0 && !multiselect ? values[0].label : '';
    }), inputValue = _o[0], setInputValue = _o[1];
    var openDropdown = function () {
        toggleDropdown(true);
    };
    /** Очистка селекта */
    var onClear = function (e) {
        e.stopPropagation();
        setInputValue('');
        toggleDropdown(true);
        if (!multiselect) {
            setSelectValues([]);
        }
        onSearch && onSearch('');
    };
    /** Очистка при изменении извне через clearHook */
    react_1.useEffect(function () {
        if (!multiselect) {
            setSelectValues([]);
        }
        if (clearHook === undefined) {
            return;
        }
        setInputValue('');
        onSearch && onSearch('');
    }, [clearHook]);
    // -------------------------------------------------------------------------------------------------------------------
    /** Поиск в селекте */
    var onSelectSearch = function (e) {
        setInputValue(e.target.value);
    };
    react_1.useEffect(function () {
        if (readOnly) {
            return;
        }
        if (onSearch) {
            onSearch(inputValue);
            return;
        }
        var filtered = options.filter(function (o) { return o.label.toLowerCase().includes(inputValue.toLowerCase()); });
        setFilteredOptions(filtered);
    }, [inputValue]);
    // -------------------------------------------------------------------------------------------------------------------
    var _p = react_1.useState(function () { return values; }), selectValues = _p[0], setSelectValues = _p[1];
    react_1.useEffect(function () {
        setSelectValues(values);
    }, [values]);
    var _q = react_1.useState({}), selectedMap = _q[0], setSelectedMap = _q[1];
    react_1.useEffect(function () {
        var _a;
        if (!selectValues) {
            return;
        }
        var map = selectValues.reduce(function (acc, o) {
            acc[o.value] = true;
            return acc;
        }, {});
        setSelectedMap(map);
        setInputValue(multiselect ? '' : clearOnSelect ? '' : ((_a = selectValues[0]) === null || _a === void 0 ? void 0 : _a.label) || '');
    }, [selectValues]);
    var onValueChange = function (option) {
        var result = undefined;
        if (multiselect) {
            var index_2 = selectValues.findIndex(function (o) { return option.value === o.value; });
            if (index_2 >= 0) {
                result = selectValues.filter(function (_, i) { return i !== index_2; });
            }
            else {
                if (selectValues.length < maxOptions) {
                    result = __spreadArray(__spreadArray([], selectValues), [option]);
                }
            }
        }
        else {
            result = [option];
        }
        if (result) {
            setSelectValues(result);
            onChange(result);
        }
    };
    // -------------------------------------------------------------------------------------------------------------------
    var _r = react_1.useState([]), filteredOptions = _r[0], setFilteredOptions = _r[1];
    react_1.useEffect(function () {
        setFilteredOptions(options);
    }, [options]);
    // -------------------------------------------------------------------------------------------------------------------
    var listJSX = filteredOptions.map(function (o) {
        var disabled = o.disabled || false;
        var active = selectedMap[o.value] || false;
        var handleChange = function (e) {
            e.stopPropagation();
            onValueChange(o);
            if (!multiselect) {
                setInputValue(clearOnSelect ? '' : o.label);
                toggleDropdown(false);
            }
            else {
                setInputValue('');
            }
        };
        var disabledClass = disabled ? 'rf-select__list-element--disabled' : '';
        var activeClass = active ? 'rf-select__list-element--active' : '';
        var label = o.label;
        if (inputValue) {
            var indexStart = o.label.toLowerCase().indexOf(inputValue.toLowerCase());
            if (indexStart >= 0) {
                var indexEnd = indexStart + inputValue.length - 1;
                var left = '';
                var query = '';
                var right = '';
                for (var i = 0; i < o.label.length; i++) {
                    if (i < indexStart) {
                        left += o.label[i];
                        continue;
                    }
                    if (i >= indexStart && i <= indexEnd) {
                        query += o.label[i];
                        continue;
                    }
                    right += o.label[i];
                }
                label = react_1.default.createElement(react_1.default.Fragment, null,
                    left,
                    react_1.default.createElement("span", { title: query, className: 'rf-select__list-element--query' }, query),
                    right);
            }
        }
        return (react_1.default.createElement("div", { className: "rf-select__list-element " + disabledClass + " " + activeClass, key: o.value }, multiselect ? react_1.default.createElement(Checkbox_1.default, { titleAtt: o.label, label: label, checked: active, onChange: handleChange, fullWidth: true }) :
            react_1.default.createElement("div", { title: o.label, className: 'rf-select__list-element-single', onClick: handleChange }, label)));
    });
    // -------------------------------------------------------------------------------------------------------------------
    var noop = function () { };
    var tagsRef = react_1.useRef(null);
    var tagsJSX = multiselect && selectValues.length > 0 && (react_1.default.createElement("div", { className: 'rf-select__tags', ref: tagsRef, onClick: function () { return !disabled && toggleDropdown(true); } }, selectValues.map(function (t) { return (react_1.default.createElement("div", { className: 'rf-select__tag', key: t.value },
        react_1.default.createElement(Chip_1.default, { type: 'secondary', size: 's', onRemove: function () { return onValueChange(t); }, onClick: noop, disabled: disabled }, t.label))); })));
    // -------------------------------------------------------------------------------------------------------------------
    var closeButton = !disabled && !readOnly && inputValue.length > 0 && (react_1.default.createElement("button", { type: 'button', className: 'rf-select__button', onClick: onClear },
        react_1.default.createElement(index_1.Close, null)));
    var chevronButton = !disabled && (readOnly || inputValue.length === 0) && (react_1.default.createElement("button", { type: 'button', className: "rf-select__button " + (showDropdown ? 'rf-select__button--rotate' : ''), onClick: function () { return toggleDropdown(function (state) { return !state; }); } },
        react_1.default.createElement(index_1.ChevronDown, null)));
    // -------------------------------------------------------------------------------------------------------------------
    var openClass = showDropdown ? 'rf-select__wrapper--open' : '';
    var multiselectClass = multiselect ? 'rf-select--multi' : '';
    var tagClass = variant === 'tag' ? 'rf-select__wrapper--tag' : '';
    return (react_1.default.createElement("div", { className: "rf-select " + multiselectClass + " " + tagClass, ref: componentNode },
        react_1.default.createElement("div", { className: "rf-select__wrapper " + openClass },
            react_1.default.createElement("input", { className: 'rf-select__input', onMouseDown: openDropdown, onChange: onSelectSearch, value: inputValue, disabled: disabled, readOnly: readOnly, placeholder: disabled || (multiselect && tagsPosition === 'inside' && selectValues.length === maxOptions) ? '' : placeholder }),
            closeButton,
            chevronButton),
        showDropdown && filteredOptions.length > 0 && (react_1.default.createElement("div", { className: 'rf-select__list' }, preloader ? (react_1.default.createElement("div", { className: 'rf-select__list-preloader' },
            react_1.default.createElement(index_1.Preloader, { size: 'm' }))) : listJSX)),
        tagsJSX));
};
exports.default = Select;
