"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.download = void 0;
var download = function (file, name) {
    // @ts-ignore
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        var tmp = (file.base64 || '').split(';base64,');
        var byteCharacters = atob(tmp[1]);
        var byteNumbers = new Array(byteCharacters.length);
        for (var i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        var byteArray = new Uint8Array(byteNumbers);
        var blob = new Blob([byteArray], { type: tmp[0].split(':')[1] });
        // @ts-ignore
        window.navigator.msSaveOrOpenBlob(blob, name);
    }
    else {
        var a = document.createElement('a');
        a.href = file.base64 || '';
        a.download = name;
        a.click();
    }
};
exports.download = download;
