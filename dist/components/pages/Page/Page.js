"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("./Page.scss");
var react_router_dom_1 = require("react-router-dom");
var index_1 = require("../../../index");
var Page = function (_a) {
    // -------------------------------------------------------------------------------------------------------------------
    var title = _a.title, _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.backUrl, backUrl = _c === void 0 ? '' : _c, onBackUrlClick = _a.onBackUrlClick, children = _a.children, navigation = _a.navigation, _d = _a.preloader, preloader = _d === void 0 ? false : _d;
    var onBackClick = function (e) {
        if (onBackUrlClick) {
            e.preventDefault();
            onBackUrlClick();
        }
    };
    return (react_1.default.createElement("div", { className: "rf-page " + className },
        react_1.default.createElement("header", { className: 'rf-page__header' },
            react_1.default.createElement("div", { className: 'rf-page__header-wrapper' },
                backUrl && react_1.default.createElement(react_router_dom_1.Link, { to: backUrl, onClick: onBackClick, className: 'rf-page__header-back' },
                    react_1.default.createElement(index_1.ChevronLeft, null)),
                react_1.default.createElement("h2", { className: 'rf-page__title' }, title))),
        navigation && (react_1.default.createElement("div", { className: 'rf-page__tabs' },
            react_1.default.createElement(index_1.Tabs, { list: navigation }))),
        react_1.default.createElement("div", { className: 'rf-page__content' }, preloader ? react_1.default.createElement(index_1.Preloader, null) : children)));
};
exports.default = Page;
