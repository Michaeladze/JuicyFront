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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var Tile_1 = __importDefault(require("../../atoms/Tile"));
var Tag_1 = __importDefault(require("../../atoms/Tag"));
var UserPhoto_1 = __importDefault(require("../../atoms/UserPhoto"));
var Tooltip_1 = __importDefault(require("../../atoms/Tooltip"));
var Toast_1 = __importDefault(require("../../atoms/Toast"));
var Copy_1 = __importDefault(require("../../../assets/icons/Copy"));
require("./Card.scss");
var Card = function (_a) {
    var _b = _a.title, title = _b === void 0 ? '' : _b, _c = _a.subTitle, subTitle = _c === void 0 ? '' : _c, requestNumber = _a.requestNumber, date = _a.date, statusText = _a.statusText, _d = _a.statusColor, statusColor = _d === void 0 ? 'default' : _d, user = _a.user, onClick = _a.onClick;
    var _e = react_1.useState(false), isCopied = _e[0], setIsCopied = _e[1];
    var copyHandler = function () {
        setIsCopied(true);
        navigator.clipboard.writeText(user.id);
    };
    return react_1.default.createElement("div", { className: 'rf-card__wrapper', onClick: onClick },
        react_1.default.createElement(Tile_1.default, null,
            react_1.default.createElement("div", { className: 'rf-card__row rf-card__row_first-row' },
                react_1.default.createElement("div", { className: 'rf-card__title-wrapper' },
                    react_1.default.createElement("h1", { className: 'rf-card__title' }, title + " \u2116" + requestNumber + " \u043E\u0442 " + date),
                    subTitle && react_1.default.createElement("p", { className: 'rf-card__subtitle' }, subTitle)),
                react_1.default.createElement(Tag_1.default, { variant: statusColor }, statusText)),
            react_1.default.createElement("div", { className: 'rf-card__row' },
                react_1.default.createElement("div", { className: 'rf-card__user-wrapper' },
                    react_1.default.createElement("div", { className: 'rf-card__user-photo-wrapper' },
                        react_1.default.createElement(UserPhoto_1.default, { url: user.photo, radius: '48' })),
                    react_1.default.createElement("div", { className: 'rf-card__user-info-wrapper' },
                        react_1.default.createElement("div", { className: 'rf-card__user-row' },
                            react_1.default.createElement("p", { className: 'rf-card__user-full-name' }, user.fullName)),
                        react_1.default.createElement("div", { className: 'rf-card__user-row' },
                            react_1.default.createElement("p", { className: 'rf-card__user-additional' }, "\u0422\u0430\u0431\u0435\u043B\u044C\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440"),
                            react_1.default.createElement("div", { className: 'rf-card__user-row' },
                                react_1.default.createElement("p", { className: 'rf-card__user-accent rf-card__user-accent_number' }, user.id),
                                react_1.default.createElement("div", { className: 'rf-card__icon-wrapper' },
                                    react_1.default.createElement(Tooltip_1.default, { position: 'bottom' },
                                        react_1.default.createElement(Copy_1.default, { onClick: copyHandler, id: 'copyIcon' }),
                                        react_1.default.createElement("div", { className: 'rf-card__tooltip-text' }, "\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0422\u041D")),
                                    react_1.default.createElement(Toast_1.default, { isVisible: isCopied, setVisibility: setIsCopied },
                                        react_1.default.createElement("p", { className: 'rf-card__toast-text' }, "\u0422\u041D \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D"))),
                                react_1.default.createElement("p", { className: 'rf-card__user-additional' }, "\u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C"),
                                react_1.default.createElement("div", { className: 'rf-card__user-row' },
                                    react_1.default.createElement("p", { className: 'rf-card__user-accent' }, user.position)))))))));
};
exports.default = Card;
