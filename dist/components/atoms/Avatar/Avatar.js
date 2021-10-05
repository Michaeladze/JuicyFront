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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
require("./Avatar.scss");
var helpers_1 = require("../../../utils/helpers");
var Avatar = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 'm' : _b, _c = _a.photo, photo = _c === void 0 ? '' : _c, _d = _a.fullName, fullName = _d === void 0 ? '' : _d;
    var _e = react_1.useState(''), initials = _e[0], setInitials = _e[1];
    var isSapUrl = (photo === null || photo === void 0 ? void 0 : photo.slice(0, 4)) === '/sap';
    if (isSapUrl) {
        var host = ~window.location.hostname.indexOf('127.0.') ? 'https://sapd-fes-ap01.vtb24.ru:44310/' : '';
        photo = host + photo;
    }
    react_1.useEffect(function () {
        if (fullName) {
            var _a = fullName.split(' '), f = _a[0], s = _a[1];
            var text = '';
            f && (text = f.charAt(0).toUpperCase());
            s && (text += s.charAt(0).toUpperCase());
            setInitials(text);
        }
    }, [fullName]);
    return (react_1.default.createElement("div", { className: "rf-avatar " + helpers_1.sizeClass[size], style: { backgroundImage: "url(\"" + photo + "\")", } }, !photo && initials));
};
exports.default = Avatar;
