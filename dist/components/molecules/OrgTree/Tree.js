"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var TreeItem_1 = __importDefault(require("./TreeItem"));
var Folder = function (_a) {
    // ---------------------------------------------------------------------------------------------------------------------------------------
    var id = _a.id, list = _a.list, onChange = _a.onChange, _b = _a.depth, depth = _b === void 0 ? 0 : _b, _c = _a.open, open = _c === void 0 ? true : _c, activeItem = _a.activeItem;
    /** Базовый размер отступа слева */
    var PADDING_LEFT_BASE = 22;
    var style = { paddingLeft: depth === 0 ? 0 : PADDING_LEFT_BASE };
    // ---------------------------------------------------------------------------------------------------------------------------------------
    var listJSX = list.map(function (item, i) {
        return (react_1.default.createElement(TreeItem_1.default, { id: id, key: item.value + '_' + depth + '_' + i, item: item, onChange: onChange, depth: depth + 1, open: open, activeItem: activeItem, last: i === list.length - 1 }));
    });
    // ---------------------------------------------------------------------------------------------------------------------------------------
    return (react_1.default.createElement("div", { className: 'rf-tree', style: style }, listJSX));
};
exports.default = Folder;
