"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoryDocsH2 = void 0;
var react_1 = __importDefault(require("react"));
require("./StoryDocsH2.scss");
var StoryDocsH2 = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement("h2", { className: 'story-docs-h2' }, children));
};
exports.StoryDocsH2 = StoryDocsH2;
