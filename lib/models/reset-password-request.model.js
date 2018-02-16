"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = require("@angular/forms");
var ResetPasswordRequestModel;
(function (ResetPasswordRequestModel) {
    var Request = /** @class */ (function () {
        function Request(initValue) {
            var _this = this;
            Object.keys(initValue).forEach(function (key) { return _this[key] = initValue[key]; });
        }
        Request.prototype.getRequestBody = function () {
            return {
                Username: this.Username,
                Token: this.Token,
                Captcha: this.Captcha
            };
        };
        Object.defineProperty(Request, "formGroup", {
            get: function () {
                return new forms_1.FormGroup({
                    Username: new forms_1.FormControl('', [forms_1.Validators.minLength(8), forms_1.Validators.required]),
                    Captcha: new forms_1.FormControl(null, [forms_1.Validators.required]),
                    Token: new forms_1.FormControl(null, [forms_1.Validators.required]),
                    Type: new forms_1.FormControl('sms'),
                });
            },
            enumerable: true,
            configurable: true
        });
        return Request;
    }());
    ResetPasswordRequestModel.Request = Request;
    var Response = /** @class */ (function () {
        function Response() {
        }
        return Response;
    }());
    ResetPasswordRequestModel.Response = Response;
})(ResetPasswordRequestModel = exports.ResetPasswordRequestModel || (exports.ResetPasswordRequestModel = {}));
//# sourceMappingURL=reset-password-request.model.js.map