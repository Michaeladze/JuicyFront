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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
require("./PDFViewer.scss");
// @ts-ignore
var pdfjsLib = __importStar(require("pdfjs-dist/build/pdf"));
// @ts-ignore
var pdf_worker_entry_1 = __importDefault(require("pdfjs-dist/build/pdf.worker.entry"));
var Download_1 = __importDefault(require("../../../assets/icons/Download"));
var download_1 = require("../../../utils/download");
var ButtonPages_1 = __importDefault(require("../../atoms/ButtonPages/ButtonPages"));
var index_1 = require("../../../index");
var react_pdf_1 = require("react-pdf");
var OpenNewTab_1 = __importDefault(require("../../../assets/icons/OpenNewTab"));
var PDFViewer = function (_a) {
    var file = _a.file, _b = _a.url, url = _b === void 0 ? '' : _b;
    /** Всего страниц в документе */
    var _c = react_1.useState(1), numPages = _c[0], setNumPages = _c[1];
    /** Текущая страница */
    var _d = react_1.useState(1), currentPage = _d[0], setCurrentPage = _d[1];
    var _e = react_1.useState(0), pageWidth = _e[0], setPageWidth = _e[1];
    var pdfWrapper = react_1.useRef(null);
    react_1.useEffect(function () {
        pdfjsLib.GlobalWorkerOptions.workerSrc = pdf_worker_entry_1.default;
    }, []);
    react_1.useEffect(function () {
        setNumPages(1);
        setCurrentPage(1);
    }, [file]);
    var onDocumentLoadSuccess = react_1.useCallback(function (_a) {
        var numPages = _a.numPages;
        setNumPages(numPages);
    }, []);
    // -------------------------------------------------------------------------------------------------------------------
    /** Переключение страницы */
    var onPageChange = react_1.useCallback(function (page) {
        setCurrentPage(page);
    }, []);
    /** Определение ширины страницы */
    var calculatePageWidth = function (page) {
        var _a;
        if (pdfWrapper.current) {
            var blockWidth = (_a = pdfWrapper.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect().width;
            var pageWidth_1 = page.getViewport({ scale: 1 }).width;
            setPageWidth(Math.min(pageWidth_1, blockWidth - 16));
        }
    };
    var onClickDownload = function () {
        download_1.download(file, file.fileName);
    };
    var onClickOpen = function () {
        window.open(url, '_blank');
    };
    // -------------------------------------------------------------------------------------------------------------------
    return (react_1.default.createElement(react_1.default.Fragment, null, file &&
        react_1.default.createElement("div", { ref: pdfWrapper, className: 'pdf-document' },
            react_1.default.createElement(react_pdf_1.Document, { file: file.base64, onLoadSuccess: onDocumentLoadSuccess },
                react_1.default.createElement(react_pdf_1.Page, { width: pageWidth, pageNumber: currentPage, onLoadSuccess: calculatePageWidth })),
            react_1.default.createElement("div", { className: 'pdf-document__download' },
                !!url &&
                    react_1.default.createElement("div", { className: 'pdf-document__open' },
                        react_1.default.createElement(index_1.Button, { buttonType: 'white', size: 's', onClick: onClickOpen, endAdornment: react_1.default.createElement(OpenNewTab_1.default, { className: 'pdf-document__icon' }) }, "\u041F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C")),
                react_1.default.createElement(index_1.Button, { "data-testid": 'pdf-download-btn', buttonType: 'white', size: 's', onClick: onClickDownload, endAdornment: react_1.default.createElement(Download_1.default, { className: 'pdf-document__icon' }) }, url ? '' : 'Скачать')),
            react_1.default.createElement("div", { className: 'pdf-document__pager' },
                react_1.default.createElement(ButtonPages_1.default, { max: numPages, onChange: onPageChange })))));
};
exports.default = PDFViewer;
