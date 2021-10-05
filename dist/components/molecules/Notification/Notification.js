"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("./Notification.scss");
var index_1 = require("../../../index");
var Notification = function (_a) {
    var item = _a.item, remove = _a.remove;
    /** Удалить уведомление */
    var removeNotification = function () {
        item.id && remove && remove(item.id);
        item.cancelRetry && item.cancelRetry();
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "rf-notification rf-notification--" + item.variant },
            react_1.default.createElement("p", { className: 'rf-notification__message' }, item.message),
            react_1.default.createElement("button", { type: 'button', className: 'rf-notification__close', onClick: removeNotification },
                react_1.default.createElement(index_1.Close, null)))));
};
exports.default = Notification;
