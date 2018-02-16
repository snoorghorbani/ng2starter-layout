"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var store_1 = require("@ngrx/store");
var models_1 = require("../models");
exports.UserModel = models_1.UserModel;
exports.ProfileViewModel = models_1.ProfileViewModel;
var userReducer = require("../dashboard/user.reducer");
var resetPasswordRequestReducer = require("../reset-password/reset-password-request.reducer");
var changePassword = require("../change-password/change-password.reducer");
var editProfileReducer = require("../profile-edit/edit-profile.reducer");
var searchReducer = require("../search-account/search.reducer");
exports.UserReducers = {
    user: userReducer.userReducer,
    resetPasswordRequest: resetPasswordRequestReducer.reducer,
    changePassword: changePassword.reducer,
    searchView: searchReducer.reducer,
    editProfile: editProfileReducer.reducer
};
//#region selectors
exports.selectFeatureState = store_1.createFeatureSelector('user');
exports.getUserInforamtionStatus = store_1.createSelector(exports.selectFeatureState, function (state) { return state.user.loaded; });
exports.isSignedIn = store_1.createSelector(exports.selectFeatureState, function (state) { return state.user.loaded; });
exports.selectResetPasswordRequestState = store_1.createSelector(exports.selectFeatureState, function (state) { return state.resetPasswordRequest; });
exports.getNumberOfRequeseted = store_1.createSelector(exports.selectResetPasswordRequestState, resetPasswordRequestReducer.getNumberOfRequeseted);
exports.getResetPasswordRequestStatus = store_1.createSelector(exports.selectResetPasswordRequestState, resetPasswordRequestReducer.getStatus);
//#region user
exports.selectUserInformaionState = store_1.createSelector(exports.selectFeatureState, function (state) { return state.user; });
exports.getUser = store_1.createSelector(exports.selectUserInformaionState, userReducer.getUser);
//#endregion
//#region search
exports.selectSearchState = store_1.createSelector(exports.selectFeatureState, function (state) { return state.searchView; });
exports.getSearchStatus = store_1.createSelector(exports.selectSearchState, searchReducer.getStatus);
exports.getUserInfo = store_1.createSelector(exports.selectSearchState, searchReducer.getUserInfo);
//#endregion
//# sourceMappingURL=feature.reducers.js.map