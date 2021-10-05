"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.classnames = void 0;
var classnames = function () {
    var classes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        classes[_i] = arguments[_i];
    }
    return classes.reduce(function (acc, current) {
        if (!current) {
            return acc;
        }
        if (typeof current === 'string') {
            acc.push(current);
        }
        if (!!current && typeof current === 'object') {
            var classNames = Object.entries(current).reduce(function (acc, _a) {
                var className = _a[0], isActive = _a[1];
                if (isActive) {
                    acc.push(className);
                }
                return acc;
            }, []).join(' ');
            acc.push(classNames);
        }
        return acc;
    }, []).join(' ');
};
exports.classnames = classnames;
