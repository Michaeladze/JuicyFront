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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
require("./FindUsers.scss");
// import '../../../styles/vendor/Swiper.scss';
var large_search_icon_1 = __importDefault(require("./large-search-icon"));
// import { SwiperSlide } from 'swiper/react';
// import SwiperCore, { Navigation } from 'swiper';
var axios_1 = __importDefault(require("axios"));
var index_1 = require("../../../index");
var Structure_1 = __importDefault(require("../../molecules/Structure"));
var Checkbox_1 = __importDefault(require("../../atoms/Checkbox/Checkbox"));
var FindUsers = function (_a) {
    var onClose = _a.onClose, _b = _a.users, users = _b === void 0 ? [] : _b, disableSelected = _a.disableSelected, getUsers = _a.getUsers, _c = _a.multiSelect, multiSelect = _c === void 0 ? true : _c, _d = _a.subtitle, subtitle = _d === void 0 ? 'Поиск осуществляется по выбранной компании и в рамках одного подразделения.' : _d, _e = _a.host, host = _e === void 0 ? '' : _e, _f = _a.headers, headers = _f === void 0 ? {} : _f, AxiosInstance = _a.AxiosInstance, _g = _a.showAll, showAll = _g === void 0 ? true : _g, _h = _a.searchOption, searchOption = _h === void 0 ? [] : _h;
    var inputRef = react_1.useRef(null);
    var dropdownRef = react_1.useRef(null);
    var _j = react_1.useState(showAll ? 'all' : 'team'), activeFilter = _j[0], setActiveFilter = _j[1];
    react_1.useEffect(function () {
        setActiveFilter(showAll ? 'all' : 'team');
    }, [showAll]);
    /** Список выбранных людей */
    var _k = react_1.useState(users), selectedPeople = _k[0], setSelectedPeople = _k[1];
    var selectedPeopleMap = selectedPeople.reduce(function (a, u) {
        a[u.id] = true;
        return a;
    }, {});
    var _l = react_1.useState([]), newPeople = _l[0], setNewPeople = _l[1];
    var newPeopleMap = newPeople.reduce(function (a, u) {
        a[u.id] = true;
        return a;
    }, {});
    var disablePeopleMap = react_1.useRef(selectedPeopleMap);
    /** Строка поиска */
    var _m = react_1.useState(''), searchString = _m[0], setSearchString = _m[1];
    // -------------------------------------------------------------------------------------------------------------------
    var _o = react_1.useState(false), lazyPreloader = _o[0], setLazyPreloader = _o[1];
    var _p = react_1.useState(true), loaded = _p[0], setLoaded = _p[1];
    var _q = react_1.useState([]), searchResults = _q[0], setSearchResults = _q[1];
    var cancel = react_1.useRef(undefined);
    var LIMIT = 10;
    var skip = react_1.useRef(0);
    var cancelRequest = function () {
        if (cancel.current !== undefined) {
            cancel.current();
        }
    };
    var onSearch = function (query, lazy) {
        if (lazy === void 0) { lazy = false; }
        if (activeFilter === 'all' && query.length < 3) {
            return;
        }
        if (lazy && lazyPreloader) {
            return;
        }
        if (!lazy) {
            setLoaded(false);
        }
        var teamUri = 'sap/opu/odata4/sap/zhrbc/default/sap/zhrbc_0720_react_utils/0001/ITeamSearch?$expand=departmentsPath';
        var queryWithOutSpecSymbols = '';
        for (var i = 0; i < query.length; i++) {
            if (!isNaN(+query[i]) || query[i].toLowerCase() !== query[i].toUpperCase()) {
                queryWithOutSpecSymbols += query[i];
            }
            else {
                queryWithOutSpecSymbols += ' ';
            }
        }
        if (query) {
            teamUri += "&$search=" + encodeURIComponent(queryWithOutSpecSymbols);
        }
        var searchOptionStr = '';
        if (searchOption && searchOption.length > 0) {
            searchOptionStr = '$filter=';
        }
        searchOption === null || searchOption === void 0 ? void 0 : searchOption.forEach(function (n, i) {
            searchOptionStr += i === 0 ? "searchOption eq '" + n + "'" : "and searchOption eq '" + n + "'";
        });
        var uri = "sap/opu/odata4/sap/zhrbc/default/sap/zhrbc_0720_react_utils/0001/IUserSearch?$search=" + encodeURIComponent(queryWithOutSpecSymbols) + "&$expand=departmentsPath&$skip=" + skip.current + "&$top=" + LIMIT + "&" + searchOptionStr;
        var url = "" + host + (activeFilter === 'all' ? uri : teamUri);
        var axios = AxiosInstance || axios_1.default;
        cancelRequest();
        axios.get(url, {
            cancelToken: new axios.CancelToken(function (c) {
                cancel.current = c;
            }),
            headers: headers
        })
            .then(function (_a) {
            var data = _a.data;
            skip.current += LIMIT;
            if (lazy) {
                setSearchResults(function (list) { return __spreadArray(__spreadArray([], list), data.value); });
                setLazyPreloader(false);
            }
            else {
                setSearchResults(data.value);
                setLoaded(true);
            }
        })
            .catch(function (_error) {
            setLazyPreloader(false);
            setLoaded(true);
        });
    };
    var onLazyScroll = function () {
        if (!dropdownRef.current || searchString.length < 3) {
            return;
        }
        var scrollInPercent = Math.round((100 * dropdownRef.current.scrollTop) /
            (dropdownRef.current.scrollHeight - dropdownRef.current.offsetHeight));
        if (scrollInPercent > 90) {
            setLazyPreloader(true);
            onSearch(searchString, true);
        }
    };
    react_1.useEffect(function () {
        return function () {
            cancelRequest();
        };
    }, []);
    var onClear = function () {
        setSearchString('');
        cancelRequest();
    };
    react_1.useEffect(function () {
        skip.current = 0;
        onSearch(searchString);
    }, [searchString]);
    // -------------------------------------------------------------------------------------------------------------------
    var onSubmit = function () {
        getUsers && getUsers(selectedPeople);
        onClose && onClose();
    };
    var inputHandle = function (data) {
        var value = data.target.value;
        setSearchString(value);
    };
    var addHandle = function (item) {
        if (multiSelect) {
            setSelectedPeople(__spreadArray(__spreadArray([], selectedPeople), [item]));
            if (!newPeopleMap[item.id]) {
                setNewPeople(__spreadArray(__spreadArray([], newPeople), [item]));
            }
        }
        else {
            setSelectedPeople([item]);
        }
    };
    var removeHandle = function (item) {
        if (multiSelect) {
            setSelectedPeople(selectedPeople.filter(function (data) { return item.id !== data.id; }));
            setNewPeople(newPeople.filter(function (data) { return item.id !== data.id; }));
        }
        else {
            setSelectedPeople([]);
        }
    };
    // --------------------------------------------------------------------------------------------------------------------
    var onChange = function (e, item) {
        if (e.target.checked) {
            addHandle(item);
        }
        else {
            removeHandle(item);
        }
    };
    // --------------------------------------------------------------------------------------------------------------------
    /** Список найденных сотрудников */
    var listUsers = searchResults.map(function (item) {
        var shortPosition = item.department.slice(0, 100);
        var isShorter = item.department.length > shortPosition.length;
        var label = (react_1.default.createElement("div", { className: 'list-users__user' },
            react_1.default.createElement(index_1.Avatar, { photo: item.photo, size: 'm', fullName: item.firstName + " " + item.lastName }),
            react_1.default.createElement("div", { className: 'list-users__texts-wrapper' },
                react_1.default.createElement("h3", { className: 'list-users__user-name' }, item.lastName + " " + item.firstName + " " + item.middleName,
                    item.id && react_1.default.createElement("span", { className: 'list-users__user-id' },
                        "(",
                        item.id,
                        ")"),
                    item.departmentsPath && (react_1.default.createElement(index_1.Tooltip, { portal: true },
                        react_1.default.createElement(index_1.Info, { className: 'list-users__user-info' }),
                        react_1.default.createElement(Structure_1.default, { departmentsPath: item.departmentsPath })))),
                react_1.default.createElement("h5", { className: 'list-users__user-position', title: isShorter ? item.department : undefined }, isShorter ? shortPosition + "..." : shortPosition))));
        return (react_1.default.createElement("div", { className: 'list-users__wrapper', key: item.id },
            react_1.default.createElement(Checkbox_1.default, { label: label, align: 'center', value: item.id, disabled: disableSelected && disablePeopleMap.current[item.id], checked: selectedPeopleMap[item.id] || false, onChange: function (e) { return onChange(e, item); } })));
    });
    // -------------------------------------------------------------------------------------------------------------------
    var placeholder = function (placeholder) { return (react_1.default.createElement("div", { className: 'search-results__message' },
        react_1.default.createElement(large_search_icon_1.default, { className: 'search-results__message-icon' }),
        react_1.default.createElement("p", { className: 'search-results__message-text' }, placeholder))); };
    // -------------------------------------------------------------------------------------------------------------------
    // /** Выбранные из списка пользователи */
    // const listSelectedUsers: ReactNode = selectedPeople.map((item) => (
    //   <SwiperSlide className='selected_swiper-slide' key={ item.id }>
    //     <Avatar photo={ item.photo } size='m' fullName={ `${item.firstName} ${item.lastName}` }/>
    //     <h5 className='selected__text'>{ `${item.lastName}` }</h5>
    //     <h5 className='selected__text'>{ `${item.firstName}` }</h5>
    //     { !(disableSelected && disablePeopleMap.current[item.id]) && (
    //       <Button className='selected__button' onClick={ () => removeHandle(item) } buttonType='icon'>
    //         <Close/>
    //       </Button>
    //     ) }
    //   </SwiperSlide>
    // ));
    // -------------------------------------------------------------------------------------------------------------------
    /** Автофокус */
    react_1.useEffect(function () {
        setTimeout(function () {
            if (inputRef.current) {
                var input = inputRef.current.querySelector('.rf-input__field');
                if (input) {
                    input.focus();
                }
            }
        });
    }, []);
    // -------------------------------------------------------------------------------------------------------------------
    var disabled = multiSelect ? newPeople.length === 0 : selectedPeople.length === 0;
    // -------------------------------------------------------------------------------------------------------------------
    react_1.useEffect(function () {
        skip.current = 0;
        cancelRequest();
        onSearch(searchString);
    }, [activeFilter]);
    var tabs = [
        {
            label: 'Все',
            handler: function () {
                setActiveFilter('all');
            }
        },
        {
            label: 'Моя команда',
            handler: function () {
                setActiveFilter('team');
            }
        }
    ];
    return (react_1.default.createElement("div", { className: 'find-users__wrapper' },
        react_1.default.createElement("h4", { className: 'find-users__title' }, "\u041F\u043E\u0438\u0441\u043A \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u043E\u0432"),
        react_1.default.createElement("p", { className: 'find-users__notice' }, subtitle),
        react_1.default.createElement("div", { className: 'find-users__input-wrapper', ref: inputRef },
            react_1.default.createElement(index_1.Search, { onKeyUp: inputHandle, autoFocus: true, onClear: onClear })),
        react_1.default.createElement("div", { className: 'find-users__filters' },
            react_1.default.createElement(index_1.Tabs, { list: tabs })),
        react_1.default.createElement("div", { className: 'find-users__list-wrapper', ref: dropdownRef, onScroll: onLazyScroll },
            loaded ? (listUsers.length > 0 ? (listUsers) : (searchString === '' ? placeholder('Начните поиск') : placeholder('Нет результатов для отображения. Измените запрос.'))) : react_1.default.createElement(index_1.Preloader, null),
            lazyPreloader && (react_1.default.createElement("div", { className: 'find-users__list-lazy-preloader' },
                react_1.default.createElement(index_1.Preloader, { size: 's' })))),
        react_1.default.createElement("footer", { className: 'find-users__footer' },
            react_1.default.createElement("div", { className: 'find-users__footer-button' },
                react_1.default.createElement(index_1.Button, { disabled: disabled, onClick: onSubmit }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C")),
            react_1.default.createElement("div", { className: 'find-users__footer-button' },
                react_1.default.createElement(index_1.Button, { onClick: onClose, buttonType: 'light' }, "\u041E\u0442\u043C\u0435\u043D\u0430")))));
};
exports.default = FindUsers;
