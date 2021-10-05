"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
require("./CertReader.scss");
var Menu_1 = __importDefault(require("../../atoms/Menu"));
var index_1 = require("../../../index");
var crypto_pro_1 = require("crypto-pro");
var CertReader = function (_a) {
    var file = _a.file, onSuccess = _a.onSuccess, onError = _a.onError, _b = _a.buttonTitle, buttonTitle = _b === void 0 ? 'Подписать ЭЦП (цифровая подпись)' : _b, _c = _a.btnProps, btnProps = _c === void 0 ? {} : _c, _d = _a.filter, filter = _d === void 0 ? function (cert) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/, true];
    }); }); } : _d;
    /** все доступные сертификаты*/
    var _e = react_1.useState(null), certs = _e[0], setCerts = _e[1];
    // ===================================================================================================================
    /** асинхронное получение серификатов с ключа*/
    react_1.useEffect(function () {
        function getCertificates() {
            return __awaiter(this, void 0, void 0, function () {
                var certs_1, filteredAsync_1, e_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 3, , 4]);
                            return [4 /*yield*/, crypto_pro_1.getUserCertificates()];
                        case 1:
                            certs_1 = _a.sent();
                            return [4 /*yield*/, Promise.all(certs_1.map(filter))];
                        case 2:
                            filteredAsync_1 = _a.sent();
                            certs_1 = certs_1.filter(function (_cert, i) { return filteredAsync_1[i]; });
                            if (certs_1.length) {
                                setCerts(certs_1);
                            }
                            return [3 /*break*/, 4];
                        case 3:
                            e_1 = _a.sent();
                            setCerts(null);
                            onError(e_1);
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        }
        getCertificates().then();
    }, []);
    // ===================================================================================================================
    /** формирование меню*/
    var menuBuilder = function (certs) {
        return certs.map(function (item) {
            var l = item.name + "  ( " + item.issuerName + ")";
            return {
                label: l.length < 100 ? l : l.slice(0, 100) + '...',
                value: item.thumbprint,
                handler: function () { return __awaiter(void 0, void 0, void 0, function () {
                    var _a, _b, e_2;
                    var _c, _d;
                    return __generator(this, function (_e) {
                        switch (_e.label) {
                            case 0:
                                _e.trys.push([0, 2, , 3]);
                                _a = onSuccess;
                                _c = {};
                                _b = [__assign({}, file)];
                                _d = {};
                                return [4 /*yield*/, crypto_pro_1.createSignature(item.thumbprint, file.base64.split('base64,')[1])];
                            case 1:
                                _a.apply(void 0, [(_c.data = __assign.apply(void 0, _b.concat([(_d.singBase64 = (_e.sent()).replace(/[\r\n]+/g, ''), _d.cert = item.thumbprint, _d)])),
                                        _c.cert = item,
                                        _c)]);
                                return [3 /*break*/, 3];
                            case 2:
                                e_2 = _e.sent();
                                onError(e_2);
                                return [3 /*break*/, 3];
                            case 3: return [2 /*return*/];
                        }
                    });
                }); }
            };
        });
    };
    // ===================================================================================================================
    return react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Menu_1.default, { position: 'left', list: certs ? menuBuilder(certs) : undefined },
            react_1.default.createElement(index_1.Button, __assign({}, btnProps, { disabled: !certs }), buttonTitle)));
};
exports.default = CertReader;
