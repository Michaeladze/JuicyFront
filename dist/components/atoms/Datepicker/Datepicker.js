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
require("./Datepicker.scss");
var DatepickerCalendar_1 = __importDefault(require("./DatepickerCalendar"));
var react_input_mask_1 = __importDefault(require("react-input-mask"));
var datepicker_utils_1 = require("./DatepickerCalendar/datepicker.utils");
var Input_1 = __importDefault(require("../Input"));
var useClickOutside_1 = __importDefault(require("../../../hooks/useClickOutside"));
var index_1 = require("../../../index");
var Datepicker = function (_a) {
    var _b = _a.name, name = _b === void 0 ? 'datepicker' : _b, _c = _a.locale, locale = _c === void 0 ? 'ru' : _c, _d = _a.placeholder, placeholder = _d === void 0 ? locale === 'ru' ? 'Выберите дату' : 'Select date' : _d, defaultValue = _a.defaultValue, min = _a.min, max = _a.max, _e = _a.disabled, disabled = _e === void 0 ? false : _e, _f = _a.readOnly, readOnly = _f === void 0 ? false : _f, onChange = _a.onChange, _g = _a.range, range = _g === void 0 ? false : _g, _h = _a.showDayOfWeek, showDayOfWeek = _h === void 0 ? false : _h, _j = _a.showTodayButton, showTodayButton = _j === void 0 ? true : _j, _k = _a.position, position = _k === void 0 ? 'left' : _k, _l = _a.format, format = _l === void 0 ? 'dd.mm.yyyy' : _l, _m = _a.disableWeekDays, disableWeekDays = _m === void 0 ? [0, 6] : _m, children = _a.children;
    var separator = format[2];
    var _o = react_1.useState([]), dayOfWeek = _o[0], setDayOfWeek = _o[1];
    var _p = react_1.useState(undefined), minDate = _p[0], setMinDate = _p[1];
    var _q = react_1.useState(undefined), maxDate = _q[0], setMaxDate = _q[1];
    react_1.useEffect(function () {
        setMinDate(min ? datepicker_utils_1.parseToFormat(format, min).date : undefined);
    }, [min]);
    react_1.useEffect(function () {
        setMaxDate(max ? datepicker_utils_1.parseToFormat(format, max).date : undefined);
    }, [max]);
    // -------------------------------------------------------------------------------------------------------------------
    var datepickerRef = react_1.useRef(null);
    var inputRef = react_1.useRef(null);
    var _r = react_1.useState(false), showCalendar = _r[0], toggleCalendar = _r[1];
    // -------------------------------------------------------------------------------------------------------------------
    var handleClickOutside = react_1.useCallback(function () {
        toggleCalendar(false);
    }, []);
    useClickOutside_1.default(datepickerRef, handleClickOutside);
    // -------------------------------------------------------------------------------------------------------------------
    var _s = react_1.useState(''), inputValue = _s[0], setInputValue = _s[1];
    var validate = function (date) {
        var result = date;
        if (range) {
            var _a = date.split(' - '), from = _a[0], to = _a[1];
            var fromD = 0;
            var toD = 0;
            if (from) {
                from = from.slice(0, 10);
            }
            if (to) {
                to = to.slice(0, 10);
            }
            if (from && !from.includes('_')) {
                fromD = datepicker_utils_1.stringToDate(from, format).getTime();
                if (minDate && fromD < minDate.getTime()) {
                    fromD = minDate.getTime();
                }
                if (maxDate && fromD > maxDate.getTime()) {
                    fromD = minDate ? minDate.getTime() : maxDate.getTime();
                }
                from = datepicker_utils_1.formatDate(fromD, format).date;
            }
            if (to && !to.includes('_')) {
                toD = datepicker_utils_1.stringToDate(to, format).getTime();
                if (toD < fromD) {
                    toD = fromD + 24 * 3600 * 1000;
                }
                if (maxDate && toD > maxDate.getTime()) {
                    toD = maxDate.getTime();
                }
                to = datepicker_utils_1.formatDate(toD, format).date;
            }
            if (from || to) {
                result = [from, to].join(' - ');
            }
        }
        else {
            var d = datepicker_utils_1.stringToDate(date, format);
            if (date !== '' && minDate && d.getTime() < minDate.getTime()) {
                result = datepicker_utils_1.formatDate(minDate.getTime(), format).date;
            }
            if (maxDate && d.getTime() > maxDate.getTime()) {
                result = datepicker_utils_1.formatDate(maxDate.getTime(), format).date;
            }
        }
        return result;
    };
    react_1.useEffect(function () {
        if (!defaultValue) {
            return;
        }
        var inputValue = datepicker_utils_1.parseToFormat(format, defaultValue).string;
        if (!inputValue.includes('_')) {
            inputValue = validate(datepicker_utils_1.parseToFormat(format, defaultValue).string);
        }
        setInputValue(inputValue);
    }, [defaultValue, minDate, maxDate]);
    // -------------------------------------------------------------------------------------------------------------------
    var getReturnValue = function (value, range) {
        if (range) {
            var _a = value.split(' - '), from = _a[0], to = _a[1];
            var fromD = datepicker_utils_1.stringToDate(from, format).getTime();
            var toD = datepicker_utils_1.stringToDate(to, format).getTime();
            return {
                value: value,
                date: {
                    from: new Date(fromD),
                    to: new Date(toD),
                    value: new Date(fromD)
                },
                timestamp: {
                    from: fromD,
                    to: toD,
                    value: fromD
                }
            };
        }
        var date = datepicker_utils_1.stringToDate(value, format);
        return {
            date: {
                from: date,
                to: date,
                value: date
            },
            value: value,
            timestamp: {
                from: date.getTime(),
                to: date.getTime(),
                value: date.getTime()
            }
        };
    };
    var onDatepickerChange = function (e) {
        var result = e.target.value;
        if (range || (result.length === 10 && !result.includes('_'))) {
            result = validate(result);
        }
        setInputValue(result);
    };
    var setValue = function (value) {
        setInputValue(validate(value));
    };
    react_1.useEffect(function () {
        if (!inputValue.includes('_') && inputValue !== '') {
            var result = getReturnValue(inputValue, range);
            onChange && onChange(result, name);
            fireOnChange();
        }
        else {
            if (showDayOfWeek) {
                setDayOfWeek([]);
            }
        }
    }, [inputValue, showDayOfWeek]);
    var fireOnChange = function () {
        setTimeout(function () {
            if (inputRef.current) {
                var input = inputRef.current.querySelector('input');
                if (input) {
                    var event_1;
                    if (typeof (Event) === 'function') {
                        event_1 = new Event('change');
                    }
                    else {
                        event_1 = document.createEvent('Event');
                        event_1.initEvent('change', true, true);
                    }
                    input.dispatchEvent(event_1);
                }
            }
        }, 100);
    };
    // -------------------------------------------------------------------------------------------------------------------
    react_1.useEffect(function () {
        if (showDayOfWeek) {
            if (!range) {
                if (!inputValue.includes('_') && inputValue !== '') {
                    var result = getReturnValue(inputValue, range);
                    var dayFrom = result.date.value.getDay();
                    setDayOfWeek([datepicker_utils_1.getWeekDay(dayFrom, locale)]);
                }
            }
            else {
                var _a = inputValue.split(' - '), fromValue = _a[0], toValue = _a[1];
                if (fromValue && !fromValue.includes('_')) {
                    var from = getReturnValue(fromValue, false);
                    var dayFrom = from.date.from.getDay();
                    setDayOfWeek([datepicker_utils_1.getWeekDay(dayFrom, locale)]);
                }
                if (toValue && !toValue.includes('_')) {
                    var to = getReturnValue(toValue, false);
                    var dayTo = to.date.from.getDay();
                    setDayOfWeek(__spreadArray(__spreadArray([], dayOfWeek), [datepicker_utils_1.getWeekDay(dayTo, locale)]));
                }
            }
        }
    }, [inputValue, showDayOfWeek, range]);
    // -------------------------------------------------------------------------------------------------------------------
    var onKeyPress = function (e) {
        if (e.key.toLowerCase() === 'enter' || e.charCode === 13) {
            e.stopPropagation();
            e.preventDefault();
        }
    };
    // -------------------------------------------------------------------------------------------------------------------
    var mask = datepicker_utils_1.generateMask(inputValue, format, range, showDayOfWeek, dayOfWeek);
    // -------------------------------------------------------------------------------------------------------------------
    var disabledClass = disabled ? 'rf-datepicker__input-wrapper--disabled' : '';
    var readOnlyClass = readOnly ? 'rf-datepicker__input-wrapper--readonly' : '';
    return (react_1.default.createElement("div", { className: 'rf-datepicker', ref: datepickerRef },
        react_1.default.createElement("div", { className: "rf-datepicker__input-wrapper " + disabledClass + " " + readOnlyClass, ref: inputRef, onClick: function () { return toggleCalendar(true); } }, children || (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(react_input_mask_1.default, { mask: mask, name: name, placeholder: placeholder, value: inputValue, disabled: disabled, readOnly: readOnly, onKeyPress: onKeyPress, onChange: onDatepickerChange },
                react_1.default.createElement(Input_1.default, null)),
            react_1.default.createElement("button", { type: 'button', className: 'rf-datepicker__calendar-button' },
                react_1.default.createElement(index_1.Calendar, null))))),
        showCalendar && (react_1.default.createElement(DatepickerCalendar_1.default, { value: inputValue, minDate: minDate, maxDate: maxDate, toggleRef: inputRef, setInputValue: setValue, range: range, locale: locale, showCalendar: showCalendar, toggleCalendar: toggleCalendar, showTodayButton: showTodayButton, position: position, separator: separator, format: format, disableWeekDays: disableWeekDays || [] }))));
};
exports.default = Datepicker;
