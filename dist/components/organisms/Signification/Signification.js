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
require("./Signification.scss");
var index_1 = require("../../../index");
var Documents_1 = __importDefault(require("../../../assets/icons/Documents"));
var ContentExpander_1 = __importDefault(require("../../molecules/ContentExpander"));
var Download_1 = __importDefault(require("../../../assets/icons/Download"));
var buttonNamesDefault = {
    manual: 'Подписать вручную',
    reject: 'Отклонить ЭДО',
    sign: 'Подписать ЭЦП (цифровая подпись)',
    rejectManual: 'Отклонить'
};
var Signification = function (_a) {
    var data = _a.data, _b = _a.onSignify, onSignify = _b === void 0 ? function () { } : _b, _c = _a.title, title = _c === void 0 ? '' : _c, _d = _a.isSpoiler, isSpoiler = _d === void 0 ? true : _d, _e = _a.isOpenSpoiler, isOpenSpoiler = _e === void 0 ? false : _e, documentInfo = _a.documentInfo, _f = _a.hideButtons, hideButtons = _f === void 0 ? [] : _f, _g = _a.buttonCustomTexts, buttonCustomTexts = _g === void 0 ? {} : _g, _h = _a.filter, filter = _h === void 0 ? function (cert) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/, !!~cert.issuerName.toLowerCase().indexOf('vtb')];
    }); }); } : _h;
    /** тексты для кнопок*/
    var _j = react_1.useState(__assign(__assign({}, buttonNamesDefault), buttonCustomTexts)), textButtons = _j[0], _ = _j[1];
    /** текущий статус файла*/
    var _k = react_1.useState(data), value = _k[0], setValue = _k[1];
    /** хранит текущий выбранный сертификат*/
    var _l = react_1.useState(undefined), currentCert = _l[0], setCurrentCert = _l[1];
    /** True если ошибка сертификатов*/
    var _m = react_1.useState(false), certError = _m[0], setCertError = _m[1];
    /** хранит приложеннный руками фойл*/
    var _o = react_1.useState(undefined), manualFile = _o[0], setManualFile = _o[1];
    /** изначальный файл*/
    var initialFile = react_1.useRef(data);
    /** статус подписания*/
    var _p = react_1.useState(undefined), finalStage = _p[0], setFinalStage = _p[1];
    /** открывает попап ручного подписания*/
    var _q = react_1.useState(false), manualPopup = _q[0], setManualPopup = _q[1];
    /** открывает попап в случае отказа подписания*/
    var _r = react_1.useState(undefined), refusePopup = _r[0], setRefusePopup = _r[1];
    /** открыт или закрыт спойлер*/
    var _s = react_1.useState(isOpenSpoiler), isOpenContent = _s[0], setOpenContent = _s[1];
    /** комментарий при отклонении*/
    var _t = react_1.useState(''), comment = _t[0], setComment = _t[1];
    var status = ['auto', 'manual'].includes(finalStage || '') ? 'success' : 'danger';
    // ===========
    react_1.useEffect(function () {
        data && setValue(data);
    }, [data]);
    // =======================================================================================================================================
    var successHandle = function (result) {
        onSignify({
            file: result.data,
            success: 'sign',
            comment: comment,
            currentCert: result.cert
        });
        setValue(result.data);
        setCurrentCert(result.cert);
        setFinalStage('auto');
        setOpenContent(false);
    };
    var refuseHandle = function (result) {
        setCurrentCert(result.cert);
        setRefusePopup(result);
    };
    var refuseHandlePopupSuccess = function (comment) {
        if (comment === void 0) { comment = ''; }
        setComment(comment);
        setFinalStage('reject');
        setOpenContent(false);
        setRefusePopup(undefined);
        onSignify({
            file: refusePopup ? refusePopup.data : initialFile.current,
            success: 'reject',
            comment: comment,
            currentCert: currentCert
        });
    };
    var refuseHandlePopupFail = function () {
        setCurrentCert(undefined);
        setRefusePopup(undefined);
    };
    var errorHandle = function (e) {
        !~e.message.toLowerCase().indexOf('отменена пользователем') &&
            setCertError(true);
    };
    var cancelSign = function () {
        setComment('');
        setFinalStage(undefined);
        setValue(initialFile.current);
        setCurrentCert(undefined);
        onSignify({ file: initialFile.current });
    };
    var manualSignHandler = function () {
        setFinalStage('manual');
        var file = __assign(__assign({}, value), manualFile);
        setValue(file);
        onSignify({
            file: file,
            success: 'manual',
            comment: comment,
            currentCert: currentCert
        });
        setManualPopup(false);
        setOpenContent(false);
    };
    var setFileHandler = function (file) {
        setManualFile({
            fileName: file[0].file.name,
            base64: file[0].base64
        });
    };
    var finalText = finalStage === 'auto' ?
        'Документ будет подписан сертификатом' :
        finalStage === 'manual' ?
            'Документ будет подписан ручной подписью' :
            'Документ будет отклонен';
    // =======================================================================================================================================
    var buttonsTSX = !finalStage &&
        react_1.default.createElement("div", { className: 'buttons__wrapper' },
            !(hideButtons === null || hideButtons === void 0 ? void 0 : hideButtons.includes('sign')) &&
                react_1.default.createElement("div", { className: 'button__item' },
                    react_1.default.createElement(index_1.CertReader, { buttonTitle: textButtons.sign, filter: filter, file: data, onSuccess: successHandle, onError: errorHandle })),
            !(hideButtons === null || hideButtons === void 0 ? void 0 : hideButtons.includes('manual')) &&
                react_1.default.createElement("div", { className: 'button__item' },
                    react_1.default.createElement(index_1.Button, { buttonType: 'light', onClick: function () { return setManualPopup(true); } }, textButtons.manual)),
            !(hideButtons === null || hideButtons === void 0 ? void 0 : hideButtons.includes('reject')) &&
                react_1.default.createElement("div", { className: 'button__item' },
                    react_1.default.createElement(index_1.CertReader, { buttonTitle: textButtons.reject, btnProps: { buttonType: 'danger' }, filter: filter, file: data, onSuccess: refuseHandle, onError: errorHandle })),
            !(hideButtons === null || hideButtons === void 0 ? void 0 : hideButtons.includes('rejectManual')) &&
                react_1.default.createElement("div", { className: 'button__item' },
                    react_1.default.createElement(index_1.Button, { buttonType: 'danger', onClick: function () { return setRefusePopup(null); } }, textButtons.rejectManual)));
    // =======================================================================================================================================
    var manualFileChipTSX = function (name, onClick) {
        return react_1.default.createElement("div", { className: 'manual__chip-wrapper' },
            react_1.default.createElement(index_1.Chip, { onClick: function () { return manualFile && index_1.download(manualFile, manualFile === null || manualFile === void 0 ? void 0 : manualFile.fileName); }, size: 's', type: 'outline' },
                react_1.default.createElement("div", { className: 'manual__chip-text' },
                    name,
                    react_1.default.createElement("div", { className: 'manual__chip-button', onClick: onClick },
                        react_1.default.createElement(index_1.Close, null)))));
    };
    // =======================================================================================================================================
    var finalCardTSX = finalStage &&
        react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { style: { alignItems: status === 'success' ? 'center' : 'start' }, className: "info-block__wrapper info-block__wrapper--" + status },
                react_1.default.createElement("div", { className: 'info-block__icon' }, finalStage === 'reject' ?
                    react_1.default.createElement(index_1.CircleReject, { width: '40px', height: '40px', color1: '#DA0B20', color2: '#FFFFFF' }) :
                    react_1.default.createElement(index_1.CircleConfirm, { width: '40px', height: '40px', color1: '#2ABB5B', color2: '#FFFFFF' })),
                react_1.default.createElement("div", { className: 'info-block__text-wrapper' },
                    react_1.default.createElement("div", { className: "info-block__main-text info-block__main-text--" + status }, finalText),
                    ['auto', 'reject'].includes(finalStage) &&
                        react_1.default.createElement(react_1.default.Fragment, null,
                            currentCert &&
                                react_1.default.createElement("div", { className: 'info-block__text ' }, ((currentCert === null || currentCert === void 0 ? void 0 : currentCert.name) + " " + (currentCert === null || currentCert === void 0 ? void 0 : currentCert.issuerName)).slice(0, 100)),
                            comment &&
                                react_1.default.createElement("div", { className: 'info-block__comment' }, comment))),
                react_1.default.createElement("div", { style: { paddingTop: finalStage !== 'reject' ? 0 : '12px' }, className: 'info-block__button' },
                    react_1.default.createElement(index_1.Button, { onClick: cancelSign, buttonType: 'text' },
                        react_1.default.createElement("div", { className: 'info-block__button-inner' }, "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C")))),
            finalStage === 'manual' && manualFileChipTSX(value.fileName, function (e) {
                e.stopPropagation();
                cancelSign();
            }));
    // =======================================================================================================================================
    var refuseConfirmTSX = refusePopup !== undefined && react_1.default.createElement(index_1.Modal, null,
        react_1.default.createElement(index_1.Confirm, { textAccept: '\u041E\u0442\u043A\u043B\u043E\u043D\u0438\u0442\u044C \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442', text: '\u0412\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0439 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442 \u0431\u0443\u0434\u0435\u0442 \u043E\u0442\u043A\u043B\u043E\u043D\u0435\u043D. \u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C \u043E\u0442\u043A\u043B\u043E\u043D\u0435\u043D\u0438\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430?', onClose: refuseHandlePopupFail, onAction: refuseHandlePopupSuccess, comment: '', showComment: true }));
    // =======================================================================================================================================
    var manualPopupTSX = manualPopup && react_1.default.createElement(index_1.Modal, null,
        react_1.default.createElement("div", { className: 'manual__wrapper' },
            react_1.default.createElement("div", { className: 'manual__header' },
                react_1.default.createElement("div", null, "\u041F\u043E\u0434\u043F\u0438\u0441\u0430\u0442\u044C \u0432\u0440\u0443\u0447\u043D\u0443\u044E"),
                react_1.default.createElement("div", { className: 'manual__close', onClick: function () { return setManualPopup(false); } },
                    react_1.default.createElement(index_1.Close, null))),
            react_1.default.createElement("div", { className: 'manual__hint-wrapper' },
                react_1.default.createElement(index_1.Hint, { button: react_1.default.createElement(index_1.Button, { onClick: function () { return index_1.download(value, value.fileName); }, buttonType: 'text', startAdornment: react_1.default.createElement(Download_1.default, null) }, "\u0421\u043A\u0430\u0447\u0430\u0442\u044C"), icon: 'info', maxWidth: '648px', title: '\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435', variant: 'default' }, "\u0421\u043A\u0430\u0447\u0430\u0439\u0442\u0435 \u0438 \u043F\u043E\u0434\u043F\u0438\u0448\u0438\u0442\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442. \u041F\u043E\u0441\u043B\u0435 \u043F\u0440\u0438\u043A\u0440\u0435\u043F\u0438\u0442\u0435 \u043F\u043E\u0434\u043F\u0438\u0441\u0430\u043D\u043D\u044B\u0439 \u0444\u0430\u0439\u043B")),
            manualFile && manualFileChipTSX(manualFile.fileName, function (e) {
                e.stopPropagation();
                setManualFile(undefined);
            }),
            react_1.default.createElement("div", { className: 'modal_buttons' },
                react_1.default.createElement("div", { className: 'modal_button' },
                    react_1.default.createElement(index_1.InputFile, { showChips: false, multiple: false, setFile: setFileHandler, buttonType: 'light', placeholder: '\u041F\u0440\u0438\u043A\u0440\u0435\u043F\u0438\u0442\u044C \u0444\u0430\u0439\u043B' })),
                react_1.default.createElement("div", { className: 'modal_button' },
                    react_1.default.createElement(index_1.Button, { onClick: manualSignHandler, disabled: !manualFile }, "\u041F\u043E\u0434\u043F\u0438\u0441\u0430\u0442\u044C")))));
    // =======================================================================================================================================
    var certErrorTSX = certError &&
        react_1.default.createElement("div", { className: 'cert-error__wrapper' },
            react_1.default.createElement(index_1.Hint, { button: react_1.default.createElement(index_1.Button, { onClick: function () { return index_1.download(value, value.fileName); }, buttonType: 'text', textColor: 'red', startAdornment: react_1.default.createElement(Download_1.default, null) }, "\u0418\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u044F"), icon: 'info', maxWidth: '648px', title: '\u041D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442 \u043F\u043E\u0434\u043F\u0438\u0441\u044C', variant: 'red' }, "\u0414\u043B\u044F \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u0430 \u042D\u041F (\u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430\u044F \u043F\u043E\u0434\u043F\u0438\u0441\u044C) \u043E\u0437\u043D\u0430\u043A\u043E\u043C\u044C\u0442\u0435\u0441\u044C, \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0441 \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0435\u0439"));
    // =======================================================================================================================================
    var expanderContentTSX = react_1.default.createElement(react_1.default.Fragment, null,
        buttonsTSX,
        (!finalStage || isSpoiler) && react_1.default.createElement(index_1.PDFViewer, { file: data }));
    return react_1.default.createElement("div", { className: 'signification__wrapper' },
        react_1.default.createElement(index_1.Tile, null,
            react_1.default.createElement("div", { className: 'signification__title-row' },
                react_1.default.createElement(Documents_1.default, null),
                react_1.default.createElement("div", { className: 'signification__title-text' }, title)),
            documentInfo && documentInfo,
            finalCardTSX,
            certErrorTSX,
            !isSpoiler && expanderContentTSX,
            isSpoiler &&
                react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(ContentExpander_1.default, { onExpand: function () { return setOpenContent(!isOpenContent); }, expanded: isOpenContent, title: isOpenContent ? 'Скрыть' : "\u041F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C" + (finalStage !== 'reject' ? ' и подписать документ' : '') + " " }, isOpenContent && expanderContentTSX))),
        manualPopupTSX,
        refuseConfirmTSX);
};
exports.default = Signification;
