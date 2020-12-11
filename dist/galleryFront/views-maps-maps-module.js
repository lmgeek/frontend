(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-maps-maps-module"],{

/***/ "A1uq":
/*!*******************************************!*\
  !*** ./src/app/views/maps/maps.module.ts ***!
  \*******************************************/
/*! exports provided: MapsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsModule", function() { return MapsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_sofbox_sofbox_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/sofbox/sofbox.module */ "htIi");
/* harmony import */ var _maps_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./maps-routing.module */ "QK00");
/* harmony import */ var _pages_map_pages_map_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages-map/pages-map.component */ "Qrqs");






class MapsModule {
}
MapsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MapsModule });
MapsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MapsModule_Factory(t) { return new (t || MapsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _maps_routing_module__WEBPACK_IMPORTED_MODULE_3__["MapsRoutingModule"],
            _components_sofbox_sofbox_module__WEBPACK_IMPORTED_MODULE_2__["SofboxModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MapsModule, { declarations: [_pages_map_pages_map_component__WEBPACK_IMPORTED_MODULE_4__["PagesMapComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _maps_routing_module__WEBPACK_IMPORTED_MODULE_3__["MapsRoutingModule"],
        _components_sofbox_sofbox_module__WEBPACK_IMPORTED_MODULE_2__["SofboxModule"]], exports: [_pages_map_pages_map_component__WEBPACK_IMPORTED_MODULE_4__["PagesMapComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_pages_map_pages_map_component__WEBPACK_IMPORTED_MODULE_4__["PagesMapComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _maps_routing_module__WEBPACK_IMPORTED_MODULE_3__["MapsRoutingModule"],
                    _components_sofbox_sofbox_module__WEBPACK_IMPORTED_MODULE_2__["SofboxModule"]
                ],
                exports: [_pages_map_pages_map_component__WEBPACK_IMPORTED_MODULE_4__["PagesMapComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "QK00":
/*!***************************************************!*\
  !*** ./src/app/views/maps/maps-routing.module.ts ***!
  \***************************************************/
/*! exports provided: MapsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsRoutingModule", function() { return MapsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_map_pages_map_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages-map/pages-map.component */ "Qrqs");





const routes = [
    {
        path: 'map',
        component: _pages_map_pages_map_component__WEBPACK_IMPORTED_MODULE_2__["PagesMapComponent"]
    }
];
class MapsRoutingModule {
}
MapsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MapsRoutingModule });
MapsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MapsRoutingModule_Factory(t) { return new (t || MapsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MapsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "Qrqs":
/*!*************************************************************!*\
  !*** ./src/app/views/maps/pages-map/pages-map.component.ts ***!
  \*************************************************************/
/*! exports provided: PagesMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesMapComponent", function() { return PagesMapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_sofbox_cards_iq_card_iq_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/sofbox/cards/iq-card/iq-card.component */ "LzsS");



class PagesMapComponent {
    constructor() { }
    ngOnInit() {
    }
}
PagesMapComponent.ɵfac = function PagesMapComponent_Factory(t) { return new (t || PagesMapComponent)(); };
PagesMapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PagesMapComponent, selectors: [["app-pages-map"]], decls: 27, vars: 0, consts: [[1, "row"], [1, "col-sm-12"], ["card-header", "", 1, "iq-header-title"], [1, "card-title"], ["src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902543.2003194243!2d-118.04220880485131!3d36.56083290513502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80be29b9f4abb783%3A0x4757dc6be1305318!2sInyo%20National%20Forest!5e0!3m2!1sen!2sin!4v1576668158879!5m2!1sen!2sin", "height", "500", "allowfullscreen", "", 1, "w-100"], ["src", "https://www.google.com/maps/embed?pb=!4v1576670414304!6m8!1m7!1sCAoSLEFGMVFpcFBmeGNVWUhFYmRqNWFzLTlsTjgyQUVMbTY1ckNqcmdMRDFjcy16!2m2!1d37.41885!2d-122.0798!3f191.60895907234024!4f-16.305518968749!5f0.4000000000000002", "height", "500", "allowfullscreen", "", 1, "w-100"], ["src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d552.6523460203307!2d-121.8326811833386!3d38.44960145310393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085259f4fcf781d%3A0x80a4c8c2bb5a0123!2s835%20Woodvale%20Dr%2C%20Dixon%2C%20CA%2095620%2C%20USA!5e1!3m2!1sen!2sin!4v1576670825530!5m2!1sen!2sin", "height", "500", "allowfullscreen", "", 1, "w-100"]], template: function PagesMapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-iq-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Creating basic google map");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "iframe", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "app-iq-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Street View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Street View google map");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "iframe", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "app-iq-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Stellite");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Stellite View google map");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "iframe", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_sofbox_cards_iq_card_iq_card_component__WEBPACK_IMPORTED_MODULE_1__["IqCardComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagesMapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pages-map',
                templateUrl: './pages-map.component.html',
                styles: []
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=views-maps-maps-module.js.map