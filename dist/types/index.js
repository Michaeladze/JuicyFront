"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.variants = exports.variantsClassic = exports.isCustomOption = void 0;
function isCustomOption(option) {
    return option.__isNew__;
}
exports.isCustomOption = isCustomOption;
exports.variantsClassic = [
    'default',
    'green',
    'yellow',
    'red'
];
exports.variants = [
    'default',
    'blue',
    'lightBlue',
    'turquoise',
    'green',
    'yellow',
    'red',
    'magenta',
    'purple',
    'violet'
];
