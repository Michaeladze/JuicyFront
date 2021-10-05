"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
/**
 * Данный хук анологичен хуку `useEffect`, но пропускает первый вызов коллбека.
 */
var useUpdateEffect = function (effect, deps) {
    var isMounted = react_1.useRef(false);
    react_1.useEffect(function () {
        if (isMounted.current) {
            return effect();
        }
        isMounted.current = true;
    }, deps);
};
exports.default = useUpdateEffect;
