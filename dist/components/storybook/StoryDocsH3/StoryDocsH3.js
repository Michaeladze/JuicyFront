"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoryDocsH3 = void 0;
var react_1 = __importDefault(require("react"));
require("./StoryDocsH3.scss");
var StoryDocsH3 = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement("h3", { className: 'story-docs-h3' }, children));
};
exports.StoryDocsH3 = StoryDocsH3;
