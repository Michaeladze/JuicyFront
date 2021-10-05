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
require("./Segment.scss");
var Segment = function (_a) {
    var list = _a.list, _b = _a.width, width = _b === void 0 ? 80 : _b, value = _a.value, onChange = _a.onChange;
    var slider = react_1.useRef(null);
    var _c = react_1.useState('start'), isBoundary = _c[0], setIsBoundary = _c[1];
    var _d = react_1.useState(0), activeIndex = _d[0], setActiveIndex = _d[1];
    var _e = react_1.useState({}), style = _e[0], setStyle = _e[1];
    var setBoundary = function (i) {
        if (slider.current) {
            var firstTranslate = i === 0 ? 0 : -1;
            slider.current.style.transform = "translateX(" + (width * i + firstTranslate) + "px)";
            switch (i) {
                case 0:
                    setIsBoundary('start');
                    break;
                case list.length - 1:
                    setIsBoundary('end');
                    break;
                default:
                    setIsBoundary('middle');
            }
        }
    };
    react_1.useEffect(function () {
        if (!value) {
            return;
        }
        var index = list.findIndex(function (o) { return o.value === value.value; });
        setActiveIndex(index < 0 ? 0 : index);
    }, [value]);
    react_1.useEffect(function () {
        setBoundary(activeIndex);
    }, [activeIndex]);
    react_1.useEffect(function () {
        var style = {};
        switch (isBoundary) {
            case 'start':
                style = {
                    // borderRadius: '8px 0 0 8px',
                    width: width + "px"
                };
                break;
            case 'end':
                style = {
                    // borderRadius: '0 8px 8px 0',
                    width: width + 1 + "px"
                };
                break;
            default:
                style = { width: width + 1 + "px" };
        }
        setStyle(style);
    }, [isBoundary, width]);
    // -------------------------------------------------------------------------------------------------------------------
    var handleChange = react_1.useCallback(function (i) {
        if (list[i].disabled) {
            return;
        }
        setActiveIndex(i);
        onChange(list[i]);
    }, [setActiveIndex, list]);
    // -------------------------------------------------------------------------------------------------------------------
    var radioButtons = list.map(function (o, i) { return (react_1.default.createElement("div", { className: "rf-segment__list-item " + (activeIndex === i ? 'active' : ''), key: o.value, style: { width: width + "px" }, onClick: function () { return handleChange(i); } }, o.label)); });
    return (react_1.default.createElement("div", { className: 'rf-segment__container', style: { width: width * list.length + "px" } },
        react_1.default.createElement("div", { className: 'rf-segment__list' }, radioButtons),
        react_1.default.createElement("div", { className: 'rf-segment__slider', ref: slider, style: style })));
};
exports.default = Segment;
