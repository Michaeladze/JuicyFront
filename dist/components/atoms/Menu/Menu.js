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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuContext = void 0;
var react_1 = __importStar(require("react"));
var react_dom_1 = require("react-dom");
require("./Menu.scss");
var List_1 = __importDefault(require("./List"));
var useClickOutside_1 = __importDefault(require("../../../hooks/useClickOutside"));
/** Контекст для передачи функций работы с меню. */
exports.MenuContext = react_1.default.createContext({
    onClose: function () { },
    show: false
});
var Menu = function (_a) {
    var list = _a.list, children = _a.children, content = _a.content, _b = _a.position, position = _b === void 0 ? 'left' : _b, _c = _a.className, className = _c === void 0 ? '' : _c, portal = _a.portal, anchorElement = _a.anchorElement, props = __rest(_a, ["list", "children", "content", "position", "className", "portal", "anchorElement"]);
    // Обратная совместимость с версией без поратала
    var relativeBlock = props.relativeBlock || (portal ? document.documentElement : document.body);
    /** Выпадающий список */
    var menuRef = react_1.useRef(null);
    var contentRef = react_1.useRef(null);
    var toggleRef = react_1.useRef(null);
    /** Флаг отображения выпадающего списка  */
    var _d = react_1.useState(false), show = _d[0], setShow = _d[1];
    /** Клик по кнопке */
    var onClick = function (e) {
        e.preventDefault();
        onToggle();
    };
    /** Изменение состояния выпадающего списка */
    var onToggle = function () {
        setShow(!show);
    };
    var onClose = function () {
        setShow(false);
    };
    // -------------------------------------------------------------------------------------------------------------------
    /** Контейнер для портала */
    var div = react_1.useMemo(function () { return document.createElement('div'); }, []);
    react_1.useEffect(function () {
        document.body.appendChild(div);
        return function () {
            document.body.removeChild(div);
        };
    }, [div]);
    // -------------------------------------------------------------------------------------------------------------------
    /** Функция для отслеживания клика вне элемента */
    var handleClickOutside = react_1.useCallback(function (event) {
        if (event.target && toggleRef.current && toggleRef.current.contains(event.target)) {
            return;
        }
        onClose();
    }, [setShow, toggleRef]);
    useClickOutside_1.default(contentRef, handleClickOutside);
    // -------------------------------------------------------------------------------------------------------------------
    var clearCoordinates = function () {
        return position === 'left' ?
            {
                top: '-99999px',
                bottom: 'auto',
                left: '0',
                right: 'auto'
            } :
            {
                top: '-99999px',
                bottom: 'auto',
                left: 'auto',
                right: '0'
            };
    };
    var _e = react_1.useState(clearCoordinates()), coordinates = _e[0], setCoordinates = _e[1];
    /** Пересчитываем координаты, если не помещается*/
    var rearrangePosition = function () {
        if (contentRef.current && toggleRef.current) {
            var toggleRect = (anchorElement || toggleRef.current).getBoundingClientRect();
            var listRect = contentRef.current.getBoundingClientRect();
            if (portal) {
                var GAP = 8;
                var left = 0;
                var right = 0;
                var top_1 = 0;
                var bottom = 0;
                // Позиция по горизонтали
                if (position === 'left' || position === 'top-left') {
                    // Получаем положительное число в случае если меню вылезло за пределы родителя
                    var offset = (relativeBlock.scrollLeft + toggleRect.left + listRect.width + GAP) - relativeBlock.scrollWidth;
                    left = relativeBlock.scrollLeft + toggleRect.left - Math.max(0, offset);
                }
                else {
                    var offset = listRect.width + GAP - (relativeBlock.scrollLeft + toggleRect.right);
                    right = relativeBlock.offsetWidth - (relativeBlock.scrollLeft + toggleRect.right) - Math.max(0, offset);
                }
                // Позиция по вертикали
                if (position === 'left' || position === 'right') {
                    var offset = (toggleRect.bottom + relativeBlock.scrollTop + listRect.height + GAP * 2) - relativeBlock.scrollHeight;
                    top_1 = toggleRect.bottom + relativeBlock.scrollTop + GAP - Math.max(0, offset);
                }
                else {
                    var offset = (listRect.height + GAP * 2) - (toggleRect.top + relativeBlock.scrollTop);
                    bottom = relativeBlock.scrollHeight - (toggleRect.top + relativeBlock.scrollTop) + GAP - Math.max(0, offset);
                }
                setCoordinates({
                    left: left ? left + "px" : 'auto',
                    top: top_1 ? top_1 + "px" : 'auto',
                    right: right ? right + "px" : 'auto',
                    bottom: bottom ? bottom + "px" : 'auto',
                });
            }
            else {
                var left = 0;
                var right = 0;
                var top_2 = toggleRect.height;
                var minGap = 10;
                if (toggleRect.height + toggleRect.top + listRect.height > relativeBlock.offsetHeight) {
                    top_2 =
                        toggleRect.height -
                            (toggleRect.height + toggleRect.top + listRect.height - relativeBlock.offsetHeight) -
                            minGap;
                }
                if (position === 'top-right' || position === 'top-left') {
                    top_2 = -listRect.height - minGap;
                    // debugger;
                }
                if (position === 'left' || position === 'top-left') {
                    if (toggleRect.left + listRect.width > relativeBlock.offsetWidth) {
                        left = relativeBlock.offsetWidth - listRect.width - toggleRect.left - minGap;
                    }
                    setCoordinates({
                        left: left + "px",
                        top: top_2 + "px",
                        right: 'auto',
                        bottom: 'auto',
                    });
                }
                else {
                    if (listRect.left < 0) {
                        right = listRect.left - minGap;
                    }
                    setCoordinates({
                        left: 'auto',
                        top: top_2 + "px",
                        right: right + "px",
                        bottom: 'auto',
                    });
                }
            }
        }
    };
    react_1.useLayoutEffect(function () {
        if (show) {
            rearrangePosition();
        }
        else {
            setCoordinates(clearCoordinates());
        }
    }, [show, portal, anchorElement]);
    // -------------------------------------------------------------------------------------------------------------------
    var menu = (react_1.default.createElement("div", { className: "rf-menu__content " + (show ? 'rf-menu__content--show' : '') + " " + (portal ? 'rf-menu__content--portal' : ''), style: coordinates, ref: contentRef }, content ? content : list && list.length > 0 && react_1.default.createElement(List_1.default, { list: list })));
    return (react_1.default.createElement(exports.MenuContext.Provider, { value: {
            onClose: onClose,
            show: show
        } },
        react_1.default.createElement("div", { className: "rf-menu " + className, ref: menuRef },
            react_1.default.createElement("div", { className: 'rf-menu__toggle', onClick: onClick, ref: toggleRef }, children),
            portal ? react_dom_1.createPortal(menu, div) : menu)));
};
exports.default = Menu;
