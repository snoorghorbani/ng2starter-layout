"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FailedLoginReportModel;
(function (FailedLoginReportModel) {
    var Request = /** @class */ (function () {
        function Request(initValue) {
            var _this = this;
            Object.keys(initValue).forEach(function (key) { return _this[key] = initValue[key]; });
        }
        Request.prototype.getRequestBody = function () {
            return {};
        };
        Object.defineProperty(Request, "formGroup", {
            get: function () {
                return;
            },
            enumerable: true,
            configurable: true
        });
        return Request;
    }());
    FailedLoginReportModel.Request = Request;
    var Response = /** @class */ (function () {
        function Response() {
            this.data = [];
        }
        return Response;
    }());
    FailedLoginReportModel.Response = Response;
})(FailedLoginReportModel = exports.FailedLoginReportModel || (exports.FailedLoginReportModel = {}));
//# sourceMappingURL=failed-login-report.model.js.map