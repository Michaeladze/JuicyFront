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
var react_dom_1 = require("react-dom");
require("./Toast.scss");
var Toast = function (_a) {
    var _b, _c;
    var children = _a.children, isVisible = _a.isVisible, setVisibility = _a.setVisibility;
    react_1.useEffect(function () {
        setTimeout(function () {
            setVisibility(false);
        }, 2000);
    }, [isVisible]);
    var div = react_1.useMemo(function () { return document.createElement('div'); }, []);
    /** При маунте добавляем модалку. При дестрое - удаляем. */
    react_1.useEffect(function () {
        /** Контейнер для модалки */
        document.body.appendChild(div);
        return function () {
            document.body.removeChild(div);
        };
    }, [div]);
    var toastEl = react_1.useRef(null);
    var position = {
        top: '20px',
        right: window.innerWidth / 2 - (((_b = toastEl.current) === null || _b === void 0 ? void 0 : _b.clientWidth) ? ((_c = toastEl.current) === null || _c === void 0 ? void 0 : _c.clientWidth) / 2 : 0) + "px",
    };
    var toast = react_1.default.createElement("div", { ref: toastEl, style: position, className: "rf-toast " + (isVisible ? 'visible' : 'not-visible') }, children);
    return react_dom_1.createPortal(toast, div);
};
exports.default = Toast;
