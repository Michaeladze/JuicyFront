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
require("./PageWithSections.scss");
var resize_observer_polyfill_1 = __importDefault(require("resize-observer-polyfill"));
var index_1 = require("../../../index");
var react_router_dom_1 = require("react-router-dom");
var Tile_1 = __importDefault(require("../../atoms/Tile"));
var useTableOfContents_1 = __importDefault(require("../../../hooks/useTableOfContents"));
var PageWithSections = function (_a) {
    var title = _a.title, backUrl = _a.backUrl, onBackUrlClick = _a.onBackUrlClick, sections = _a.sections, actionMenu = _a.actionMenu, _b = _a.preloader, preloader = _b === void 0 ? false : _b, _c = _a.showNavigation, showNavigation = _c === void 0 ? true : _c, navigation = _a.navigation, _d = _a.showHeader, showHeader = _d === void 0 ? true : _d;
    /** Ссылка на навигацию */
    var asideRef = react_1.useRef(null);
    /** Ссылка на меню */
    var actionMenuRef = react_1.useRef(null);
    /** Ссылка на секции */
    var sectionsRef = react_1.useRef(null);
    /** Ссылка на ползунок */
    var sliderRef = react_1.useRef(null);
    /** Ссылка на линию */
    var lineRef = react_1.useRef(null);
    /** Ссылка на страницу */
    var pageRef = react_1.useRef(null);
    /** Ссылка на шапку страницы */
    var pageHeaderRef = react_1.useRef(null);
    /** Дополнительной отступ для активации секции в оглавлении */
    var ADDITIONAL_SCROLL_OFFSET = 40;
    // -------------------------------------------------------------------------------------------------------------------
    /** Расчет координаты для Aside */
    react_1.useEffect(function () {
        var calculateRightPosition = function () {
            // todo нужно проверить
            var widthDelta = window.innerWidth - 980 - 192;
            if (asideRef.current) {
                if (widthDelta > 0) {
                    asideRef.current.style.right = widthDelta - 120 + 20 + "px";
                }
            }
        };
        setTimeout(function () {
            calculateRightPosition();
        });
        window.addEventListener('resize', calculateRightPosition);
        return function () {
            window.removeEventListener('resize', calculateRightPosition);
        };
    }, [actionMenu]);
    // -------------------------------------------------------------------------------------------------------------------
    /** Отображение секций */
    var sectionsJSX = sections === null || sections === void 0 ? void 0 : sections.map(function (section) {
        return (react_1.default.createElement("section", { key: section.id, className: 'rf-page__section-block' },
            react_1.default.createElement(Tile_1.default, { hideBackground: section.hideBackground },
                section.title && react_1.default.createElement("h2", { className: 'rf-page__section-title', id: section.id }, section.title),
                section.component)));
    });
    // -------------------------------------------------------------------------------------------------------------------
    /** Активная секция при скролле */
    var activeIndex = useTableOfContents_1.default({
        selector: '.rf-page__section-title',
        additionalOffset: ADDITIONAL_SCROLL_OFFSET,
        deps: [preloader]
    }).activeIndex;
    /** Боковая навигация для секций */
    var asideJSX = sections === null || sections === void 0 ? void 0 : sections.filter(function (section) { return !!section.title; }).map(function (section) {
        var onNavClick = function () {
            var block = document.getElementById(section.id);
            if (block && pageHeaderRef.current) {
                var top_1 = block.getBoundingClientRect().top + pageYOffset - ADDITIONAL_SCROLL_OFFSET;
                window.scrollTo(0, top_1);
            }
        };
        return (react_1.default.createElement("div", { key: section.id, className: 'rf-page__aside-link', onClick: onNavClick }, section.title));
    });
    /** Передвигаем слайдер к активной секции */
    react_1.useEffect(function () {
        setTimeout(function () {
            if (sliderRef.current) {
                var navLinks = document.querySelectorAll('.rf-page__aside-link');
                var navLink = navLinks[activeIndex >= navLinks.length ? navLinks.length - 1 : activeIndex];
                if (asideRef.current && navLink) {
                    sliderRef.current.style.top = navLink.getBoundingClientRect().top - asideRef.current.getBoundingClientRect().top + "px";
                }
            }
        });
    }, [activeIndex]);
    // -------------------------------------------------------------------------------------------------------------------
    var showAside = !!sections && sections.some(function (s) { return !!s.title; });
    var asideBlock = showNavigation && showAside && (react_1.default.createElement("aside", { className: 'rf-page__content-aside', ref: asideRef },
        react_1.default.createElement("div", { className: 'rf-page__aside-inner' },
            react_1.default.createElement("div", { className: 'rf-page__aside-bar', ref: lineRef },
                react_1.default.createElement("div", { className: 'rf-page__aside-slider', ref: sliderRef })),
            react_1.default.createElement("nav", { className: 'rf-page__aside-nav' }, asideJSX))));
    // -------------------------------------------------------------------------------------------------------------------
    var onBackClick = function (e) {
        if (onBackUrlClick) {
            e.preventDefault();
            onBackUrlClick();
        }
    };
    // -------------------------------------------------------------------------------------------------------------------
    var calculateMenuPosition = function () {
        if (!pageRef.current || !sectionsRef.current || !actionMenuRef.current || !pageHeaderRef.current || preloader) {
            return;
        }
        if (pageRef.current.offsetHeight > document.documentElement.clientHeight) {
            actionMenuRef.current.style.bottom = '20px';
            actionMenuRef.current.style.top = 'auto';
        }
        else {
            actionMenuRef.current.style.bottom = 'auto';
            actionMenuRef.current.style.top = sectionsRef.current.offsetHeight + pageHeaderRef.current.offsetHeight + 'px';
        }
    };
    react_1.useEffect(function () {
        if (!sectionsRef.current) {
            return;
        }
        var resizeObserver = new resize_observer_polyfill_1.default(function () {
            calculateMenuPosition();
        });
        resizeObserver.observe(sectionsRef.current);
    }, [preloader]);
    // -------------------------------------------------------------------------------------------------------------------
    return (react_1.default.createElement("div", { className: 'rf-sections-page', ref: pageRef },
        react_1.default.createElement("header", { className: "rf-page__sections-header " + (showHeader ? '' : 'rf-page__sections-header--hidden'), ref: pageHeaderRef },
            backUrl && (react_1.default.createElement(react_router_dom_1.Link, { to: backUrl, onClick: onBackClick, className: 'rf-page__sections-header-back' },
                react_1.default.createElement(index_1.ChevronLeft, null))),
            react_1.default.createElement("h2", { className: 'rf-page__sections-title' }, title)),
        navigation && (react_1.default.createElement("div", { className: 'rf-page__tabs' },
            react_1.default.createElement(index_1.Tabs, { list: navigation }))),
        react_1.default.createElement("div", { className: 'rf-page__content--sections' }, preloader ? react_1.default.createElement(index_1.Preloader, null) : (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { className: 'rf-page__content-sections', ref: sectionsRef }, sectionsJSX),
            asideBlock))),
        !preloader && actionMenu && (react_1.default.createElement("div", { className: 'rf-sections__action-menu', ref: actionMenuRef }, actionMenu))));
};
exports.default = PageWithSections;
