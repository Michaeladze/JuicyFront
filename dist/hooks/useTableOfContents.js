"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
var useTableOfContents = function (_a) {
    var container = _a.container, selector = _a.selector, _b = _a.additionalOffset, additionalOffset = _b === void 0 ? 0 : _b, _c = _a.deps, deps = _c === void 0 ? [] : _c;
    var _d = react_1.useState({
        activeIndex: 0,
        activeTitleId: undefined
    }), activeTitle = _d[0], setActiveTitle = _d[1];
    var _e = react_1.useState([]), titlesNodes = _e[0], setTitlesNodes = _e[1];
    var parseTitles = function () {
        var htmlNodes = Array.from(document.querySelectorAll(selector));
        return htmlNodes.map(function (node) { return ({
            id: node.id,
            htmlNode: node,
        }); });
    };
    var findActiveNode = function () {
        if (titlesNodes.length) {
            var wrapper_1 = container === null || container === void 0 ? void 0 : container.current;
            var offsets = titlesNodes.map(function (node) { return node.htmlNode.getBoundingClientRect().top; });
            var activeIndex = offsets.findIndex(function (offset) {
                return offset > ((wrapper_1 === null || wrapper_1 === void 0 ? void 0 : wrapper_1.offsetTop) || 0) + additionalOffset;
            });
            /** Активируем последний заголовок если вся страница проскролена */
            if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.scrollHeight) {
                activeIndex = titlesNodes.length - 1;
                setActiveTitle({
                    activeTitleId: titlesNodes[activeIndex].id,
                    activeIndex: activeIndex
                });
                return;
            }
            if (activeIndex === -1) {
                activeIndex = titlesNodes.length - 1;
            }
            else if (activeIndex > 0) {
                activeIndex -= 1;
            }
            setActiveTitle({
                activeTitleId: titlesNodes[activeIndex].id,
                activeIndex: activeIndex
            });
        }
    };
    react_1.useEffect(function () {
        setTimeout(function () {
            setTitlesNodes(parseTitles());
        });
    }, __spreadArray([selector], deps));
    react_1.useEffect(function () {
        if (!activeTitle.activeTitleId && titlesNodes.length) {
            setActiveTitle({
                activeTitleId: titlesNodes[0].id,
                activeIndex: 0
            });
        }
        var subscription = rxjs_1.fromEvent(window, 'scroll').pipe(operators_1.debounceTime(300), operators_1.map(function () { return findActiveNode(); })).subscribe();
        return function () {
            subscription.unsubscribe();
        };
    }, [titlesNodes]);
    return activeTitle;
};
exports.default = useTableOfContents;
