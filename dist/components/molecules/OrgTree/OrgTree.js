"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Tree_1 = __importDefault(require("./Tree"));
var OrgTree = function (_a) {
    var _b = _a.id, id = _b === void 0 ? 'rf-org-tree' : _b, list = _a.list, open = _a.open, onChange = _a.onChange, activeOption = _a.activeOption;
    return (react_1.default.createElement("div", { id: id },
        react_1.default.createElement(Tree_1.default, { id: id, list: list, onChange: onChange, open: open, activeItem: activeOption })));
};
exports.default = OrgTree;
