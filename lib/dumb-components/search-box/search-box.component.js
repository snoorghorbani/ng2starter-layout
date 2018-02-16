"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SearchBoxComponent = /** @class */ (function () {
    function SearchBoxComponent() {
    }
    SearchBoxComponent.prototype.ngOnInit = function () {
    };
    SearchBoxComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'app-search-box',
                    template: "<div class=\"search-box\">   <!--<td-search-box class=\"search-box-container\" backIcon=\"arrow_back\" placeholder=\"\u062C\u0633\u062A\u062C\u0648\" [showUnderline]=\"false\" [debounce]=\"500\" [alwaysVisible]=\"false\"                  (searchDebounce)=\"searchInputTerm = $event\" (search)=\"searchInputTerm = $event\" (clear)=\"searchInputTerm = ''\">   </td-search-box>--> </div>",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    SearchBoxComponent.ctorParameters = function () { return []; };
    return SearchBoxComponent;
}());
exports.SearchBoxComponent = SearchBoxComponent;
//# sourceMappingURL=search-box.component.js.map