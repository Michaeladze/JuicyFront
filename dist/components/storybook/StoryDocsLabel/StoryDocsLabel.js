"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoryDocsLabel = void 0;
var react_1 = __importDefault(require("react"));
require("./StoryDocsLabel.scss");
var StoryDocsLabel = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement("div", { className: 'story-docs-label' }, children));
};
exports.StoryDocsLabel = StoryDocsLabel;
