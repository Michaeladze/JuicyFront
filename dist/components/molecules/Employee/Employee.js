"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("./Employee.scss");
var Avatar_1 = __importDefault(require("../../atoms/Avatar"));
var Tooltip_1 = __importDefault(require("../../atoms/Tooltip"));
var Info_1 = __importDefault(require("../../../assets/icons/Info"));
var Structure_1 = __importDefault(require("../Structure"));
var Employee = function (_a) {
    // -------------------------------------------------------------------------------------------------------------------
    var user = _a.user, _b = _a.position, position = _b === void 0 ? 'right' : _b, _c = _a.portal, portal = _c === void 0 ? false : _c;
    var shortDepartment = user.department.slice(0, 60);
    var department = shortDepartment.length < user.department.length ? shortDepartment + '...' : shortDepartment;
    return (react_1.default.createElement("div", { className: 'rf-employee' },
        react_1.default.createElement(Avatar_1.default, { photo: user.photo, fullName: user.fullName, size: 'xxl' }),
        react_1.default.createElement("div", { className: 'rf-employee__details' },
            react_1.default.createElement("div", { className: 'rf-employee__name-container' },
                react_1.default.createElement("h3", { className: 'rf-employee__name' }, user.fullName),
                user.departmentsPath && (react_1.default.createElement(Tooltip_1.default, { position: position, portal: portal },
                    react_1.default.createElement(Info_1.default, { className: 'rf-employee__department-icon' }),
                    react_1.default.createElement(Structure_1.default, { departmentsPath: user.departmentsPath })))),
            react_1.default.createElement("div", { className: 'rf-employee__info' },
                " ",
                user.position,
                " "),
            react_1.default.createElement("div", { className: 'rf-employee__info rf-employee__info-department' }, department),
            react_1.default.createElement("div", { className: 'rf-employee__info rf-employee__info-id' },
                "TH: ",
                user.id))));
};
exports.default = Employee;
