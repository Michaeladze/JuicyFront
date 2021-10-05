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
require("./ButtonPages.scss");
var index_1 = require("../../../index");
var ButtonPages = function (_a) {
    var _b = _a.page, page = _b === void 0 ? 1 : _b, max = _a.max, onChange = _a.onChange;
    var _c = react_1.useState(1), p = _c[0], setP = _c[1];
    react_1.useEffect(function () {
        if (page) {
            setP(page);
        }
    }, [page]);
    var onPageChange = react_1.useCallback(function (n) {
        var nextPage = p + n;
        setP(nextPage);
        onChange(nextPage);
    }, [p]);
    var className = react_1.useMemo(function () {
        if (max < 10) {
            return '';
        }
        if (max < 100) {
            return 'large';
        }
    }, [max]);
    return (react_1.default.createElement("div", { className: 'rf-button-pages' },
        react_1.default.createElement("button", { type: 'button', className: 'rf-button-pages__button', disabled: p === 1, onClick: function () { return onPageChange(-1); } },
            react_1.default.createElement(index_1.ChevronLeft, { className: 'rf-button-pages__left' })),
        react_1.default.createElement("div", { className: "rf-button-pages__value " + className },
            p,
            " / ",
            max),
        react_1.default.createElement("button", { type: 'button', className: 'rf-button-pages__button', disabled: p === max, onClick: function () { return onPageChange(1); } },
            react_1.default.createElement(index_1.ChevronLeft, { className: 'rf-button-pages__right' }))));
};
exports.default = ButtonPages;
