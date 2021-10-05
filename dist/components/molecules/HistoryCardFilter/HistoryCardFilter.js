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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var Tile_1 = __importDefault(require("../../atoms/Tile"));
require("./HistoryCardFilter.scss");
var index_1 = require("../../../index");
var HistoryCardFilter = function (_a) {
    var _b = _a.isShowDatePicker, isShowDatePicker = _b === void 0 ? true : _b, _c = _a.isShowStatusFilter, isShowStatusFilter = _c === void 0 ? true : _c, _d = _a.isShowSearch, isShowSearch = _d === void 0 ? true : _d, initialValues = _a.initialValues, _e = _a.statusOptions, statusOptions = _e === void 0 ? [] : _e, _f = _a.onChange, onChange = _f === void 0 ? function () { } : _f;
    // текущие состояние фильтров
    var _g = react_1.useState({}), filterStatus = _g[0], setStatus = _g[1];
    // =======================
    react_1.useEffect(function () {
        initialValues && setStatus(__assign(__assign({}, filterStatus), initialValues));
    }, [initialValues]);
    // =======================================================================================================================================
    // Если изменился календарь
    var changeDateHandler = function (value) {
        var newValues = __assign(__assign({}, filterStatus), { datePicker: {
                startDate: value.timestamp.from,
                endDate: value.timestamp.to
            } });
        setStatus(newValues);
        onChange(newValues);
    };
    //* *****************************************
    // Если изменился статус
    var changeSelectHandler = function (option) {
        var newValues = __assign(__assign({}, filterStatus), { status: option[0].value });
        console.log(newValues, filterStatus);
        setStatus(newValues);
        onChange(newValues);
    };
    //* *****************************************
    // Если изменился результат поиска
    var changeSearchHandler = function (result) {
        var newValues = __assign(__assign({}, filterStatus), { search: result.debounceString });
        setStatus(newValues);
        onChange(newValues);
    };
    // =======================================================================================================================================
    var dateTSX = isShowDatePicker &&
        react_1.default.createElement("div", { className: 'card-filter__datepicker' },
            react_1.default.createElement(index_1.Datepicker, { onChange: changeDateHandler, placeholder: '\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043F\u0435\u0440\u0438\u043E\u0434', range: true }));
    //* *****************************************
    var statusTSX = isShowStatusFilter &&
        react_1.default.createElement("div", null,
            react_1.default.createElement(index_1.Select, { placeholder: '\u0421\u0442\u0430\u0442\u0443\u0441', readOnly: true, options: statusOptions, values: statusOptions === null || statusOptions === void 0 ? void 0 : statusOptions.filter(function (i) { return i.value === filterStatus.status; }), tagsPosition: 'outside', onChange: changeSelectHandler }));
    //* *****************************************
    var searchTSX = isShowSearch &&
        react_1.default.createElement("div", { className: 'card-filter__search' },
            react_1.default.createElement(index_1.Search, { onDebounce: changeSearchHandler }));
    // =======================================================================================================================================
    return react_1.default.createElement("div", { className: 'filter__wrapper' },
        react_1.default.createElement(Tile_1.default, null,
            react_1.default.createElement("div", { className: 'card-filter__wrapper' },
                dateTSX,
                statusTSX,
                searchTSX)));
};
exports.default = HistoryCardFilter;
