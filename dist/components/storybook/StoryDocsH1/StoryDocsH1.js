"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoryDocsH1 = void 0;
var react_1 = __importDefault(require("react"));
require("./StoryDocsH1.scss");
var StoryDocsH1 = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement("h1", { className: 'story-docs-h1' }, children));
};
exports.StoryDocsH1 = StoryDocsH1;
