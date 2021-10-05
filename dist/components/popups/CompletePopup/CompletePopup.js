"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("./CompletePopup.scss");
var index_1 = require("../../../index");
var CompletePopup = function (_a) {
    // -------------------------------------------------------------------------------------------------------------------
    var label = _a.label, onClose = _a.onClose, confirm = _a.confirm;
    return (react_1.default.createElement("div", { className: 'rf-complete-popup' },
        confirm ? react_1.default.createElement(index_1.CircleConfirm, null) : react_1.default.createElement(index_1.CircleReject, null),
        react_1.default.createElement("p", { className: 'rf-complete-popup__label' }, label),
        react_1.default.createElement(index_1.Button, { fullWidth: true, onClick: onClose }, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C")));
};
exports.default = CompletePopup;
