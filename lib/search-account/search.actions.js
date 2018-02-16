"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SearchActionTypes;
(function (SearchActionTypes) {
    SearchActionTypes["SEARCH"] = "[USER][SEARCH] SEARCH";
    SearchActionTypes["SEARCH_START"] = "[USER][SEARCH] SEARCH_START";
    SearchActionTypes["SEARCH_SUCCEED"] = "[USER][SEARCH] SEARCH_SUCCEED";
    SearchActionTypes["SEARCH_FAILED"] = "[USER][SEARCH] SEARCH_FAILED";
    SearchActionTypes["CLEAR_SEARCHED_USER"] = "[USER][SEARCH] CLEAR_SEARCHED_USER";
})(SearchActionTypes = exports.SearchActionTypes || (exports.SearchActionTypes = {}));
var Search = /** @class */ (function () {
    function Search(payload) {
        this.payload = payload;
        this.type = SearchActionTypes.SEARCH;
    }
    return Search;
}());
exports.Search = Search;
var SearchStartAction = /** @class */ (function () {
    function SearchStartAction(payload) {
        this.payload = payload;
        this.type = SearchActionTypes.SEARCH_START;
    }
    return SearchStartAction;
}());
exports.SearchStartAction = SearchStartAction;
var SearchSucceed = /** @class */ (function () {
    function SearchSucceed(payload) {
        this.payload = payload;
        this.type = SearchActionTypes.SEARCH_SUCCEED;
    }
    return SearchSucceed;
}());
exports.SearchSucceed = SearchSucceed;
var SearchFailed = /** @class */ (function () {
    function SearchFailed() {
        this.type = SearchActionTypes.SEARCH_FAILED;
    }
    return SearchFailed;
}());
exports.SearchFailed = SearchFailed;
var ClearSearchedUser = /** @class */ (function () {
    function ClearSearchedUser() {
        this.type = SearchActionTypes.CLEAR_SEARCHED_USER;
    }
    return ClearSearchedUser;
}());
exports.ClearSearchedUser = ClearSearchedUser;
//# sourceMappingURL=search.actions.js.map