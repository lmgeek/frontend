(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-orders-orders-module"],{

/***/ "0XZ2":
/*!*****************************************************!*\
  !*** ./src/app/pages/orders/list/list.component.ts ***!
  \*****************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/auth.service */ "6uu6");
/* harmony import */ var src_app_plugins_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/plugins.service */ "yq7U");
/* harmony import */ var _components_sofbox_loaders_loader1_loader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/sofbox/loaders/loader1/loader.component */ "Aq+l");
/* harmony import */ var _components_sofbox_side_bars_side_bar1_side_bar1_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/sofbox/side-bars/side-bar1/side-bar1.component */ "sH7z");
/* harmony import */ var _components_sofbox_nav_bars_nav_bar1_nav_bar1_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/sofbox/nav-bars/nav-bar1/nav-bar1.component */ "AL1Q");
/* harmony import */ var _components_sofbox_cards_iq_card_iq_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/sofbox/cards/iq-card/iq-card.component */ "LzsS");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");













function ListComponent_tr_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r1.companyName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r1.referenceName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r1.projectName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r1.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r1.country);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r1.contributor);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("href", "/orders/update/", order_r1.id, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("href", "/orders/update/", order_r1.id, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
class ListComponent {
    constructor(http, router, authservice, plugins) {
        this.http = http;
        this.router = router;
        this.authservice = authservice;
        this.plugins = plugins;
    }
    ngOnInit() {
        // Init all plugins...
        const current = this;
        setTimeout(() => {
            current.plugins.index();
            current.plugins.dashboardIndex();
        }, 200);
        if (!this.isAuthenticated()) {
            this.router.navigate(['/auth/sign-in']);
        }
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Authorization': `Bearer ${localStorage.getItem('token')}` });
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndpoint + 'orders', { headers: headers }).subscribe(result => {
            console.log(result);
            this.orders = result;
        });
    }
    isAuthenticated() {
        if (sessionStorage.getItem('token') === undefined) {
            return false;
        }
        else {
            return true;
        }
    }
}
ListComponent.ɵfac = function ListComponent_Factory(t) { return new (t || ListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_plugins_service__WEBPACK_IMPORTED_MODULE_5__["PluginsService"])); };
ListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ListComponent, selectors: [["app-list"]], decls: 52, vars: 1, consts: [[1, "wrapper"], ["id", "content-page", 1, "content-page"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12", "col-lg-12"], ["card-header", "", 1, "iq-header-title"], [1, "card-title"], ["id", "table", 1, "table-editable"], [1, "d-block", "float-left", "mb-3", "mr-2"], ["role", "group", "aria-label", "Basic example", 1, "btn-group", "btn-group-md"], ["type", "button", 1, "btn", "btn-primary"], [1, "ri-image-add-line"], [1, "ri-image-add-fill"], ["aria-hidden", "true", 1, "fa", "fa-file-image-o"], [1, "ri-file-excel-2-line"], [1, "table-add", "float-right", "mb-3", "mr-2"], ["type", "button", 1, "btn", "btn-primary", "mb-3"], [1, "fa", "fa-plus-square", "fa-lg"], [1, "table", "table-bordered", "table-responsive-md", "table-striped", "text-center"], [1, "text-center"], [4, "ngFor", "ngForOf"], ["contenteditable", "true", 1, "pt-3-half"], [1, "pt-3-half"], [1, "table-up"], ["href", "#!", 1, "indigo-text"], ["aria-hidden", "true", 1, "fa", "fa-long-arrow-up"], [1, "table-down"], ["aria-hidden", "true", 1, "fa", "fa-long-arrow-down"], [1, "table-add"], ["type", "button", 1, "btn", "btn-primary", "btn-rounded", "btn-sm", "my-0", 3, "href"], [1, "fa", "fa-eye"], [1, "table-editable"], ["type", "button", 1, "btn", "btn-success", "btn-rounded", "btn-sm", "my-0", 3, "href"], [1, "fa", "fa-edit"], [1, "table-remove"], ["href", "#", "type", "button", 1, "btn", "btn-danger", "btn-rounded", "btn-sm", "my-0"], [1, "fa", "fa-trash"]], template: function ListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-loader");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-side-bar1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-nav-bar1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "app-iq-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " New ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Export ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Right");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Add New");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "table", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Company Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Reference Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Project Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Contributor");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Sort");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](51, ListComponent_tr_51_Template, 30, 8, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.orders);
    } }, directives: [_components_sofbox_loaders_loader1_loader_component__WEBPACK_IMPORTED_MODULE_6__["LoaderComponent"], _components_sofbox_side_bars_side_bar1_side_bar1_component__WEBPACK_IMPORTED_MODULE_7__["SideBar1Component"], _components_sofbox_nav_bars_nav_bar1_nav_bar1_component__WEBPACK_IMPORTED_MODULE_8__["NavBar1Component"], _components_sofbox_cards_iq_card_iq_card_component__WEBPACK_IMPORTED_MODULE_9__["IqCardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-list',
                templateUrl: './list.component.html',
                styleUrls: []
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: src_app_plugins_service__WEBPACK_IMPORTED_MODULE_5__["PluginsService"] }]; }, null); })();


/***/ }),

/***/ "8veL":
/*!*******************************************************!*\
  !*** ./src/app/pages/orders/orders-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: OrdersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersRoutingModule", function() { return OrdersRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _orders_create_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../orders/create/create.component */ "L9t6");
/* harmony import */ var _orders_list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../orders/list/list.component */ "0XZ2");
/* harmony import */ var _orders_show_show_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../orders/show/show.component */ "ms0C");
/* harmony import */ var _update_update_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./update/update.component */ "W8iq");








const routes = [
    {
        path: 'create',
        component: _orders_create_create_component__WEBPACK_IMPORTED_MODULE_2__["CreateComponent"]
    },
    {
        path: 'show/:id',
        component: _orders_show_show_component__WEBPACK_IMPORTED_MODULE_4__["ShowComponent"]
    },
    {
        path: 'update/:id',
        component: _update_update_component__WEBPACK_IMPORTED_MODULE_5__["UpdateComponent"]
    },
    {
        path: '',
        component: _orders_list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"]
    }
];
class OrdersRoutingModule {
}
OrdersRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: OrdersRoutingModule });
OrdersRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function OrdersRoutingModule_Factory(t) { return new (t || OrdersRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OrdersRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrdersRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "L9t6":
/*!*********************************************************!*\
  !*** ./src/app/pages/orders/create/create.component.ts ***!
  \*********************************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/auth.service */ "6uu6");
/* harmony import */ var src_app_plugins_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/plugins.service */ "yq7U");
/* harmony import */ var _components_sofbox_loaders_loader1_loader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/sofbox/loaders/loader1/loader.component */ "Aq+l");
/* harmony import */ var _components_sofbox_side_bars_side_bar1_side_bar1_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/sofbox/side-bars/side-bar1/side-bar1.component */ "sH7z");
/* harmony import */ var _components_sofbox_nav_bars_nav_bar1_nav_bar1_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/sofbox/nav-bars/nav-bar1/nav-bar1.component */ "AL1Q");
/* harmony import */ var _components_sofbox_cards_iq_card_iq_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/sofbox/cards/iq-card/iq-card.component */ "LzsS");












class CreateComponent {
    constructor(activatedRoute, http, router, fb, authservice, plugins) {
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.router = router;
        this.fb = fb;
        this.authservice = authservice;
        this.plugins = plugins;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            companyName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            referenceName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            projectName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            zipcode: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            province: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            checklist: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            comments: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            contributor: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
        });
    }
    ngOnInit() {
        let id = this.activatedRoute.snapshot.params.id;
        console.log(id); // OUTPUT 1534
        // Init all plugins...
        const current = this;
        setTimeout(() => {
            current.plugins.index();
            current.plugins.dashboardIndex();
        }, 200);
        if (!this.isAuthenticated()) {
            this.router.navigate(['/auth/sign-in']);
        }
    }
    isAuthenticated() {
        if (sessionStorage.getItem('token') === undefined) {
            return false;
        }
        else {
            return true;
        }
    }
    submit() {
        const formData = this.form.getRawValue();
        formData.id = this.activatedRoute.snapshot.params.id;
        console.log(formData);
        this.authservice.registerOrder(formData).subscribe(response => {
            console.log(response);
            this.router.navigate(["/orders"]);
        }, err => {
            console.error(err);
            if (err.status === 200) {
                this.router.navigate(["/orders"]);
            }
        });
    }
}
CreateComponent.ɵfac = function CreateComponent_Factory(t) { return new (t || CreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_plugins_service__WEBPACK_IMPORTED_MODULE_5__["PluginsService"])); };
CreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateComponent, selectors: [["app-create"]], decls: 44, vars: 1, consts: [[1, "wrapper"], ["id", "content-page", 1, "content-page"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12", "col-lg-12"], ["card-header", "", 1, "iq-header-title"], [1, "card-title"], [1, "form", "mt-4", 3, "formGroup", "submit"], [1, "row", 2, "margin-bottom", "10px"], [1, "col"], ["type", "text", "formControlName", "companyName", "placeholder", "Company Name", 1, "form-control"], ["type", "text", "formControlName", "referenceName", "placeholder", "Reference Name", 1, "form-control"], ["type", "text", "formControlName", "projectName", "placeholder", "projectName", 1, "form-control"], ["type", "text", "formControlName", "address", "placeholder", "address", 1, "form-control"], ["type", "text", "formControlName", "zipcode", "placeholder", "zipcode", 1, "form-control"], ["type", "text", "formControlName", "city", "placeholder", "city", 1, "form-control"], ["type", "text", "formControlName", "province", "placeholder", "province", 1, "form-control"], ["type", "text", "formControlName", "country", "placeholder", "country", 1, "form-control"], [1, "custom-control", "custom-switch", "custom-control-inline"], ["type", "checkbox", "id", "checklist", "checked", "", "formControlName", "checklist", 1, "custom-control-input"], ["for", "checklist", 1, "custom-control-label"], ["formControlName", "comments", "id", "", "cols", "10", "rows", "10", "placeholder", "Comments", 1, "form-control"], [1, "btn", "btn-primary"], [1, "btn", "ml-1", "iq-bg-danger"]], template: function CreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loader");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-side-bar1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-nav-bar1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "app-iq-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Create a new order");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function CreateComponent_Template_form_submit_12_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Checklist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "textarea", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
    } }, directives: [_components_sofbox_loaders_loader1_loader_component__WEBPACK_IMPORTED_MODULE_6__["LoaderComponent"], _components_sofbox_side_bars_side_bar1_side_bar1_component__WEBPACK_IMPORTED_MODULE_7__["SideBar1Component"], _components_sofbox_nav_bars_nav_bar1_nav_bar1_component__WEBPACK_IMPORTED_MODULE_8__["NavBar1Component"], _components_sofbox_cards_iq_card_iq_card_component__WEBPACK_IMPORTED_MODULE_9__["IqCardComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-create',
                templateUrl: './create.component.html',
                styleUrls: []
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: src_app_plugins_service__WEBPACK_IMPORTED_MODULE_5__["PluginsService"] }]; }, null); })();


/***/ }),

/***/ "W8iq":
/*!*********************************************************!*\
  !*** ./src/app/pages/orders/update/update.component.ts ***!
  \*********************************************************/
/*! exports provided: UpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateComponent", function() { return UpdateComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/auth.service */ "6uu6");
/* harmony import */ var src_app_plugins_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/plugins.service */ "yq7U");
/* harmony import */ var _components_sofbox_loaders_loader1_loader_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/sofbox/loaders/loader1/loader.component */ "Aq+l");
/* harmony import */ var _components_sofbox_side_bars_side_bar1_side_bar1_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/sofbox/side-bars/side-bar1/side-bar1.component */ "sH7z");
/* harmony import */ var _components_sofbox_nav_bars_nav_bar1_nav_bar1_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/sofbox/nav-bars/nav-bar1/nav-bar1.component */ "AL1Q");
/* harmony import */ var _components_sofbox_cards_iq_card_iq_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/sofbox/cards/iq-card/iq-card.component */ "LzsS");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");















function UpdateComponent_img_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 27);
} if (rf & 2) {
    const url_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", url_r2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function UpdateComponent_img_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 28);
} if (rf & 2) {
    const image_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", image_r3.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
class UpdateComponent {
    constructor(activatedRoute, http, router, fb, authservice, plugins) {
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.router = router;
        this.fb = fb;
        this.authservice = authservice;
        this.plugins = plugins;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            companyName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            referenceName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            projectName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            zipcode: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            province: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            checklist: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            comments: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            contributor: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            file: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            fileSource: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
        this.images = [];
    }
    fileEvent(e) {
        this.filedata = e.target.files[0];
    }
    ngOnInit() {
        let id = this.activatedRoute.snapshot.params.id;
        console.log(id); // OUTPUT 1534
        // Init all plugins...
        const current = this;
        setTimeout(() => {
            current.plugins.index();
            current.plugins.dashboardIndex();
        }, 200);
        if (!this.isAuthenticated()) {
            this.router.navigate(['/auth/sign-in']);
        }
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Authorization': `Bearer ${localStorage.getItem('token')}` });
        this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiEndpoint}orders/${id}`, { headers: headers }).subscribe(result => {
            // console.log(result)
            this.order = result;
        });
    }
    isAuthenticated() {
        if (sessionStorage.getItem('token') === undefined) {
            return false;
        }
        else {
            return true;
        }
    }
    onFileChange(event) {
        if (event.target.files && event.target.files[0]) {
            var filesAmount = event.target.files.length;
            for (let i = 0; i < filesAmount; i++) {
                var reader = new FileReader();
                reader.onload = (event) => {
                    console.log(event.target.result);
                    this.images.push(event.target.result);
                    this.form.patchValue({
                        fileSource: this.images
                    });
                };
                reader.readAsDataURL(event.target.files[i]);
            }
        }
    }
    submit() {
        const formData = this.form.getRawValue();
        formData.id = this.activatedRoute.snapshot.params.id;
        console.log(formData);
        this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiEndpoint + 'image_upload', formData).subscribe(data => {
            console.log(data);
        });
        // this.authservice.updateOrder(formData).subscribe(response => {
        //   console.log(response)   
        //   this.router.navigate(["/orders"]);
        // }, err => {
        //   console.error(err)
        //   if(err.status === 200) {
        //     this.router.navigate(["/orders"]);
        //   }
        // });
    }
}
UpdateComponent.ɵfac = function UpdateComponent_Factory(t) { return new (t || UpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_plugins_service__WEBPACK_IMPORTED_MODULE_6__["PluginsService"])); };
UpdateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UpdateComponent, selectors: [["app-update"]], decls: 55, vars: 14, consts: [[1, "wrapper"], ["id", "content-page", 1, "content-page"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12", "col-lg-12"], ["card-header", "", 1, "iq-header-title"], [1, "card-title"], [1, "form", "mt-4", 3, "formGroup", "submit"], [1, "row", 2, "margin-bottom", "10px"], [1, "col"], ["type", "text", "formControlName", "companyName", "placeholder", "Company Name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "formControlName", "referenceName", "placeholder", "Reference Name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "formControlName", "projectName", "placeholder", "projectName", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "formControlName", "address", "placeholder", "address", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "formControlName", "zipcode", "placeholder", "zipcode", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "formControlName", "province", "placeholder", "province", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "formControlName", "country", "placeholder", "country", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "formControlName", "checklist", "placeholder", "checklist", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "formControlName", "contributor", "placeholder", "contributor", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "formControlName", "status", "placeholder", "status", 1, "form-control", 3, "ngModel", "ngModelChange"], ["formControlName", "comments", "id", "", "cols", "10", "rows", "10", "placeholder", "Comments", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "file"], ["formControlName", "file", "id", "file", "type", "file", "multiple", "", 1, "form-control", 3, "change"], ["height", "150", "width", "200px", "style", "margin: 3px;", 3, "src", 4, "ngFor", "ngForOf"], [1, "btn", "btn-primary"], [1, "btn", "ml-1", "iq-bg-danger"], ["class", "img-thumbnail ml-3", "alt", "Responsive image", "width", "150", 3, "src", 4, "ngFor", "ngForOf"], ["height", "150", "width", "200px", 2, "margin", "3px", 3, "src"], ["alt", "Responsive image", "width", "150", 1, "img-thumbnail", "ml-3", 3, "src"]], template: function UpdateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-loader");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-side-bar1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-nav-bar1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "app-iq-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Edit order");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function UpdateComponent_Template_form_submit_12_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UpdateComponent_Template_input_ngModelChange_15_listener($event) { return ctx.order.orders.companyName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UpdateComponent_Template_input_ngModelChange_17_listener($event) { return ctx.order.orders.referenceName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UpdateComponent_Template_input_ngModelChange_19_listener($event) { return ctx.order.orders.projectName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UpdateComponent_Template_input_ngModelChange_21_listener($event) { return ctx.order.orders.address = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UpdateComponent_Template_input_ngModelChange_24_listener($event) { return ctx.order.orders.zipcode = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UpdateComponent_Template_input_ngModelChange_26_listener($event) { return ctx.order.orders.province = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UpdateComponent_Template_input_ngModelChange_28_listener($event) { return ctx.order.orders.country = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UpdateComponent_Template_input_ngModelChange_30_listener($event) { return ctx.order.orders.checklist = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UpdateComponent_Template_input_ngModelChange_33_listener($event) { return ctx.order.orders.contributor = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UpdateComponent_Template_input_ngModelChange_35_listener($event) { return ctx.order.orders.status = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "textarea", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UpdateComponent_Template_textarea_ngModelChange_38_listener($event) { return ctx.order.orders.comments = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Upload to gallery");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function UpdateComponent_Template_input_change_42_listener($event) { return ctx.onFileChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, UpdateComponent_img_43_Template, 1, 1, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "app-iq-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Gallery");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](54, UpdateComponent_img_54_Template, 1, 1, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.order.orders.companyName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.order.orders.referenceName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.order.orders.projectName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.order.orders.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.order.orders.zipcode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.order.orders.province);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.order.orders.country);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.order.orders.checklist);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.order.orders.contributor);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.order.orders.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.order.orders.comments);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.images);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.order.images);
    } }, directives: [_components_sofbox_loaders_loader1_loader_component__WEBPACK_IMPORTED_MODULE_7__["LoaderComponent"], _components_sofbox_side_bars_side_bar1_side_bar1_component__WEBPACK_IMPORTED_MODULE_8__["SideBar1Component"], _components_sofbox_nav_bars_nav_bar1_nav_bar1_component__WEBPACK_IMPORTED_MODULE_9__["NavBar1Component"], _components_sofbox_cards_iq_card_iq_card_component__WEBPACK_IMPORTED_MODULE_10__["IqCardComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UpdateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-update',
                templateUrl: './update.component.html',
                styleUrls: []
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }, { type: src_app_plugins_service__WEBPACK_IMPORTED_MODULE_6__["PluginsService"] }]; }, null); })();


/***/ }),

/***/ "Xlj8":
/*!***********************************************!*\
  !*** ./src/app/pages/orders/orders.module.ts ***!
  \***********************************************/
/*! exports provided: OrdersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersModule", function() { return OrdersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create/create.component */ "L9t6");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.component */ "0XZ2");
/* harmony import */ var _orders_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./orders-routing.module */ "8veL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_sofbox_sofbox_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/sofbox/sofbox.module */ "htIi");
/* harmony import */ var _show_show_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./show/show.component */ "ms0C");
/* harmony import */ var _update_update_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./update/update.component */ "W8iq");










class OrdersModule {
}
OrdersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: OrdersModule });
OrdersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function OrdersModule_Factory(t) { return new (t || OrdersModule)(); }, imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _orders_routing_module__WEBPACK_IMPORTED_MODULE_4__["OrdersRoutingModule"],
            _components_sofbox_sofbox_module__WEBPACK_IMPORTED_MODULE_6__["SofboxModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OrdersModule, { declarations: [_create_create_component__WEBPACK_IMPORTED_MODULE_2__["CreateComponent"],
        _list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"],
        _show_show_component__WEBPACK_IMPORTED_MODULE_7__["ShowComponent"],
        _update_update_component__WEBPACK_IMPORTED_MODULE_8__["UpdateComponent"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _orders_routing_module__WEBPACK_IMPORTED_MODULE_4__["OrdersRoutingModule"],
        _components_sofbox_sofbox_module__WEBPACK_IMPORTED_MODULE_6__["SofboxModule"]], exports: [_create_create_component__WEBPACK_IMPORTED_MODULE_2__["CreateComponent"],
        _list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrdersModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _create_create_component__WEBPACK_IMPORTED_MODULE_2__["CreateComponent"],
                    _list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"],
                    _show_show_component__WEBPACK_IMPORTED_MODULE_7__["ShowComponent"],
                    _update_update_component__WEBPACK_IMPORTED_MODULE_8__["UpdateComponent"]
                ],
                imports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _orders_routing_module__WEBPACK_IMPORTED_MODULE_4__["OrdersRoutingModule"],
                    _components_sofbox_sofbox_module__WEBPACK_IMPORTED_MODULE_6__["SofboxModule"]
                ],
                exports: [
                    _create_create_component__WEBPACK_IMPORTED_MODULE_2__["CreateComponent"],
                    _list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "ms0C":
/*!*****************************************************!*\
  !*** ./src/app/pages/orders/show/show.component.ts ***!
  \*****************************************************/
/*! exports provided: ShowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowComponent", function() { return ShowComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/auth.service */ "6uu6");
/* harmony import */ var src_app_plugins_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/plugins.service */ "yq7U");
/* harmony import */ var _components_sofbox_loaders_loader1_loader_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/sofbox/loaders/loader1/loader.component */ "Aq+l");
/* harmony import */ var _components_sofbox_side_bars_side_bar1_side_bar1_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/sofbox/side-bars/side-bar1/side-bar1.component */ "sH7z");
/* harmony import */ var _components_sofbox_nav_bars_nav_bar1_nav_bar1_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/sofbox/nav-bars/nav-bar1/nav-bar1.component */ "AL1Q");
/* harmony import */ var _components_sofbox_cards_iq_card_iq_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/sofbox/cards/iq-card/iq-card.component */ "LzsS");














class ShowComponent {
    constructor(activatedRoute, http, router, fb, authservice, plugins) {
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.router = router;
        this.fb = fb;
        this.authservice = authservice;
        this.plugins = plugins;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            companyName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            referenceName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            projectName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            zipcode: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            province: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            checklist: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            comments: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        });
    }
    ngOnInit() {
        let id = this.activatedRoute.snapshot.params.id;
        console.log(id); // OUTPUT 1534
        // Init all plugins...
        const current = this;
        setTimeout(() => {
            current.plugins.index();
            current.plugins.dashboardIndex();
        }, 200);
        if (!this.isAuthenticated()) {
            this.router.navigate(['/auth/sign-in']);
        }
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Authorization': `Bearer ${localStorage.getItem('token')}` });
        this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiEndpoint}orders/${id}`, { headers: headers }).subscribe(result => {
            // console.log(result)
            this.order = result;
        });
    }
    isAuthenticated() {
        if (sessionStorage.getItem('token') === undefined) {
            return false;
        }
        else {
            return true;
        }
    }
    submit() {
        const formData = this.form.getRawValue();
        formData.id = this.activatedRoute.snapshot.params.id;
        console.log(formData);
        this.authservice.updateOrder(formData).subscribe(response => {
            console.log(response);
            this.router.navigate(["/orders"]);
        }, err => {
            console.error(err);
            if (err.status === 200) {
                this.router.navigate(["/orders"]);
            }
        });
    }
}
ShowComponent.ɵfac = function ShowComponent_Factory(t) { return new (t || ShowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_plugins_service__WEBPACK_IMPORTED_MODULE_6__["PluginsService"])); };
ShowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ShowComponent, selectors: [["app-show"]], decls: 44, vars: 12, consts: [[1, "wrapper"], ["id", "content-page", 1, "content-page"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12", "col-lg-12"], ["card-header", "", 1, "iq-header-title"], [1, "card-title"], [1, "form", "mt-4", 3, "formGroup", "submit"], [1, "row", 2, "margin-bottom", "10px"], [1, "col"], ["type", "text", "formControlName", "companyName", "placeholder", "Company Name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "formControlName", "referenceName", "placeholder", "Reference Name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "formControlName", "projectName", "placeholder", "projectName", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "formControlName", "address", "placeholder", "address", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "formControlName", "zipcode", "placeholder", "zipcode", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "formControlName", "province", "placeholder", "province", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "formControlName", "country", "placeholder", "country", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "formControlName", "checklist", "placeholder", "checklist", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "formControlName", "contributor", "placeholder", "contributor", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "formControlName", "status", "placeholder", "status", 1, "form-control", 3, "ngModel", "ngModelChange"], ["formControlName", "comments", "id", "", "cols", "10", "rows", "10", "placeholder", "Comments", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-primary"], [1, "btn", "ml-1", "iq-bg-danger"]], template: function ShowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-loader");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-side-bar1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-nav-bar1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "app-iq-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Edit order");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function ShowComponent_Template_form_submit_12_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ShowComponent_Template_input_ngModelChange_15_listener($event) { return ctx.order.orders.companyName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ShowComponent_Template_input_ngModelChange_17_listener($event) { return ctx.order.orders.referenceName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ShowComponent_Template_input_ngModelChange_19_listener($event) { return ctx.order.orders.projectName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ShowComponent_Template_input_ngModelChange_21_listener($event) { return ctx.order.orders.address = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ShowComponent_Template_input_ngModelChange_24_listener($event) { return ctx.order.orders.zipcode = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ShowComponent_Template_input_ngModelChange_26_listener($event) { return ctx.order.orders.province = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ShowComponent_Template_input_ngModelChange_28_listener($event) { return ctx.order.orders.country = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ShowComponent_Template_input_ngModelChange_30_listener($event) { return ctx.order.orders.checklist = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ShowComponent_Template_input_ngModelChange_33_listener($event) { return ctx.order.orders.contributor = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ShowComponent_Template_input_ngModelChange_35_listener($event) { return ctx.order.orders.status = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "textarea", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ShowComponent_Template_textarea_ngModelChange_38_listener($event) { return ctx.order.orders.comments = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.order.orders.companyName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.order.orders.referenceName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.order.orders.projectName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.order.orders.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.order.orders.zipcode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.order.orders.province);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.order.orders.country);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.order.orders.checklist);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.order.orders.contributor);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.order.orders.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.order.orders.comments);
    } }, directives: [_components_sofbox_loaders_loader1_loader_component__WEBPACK_IMPORTED_MODULE_7__["LoaderComponent"], _components_sofbox_side_bars_side_bar1_side_bar1_component__WEBPACK_IMPORTED_MODULE_8__["SideBar1Component"], _components_sofbox_nav_bars_nav_bar1_nav_bar1_component__WEBPACK_IMPORTED_MODULE_9__["NavBar1Component"], _components_sofbox_cards_iq_card_iq_card_component__WEBPACK_IMPORTED_MODULE_10__["IqCardComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ShowComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-show',
                templateUrl: './show.component.html',
                styleUrls: []
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }, { type: src_app_plugins_service__WEBPACK_IMPORTED_MODULE_6__["PluginsService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-orders-orders-module.js.map