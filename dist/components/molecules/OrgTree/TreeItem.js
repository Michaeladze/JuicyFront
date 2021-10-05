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
require("./TreeItem.scss");
var Tree_1 = __importDefault(require("./Tree"));
var resize_observer_polyfill_1 = __importDefault(require("resize-observer-polyfill"));
var hline_1 = __importDefault(require("./lines/hline"));
var index_1 = require("../../../index");
var FolderItem = function (_a) {
    var id = _a.id, item = _a.item, onChange = _a.onChange, depth = _a.depth, open = _a.open, activeItem = _a.activeItem, _b = _a.last, last = _b === void 0 ? false : _b;
    var itemRef = react_1.useRef(null);
    var _c = react_1.useState(open), showFolder = _c[0], toggleFolder = _c[1];
    react_1.useEffect(function () {
        toggleFolder(open);
    }, [open]);
    // ---------------------------------------------------------------------------------------------------------------------------------------
    var openClass = showFolder && item.children && item.children.length > 0 ? 'rf-tree__item--open' : 'rf-tree__item--close';
    var showFolderClass = showFolder ? '' : 'rf-tree__item-folder--hidden';
    var rotateIconClass = showFolder ? '' : 'rf-tree__item-label-icon--rotate';
    var itemChildrenClass = item.children && item.children.length > 0 ? '' : 'rf-tree__item--no-children';
    var activeClass = (activeItem === null || activeItem === void 0 ? void 0 : activeItem.value) === item.value ? 'rf-tree__item--active' : '';
    var firstLevelClass = depth === 1 ? 'rf-tree__item--1' : '';
    // ---------------------------------------------------------------------------------------------------------------------------------------
    var handleChange = function (e) {
        e.stopPropagation();
        onChange && onChange(item);
    };
    var openFolder = function () {
        toggleFolder(!showFolder);
    };
    // ---------------------------------------------------------------------------------------------------------------------------------------
    var calculateHeight = function () {
        if (itemRef.current && last && depth > 2) {
            var current = itemRef.current;
            var parent_1 = current.parentElement;
            while (parent_1) {
                if (parent_1.classList.contains('rf-tree__item')) {
                    break;
                }
                parent_1 = parent_1.parentElement;
            }
            if (!parent_1) {
                return;
            }
            var dashes = parent_1.querySelectorAll("[data-id=\"d-" + depth + "\"]");
            var lastDash = dashes[dashes.length - 1];
            if (!lastDash) {
                return;
            }
            var ICON_HEIGHT = 20;
            var height = lastDash.getBoundingClientRect().y - parent_1.getBoundingClientRect().y - ICON_HEIGHT;
            if (parent_1.firstElementChild) {
                // @ts-ignore
                parent_1.firstElementChild.style.height = height + "px";
            }
        }
    };
    react_1.useEffect(function () {
        var resizeObserver = new resize_observer_polyfill_1.default(function () {
            calculateHeight();
        });
        var container = document.getElementById(id);
        if (container) {
            resizeObserver.observe(container);
        }
    }, []);
    // ---------------------------------------------------------------------------------------------------------------------------------------
    return (react_1.default.createElement("div", { className: "rf-tree__item " + openClass + " " + itemChildrenClass + " " + activeClass + " " + firstLevelClass, ref: itemRef },
        react_1.default.createElement("div", { className: 'rf-tree__item--v' }),
        react_1.default.createElement("div", { className: 'rf-tree__item-label', onClick: handleChange },
            react_1.default.createElement(hline_1.default, { className: 'rf-tree__item--h', "data-id": "d-" + depth }),
            item.children && item.children.length > 0 ? react_1.default.createElement(index_1.Up, { className: "rf-tree__item-label-icon " + rotateIconClass, onClick: openFolder }) :
                react_1.default.createElement(index_1.Circle, { className: 'rf-tree__item-label-icon' }),
            item.label),
        item.children && item.children.length > 0 && (react_1.default.createElement("div", { className: "rf-tree__item-folder " + showFolderClass },
            react_1.default.createElement(Tree_1.default, { id: id, list: item.children, onChange: onChange, parent: item, depth: depth, open: open, activeItem: activeItem })))));
};
exports.default = FolderItem;
