"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = require("@angular/forms");
var infra_1 = require("@soushians/infra");
var ResetPasswordModel;
(function (ResetPasswordModel) {
    var Request = /** @class */ (function () {
        function Request(initValue) {
            var _this = this;
            Object.keys(initValue).forEach(function (key) { return _this[key] = initValue[key]; });
        }
        Request.prototype.getRequestBody = function () {
            return {
                Password: this.Password,
            };
        };
        Object.defineProperty(Request, "formGroup", {
            get: function () {
                return new forms_1.FormGroup({
                    Token: new forms_1.FormControl(null, [forms_1.Validators.required]),
                    Password: new forms_1.FormControl('', [forms_1.Validators.minLength(8), forms_1.Validators.required]),
                    Confirm: new forms_1.FormControl(null, [forms_1.Validators.required, infra_1.MatchValidator('Password')])
                });
            },
            enumerable: true,
            configurable: true
        });
        return Request;
    }());
    ResetPasswordModel.Request = Request;
    var Response = /** @class */ (function () {
        function Response() {
        }
        return Response;
    }());
    ResetPasswordModel.Response = Response;
})(ResetPasswordModel = exports.ResetPasswordModel || (exports.ResetPasswordModel = {}));
//# sourceMappingURL=reset-password.model.js.map