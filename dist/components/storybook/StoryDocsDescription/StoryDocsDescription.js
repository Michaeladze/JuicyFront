"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoryDocsDescription = void 0;
var react_1 = __importDefault(require("react"));
require("./StoryDocsDescription.scss");
var StoryDocsDescription = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement("p", { className: 'story-docs-description' }, children));
};
exports.StoryDocsDescription = StoryDocsDescription;
