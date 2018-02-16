"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = require("@angular/forms");
var EditProfile_ApiModel;
(function (EditProfile_ApiModel) {
    var Request = /** @class */ (function () {
        function Request(initValue) {
            if (initValue === void 0) { initValue = {}; }
            var _this = this;
            Object.keys(initValue).forEach(function (key) { return _this[key] = initValue[key]; });
        }
        Request.prototype.getRequestBody = function () {
            return this;
        };
        Object.defineProperty(Request, "formGroup", {
            get: function () {
                return new forms_1.FormGroup({
                    Email: new forms_1.FormControl(null, [forms_1.Validators.required]),
                    Roles: new forms_1.FormControl(null, [forms_1.Validators.required]),
                    Groups: new forms_1.FormControl(null, [forms_1.Validators.required]),
                });
            },
            enumerable: true,
            configurable: true
        });
        return Request;
    }());
    EditProfile_ApiModel.Request = Request;
    var Response = /** @class */ (function () {
        function Response(initValue) {
            if (initValue === void 0) { initValue = {}; }
            var _this = this;
            Object.keys(initValue).forEach(function (key) { return _this[key] = initValue[key]; });
        }
        Response.prototype.extractData = function () {
            return this.Result.User;
        };
        return Response;
    }());
    EditProfile_ApiModel.Response = Response;
})(EditProfile_ApiModel = exports.EditProfile_ApiModel || (exports.EditProfile_ApiModel = {}));
//# sourceMappingURL=profile-edit.model.js.map