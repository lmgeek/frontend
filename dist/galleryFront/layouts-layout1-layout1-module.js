(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layouts-layout1-layout1-module"],{

/***/ "QSl1":
/*!***********************************************************!*\
  !*** ./src/app/layouts/layout1/layout1-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: Layout1RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layout1RoutingModule", function() { return Layout1RoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index/index.component */ "l+Hh");





const routes = [
    {
        path: '',
        component: _index_index_component__WEBPACK_IMPORTED_MODULE_2__["IndexComponent"],
        children: [
            {
                path: '',
                loadChildren: () => Promise.all(/*! import() | views-views-module */[__webpack_require__.e("default~layouts-auth-layout-auth-layout-module~views-views-module"), __webpack_require__.e("views-views-module")]).then(__webpack_require__.bind(null, /*! ../../views/views.module */ "xzpJ")).then(m => m.ViewsModule),
            }
            // {
            //   path: 'email',
            //   loadChildren: () => import('../../views/application/email/email.module').then(m => m.EmailModule),
            // }
        ]
    }
];
class Layout1RoutingModule {
}
Layout1RoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: Layout1RoutingModule });
Layout1RoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function Layout1RoutingModule_Factory(t) { return new (t || Layout1RoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Layout1RoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Layout1RoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "l+Hh":
/*!**********************************************************!*\
  !*** ./src/app/layouts/layout1/index/index.component.ts ***!
  \**********************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _plugins_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../plugins.service */ "yq7U");
/* harmony import */ var _components_sofbox_loaders_loader1_loader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/sofbox/loaders/loader1/loader.component */ "Aq+l");
/* harmony import */ var _components_sofbox_side_bars_side_bar1_side_bar1_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/sofbox/side-bars/side-bar1/side-bar1.component */ "sH7z");
/* harmony import */ var _components_sofbox_nav_bars_nav_bar1_nav_bar1_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/sofbox/nav-bars/nav-bar1/nav-bar1.component */ "AL1Q");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");







class IndexComponent {
    constructor(plugins) {
        this.plugins = plugins;
    }
    ngOnInit() {
        // Init all plugins...
        const current = this;
        setTimeout(() => {
            current.plugins.index();
            current.plugins.dashboardIndex();
        }, 200);
    }
}
IndexComponent.ɵfac = function IndexComponent_Factory(t) { return new (t || IndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_plugins_service__WEBPACK_IMPORTED_MODULE_1__["PluginsService"])); };
IndexComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IndexComponent, selectors: [["app-index"]], decls: 7, vars: 0, consts: [[1, "wrapper"], ["id", "content-page", 1, "content-page"], [1, "container-fluid"]], template: function IndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loader");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-side-bar1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-nav-bar1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_sofbox_loaders_loader1_loader_component__WEBPACK_IMPORTED_MODULE_2__["LoaderComponent"], _components_sofbox_side_bars_side_bar1_side_bar1_component__WEBPACK_IMPORTED_MODULE_3__["SideBar1Component"], _components_sofbox_nav_bars_nav_bar1_nav_bar1_component__WEBPACK_IMPORTED_MODULE_4__["NavBar1Component"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IndexComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-index',
                templateUrl: './index.component.html',
                styleUrls: [],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _plugins_service__WEBPACK_IMPORTED_MODULE_1__["PluginsService"] }]; }, null); })();


/***/ }),

/***/ "puj7":
/*!***************************************************!*\
  !*** ./src/app/layouts/layout1/layout1.module.ts ***!
  \***************************************************/
/*! exports provided: Layout1Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layout1Module", function() { return Layout1Module; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _layout1_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout1-routing.module */ "QSl1");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index/index.component */ "l+Hh");
/* harmony import */ var _components_sofbox_sofbox_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/sofbox/sofbox.module */ "htIi");






class Layout1Module {
}
Layout1Module.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: Layout1Module });
Layout1Module.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function Layout1Module_Factory(t) { return new (t || Layout1Module)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _layout1_routing_module__WEBPACK_IMPORTED_MODULE_2__["Layout1RoutingModule"],
            _components_sofbox_sofbox_module__WEBPACK_IMPORTED_MODULE_4__["SofboxModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Layout1Module, { declarations: [_index_index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _layout1_routing_module__WEBPACK_IMPORTED_MODULE_2__["Layout1RoutingModule"],
        _components_sofbox_sofbox_module__WEBPACK_IMPORTED_MODULE_4__["SofboxModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Layout1Module, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_index_index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _layout1_routing_module__WEBPACK_IMPORTED_MODULE_2__["Layout1RoutingModule"],
                    _components_sofbox_sofbox_module__WEBPACK_IMPORTED_MODULE_4__["SofboxModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=layouts-layout1-layout1-module.js.map