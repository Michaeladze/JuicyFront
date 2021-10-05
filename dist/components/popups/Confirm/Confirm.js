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
require("./Confirm.scss");
var index_1 = require("../../../index");
var Confirm = function (_a) {
    var comment = _a.comment, _b = _a.showComment, showComment = _b === void 0 ? false : _b, _c = _a.textAccept, textAccept = _c === void 0 ? 'Выбрать' : _c, onAction = _a.onAction, onClose = _a.onClose, text = _a.text, _d = _a.lang, lang = _d === void 0 ? 'ru' : _d;
    var handleSubmit = function () {
        onAction(state);
        // onClose && onClose();
    };
    var _e = react_1.useState(''), state = _e[0], setState = _e[1];
    react_1.useEffect(function () {
        if (comment && showComment) {
            setState(comment);
        }
    }, [comment, showComment]);
    var onChange = function (e) {
        setState(e.target.value);
    };
    var isRussian = lang === null || lang === void 0 ? void 0 : lang.toLowerCase().includes('ru');
    var declineText = isRussian ? 'Отмена' : 'Cancel';
    var commentTitle = isRussian ? 'Комментарий' : 'Comment';
    var title = isRussian ? 'Подтвердите действие' : 'Confirm action';
    return (react_1.default.createElement("div", { className: 'confirm-popup' },
        react_1.default.createElement("h2", { className: 'confirm-popup__title' }, title),
        text && react_1.default.createElement("p", { className: 'confirm-popup__text' }, text),
        showComment && (react_1.default.createElement(index_1.FormGroup, { label: commentTitle },
            react_1.default.createElement(index_1.Textarea, { value: state, onChange: onChange }))),
        react_1.default.createElement("footer", { className: 'confirm-popup__footer' },
            react_1.default.createElement("div", { className: 'confirm-popup__footer-button' },
                react_1.default.createElement(index_1.Button, { disabled: showComment && state === '', onClick: handleSubmit }, textAccept)),
            react_1.default.createElement("div", { className: 'confirm-popup__footer-button' },
                react_1.default.createElement(index_1.Button, { onClick: onClose, buttonType: 'light' }, declineText)))));
};
exports.default = Confirm;
