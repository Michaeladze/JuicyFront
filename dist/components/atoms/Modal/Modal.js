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
require("./Modal.scss");
var react_dom_1 = require("react-dom");
var index_1 = require("../../../index");
var Modal = function (_a) {
    var children = _a.children, onClose = _a.onClose, header = _a.header, footer = _a.footer, _b = _a.custom, custom = _b === void 0 ? false : _b;
    /** Создаем контейнер для модалки */
    var div = react_1.useState(document.createElement('div'))[0];
    /** При маунте добавляем модалку. При дестрое - удаляем. */
    react_1.useEffect(function () {
        /** Закрывает модалку при нажатии на Escape */
        var closeOnEscPress = function (e) {
            if (e.key === 'Escape' && onClose) {
                onClose();
            }
        };
        document.body.appendChild(div);
        document.body.style.overflowY = 'hidden';
        window.addEventListener('keyup', closeOnEscPress);
        return function () {
            document.body.style.overflowY = 'auto';
            document.body.removeChild(div);
            window.removeEventListener('keyup', closeOnEscPress);
        };
    }, [div]);
    /** Обертка для модалки */
    var modal = (react_1.default.createElement("div", { className: 'rf-modal', onClick: onClose }, custom ? (react_1.default.createElement("div", { onClick: function (e) { return e.stopPropagation(); } }, children)) : (react_1.default.createElement("div", { className: 'rf-modal__wrapper', onClick: function (e) { return e.stopPropagation(); } },
        onClose && (react_1.default.createElement("button", { type: 'button', className: 'rf-modal__close-button', onClick: onClose },
            react_1.default.createElement(index_1.Close, null))),
        header && react_1.default.createElement("div", { className: 'rf-modal__header' }, header),
        react_1.default.createElement("div", { className: 'rf-modal__content' }, children),
        footer && react_1.default.createElement("div", { className: 'rf-modal__footer' }, footer)))));
    return react_dom_1.createPortal(modal, div);
};
exports.default = Modal;
