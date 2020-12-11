(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "2hxB":
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
}


/***/ }),

/***/ "6uu6":
/*!*****************************************!*\
  !*** ./src/app/service/auth.service.ts ***!
  \*****************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/user */ "2hxB");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");







const AUTH_API = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiEndpoint + 'oauth/token';
// const credentialsApp = btoa(environment.credentialsAppUser + ':' + environment.credentialsAppPwd);
const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
    'Authorization': `Bearer ${localStorage.getItem('token')}`
});
class AuthService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
    }
    get user() {
        if (this._user != null) {
            return this._user;
        }
        else if (this._user == null && sessionStorage.getItem('user') != null) {
            this._user = JSON.parse(sessionStorage.getItem('user'));
            return this._user;
        }
        return new _models_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
    }
    get token() {
        if (this._token != null) {
            return this._token;
        }
        else if (this._token == null && sessionStorage.getItem('token') != null) {
            this._token = sessionStorage.getItem('token');
            return this._token;
        }
        return null;
    }
    login(user) {
        const data = {
            username: user.email,
            password: user.password,
            grant_type: 'password',
            client_id: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].credentialsAppUser,
            client_secret: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].credentialsAppPassword
        };
        return this.http.post(AUTH_API, data);
    }
    //Users
    registerUser(addUser) {
        const data = {
            name: addUser.name,
            email: addUser.email,
            password: addUser.password
        };
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiEndpoint + 'users/create', data);
    }
    updateUser(addUser) {
        const data = {
            name: addUser.name,
            email: addUser.email,
            role: addUser.role,
            password: addUser.password
        };
        return this.http.patch(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiEndpoint}users/${addUser.id}`, data);
    }
    //TypeUpload
    registerTypeUpload(addTypeUpload) {
        const data = {
            name: addTypeUpload.name,
            description: addTypeUpload.description,
            min_upload: addTypeUpload.min_upload
        };
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiEndpoint + 'type_uploads/create', data);
    }
    updateTypeupload(addTypeUpload) {
        const data = {
            name: addTypeUpload.name,
            description: addTypeUpload.description,
            min_upload: addTypeUpload.min_upload
        };
        return this.http.patch(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiEndpoint + 'type_uploads/' + addTypeUpload.id, data);
    }
    //TypeUpload
    registerOrder(addOrder) {
        const data = {
            companyName: addOrder.companyName,
            referenceName: addOrder.referenceName,
            projectName: addOrder.projectName,
            address: addOrder.address,
            zipcode: addOrder.zipcode,
            city: addOrder.city,
            province: addOrder.province,
            country: addOrder.country,
            checklist: addOrder.checklist,
            comments: addOrder.comments,
            contributor: addOrder.contributor
        };
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiEndpoint + 'order/create', data);
    }
    updateOrder(addOrder) {
        const data = {
            companyName: addOrder.companyName,
            referenceName: addOrder.referenceName,
            projectName: addOrder.projectName,
            address: addOrder.address,
            zipcode: addOrder.zipcode,
            city: addOrder.city,
            province: addOrder.province,
            country: addOrder.country,
            checklist: addOrder.checklist,
            comments: addOrder.comments,
            contributor: addOrder.contributor
        };
        return this.http.patch(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiEndpoint + 'order/' + addOrder.id, data);
    }
    logout() {
        this._token = null;
        this._user = null;
        sessionStorage.clear();
        sessionStorage.removeItem('user');
        sessionStorage.removeItem('token');
        this.router.navigate(['/auth/sign-in']);
    }
    saveUser(email) {
        this._user = new _models_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
        this._user.email = email;
        sessionStorage.setItem('user', JSON.stringify(this._user));
    }
    saveToken(accessToken) {
        this._token = accessToken;
        console.log(this._token);
        sessionStorage.setItem('token', accessToken);
    }
    getTokenData(accessToken) {
        let rtn = (accessToken != null) ? JSON.parse(atob(accessToken.split(".")[1])) : null;
        return rtn;
    }
    isAuthenticated() {
        let payload = this.getTokenData(this.token);
        let rtn = (payload != null && payload.user_name && payload.user_name.length > 0) ? true : false;
        return rtn;
    }
    headerToken() {
        let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Authorization': `Bearer ${localStorage.getItem('token')}` });
        return header;
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common.js.map