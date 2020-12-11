(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+9Lo":
/*!*****************************************************************************!*\
  !*** ./src/app/components/sofbox/tabs/tab-content/tab-content.component.ts ***!
  \*****************************************************************************/
/*! exports provided: TabContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabContentComponent", function() { return TabContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


const _c0 = [[["", "tab-content", ""]]];
const _c1 = ["[tab-content]"];
class TabContentComponent {
    constructor() {
        this.tabContentClass = 'tab-pane fade';
    }
    ngOnInit() {
    }
}
TabContentComponent.ɵfac = function TabContentComponent_Factory(t) { return new (t || TabContentComponent)(); };
TabContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TabContentComponent, selectors: [["app-tab-content"]], inputs: { tabContentClass: "tabContentClass", tabContentLink: "tabContentLink" }, ngContentSelectors: _c1, decls: 2, vars: 1, consts: [["role", "tabpanel", 1, "tab-pane", "fade", 3, "id"]], template: function TabContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.tabContentLink);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TabContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tab-content',
                templateUrl: './tab-content.component.html',
                styles: []
            }]
    }], function () { return []; }, { tabContentClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], tabContentLink: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "+E+/":
/*!*****************************************************************************!*\
  !*** ./src/app/components/sofbox/charts/high-chart/high-chart.component.ts ***!
  \*****************************************************************************/
/*! exports provided: HighChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighChartComponent", function() { return HighChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highcharts */ "6n/F");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _plugins_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../plugins.service */ "yq7U");




class HighChartComponent {
    constructor(plugins) {
        this.plugins = plugins;
    }
    ngOnInit() {
        setTimeout(() => {
            if (this.ids !== undefined) {
                highcharts__WEBPACK_IMPORTED_MODULE_1__["chart"](this.ids, this.options);
            }
        }, 500);
    }
}
HighChartComponent.ɵfac = function HighChartComponent_Factory(t) { return new (t || HighChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_plugins_service__WEBPACK_IMPORTED_MODULE_2__["PluginsService"])); };
HighChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HighChartComponent, selectors: [["app-high-chart"]], inputs: { ids: "ids", options: "options" }, decls: 1, vars: 1, consts: [[3, "id"]], template: function HighChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.ids);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HighChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-high-chart',
                templateUrl: './high-chart.component.html',
                styles: []
            }]
    }], function () { return [{ type: _plugins_service__WEBPACK_IMPORTED_MODULE_2__["PluginsService"] }]; }, { ids: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\laragon\www\galleryFront\src\main.ts */"zUnb");


/***/ }),

/***/ "0NJz":
/*!********************************************************************************!*\
  !*** ./src/app/components/sofbox/card-with-image/card-with-image.component.ts ***!
  \********************************************************************************/
/*! exports provided: CardWithImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardWithImageComponent", function() { return CardWithImageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



const _c0 = [[["", "card-image", ""]], "*"];
const _c1 = ["[card-image]", "*"];
class CardWithImageComponent {
    constructor() {
        this.cardClass = 'iq-card';
        this.cardRowClass = 'row no-gutters';
        this.cardBodyClass = 'card-body';
    }
    ngOnInit() {
    }
}
CardWithImageComponent.ɵfac = function CardWithImageComponent_Factory(t) { return new (t || CardWithImageComponent)(); };
CardWithImageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardWithImageComponent, selectors: [["app-card-with-image"]], inputs: { cardClass: "cardClass", cardRowClass: "cardRowClass", cardBodyClass: "cardBodyClass" }, ngContentSelectors: _c1, decls: 7, vars: 3, consts: [[3, "ngClass"], [1, "col-md-4"], [1, "col-md-8"]], template: function CardWithImageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](6, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.cardClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.cardRowClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.cardBodyClass);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardWithImageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-card-with-image',
                templateUrl: './card-with-image.component.html',
                styles: []
            }]
    }], function () { return []; }, { cardClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cardRowClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cardBodyClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "67Dq":
/*!**********************************************************************!*\
  !*** ./src/app/components/sofbox/scroll-top/scroll-top.component.ts ***!
  \**********************************************************************/
/*! exports provided: ScrollTopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollTopComponent", function() { return ScrollTopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);



class ScrollTopComponent {
    constructor() { }
    ngOnInit() {
    }
    scrollTop() {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('body,html').animate({
            scrollTop: 0
        }, 800);
    }
}
ScrollTopComponent.ɵfac = function ScrollTopComponent_Factory(t) { return new (t || ScrollTopComponent)(); };
ScrollTopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScrollTopComponent, selectors: [["app-scroll-top"]], decls: 3, vars: 0, consts: [["id", "back-to-top", 2, "display", "none"], ["id", "top", "href", "javascript:void(0)", 1, "top", 3, "click"], [1, "ion-ios-upload-outline"]], template: function ScrollTopComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScrollTopComponent_Template_a_click_1_listener() { return ctx.scrollTop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollTopComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-scroll-top',
                templateUrl: './scroll-top.component.html',
                styleUrls: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "7OHa":
/*!*****************************************************************************!*\
  !*** ./src/app/components/sofbox/charts/apex-chart/apex-chart.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ApexChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApexChartComponent", function() { return ApexChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _plugins_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../plugins.service */ "yq7U");



class ApexChartComponent {
    constructor(plugins) {
        this.plugins = plugins;
    }
    ngOnInit() {
        let _this = this;
        setTimeout(() => {
            _this.plugins.apexChart(_this.ids, _this.options);
        }, 500);
    }
}
ApexChartComponent.ɵfac = function ApexChartComponent_Factory(t) { return new (t || ApexChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_plugins_service__WEBPACK_IMPORTED_MODULE_1__["PluginsService"])); };
ApexChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ApexChartComponent, selectors: [["app-apex-chart"]], inputs: { ids: "ids", options: "options" }, decls: 1, vars: 1, consts: [[3, "id"]], template: function ApexChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.ids);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApexChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-apex-chart',
                templateUrl: './apex-chart.component.html',
                styles: []
            }]
    }], function () { return [{ type: _plugins_service__WEBPACK_IMPORTED_MODULE_1__["PluginsService"] }]; }, { ids: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "AL1Q":
/*!***************************************************************************!*\
  !*** ./src/app/components/sofbox/nav-bars/nav-bar1/nav-bar1.component.ts ***!
  \***************************************************************************/
/*! exports provided: NavBar1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBar1Component", function() { return NavBar1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "kt0X");
/* harmony import */ var _breadcrumbs_breadcrumb1_breadcrumb1_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../breadcrumbs/breadcrumb1/breadcrumb1.component */ "wqnk");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function NavBar1Component_a_35_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const notification_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", notification_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function NavBar1Component_a_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavBar1Component_a_35_div_2_Template, 2, 1, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h6", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "small", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const notification_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", notification_r1.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](notification_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](notification_r1.date_format);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](notification_r1.sub_title);
} }
class NavBar1Component {
    constructor(store) {
        this.store = store;
        this.breadCrumbItems = [
            {
                isActive: false,
                label: 'Dashboard',
                link: '/dashboard'
            },
            {
                isActive: true,
                label: 'Dashboard',
                link: '/dashboard'
            }
        ];
        this.messagesList = [
            {
                title: 'Nik Emma Watson',
                image: '/assets/images/user/01.jpg',
                link: '#',
                date_format: '13 Apr'
            },
            {
                title: 'Lorem Ipsum Watson',
                image: '/assets/images/user/02.jpg',
                link: '#',
                date_format: '20 Jun'
            },
            {
                title: 'Why do we use it?',
                image: '/assets/images/user/03.jpg',
                link: '#',
                date_format: '08 July'
            },
            {
                title: 'Variations Passages',
                image: '/assets/images/user/04.jpg',
                link: '#',
                date_format: '12 Sep'
            },
            {
                title: 'Lorem Ipsum generators',
                image: '/assets/images/user/05.jpg',
                link: '#',
                date_format: '5 Dec'
            }
        ];
        this.notificationList = [
            {
                title: 'New Order Received',
                sub_title: 'Lorem is simply',
                image: null,
                link: '#',
                date_format: '23 hrs ago'
            },
            {
                title: 'Emma Watson Nik',
                sub_title: '95 MB',
                image: '/assets/images/user/01.jpg',
                link: '#',
                date_format: 'Just Now'
            },
            {
                title: 'New customer is join',
                sub_title: 'John Nik',
                image: '/assets/images/user/02.jpg',
                link: '#',
                date_format: '5 days ago'
            },
            {
                title: 'Updates Available',
                sub_title: '120 MB',
                image: '/assets/images/small/jpg.svg',
                link: '#',
                date_format: 'Just Now'
            }
        ];
        this.countTicket = 0;
    }
    ngOnInit() {
        this.store.subscribe(state => (this.countTicket = state.ticketBooking.ticketCount));
    }
    clickPaymentShow(countTicketBooking) {
        if (countTicketBooking > 0) {
            jquery__WEBPACK_IMPORTED_MODULE_1___default()('.iq-sidebar-right-menu').addClass('film-side');
        }
    }
}
NavBar1Component.ɵfac = function NavBar1Component_Factory(t) { return new (t || NavBar1Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
NavBar1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavBar1Component, selectors: [["app-nav-bar1"]], decls: 91, vars: 3, consts: [[1, "iq-top-navbar"], [1, "iq-navbar-custom"], [1, "iq-sidebar-logo"], [1, "top-logo"], ["href", "index.html", 1, "logo"], ["src", "/assets/images/logo.png", "alt", "", 1, "img-fluid"], ["title", "Dashboard", 3, "items"], [1, "navbar", "navbar-expand-lg", "navbar-light", "p-0"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "ri-menu-3-line"], [1, "iq-menu-bt", "align-self-center"], [1, "wrapper-menu"], [1, "line-menu", "half", "start"], [1, "line-menu"], [1, "line-menu", "half", "end"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto", "navbar-list"], [1, "nav-item"], ["href", "javascript:void(0);", 1, "search-toggle", "iq-waves-effect"], [1, "ri-search-line"], ["action", "#", 1, "search-box"], ["type", "text", "placeholder", "Type here to search...", 1, "text", "search-input"], [1, "ri-notification-2-line"], [1, "iq-sub-dropdown"], [1, "iq-card", "shadow-none", "m-0"], [1, "iq-card-body", "p-0"], [1, "bg-danger", "p-3"], [1, "mb-0", "text-white"], [1, "badge", "badge-light", "float-right", "pt-1"], ["href", "javascript:void(0);", "class", "iq-sub-card", 4, "ngFor", "ngForOf"], [1, "nav-item", "iq-full-screen"], ["href", "javascript:void(0);", "id", "btnFullscreen", 1, "iq-waves-effect"], [1, "ri-fullscreen-line"], [1, "navbar-list"], ["href", "javascript:void(0);", 1, "search-toggle", "iq-waves-effect", "bg-primary", "text-white"], ["src", "/assets/images/user/1.jpg", "alt", "user", 1, "img-fluid", "rounded"], [1, "iq-sub-dropdown", "iq-user-dropdown"], [1, "bg-primary", "p-3"], [1, "mb-0", "text-white", "line-height"], [1, "text-white", "font-size-12"], ["href", "javascript:void(0);", 1, "iq-sub-card", "iq-bg-primary-hover"], [1, "media", "align-items-center"], [1, "rounded", "iq-card-icon", "iq-bg-primary"], [1, "ri-file-user-line"], [1, "media-body", "ml-3"], [1, "mb-0"], [1, "mb-0", "font-size-12"], ["href", "javascript:void(0);", 1, "iq-sub-card", "iq-bg-primary-success-hover"], [1, "rounded", "iq-card-icon", "iq-bg-success"], [1, "ri-profile-line"], ["href", "javascript:void(0);", 1, "iq-sub-card", "iq-bg-primary-danger-hover"], [1, "rounded", "iq-card-icon", "iq-bg-danger"], [1, "ri-account-box-line"], ["href", "javascript:void(0);", 1, "iq-sub-card", "iq-bg-primary-secondary-hover"], [1, "rounded", "iq-card-icon", "iq-bg-secondary"], [1, "ri-lock-line"], [1, "d-inline-block", "w-100", "text-center", "p-3"], ["href", "javascript:void(0);", "role", "button", 1, "iq-bg-danger", "iq-sign-btn"], [1, "ri-login-box-line", "ml-2"], ["href", "javascript:void(0);", 1, "iq-sub-card"], ["class", "", 4, "ngIf"], [1, "float-right", "font-size-12"], [1, ""], ["alt", "", 1, "avatar-40", "rounded", 3, "src"]], template: function NavBar1Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Gallery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-breadcrumb1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nav", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "form", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h5", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "All Notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "small", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, NavBar1Component_a_35_Template, 10, 4, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "ul", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h5", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Hello Nik jone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Available");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h6", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "My Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "View personal profile details.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h6", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Edit Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Modify your personal details.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "i", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h6", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Account settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Manage your account parameters.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h6", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Privacy Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Control your privacy parameters.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "a", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Sign out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "i", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.breadCrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.notificationList.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.notificationList);
    } }, directives: [_breadcrumbs_breadcrumb1_breadcrumb1_component__WEBPACK_IMPORTED_MODULE_3__["Breadcrumb1Component"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavBar1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav-bar1',
                templateUrl: './nav-bar1.component.html',
                styleUrls: []
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }]; }, null); })();


/***/ }),

/***/ "Aq+l":
/*!***********************************************************************!*\
  !*** ./src/app/components/sofbox/loaders/loader1/loader.component.ts ***!
  \***********************************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LoaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoaderComponent.ɵfac = function LoaderComponent_Factory(t) { return new (t || LoaderComponent)(); };
LoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoaderComponent, selectors: [["app-loader"]], decls: 11, vars: 0, consts: [["id", "loading"], ["id", "loading-center"], [1, "loader"], [1, "cube"], [1, "sides"], [1, "top"], [1, "right"], [1, "bottom"], [1, "left"], [1, "front"], [1, "back"]], template: function LoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loader',
                templateUrl: './loader.component.html',
                styleUrls: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiEndpoint: "https://gallerybackend.herokuapp.com/",
    credentialsAppUser: "2",
    credentialsAppPassword: "OHN3i5B9sygglFkPxwSK8spX8Cm23A8HwVjnFEKo",
    mapbox: {
        accessToken: 'pk.eyJ1IjoiZ29sZGVubWFjZWRldiIsImEiOiJjazBnYnFxb3AwNWdqM2JuNWRwazZxMWY0In0._I3zpcM9QTHNqcXWjWpD6Q',
        mapStyle: 'mapbox://styles/goldenmacedev/ck49vpeap08b61cnubglcag7l'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "FhZn":
/*!******************************************************!*\
  !*** ./src/app/store/states/ticket-booking.state.ts ***!
  \******************************************************/
/*! exports provided: initialTicketBookingState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialTicketBookingState", function() { return initialTicketBookingState; });
const initialTicketBookingState = {
    ticketCount: 0,
    ticketData: []
};


/***/ }),

/***/ "LzsS":
/*!**********************************************************************!*\
  !*** ./src/app/components/sofbox/cards/iq-card/iq-card.component.ts ***!
  \**********************************************************************/
/*! exports provided: IqCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IqCardComponent", function() { return IqCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function IqCardComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.cardHeaderClass);
} }
function IqCardComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.cardBodyClass);
} }
function IqCardComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r2.cardFooterClass);
} }
const _c0 = [[["", "card-top", ""]], [["", "card-bottom", ""]], [["", "card-header", ""]], "*", [["", "card-footer", ""]]];
const _c1 = ["[card-top]", "[card-bottom]", "[card-header]", "*", "[card-footer]"];
class IqCardComponent {
    constructor() {
        this.cardClass = 'iq-card';
        this.cardHeaderClass = 'iq-card-header d-flex justify-content-between';
        this.cardBodyClass = 'iq-card-body';
        this.cardFooterClass = 'card-footer';
        this.isCardHeader = true;
        this.isCardBody = true;
        this.isCardFooter = false;
    }
    ngOnInit() {
    }
}
IqCardComponent.ɵfac = function IqCardComponent_Factory(t) { return new (t || IqCardComponent)(); };
IqCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IqCardComponent, selectors: [["app-iq-card"]], inputs: { cardClass: "cardClass", cardHeaderClass: "cardHeaderClass", cardBodyClass: "cardBodyClass", cardFooterClass: "cardFooterClass", isCardHeader: "isCardHeader", isCardBody: "isCardBody", isCardFooter: "isCardFooter" }, ngContentSelectors: _c1, decls: 6, vars: 4, consts: [[3, "ngClass"], [3, "ngClass", 4, "ngIf"]], template: function IqCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, IqCardComponent_div_2_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, IqCardComponent_div_3_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, IqCardComponent_div_4_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.cardClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isCardHeader);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isCardBody);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isCardFooter);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IqCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-iq-card',
                templateUrl: './iq-card.component.html',
                styles: []
            }]
    }], function () { return []; }, { cardClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cardHeaderClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cardBodyClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cardFooterClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isCardHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isCardBody: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isCardFooter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "PLN7":
/*!****************************************!*\
  !*** ./src/app/service/api.service.ts ***!
  \****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");






class ApiService {
    constructor(http) {
        this.http = http;
        this.BASE_PATH = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndpoint;
        // Add options on Http Request
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    // Handle error on Http Request
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
        }
        else {
            console.error(`Status : ${error.status}, ` +
                `Response : ${error.error}`);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Something want wrong. please try again later.');
    }
    getOrders() {
        return this.http.get(`${this.BASE_PATH}orders`);
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _plugins_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plugins.service */ "yq7U");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/api.service */ "PLN7");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







function AppComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Gallery");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nav", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Sign In");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Sign Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(plugins, router, apiService) {
        this.plugins = plugins;
        this.router = router;
        this.apiService = apiService;
        this.title = 'galleryFront';
        this.users = [];
        this.loggedIn = false;
    }
    ngOnInit() {
        this.loggedIn = localStorage.getItem('token') !== null;
        this.apiService.getOrders().subscribe((data) => {
            this.users = data.data;
            // console.log(data.data)
        });
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    }
    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_plugins_service__WEBPACK_IMPORTED_MODULE_2__["PluginsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 1, consts: [["class", "iq-top-navbar", 4, "ngIf"], [1, "iq-top-navbar"], [1, "iq-navbar-custom"], [1, "iq-sidebar-logo"], [1, "top-logo"], ["href", "/", 1, "logo"], ["src", "/assets/images/logo.png", "alt", "", 1, "img-fluid"], [1, "navbar", "navbar-expand-lg", "navbar-light", "p-0"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "ri-menu-3-line"], [1, "iq-menu-bt", "align-self-center"], [1, "wrapper-menu"], [1, "line-menu", "half", "start"], [1, "line-menu"], [1, "line-menu", "half", "end"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto", "navbar-list"], [1, "nav-item"], ["href", "/auth/sign-in", 1, "iq-waves-effect", "nav-link"], [1, "ri-login-box-line"], ["href", "/auth/sign-up", 1, "iq-waves-effect", "nav-link"], [1, "ri-user-add-line"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_div_0_Template, 26, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loggedIn);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: []
            }]
    }], function () { return [{ type: _plugins_service__WEBPACK_IMPORTED_MODULE_2__["PluginsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "Y5Lh":
/*!****************************************************!*\
  !*** ./src/app/pages/profile/profile.component.ts ***!
  \****************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ProfileComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 2, vars: 0, template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "profile works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_sofbox_sofbox_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/sofbox/sofbox.module */ "htIi");
/* harmony import */ var _views_pages_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/pages/error-page/error-page.component */ "cDE/");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "kt0X");
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store/reducers */ "tg95");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store-devtools */ "B3rN");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/effects */ "snw9");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "Lm2G");
/* harmony import */ var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/popover */ "EDFS");
/* harmony import */ var ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/progressbar */ "yyhP");
/* harmony import */ var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-bootstrap/alert */ "psEu");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "44PX");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "Mfq2");
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-bootstrap/buttons */ "s3T5");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "LYaK");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var ngx_scrollbar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-scrollbar */ "G1Gu");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-slick-carousel */ "eSVu");
/* harmony import */ var ngx_wow__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-wow */ "ME1z");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./index/index.component */ "aUdj");
/* harmony import */ var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/profile/profile.component */ "Y5Lh");









































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_25__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_25__["ReactiveFormsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _components_sofbox_sofbox_module__WEBPACK_IMPORTED_MODULE_4__["SofboxModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forRoot(_store_reducers__WEBPACK_IMPORTED_MODULE_8__["reducers"], {
                metaReducers: _store_reducers__WEBPACK_IMPORTED_MODULE_8__["metaReducers"],
                runtimeChecks: {
                    strictStateImmutability: true,
                    strictActionImmutability: true,
                }
            }),
            !_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_9__["StoreDevtoolsModule"].instrument() : [],
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_11__["EffectsModule"].forRoot([]),
            ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_16__["AlertModule"].forRoot(),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_12__["ModalModule"].forRoot(),
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_13__["PaginationModule"].forRoot(),
            ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_14__["PopoverModule"].forRoot(),
            ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_15__["ProgressbarModule"].forRoot(),
            ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_17__["TabsModule"].forRoot(),
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_18__["TooltipModule"].forRoot(),
            ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_19__["ButtonsModule"].forRoot(),
            ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_20__["CarouselModule"].forRoot(),
            ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_15__["ProgressbarModule"].forRoot(),
            ngx_scrollbar__WEBPACK_IMPORTED_MODULE_22__["NgScrollbarModule"],
            ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_23__["SlickCarouselModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["BrowserAnimationsModule"],
            ngx_wow__WEBPACK_IMPORTED_MODULE_24__["NgwWowModule"],
        ], _components_sofbox_sofbox_module__WEBPACK_IMPORTED_MODULE_4__["SofboxModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _index_index_component__WEBPACK_IMPORTED_MODULE_26__["IndexComponent"],
        _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_27__["ProfileComponent"],
        _views_pages_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_5__["ErrorPageComponent"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_25__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_25__["ReactiveFormsModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
        _components_sofbox_sofbox_module__WEBPACK_IMPORTED_MODULE_4__["SofboxModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_9__["StoreDevtoolsModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_11__["EffectsRootModule"], ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_16__["AlertModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_12__["ModalModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_13__["PaginationModule"], ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_14__["PopoverModule"], ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_15__["ProgressbarModule"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_17__["TabsModule"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_18__["TooltipModule"], ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_19__["ButtonsModule"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_20__["CarouselModule"], ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_15__["ProgressbarModule"], ngx_scrollbar__WEBPACK_IMPORTED_MODULE_22__["NgScrollbarModule"],
        ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_23__["SlickCarouselModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["BrowserAnimationsModule"],
        ngx_wow__WEBPACK_IMPORTED_MODULE_24__["NgwWowModule"]], exports: [_components_sofbox_sofbox_module__WEBPACK_IMPORTED_MODULE_4__["SofboxModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _index_index_component__WEBPACK_IMPORTED_MODULE_26__["IndexComponent"],
                    _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_27__["ProfileComponent"],
                    _views_pages_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_5__["ErrorPageComponent"],
                ],
                imports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_25__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_25__["ReactiveFormsModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                    _components_sofbox_sofbox_module__WEBPACK_IMPORTED_MODULE_4__["SofboxModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forRoot(_store_reducers__WEBPACK_IMPORTED_MODULE_8__["reducers"], {
                        metaReducers: _store_reducers__WEBPACK_IMPORTED_MODULE_8__["metaReducers"],
                        runtimeChecks: {
                            strictStateImmutability: true,
                            strictActionImmutability: true,
                        }
                    }),
                    !_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_9__["StoreDevtoolsModule"].instrument() : [],
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_11__["EffectsModule"].forRoot([]),
                    ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_16__["AlertModule"].forRoot(),
                    ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_12__["ModalModule"].forRoot(),
                    ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_13__["PaginationModule"].forRoot(),
                    ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_14__["PopoverModule"].forRoot(),
                    ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_15__["ProgressbarModule"].forRoot(),
                    ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_17__["TabsModule"].forRoot(),
                    ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_18__["TooltipModule"].forRoot(),
                    ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_19__["ButtonsModule"].forRoot(),
                    ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_20__["CarouselModule"].forRoot(),
                    ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_15__["ProgressbarModule"].forRoot(),
                    ngx_scrollbar__WEBPACK_IMPORTED_MODULE_22__["NgScrollbarModule"],
                    ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_23__["SlickCarouselModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["BrowserAnimationsModule"],
                    ngx_wow__WEBPACK_IMPORTED_MODULE_24__["NgwWowModule"],
                ],
                exports: [
                    _components_sofbox_sofbox_module__WEBPACK_IMPORTED_MODULE_4__["SofboxModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "aUdj":
/*!******************************************!*\
  !*** ./src/app/index/index.component.ts ***!
  \******************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



class IndexComponent {
    constructor() { }
    ngOnInit() {
    }
}
IndexComponent.ɵfac = function IndexComponent_Factory(t) { return new (t || IndexComponent)(); };
IndexComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IndexComponent, selectors: [["app-index"]], decls: 35, vars: 0, consts: [[1, "iq-comingsoon", "pt-5"], [1, "container-fluid"], [1, "row", "justify-content-center"], [1, "col-sm-8", "text-center"], [1, "iq-comingsoon-info"], ["href", "javascript:void(0);"], ["src", "/assets/images/logo-full2.png", "alt", "", 1, "img-fluid", "w-25"], [1, "mt-4", "mb-1"], ["data-date", "Feb 02 2022 20:20:22", 1, "countdown"], ["data-days", ""], ["data-hours", ""], ["data-minutes", ""], ["data-seconds", ""], [1, "col-lg-4"], [1, "iq-comingsoon-form", "mt-5"], [1, "form-group"], ["type", "email", "id", "exampleInputEmail1", "placeholder", "Enter email address", 1, "form-control", "mb-0"], ["type", "submit", 1, "btn", "btn-primary"]], template: function IndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Stay tunned, we're launching very soon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "We are working very hard to give you the best experience possible!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Days");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Hours");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Minutes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Seconds");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "form", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IndexComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-index',
                templateUrl: './index.component.html',
                styleUrls: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "cDE/":
/*!****************************************************************!*\
  !*** ./src/app/views/pages/error-page/error-page.component.ts ***!
  \****************************************************************/
/*! exports provided: ErrorPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPageComponent", function() { return ErrorPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ErrorPageComponent {
    constructor() {
        this.errorType = '400';
    }
    ngOnInit() {
        const url = window.location.href;
        this.errorType = url.substr(url.lastIndexOf('/') + 1);
    }
}
ErrorPageComponent.ɵfac = function ErrorPageComponent_Factory(t) { return new (t || ErrorPageComponent)(); };
ErrorPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorPageComponent, selectors: [["app-error-page"]], decls: 15, vars: 1, consts: [[1, "wrapper"], [1, "container-fluid", "p-0"], [1, "row", "no-gutters"], [1, "col-sm-12", "text-center"], [1, "iq-error"], [1, "mb-0"], ["href", "/home", 1, "btn", "btn-primary", "mt-3"], [1, "ri-home-4-line"], ["src", "./assets/images/error/01.png", "alt", "", 1, "img-fluid", "iq-error-img"]], template: function ErrorPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Oops! This Page is Not Found.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "The requested page dose not exist.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Back to Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.errorType);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-error-page',
                templateUrl: './error-page.component.html',
                styles: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "cbZr":
/*!********************************************!*\
  !*** ./src/app/fake-api/json/SideBar.json ***!
  \********************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"data\":[{\"title\":\"Main\",\"isHeading\":true,\"isActive\":false,\"className\":\"\",\"isIconClass\":true,\"icon\":\"ri-separator\"},{\"title\":\"Home\",\"isHeading\":false,\"isActive\":false,\"link\":\"/home\",\"className\":\"\",\"isIconClass\":true,\"icon\":\"ri-home-4-line\"},{\"title\":\"Orders\",\"name\":\"orders\",\"isHeading\":false,\"isActive\":false,\"link\":\"\",\"className\":\"\",\"isIconClass\":true,\"icon\":\"ri-mail-open-line\",\"children\":[{\"title\":\"Create Order\",\"isActive\":false,\"link\":\"/orders/create\",\"className\":\"\",\"isIconClass\":false,\"icon\":\"\"},{\"title\":\"List Orders\",\"isActive\":false,\"link\":\"/orders\",\"className\":\"\",\"isIconClass\":false,\"icon\":\"\"}]},{\"title\":\"My Orders\",\"isHeading\":false,\"isActive\":false,\"link\":\"/myorders\",\"className\":\"\",\"isIconClass\":true,\"icon\":\"ri-calendar-2-line\"},{\"title\":\"Configurations\",\"isHeading\":true,\"isActive\":false,\"className\":\"\",\"isIconClass\":true,\"icon\":\"ri-separator\"},{\"title\":\"Users\",\"name\":\"users\",\"isHeading\":false,\"isActive\":false,\"link\":\"/\",\"className\":\"\",\"isIconClass\":true,\"icon\":\"ri-home-4-line\",\"children\":[{\"title\":\"Add New User\",\"isActive\":false,\"link\":\"/users/create\",\"className\":\"\",\"isIconClass\":false,\"icon\":\"\"},{\"title\":\"List Users\",\"isActive\":false,\"link\":\"/users\",\"className\":\"\",\"isIconClass\":false,\"icon\":\"\"}]},{\"title\":\"Type Uploads\",\"name\":\"typeuploads\",\"isHeading\":false,\"isActive\":false,\"className\":\"\",\"link\":\"\",\"isIconClass\":true,\"icon\":\"ri-pencil-ruler-line\",\"children\":[{\"title\":\"Create Type Upload\",\"isActive\":false,\"link\":\"/typeupload/create\",\"className\":\"\",\"isIconClass\":false,\"icon\":\"\"},{\"title\":\"List Type Uploads\",\"isActive\":false,\"link\":\"/typeupload\",\"className\":\"\",\"isIconClass\":false,\"icon\":\"\"}]}]}");

/***/ }),

/***/ "ei1P":
/*!******************************************************************************!*\
  !*** ./src/app/components/sofbox/menus/list-style1/list-style1.component.ts ***!
  \******************************************************************************/
/*! exports provided: ListStyle1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListStyle1Component", function() { return ListStyle1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _plugins_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../plugins.service */ "yq7U");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function ListStyle1Component_li_1_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i");
} if (rf & 2) {
    const listItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](listItem_r1.icon);
} }
function ListStyle1Component_li_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const listItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](listItem_r1.title);
} }
function ListStyle1Component_li_1_a_3_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i");
} if (rf & 2) {
    const listItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](listItem_r1.icon);
} }
function ListStyle1Component_li_1_a_3_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 8);
} }
function ListStyle1Component_li_1_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListStyle1Component_li_1_a_3_i_1_Template, 1, 2, "i", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ListStyle1Component_li_1_a_3_i_4_Template, 1, 0, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const listItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]( true && listItem_r1.children ? "active" : ctx_r4.activeLink(listItem_r1) ? "active" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-target", "#" + listItem_r1.name)("aria-controls", listItem_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", listItem_r1.isIconClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](listItem_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", listItem_r1.children);
} }
function ListStyle1Component_li_1_a_4_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i");
} if (rf & 2) {
    const listItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](listItem_r1.icon);
} }
function ListStyle1Component_li_1_a_4_small_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const listItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](listItem_r1.append);
} }
function ListStyle1Component_li_1_a_4_i_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 8);
} }
const _c0 = function (a0) { return [a0]; };
const _c1 = function () { return []; };
const _c2 = function () { return { exact: true }; };
function ListStyle1Component_li_1_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListStyle1Component_li_1_a_4_i_1_Template, 1, 2, "i", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ListStyle1Component_li_1_a_4_small_4_Template, 2, 1, "small", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ListStyle1Component_li_1_a_4_i_5_Template, 1, 0, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const listItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", listItem_r1.link != "" ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, listItem_r1.link) : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c1))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", listItem_r1.isIconClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](listItem_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", listItem_r1.append);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", listItem_r1.children);
} }
function ListStyle1Component_li_1_app_list_style1_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-list-style1", 12);
} if (rf & 2) {
    const listItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("collapse " + (ctx_r6.activeLink(listItem_r1) && listItem_r1.children ? "show" : ctx_r6.activeLink(listItem_r1) ? "show" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("listItems", listItem_r1.children)("id", listItem_r1.name);
} }
function ListStyle1Component_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListStyle1Component_li_1_i_1_Template, 1, 2, "i", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListStyle1Component_li_1_span_2_Template, 2, 1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ListStyle1Component_li_1_a_3_Template, 5, 7, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ListStyle1Component_li_1_a_4_Template, 6, 10, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ListStyle1Component_li_1_app_list_style1_5_Template, 1, 4, "app-list-style1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const listItem_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](listItem_r1.isHeading ? "iq-menu-title" : ctx_r0.activeLink(listItem_r1) && listItem_r1.children ? "active" : ctx_r0.activeLink(listItem_r1) ? "active" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", listItem_r1.isHeading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", listItem_r1.isHeading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !listItem_r1.isHeading && listItem_r1.children);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !listItem_r1.isHeading && !listItem_r1.children);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", listItem_r1.children);
} }
class ListStyle1Component {
    constructor(plugins, router) {
        this.plugins = plugins;
        this.router = router;
        this.listClass = 'iq-menu';
        this.collapseName = '';
    }
    ngOnInit() {
    }
    ngAfterContentInit() {
    }
    activeLink(item) {
        return this.plugins.getActiveLink(item, this.router.url);
    }
}
ListStyle1Component.ɵfac = function ListStyle1Component_Factory(t) { return new (t || ListStyle1Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_plugins_service__WEBPACK_IMPORTED_MODULE_1__["PluginsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
ListStyle1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListStyle1Component, selectors: [["app-list-style1"]], inputs: { listClass: "listClass", listItems: "listItems", collapseOpen: "collapseOpen", collapseName: "collapseName" }, decls: 2, vars: 3, consts: [[3, "class", 4, "ngFor", "ngForOf"], [3, "class", 4, "ngIf"], [4, "ngIf"], ["href", "javascript:void(0)", "data-toggle", "collapse", "aria-expanded", "false", 3, "class", 4, "ngIf"], ["href", "javascript:void(0)", "class", "iq-waves-effect", "routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions", 4, "ngIf"], ["listClass", "iq-submenu", "data-parent", "#iq-sidebar-toggle", 3, "class", "listItems", "id", 4, "ngIf"], ["href", "javascript:void(0)", "data-toggle", "collapse", "aria-expanded", "false"], ["class", "ri-arrow-right-s-line iq-arrow-right", 4, "ngIf"], [1, "ri-arrow-right-s-line", "iq-arrow-right"], ["href", "javascript:void(0)", "routerLinkActive", "active", 1, "iq-waves-effect", 3, "routerLink", "routerLinkActiveOptions"], ["class", "badge badge-pill badge-primary float-right font-weight-normal ml-auto", 4, "ngIf"], [1, "badge", "badge-pill", "badge-primary", "float-right", "font-weight-normal", "ml-auto"], ["listClass", "iq-submenu", "data-parent", "#iq-sidebar-toggle", 3, "listItems", "id"]], template: function ListStyle1Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListStyle1Component_li_1_Template, 6, 7, "li", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.listClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listItems);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], ListStyle1Component], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListStyle1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-list-style1',
                templateUrl: './list-style1.component.html',
                styles: []
            }]
    }], function () { return [{ type: _plugins_service__WEBPACK_IMPORTED_MODULE_1__["PluginsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, { listClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], listItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], collapseOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], collapseName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "gSEH":
/*!****************************************************************************!*\
  !*** ./src/app/components/sofbox/full-calendar/full-calendar.component.ts ***!
  \****************************************************************************/
/*! exports provided: FullCalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullCalendarComponent", function() { return FullCalendarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fullcalendar/daygrid */ "iOEq");
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fullcalendar/timegrid */ "p8AH");
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fullcalendar/angular */ "IvIE");





class FullCalendarComponent {
    constructor() {
        this.calendarWeekends = true;
        this.calendarPlugins = [_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_1__["default"], _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_2__["default"]];
    }
    ngOnInit() {
    }
}
FullCalendarComponent.ɵfac = function FullCalendarComponent_Factory(t) { return new (t || FullCalendarComponent)(); };
FullCalendarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FullCalendarComponent, selectors: [["app-full-calendar"]], inputs: { calendarWeekends: "calendarWeekends", calendarPlugins: "calendarPlugins", calendarEvents: "calendarEvents" }, decls: 1, vars: 3, consts: [["defaultView", "dayGridMonth", 3, "plugins", "events", "weekends"]], template: function FullCalendarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "full-calendar", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("plugins", ctx.calendarPlugins)("events", ctx.calendarEvents)("weekends", ctx.calendarWeekends);
    } }, directives: [_fullcalendar_angular__WEBPACK_IMPORTED_MODULE_3__["FullCalendarComponent"]], styles: ["@charset \"UTF-8\";\n.fc {\n  direction: ltr;\n  text-align: left;\n}\n.fc-rtl {\n  text-align: right;\n}\nbody .fc {\n  /* extra precedence to overcome jqui */\n  font-size: 1em;\n}\n/* Colors\n--------------------------------------------------------------------------------------------------*/\n.fc-highlight {\n  /* when user is selecting cells */\n  background: #bce8f1;\n  opacity: 0.3;\n}\n.fc-bgevent {\n  /* default look for background events */\n  background: #8fdf82;\n  opacity: 0.3;\n}\n.fc-nonbusiness {\n  /* default look for non-business-hours areas */\n  /* will inherit .fc-bgevent's styles */\n  background: #d7d7d7;\n}\n/* Popover\n--------------------------------------------------------------------------------------------------*/\n.fc-popover {\n  position: absolute;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);\n}\n.fc-popover .fc-header {\n  /* TODO: be more consistent with fc-head/fc-body */\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding: 2px 4px;\n}\n.fc-rtl .fc-popover .fc-header {\n  flex-direction: row-reverse;\n}\n.fc-popover .fc-header .fc-title {\n  margin: 0 2px;\n}\n.fc-popover .fc-header .fc-close {\n  cursor: pointer;\n  opacity: 0.65;\n  font-size: 1.1em;\n}\n/* Misc Reusable Components\n--------------------------------------------------------------------------------------------------*/\n.fc-divider {\n  border-style: solid;\n  border-width: 1px;\n}\nhr.fc-divider {\n  height: 0;\n  margin: 0;\n  padding: 0 0 2px;\n  /* height is unreliable across browsers, so use padding */\n  border-width: 1px 0;\n}\n.fc-bg,\n.fc-bgevent-skeleton,\n.fc-highlight-skeleton,\n.fc-mirror-skeleton {\n  /* these element should always cling to top-left/right corners */\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n}\n.fc-bg {\n  bottom: 0;\n  /* strech bg to bottom edge */\n}\n.fc-bg table {\n  height: 100%;\n  /* strech bg to bottom edge */\n}\n/* Tables\n--------------------------------------------------------------------------------------------------*/\n.fc table {\n  width: 100%;\n  box-sizing: border-box;\n  /* fix scrollbar issue in firefox */\n  table-layout: fixed;\n  border-collapse: collapse;\n  border-spacing: 0;\n  font-size: 1em;\n  /* normalize cross-browser */\n}\n.fc th {\n  text-align: center;\n}\n.fc th,\n.fc td {\n  border-style: solid;\n  border-width: 1px;\n  padding: 0;\n  vertical-align: top;\n}\n.fc td.fc-today {\n  border-style: double;\n  /* overcome neighboring borders */\n}\n/* Internal Nav Links\n--------------------------------------------------------------------------------------------------*/\na[data-goto] {\n  cursor: pointer;\n}\na[data-goto]:hover {\n  text-decoration: underline;\n}\n/* Fake Table Rows\n--------------------------------------------------------------------------------------------------*/\n.fc .fc-row {\n  /* extra precedence to overcome themes forcing a 1px border */\n  /* no visible border by default. but make available if need be (scrollbar width compensation) */\n  border-style: solid;\n  border-width: 0;\n}\n.fc-row table {\n  /* don't put left/right border on anything within a fake row.\n     the outer tbody will worry about this */\n  border-left: 0 hidden transparent;\n  border-right: 0 hidden transparent;\n  /* no bottom borders on rows */\n  border-bottom: 0 hidden transparent;\n}\n.fc-row:first-child table {\n  border-top: 0 hidden transparent;\n  /* no top border on first row */\n}\n/* Day Row (used within the header and the DayGrid)\n--------------------------------------------------------------------------------------------------*/\n.fc-row {\n  position: relative;\n}\n.fc-row .fc-bg {\n  z-index: 1;\n}\n/* highlighting cells & background event skeleton */\n.fc-row .fc-bgevent-skeleton,\n.fc-row .fc-highlight-skeleton {\n  bottom: 0;\n  /* stretch skeleton to bottom of row */\n}\n.fc-row .fc-bgevent-skeleton table,\n.fc-row .fc-highlight-skeleton table {\n  height: 100%;\n  /* stretch skeleton to bottom of row */\n}\n.fc-row .fc-highlight-skeleton td,\n.fc-row .fc-bgevent-skeleton td {\n  border-color: transparent;\n}\n.fc-row .fc-bgevent-skeleton {\n  z-index: 2;\n}\n.fc-row .fc-highlight-skeleton {\n  z-index: 3;\n}\n/*\nrow content (which contains day/week numbers and events) as well as \"mirror\" (which contains\ntemporary rendered events).\n*/\n.fc-row .fc-content-skeleton {\n  position: relative;\n  z-index: 4;\n  padding-bottom: 2px;\n  /* matches the space above the events */\n}\n.fc-row .fc-mirror-skeleton {\n  z-index: 5;\n}\n.fc .fc-row .fc-content-skeleton table,\n.fc .fc-row .fc-content-skeleton td,\n.fc .fc-row .fc-mirror-skeleton td {\n  /* see-through to the background below */\n  /* extra precedence to prevent theme-provided backgrounds */\n  background: none;\n  /* in case <td>s are globally styled */\n  border-color: transparent;\n}\n.fc-row .fc-content-skeleton td,\n.fc-row .fc-mirror-skeleton td {\n  /* don't put a border between events and/or the day number */\n  border-bottom: 0;\n}\n.fc-row .fc-content-skeleton tbody td,\n.fc-row .fc-mirror-skeleton tbody td {\n  /* don't put a border between event cells */\n  border-top: 0;\n}\n/* Scrolling Container\n--------------------------------------------------------------------------------------------------*/\n.fc-scroller {\n  -webkit-overflow-scrolling: touch;\n}\n/* TODO: move to timegrid/daygrid */\n.fc-scroller > .fc-day-grid,\n.fc-scroller > .fc-time-grid {\n  position: relative;\n  /* re-scope all positions */\n  width: 100%;\n  /* hack to force re-sizing this inner element when scrollbars appear/disappear */\n}\n/* Global Event Styles\n--------------------------------------------------------------------------------------------------*/\n.fc-event {\n  position: relative;\n  /* for resize handle and other inner positioning */\n  display: block;\n  /* make the <a> tag block */\n  font-size: 0.85em;\n  line-height: 1.4;\n  border-radius: 3px;\n  border: 1px solid #3788d8;\n}\n.fc-event,\n.fc-event-dot {\n  background-color: #3788d8;\n  /* default BACKGROUND color */\n}\n.fc-event,\n.fc-event:hover {\n  color: #fff;\n  /* default TEXT color */\n  text-decoration: none;\n  /* if <a> has an href */\n}\n.fc-event[href],\n.fc-event.fc-draggable {\n  cursor: pointer;\n  /* give events with links and draggable events a hand mouse pointer */\n}\n.fc-not-allowed,\n.fc-not-allowed .fc-event {\n  /* to override an event's custom cursor */\n  cursor: not-allowed;\n}\n.fc-event .fc-content {\n  position: relative;\n  z-index: 2;\n}\n/* resizer (cursor AND touch devices) */\n.fc-event .fc-resizer {\n  position: absolute;\n  z-index: 4;\n}\n/* resizer (touch devices) */\n.fc-event .fc-resizer {\n  display: none;\n}\n.fc-event.fc-allow-mouse-resize .fc-resizer,\n.fc-event.fc-selected .fc-resizer {\n  /* only show when hovering or selected (with touch) */\n  display: block;\n}\n/* hit area */\n.fc-event.fc-selected .fc-resizer:before {\n  /* 40x40 touch area */\n  content: \"\";\n  position: absolute;\n  z-index: 9999;\n  /* user of this util can scope within a lower z-index */\n  top: 50%;\n  left: 50%;\n  width: 40px;\n  height: 40px;\n  margin-left: -20px;\n  margin-top: -20px;\n}\n/* Event Selection (only for touch devices)\n--------------------------------------------------------------------------------------------------*/\n.fc-event.fc-selected {\n  z-index: 9999 !important;\n  /* overcomes inline z-index */\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\n}\n.fc-event.fc-selected:after {\n  content: \"\";\n  position: absolute;\n  z-index: 1;\n  /* same z-index as fc-bg, behind text */\n  /* overcome the borders */\n  top: -1px;\n  right: -1px;\n  bottom: -1px;\n  left: -1px;\n  /* darkening effect */\n  background: #000;\n  opacity: 0.25;\n}\n/* Event Dragging\n--------------------------------------------------------------------------------------------------*/\n.fc-event.fc-dragging.fc-selected {\n  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.3);\n}\n.fc-event.fc-dragging:not(.fc-selected) {\n  opacity: 0.75;\n}\n/* Horizontal Events\n--------------------------------------------------------------------------------------------------*/\n/* bigger touch area when selected */\n.fc-h-event.fc-selected:before {\n  content: \"\";\n  position: absolute;\n  z-index: 3;\n  /* below resizers */\n  top: -10px;\n  bottom: -10px;\n  left: 0;\n  right: 0;\n}\n/* events that are continuing to/from another week. kill rounded corners and butt up against edge */\n.fc-ltr .fc-h-event.fc-not-start,\n.fc-rtl .fc-h-event.fc-not-end {\n  margin-left: 0;\n  border-left-width: 0;\n  padding-left: 1px;\n  /* replace the border with padding */\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.fc-ltr .fc-h-event.fc-not-end,\n.fc-rtl .fc-h-event.fc-not-start {\n  margin-right: 0;\n  border-right-width: 0;\n  padding-right: 1px;\n  /* replace the border with padding */\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n/* resizer (cursor AND touch devices) */\n/* left resizer  */\n.fc-ltr .fc-h-event .fc-start-resizer,\n.fc-rtl .fc-h-event .fc-end-resizer {\n  cursor: w-resize;\n  left: -1px;\n  /* overcome border */\n}\n/* right resizer */\n.fc-ltr .fc-h-event .fc-end-resizer,\n.fc-rtl .fc-h-event .fc-start-resizer {\n  cursor: e-resize;\n  right: -1px;\n  /* overcome border */\n}\n/* resizer (mouse devices) */\n.fc-h-event.fc-allow-mouse-resize .fc-resizer {\n  width: 7px;\n  top: -1px;\n  /* overcome top border */\n  bottom: -1px;\n  /* overcome bottom border */\n}\n/* resizer (touch devices) */\n.fc-h-event.fc-selected .fc-resizer {\n  /* 8x8 little dot */\n  border-radius: 4px;\n  border-width: 1px;\n  width: 6px;\n  height: 6px;\n  border-style: solid;\n  border-color: inherit;\n  background: #fff;\n  /* vertically center */\n  top: 50%;\n  margin-top: -4px;\n}\n/* left resizer  */\n.fc-ltr .fc-h-event.fc-selected .fc-start-resizer,\n.fc-rtl .fc-h-event.fc-selected .fc-end-resizer {\n  margin-left: -4px;\n  /* centers the 8x8 dot on the left edge */\n}\n/* right resizer */\n.fc-ltr .fc-h-event.fc-selected .fc-end-resizer,\n.fc-rtl .fc-h-event.fc-selected .fc-start-resizer {\n  margin-right: -4px;\n  /* centers the 8x8 dot on the right edge */\n}\n/* DayGrid events\n----------------------------------------------------------------------------------------------------\nWe use the full \"fc-day-grid-event\" class instead of using descendants because the event won't\nbe a descendant of the grid when it is being dragged.\n*/\n.fc-day-grid-event {\n  margin: 1px 2px 0;\n  /* spacing between events and edges */\n  padding: 0 1px;\n}\ntr:first-child > td > .fc-day-grid-event {\n  margin-top: 2px;\n  /* a little bit more space before the first event */\n}\n.fc-mirror-skeleton tr:first-child > td > .fc-day-grid-event {\n  margin-top: 0;\n  /* except for mirror skeleton */\n}\n.fc-day-grid-event .fc-content {\n  /* force events to be one-line tall */\n  white-space: nowrap;\n  overflow: hidden;\n}\n.fc-day-grid-event .fc-time {\n  font-weight: bold;\n}\n/* resizer (cursor devices) */\n/* left resizer  */\n.fc-ltr .fc-day-grid-event.fc-allow-mouse-resize .fc-start-resizer,\n.fc-rtl .fc-day-grid-event.fc-allow-mouse-resize .fc-end-resizer {\n  margin-left: -2px;\n  /* to the day cell's edge */\n}\n/* right resizer */\n.fc-ltr .fc-day-grid-event.fc-allow-mouse-resize .fc-end-resizer,\n.fc-rtl .fc-day-grid-event.fc-allow-mouse-resize .fc-start-resizer {\n  margin-right: -2px;\n  /* to the day cell's edge */\n}\n/* Event Limiting\n--------------------------------------------------------------------------------------------------*/\n/* \"more\" link that represents hidden events */\na.fc-more {\n  margin: 1px 3px;\n  font-size: 0.85em;\n  cursor: pointer;\n  text-decoration: none;\n}\na.fc-more:hover {\n  text-decoration: underline;\n}\n.fc-limited {\n  /* rows and cells that are hidden because of a \"more\" link */\n  display: none;\n}\n/* popover that appears when \"more\" link is clicked */\n.fc-day-grid .fc-row {\n  z-index: 1;\n  /* make the \"more\" popover one higher than this */\n}\n.fc-more-popover {\n  z-index: 2;\n  width: 220px;\n}\n.fc-more-popover .fc-event-container {\n  padding: 10px;\n}\n/* Now Indicator\n--------------------------------------------------------------------------------------------------*/\n.fc-now-indicator {\n  position: absolute;\n  border: 0 solid red;\n}\n/* Utilities\n--------------------------------------------------------------------------------------------------*/\n.fc-unselectable {\n  -webkit-user-select: none;\n  user-select: none;\n  -webkit-touch-callout: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n/*\nTODO: more distinction between this file and common.css\n*/\n/* Colors\n--------------------------------------------------------------------------------------------------*/\n.fc-unthemed th,\n.fc-unthemed td,\n.fc-unthemed thead,\n.fc-unthemed tbody,\n.fc-unthemed .fc-divider,\n.fc-unthemed .fc-row,\n.fc-unthemed .fc-content,\n.fc-unthemed .fc-popover,\n.fc-unthemed .fc-list-view,\n.fc-unthemed .fc-list-heading td {\n  border-color: #ddd;\n}\n.fc-unthemed .fc-popover {\n  background-color: #fff;\n}\n.fc-unthemed .fc-divider,\n.fc-unthemed .fc-popover .fc-header,\n.fc-unthemed .fc-list-heading td {\n  background: #eee;\n}\n.fc-unthemed td.fc-today {\n  background: #fcf8e3;\n}\n.fc-unthemed .fc-disabled-day {\n  background: #d7d7d7;\n  opacity: 0.3;\n}\n/* Icons\n--------------------------------------------------------------------------------------------------\nfrom https://feathericons.com/ and built with IcoMoon\n*/\n@font-face {\n  font-family: \"fcicons\";\n  src: url(\"data:application/x-font-ttf;charset=utf-8;base64,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\") format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n.fc-icon {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: \"fcicons\" !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.fc-icon-chevron-left:before {\n  content: \"\uE900\";\n}\n.fc-icon-chevron-right:before {\n  content: \"\uE901\";\n}\n.fc-icon-chevrons-left:before {\n  content: \"\uE902\";\n}\n.fc-icon-chevrons-right:before {\n  content: \"\uE903\";\n}\n.fc-icon-minus-square:before {\n  content: \"\uE904\";\n}\n.fc-icon-plus-square:before {\n  content: \"\uE905\";\n}\n.fc-icon-x:before {\n  content: \"\uE906\";\n}\n.fc-icon {\n  display: inline-block;\n  width: 1em;\n  height: 1em;\n  text-align: center;\n}\n/* Buttons\n--------------------------------------------------------------------------------------------------\nLots taken from Flatly (MIT): https://bootswatch.com/4/flatly/bootstrap.css\n*/\n/* reset */\n.fc-button {\n  border-radius: 0;\n  overflow: visible;\n  text-transform: none;\n  margin: 0;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n.fc-button:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n}\n.fc-button {\n  -webkit-appearance: button;\n}\n.fc-button:not(:disabled) {\n  cursor: pointer;\n}\n.fc-button::-moz-focus-inner {\n  padding: 0;\n  border-style: none;\n}\n/* theme */\n.fc-button {\n  display: inline-block;\n  font-weight: 400;\n  color: #212529;\n  text-align: center;\n  vertical-align: middle;\n  -webkit-user-select: none;\n  user-select: none;\n  background-color: transparent;\n  border: 1px solid transparent;\n  padding: 0.4em 0.65em;\n  font-size: 1em;\n  line-height: 1.5;\n  border-radius: 0.25em;\n}\n.fc-button:hover {\n  color: #212529;\n  text-decoration: none;\n}\n.fc-button:focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(44, 62, 80, 0.25);\n}\n.fc-button:disabled {\n  opacity: 0.65;\n}\n/* \"primary\" coloring */\n.fc-button-primary {\n  color: #fff;\n  background-color: #2C3E50;\n  border-color: #2C3E50;\n}\n.fc-button-primary:hover {\n  color: #fff;\n  background-color: #1e2b37;\n  border-color: #1a252f;\n}\n.fc-button-primary:focus {\n  box-shadow: 0 0 0 0.2rem rgba(76, 91, 106, 0.5);\n}\n.fc-button-primary:disabled {\n  color: #fff;\n  background-color: #2C3E50;\n  border-color: #2C3E50;\n}\n.fc-button-primary:not(:disabled):active,\n.fc-button-primary:not(:disabled).fc-button-active {\n  color: #fff;\n  background-color: #1a252f;\n  border-color: #151e27;\n}\n.fc-button-primary:not(:disabled):active:focus,\n.fc-button-primary:not(:disabled).fc-button-active:focus {\n  box-shadow: 0 0 0 0.2rem rgba(76, 91, 106, 0.5);\n}\n/* icons within buttons */\n.fc-button .fc-icon {\n  vertical-align: middle;\n  font-size: 1.5em;\n}\n/* Buttons Groups\n--------------------------------------------------------------------------------------------------*/\n.fc-button-group {\n  position: relative;\n  display: inline-flex;\n  vertical-align: middle;\n}\n.fc-button-group > .fc-button {\n  position: relative;\n  flex: 1 1 auto;\n}\n.fc-button-group > .fc-button:hover {\n  z-index: 1;\n}\n.fc-button-group > .fc-button:focus,\n.fc-button-group > .fc-button:active,\n.fc-button-group > .fc-button.fc-button-active {\n  z-index: 1;\n}\n.fc-button-group > .fc-button:not(:first-child) {\n  margin-left: -1px;\n}\n.fc-button-group > .fc-button:not(:last-child) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.fc-button-group > .fc-button:not(:first-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n/* Popover\n--------------------------------------------------------------------------------------------------*/\n.fc-unthemed .fc-popover {\n  border-width: 1px;\n  border-style: solid;\n}\n/* List View\n--------------------------------------------------------------------------------------------------*/\n.fc-unthemed .fc-list-item:hover td {\n  background-color: #f5f5f5;\n}\n/* Toolbar\n--------------------------------------------------------------------------------------------------*/\n.fc-toolbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.fc-toolbar.fc-header-toolbar {\n  margin-bottom: 1.5em;\n}\n.fc-toolbar.fc-footer-toolbar {\n  margin-top: 1.5em;\n}\n/* inner content */\n.fc-toolbar > * > :not(:first-child) {\n  margin-left: 0.75em;\n}\n.fc-toolbar h2 {\n  font-size: 1.75em;\n  margin: 0;\n}\n/* View Structure\n--------------------------------------------------------------------------------------------------*/\n.fc-view-container {\n  position: relative;\n}\n/* undo twitter bootstrap's box-sizing rules. normalizes positioning techniques */\n/* don't do this for the toolbar because we'll want bootstrap to style those buttons as some pt */\n.fc-view-container *,\n.fc-view-container *:before,\n.fc-view-container *:after {\n  box-sizing: content-box;\n}\n.fc-view,\n.fc-view > table {\n  /* so dragged elements can be above the view's main element */\n  position: relative;\n  z-index: 1;\n}\n@media print {\n  .fc {\n    max-width: 100% !important;\n  }\n\n  /* Global Event Restyling\n  --------------------------------------------------------------------------------------------------*/\n  .fc-event {\n    background: #fff !important;\n    color: #000 !important;\n    page-break-inside: avoid;\n  }\n\n  .fc-event .fc-resizer {\n    display: none;\n  }\n\n  /* Table & Day-Row Restyling\n  --------------------------------------------------------------------------------------------------*/\n  .fc th,\n.fc td,\n.fc hr,\n.fc thead,\n.fc tbody,\n.fc-row {\n    border-color: #ccc !important;\n    background: #fff !important;\n  }\n\n  /* kill the overlaid, absolutely-positioned components */\n  /* common... */\n  .fc-bg,\n.fc-bgevent-skeleton,\n.fc-highlight-skeleton,\n.fc-mirror-skeleton,\n.fc-bgevent-container,\n.fc-business-container,\n.fc-highlight-container,\n.fc-mirror-container {\n    display: none;\n  }\n\n  /* don't force a min-height on rows (for DayGrid) */\n  .fc tbody .fc-row {\n    height: auto !important;\n    /* undo height that JS set in distributeHeight */\n    min-height: 0 !important;\n    /* undo the min-height from each view's specific stylesheet */\n  }\n\n  .fc tbody .fc-row .fc-content-skeleton {\n    position: static;\n    /* undo .fc-rigid */\n    padding-bottom: 0 !important;\n    /* use a more border-friendly method for this... */\n  }\n\n  .fc tbody .fc-row .fc-content-skeleton tbody tr:last-child td {\n    /* only works in newer browsers */\n    padding-bottom: 1em;\n    /* ...gives space within the skeleton. also ensures min height in a way */\n  }\n\n  .fc tbody .fc-row .fc-content-skeleton table {\n    /* provides a min-height for the row, but only effective for IE, which exaggerates this value,\n       making it look more like 3em. for other browers, it will already be this tall */\n    height: 1em;\n  }\n\n  /* Undo month-view event limiting. Display all events and hide the \"more\" links\n  --------------------------------------------------------------------------------------------------*/\n  .fc-more-cell,\n.fc-more {\n    display: none !important;\n  }\n\n  .fc tr.fc-limited {\n    display: table-row !important;\n  }\n\n  .fc td.fc-limited {\n    display: table-cell !important;\n  }\n\n  .fc-popover {\n    display: none;\n    /* never display the \"more..\" popover in print mode */\n  }\n\n  /* TimeGrid Restyling\n  --------------------------------------------------------------------------------------------------*/\n  /* undo the min-height 100% trick used to fill the container's height */\n  .fc-time-grid {\n    min-height: 0 !important;\n  }\n\n  /* don't display the side axis at all (\"all-day\" and time cells) */\n  .fc-timeGrid-view .fc-axis {\n    display: none;\n  }\n\n  /* don't display the horizontal lines */\n  .fc-slats,\n.fc-time-grid hr {\n    /* this hr is used when height is underused and needs to be filled */\n    display: none !important;\n    /* important overrides inline declaration */\n  }\n\n  /* let the container that holds the events be naturally positioned and create real height */\n  .fc-time-grid .fc-content-skeleton {\n    position: static;\n  }\n\n  /* in case there are no events, we still want some height */\n  .fc-time-grid .fc-content-skeleton table {\n    height: 4em;\n  }\n\n  /* kill the horizontal spacing made by the event container. event margins will be done below */\n  .fc-time-grid .fc-event-container {\n    margin: 0 !important;\n  }\n\n  /* TimeGrid *Event* Restyling\n  --------------------------------------------------------------------------------------------------*/\n  /* naturally position events, vertically stacking them */\n  .fc-time-grid .fc-event {\n    position: static !important;\n    margin: 3px 2px !important;\n  }\n\n  /* for events that continue to a future day, give the bottom border back */\n  .fc-time-grid .fc-event.fc-not-end {\n    border-bottom-width: 1px !important;\n  }\n\n  /* indicate the event continues via \"...\" text */\n  .fc-time-grid .fc-event.fc-not-end:after {\n    content: \"...\";\n  }\n\n  /* for events that are continuations from previous days, give the top border back */\n  .fc-time-grid .fc-event.fc-not-start {\n    border-top-width: 1px !important;\n  }\n\n  /* indicate the event is a continuation via \"...\" text */\n  .fc-time-grid .fc-event.fc-not-start:before {\n    content: \"...\";\n  }\n\n  /* time */\n  /* undo a previous declaration and let the time text span to a second line */\n  .fc-time-grid .fc-event .fc-time {\n    white-space: normal !important;\n  }\n\n  /* hide the the time that is normally displayed... */\n  .fc-time-grid .fc-event .fc-time span {\n    display: none;\n  }\n\n  /* ...replace it with a more verbose version (includes AM/PM) stored in an html attribute */\n  .fc-time-grid .fc-event .fc-time:after {\n    content: attr(data-full);\n  }\n\n  /* Vertical Scroller & Containers\n  --------------------------------------------------------------------------------------------------*/\n  /* kill the scrollbars and allow natural height */\n  .fc-scroller,\n.fc-day-grid-container,\n.fc-time-grid-container {\n    /* */\n    overflow: visible !important;\n    height: auto !important;\n  }\n\n  /* kill the horizontal border/padding used to compensate for scrollbars */\n  .fc-row {\n    border: 0 !important;\n    margin: 0 !important;\n  }\n\n  /* Button Controls\n  --------------------------------------------------------------------------------------------------*/\n  .fc-button-group,\n.fc button {\n    display: none;\n    /* don't display any button-related controls */\n  }\n}\n/* DayGridView\n--------------------------------------------------------------------------------------------------*/\n/* day row structure */\n.fc-dayGridWeek-view .fc-content-skeleton,\n.fc-dayGridDay-view .fc-content-skeleton {\n  /* there may be week numbers in these views, so no padding-top */\n  padding-bottom: 1em;\n  /* ensure a space at bottom of cell for user selecting/clicking */\n}\n.fc-dayGrid-view .fc-body .fc-row {\n  min-height: 4em;\n  /* ensure that all rows are at least this tall */\n}\n/* a \"rigid\" row will take up a constant amount of height because content-skeleton is absolute */\n.fc-row.fc-rigid {\n  overflow: hidden;\n}\n.fc-row.fc-rigid .fc-content-skeleton {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n}\n/* week and day number styling */\n.fc-day-top.fc-other-month {\n  opacity: 0.3;\n}\n.fc-dayGrid-view .fc-week-number,\n.fc-dayGrid-view .fc-day-number {\n  padding: 2px;\n}\n.fc-dayGrid-view th.fc-week-number,\n.fc-dayGrid-view th.fc-day-number {\n  padding: 0 2px;\n  /* column headers can't have as much v space */\n}\n.fc-ltr .fc-dayGrid-view .fc-day-top .fc-day-number {\n  float: right;\n}\n.fc-rtl .fc-dayGrid-view .fc-day-top .fc-day-number {\n  float: left;\n}\n.fc-ltr .fc-dayGrid-view .fc-day-top .fc-week-number {\n  float: left;\n  border-radius: 0 0 3px 0;\n}\n.fc-rtl .fc-dayGrid-view .fc-day-top .fc-week-number {\n  float: right;\n  border-radius: 0 0 0 3px;\n}\n.fc-dayGrid-view .fc-day-top .fc-week-number {\n  min-width: 1.5em;\n  text-align: center;\n  background-color: #f2f2f2;\n  color: #808080;\n}\n/* when week/day number have own column */\n.fc-dayGrid-view td.fc-week-number {\n  text-align: center;\n}\n.fc-dayGrid-view td.fc-week-number > * {\n  /* work around the way we do column resizing and ensure a minimum width */\n  display: inline-block;\n  min-width: 1.25em;\n}\n.fc-day-grid-event {color: white!important;}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AZnVsbGNhbGVuZGFyL2NvcmUvbWFpbi5jc3MiLCJub2RlX21vZHVsZXMvQGZ1bGxjYWxlbmRhci9kYXlncmlkL21haW4uY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NvZmJveC9mdWxsLWNhbGVuZGFyL2Z1bGwtY2FsZW5kYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFDaEI7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLHNDQUFzQztFQUN0QyxjQUFjO0FBQ2hCO0FBRUE7bUdBQ21HO0FBQ25HO0VBQ0UsaUNBQWlDO0VBQ2pDLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7QUFFQTtFQUNFLHVDQUF1QztFQUN2QyxtQkFBbUI7RUFDbkIsWUFBWTtBQUNkO0FBRUE7RUFDRSw4Q0FBOEM7RUFDOUMsc0NBQXNDO0VBQ3RDLG1CQUFtQjtBQUNyQjtBQUVBO21HQUNtRztBQUNuRztFQUNFLGtCQUFrQjtFQUNsQix5Q0FBeUM7QUFDM0M7QUFFQTtFQUNFLGtEQUFrRDtFQUNsRCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7QUFFQTtFQUNFLGFBQWE7QUFDZjtBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7QUFFQTttR0FDbUc7QUFDbkc7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxTQUFTO0VBQ1QsU0FBUztFQUNULGdCQUFnQjtFQUNoQix5REFBeUQ7RUFDekQsbUJBQW1CO0FBQ3JCO0FBRUE7Ozs7RUFJRSxnRUFBZ0U7RUFDaEUsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtBQUNWO0FBRUE7RUFDRSxTQUFTO0VBQ1QsNkJBQTZCO0FB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O0VBQ3JCLGlCQUFpQjtBQUNuQjtBQzNFQSxvQkFBb0Isc0JBQXNCLENBQUMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NvZmJveC9mdWxsLWNhbGVuZGFyL2Z1bGwtY2FsZW5kYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5mYyB7XG4gIGRpcmVjdGlvbjogbHRyO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uZmMtcnRsIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbmJvZHkgLmZjIHtcbiAgLyogZXh0cmEgcHJlY2VkZW5jZSB0byBvdmVyY29tZSBqcXVpICovXG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuXG4vKiBDb2xvcnNcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi5mYy1oaWdobGlnaHQge1xuICAvKiB3aGVuIHVzZXIgaXMgc2VsZWN0aW5nIGNlbGxzICovXG4gIGJhY2tncm91bmQ6ICNiY2U4ZjE7XG4gIG9wYWNpdHk6IDAuMztcbn1cblxuLmZjLWJnZXZlbnQge1xuICAvKiBkZWZhdWx0IGxvb2sgZm9yIGJhY2tncm91bmQgZXZlbnRzICovXG4gIGJhY2tncm91bmQ6ICM4ZmRmODI7XG4gIG9wYWNpdHk6IDAuMztcbn1cblxuLmZjLW5vbmJ1c2luZXNzIHtcbiAgLyogZGVmYXVsdCBsb29rIGZvciBub24tYnVzaW5lc3MtaG91cnMgYXJlYXMgKi9cbiAgLyogd2lsbCBpbmhlcml0IC5mYy1iZ2V2ZW50J3Mgc3R5bGVzICovXG4gIGJhY2tncm91bmQ6ICNkN2Q3ZDc7XG59XG5cbi8qIFBvcG92ZXJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi5mYy1wb3BvdmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3gtc2hhZG93OiAwIDJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbn1cblxuLmZjLXBvcG92ZXIgLmZjLWhlYWRlciB7XG4gIC8qIFRPRE86IGJlIG1vcmUgY29uc2lzdGVudCB3aXRoIGZjLWhlYWQvZmMtYm9keSAqL1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDJweCA0cHg7XG59XG5cbi5mYy1ydGwgLmZjLXBvcG92ZXIgLmZjLWhlYWRlciB7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbn1cblxuLmZjLXBvcG92ZXIgLmZjLWhlYWRlciAuZmMtdGl0bGUge1xuICBtYXJnaW46IDAgMnB4O1xufVxuXG4uZmMtcG9wb3ZlciAuZmMtaGVhZGVyIC5mYy1jbG9zZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3BhY2l0eTogMC42NTtcbiAgZm9udC1zaXplOiAxLjFlbTtcbn1cblxuLyogTWlzYyBSZXVzYWJsZSBDb21wb25lbnRzXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4uZmMtZGl2aWRlciB7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMXB4O1xufVxuXG5oci5mYy1kaXZpZGVyIHtcbiAgaGVpZ2h0OiAwO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDAgMCAycHg7XG4gIC8qIGhlaWdodCBpcyB1bnJlbGlhYmxlIGFjcm9zcyBicm93c2Vycywgc28gdXNlIHBhZGRpbmcgKi9cbiAgYm9yZGVyLXdpZHRoOiAxcHggMDtcbn1cblxuLmZjLWJnLFxuLmZjLWJnZXZlbnQtc2tlbGV0b24sXG4uZmMtaGlnaGxpZ2h0LXNrZWxldG9uLFxuLmZjLW1pcnJvci1za2VsZXRvbiB7XG4gIC8qIHRoZXNlIGVsZW1lbnQgc2hvdWxkIGFsd2F5cyBjbGluZyB0byB0b3AtbGVmdC9yaWdodCBjb3JuZXJzICovXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxuLmZjLWJnIHtcbiAgYm90dG9tOiAwO1xuICAvKiBzdHJlY2ggYmcgdG8gYm90dG9tIGVkZ2UgKi9cbn1cblxuLmZjLWJnIHRhYmxlIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICAvKiBzdHJlY2ggYmcgdG8gYm90dG9tIGVkZ2UgKi9cbn1cblxuLyogVGFibGVzXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4uZmMgdGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLyogZml4IHNjcm9sbGJhciBpc3N1ZSBpbiBmaXJlZm94ICovXG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xuICBmb250LXNpemU6IDFlbTtcbiAgLyogbm9ybWFsaXplIGNyb3NzLWJyb3dzZXIgKi9cbn1cblxuLmZjIHRoIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZmMgdGgsXG4uZmMgdGQge1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgcGFkZGluZzogMDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLmZjIHRkLmZjLXRvZGF5IHtcbiAgYm9yZGVyLXN0eWxlOiBkb3VibGU7XG4gIC8qIG92ZXJjb21lIG5laWdoYm9yaW5nIGJvcmRlcnMgKi9cbn1cblxuLyogSW50ZXJuYWwgTmF2IExpbmtzXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5hW2RhdGEtZ290b10ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmFbZGF0YS1nb3RvXTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4vKiBGYWtlIFRhYmxlIFJvd3Ncbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi5mYyAuZmMtcm93IHtcbiAgLyogZXh0cmEgcHJlY2VkZW5jZSB0byBvdmVyY29tZSB0aGVtZXMgZm9yY2luZyBhIDFweCBib3JkZXIgKi9cbiAgLyogbm8gdmlzaWJsZSBib3JkZXIgYnkgZGVmYXVsdC4gYnV0IG1ha2UgYXZhaWxhYmxlIGlmIG5lZWQgYmUgKHNjcm9sbGJhciB3aWR0aCBjb21wZW5zYXRpb24pICovXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMDtcbn1cblxuLmZjLXJvdyB0YWJsZSB7XG4gIC8qIGRvbid0IHB1dCBsZWZ0L3JpZ2h0IGJvcmRlciBvbiBhbnl0aGluZyB3aXRoaW4gYSBmYWtlIHJvdy5cbiAgICAgdGhlIG91dGVyIHRib2R5IHdpbGwgd29ycnkgYWJvdXQgdGhpcyAqL1xuICBib3JkZXItbGVmdDogMCBoaWRkZW4gdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogMCBoaWRkZW4gdHJhbnNwYXJlbnQ7XG4gIC8qIG5vIGJvdHRvbSBib3JkZXJzIG9uIHJvd3MgKi9cbiAgYm9yZGVyLWJvdHRvbTogMCBoaWRkZW4gdHJhbnNwYXJlbnQ7XG59XG5cbi5mYy1yb3c6Zmlyc3QtY2hpbGQgdGFibGUge1xuICBib3JkZXItdG9wOiAwIGhpZGRlbiB0cmFuc3BhcmVudDtcbiAgLyogbm8gdG9wIGJvcmRlciBvbiBmaXJzdCByb3cgKi9cbn1cblxuLyogRGF5IFJvdyAodXNlZCB3aXRoaW4gdGhlIGhlYWRlciBhbmQgdGhlIERheUdyaWQpXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4uZmMtcm93IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZmMtcm93IC5mYy1iZyB7XG4gIHotaW5kZXg6IDE7XG59XG5cbi8qIGhpZ2hsaWdodGluZyBjZWxscyAmIGJhY2tncm91bmQgZXZlbnQgc2tlbGV0b24gKi9cbi5mYy1yb3cgLmZjLWJnZXZlbnQtc2tlbGV0b24sXG4uZmMtcm93IC5mYy1oaWdobGlnaHQtc2tlbGV0b24ge1xuICBib3R0b206IDA7XG4gIC8qIHN0cmV0Y2ggc2tlbGV0b24gdG8gYm90dG9tIG9mIHJvdyAqL1xufVxuXG4uZmMtcm93IC5mYy1iZ2V2ZW50LXNrZWxldG9uIHRhYmxlLFxuLmZjLXJvdyAuZmMtaGlnaGxpZ2h0LXNrZWxldG9uIHRhYmxlIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICAvKiBzdHJldGNoIHNrZWxldG9uIHRvIGJvdHRvbSBvZiByb3cgKi9cbn1cblxuLmZjLXJvdyAuZmMtaGlnaGxpZ2h0LXNrZWxldG9uIHRkLFxuLmZjLXJvdyAuZmMtYmdldmVudC1za2VsZXRvbiB0ZCB7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5mYy1yb3cgLmZjLWJnZXZlbnQtc2tlbGV0b24ge1xuICB6LWluZGV4OiAyO1xufVxuXG4uZmMtcm93IC5mYy1oaWdobGlnaHQtc2tlbGV0b24ge1xuICB6LWluZGV4OiAzO1xufVxuXG4vKlxucm93IGNvbnRlbnQgKHdoaWNoIGNvbnRhaW5zIGRheS93ZWVrIG51bWJlcnMgYW5kIGV2ZW50cykgYXMgd2VsbCBhcyBcIm1pcnJvclwiICh3aGljaCBjb250YWluc1xudGVtcG9yYXJ5IHJlbmRlcmVkIGV2ZW50cykuXG4qL1xuLmZjLXJvdyAuZmMtY29udGVudC1za2VsZXRvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogNDtcbiAgcGFkZGluZy1ib3R0b206IDJweDtcbiAgLyogbWF0Y2hlcyB0aGUgc3BhY2UgYWJvdmUgdGhlIGV2ZW50cyAqL1xufVxuXG4uZmMtcm93IC5mYy1taXJyb3Itc2tlbGV0b24ge1xuICB6LWluZGV4OiA1O1xufVxuXG4uZmMgLmZjLXJvdyAuZmMtY29udGVudC1za2VsZXRvbiB0YWJsZSxcbi5mYyAuZmMtcm93IC5mYy1jb250ZW50LXNrZWxldG9uIHRkLFxuLmZjIC5mYy1yb3cgLmZjLW1pcnJvci1za2VsZXRvbiB0ZCB7XG4gIC8qIHNlZS10aHJvdWdoIHRvIHRoZSBiYWNrZ3JvdW5kIGJlbG93ICovXG4gIC8qIGV4dHJhIHByZWNlZGVuY2UgdG8gcHJldmVudCB0aGVtZS1wcm92aWRlZCBiYWNrZ3JvdW5kcyAqL1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICAvKiBpbiBjYXNlIDx0ZD5zIGFyZSBnbG9iYWxseSBzdHlsZWQgKi9cbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmZjLXJvdyAuZmMtY29udGVudC1za2VsZXRvbiB0ZCxcbi5mYy1yb3cgLmZjLW1pcnJvci1za2VsZXRvbiB0ZCB7XG4gIC8qIGRvbid0IHB1dCBhIGJvcmRlciBiZXR3ZWVuIGV2ZW50cyBhbmQvb3IgdGhlIGRheSBudW1iZXIgKi9cbiAgYm9yZGVyLWJvdHRvbTogMDtcbn1cblxuLmZjLXJvdyAuZmMtY29udGVudC1za2VsZXRvbiB0Ym9keSB0ZCxcbi5mYy1yb3cgLmZjLW1pcnJvci1za2VsZXRvbiB0Ym9keSB0ZCB7XG4gIC8qIGRvbid0IHB1dCBhIGJvcmRlciBiZXR3ZWVuIGV2ZW50IGNlbGxzICovXG4gIGJvcmRlci10b3A6IDA7XG59XG5cbi8qIFNjcm9sbGluZyBDb250YWluZXJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi5mYy1zY3JvbGxlciB7XG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbn1cblxuLyogVE9ETzogbW92ZSB0byB0aW1lZ3JpZC9kYXlncmlkICovXG4uZmMtc2Nyb2xsZXIgPiAuZmMtZGF5LWdyaWQsXG4uZmMtc2Nyb2xsZXIgPiAuZmMtdGltZS1ncmlkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAvKiByZS1zY29wZSBhbGwgcG9zaXRpb25zICovXG4gIHdpZHRoOiAxMDAlO1xuICAvKiBoYWNrIHRvIGZvcmNlIHJlLXNpemluZyB0aGlzIGlubmVyIGVsZW1lbnQgd2hlbiBzY3JvbGxiYXJzIGFwcGVhci9kaXNhcHBlYXIgKi9cbn1cblxuLyogR2xvYmFsIEV2ZW50IFN0eWxlc1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLmZjLWV2ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAvKiBmb3IgcmVzaXplIGhhbmRsZSBhbmQgb3RoZXIgaW5uZXIgcG9zaXRpb25pbmcgKi9cbiAgZGlzcGxheTogYmxvY2s7XG4gIC8qIG1ha2UgdGhlIDxhPiB0YWcgYmxvY2sgKi9cbiAgZm9udC1zaXplOiAwLjg1ZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzM3ODhkODtcbn1cblxuLmZjLWV2ZW50LFxuLmZjLWV2ZW50LWRvdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNzg4ZDg7XG4gIC8qIGRlZmF1bHQgQkFDS0dST1VORCBjb2xvciAqL1xufVxuXG4uZmMtZXZlbnQsXG4uZmMtZXZlbnQ6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgLyogZGVmYXVsdCBURVhUIGNvbG9yICovXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgLyogaWYgPGE+IGhhcyBhbiBocmVmICovXG59XG5cbi5mYy1ldmVudFtocmVmXSxcbi5mYy1ldmVudC5mYy1kcmFnZ2FibGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC8qIGdpdmUgZXZlbnRzIHdpdGggbGlua3MgYW5kIGRyYWdnYWJsZSBldmVudHMgYSBoYW5kIG1vdXNlIHBvaW50ZXIgKi9cbn1cblxuLmZjLW5vdC1hbGxvd2VkLFxuLmZjLW5vdC1hbGxvd2VkIC5mYy1ldmVudCB7XG4gIC8qIHRvIG92ZXJyaWRlIGFuIGV2ZW50J3MgY3VzdG9tIGN1cnNvciAqL1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG4uZmMtZXZlbnQgLmZjLWNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG59XG5cbi8qIHJlc2l6ZXIgKGN1cnNvciBBTkQgdG91Y2ggZGV2aWNlcykgKi9cbi5mYy1ldmVudCAuZmMtcmVzaXplciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogNDtcbn1cblxuLyogcmVzaXplciAodG91Y2ggZGV2aWNlcykgKi9cbi5mYy1ldmVudCAuZmMtcmVzaXplciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5mYy1ldmVudC5mYy1hbGxvdy1tb3VzZS1yZXNpemUgLmZjLXJlc2l6ZXIsXG4uZmMtZXZlbnQuZmMtc2VsZWN0ZWQgLmZjLXJlc2l6ZXIge1xuICAvKiBvbmx5IHNob3cgd2hlbiBob3ZlcmluZyBvciBzZWxlY3RlZCAod2l0aCB0b3VjaCkgKi9cbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qIGhpdCBhcmVhICovXG4uZmMtZXZlbnQuZmMtc2VsZWN0ZWQgLmZjLXJlc2l6ZXI6YmVmb3JlIHtcbiAgLyogNDB4NDAgdG91Y2ggYXJlYSAqL1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5OTk7XG4gIC8qIHVzZXIgb2YgdGhpcyB1dGlsIGNhbiBzY29wZSB3aXRoaW4gYSBsb3dlciB6LWluZGV4ICovXG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtMjBweDtcbiAgbWFyZ2luLXRvcDogLTIwcHg7XG59XG5cbi8qIEV2ZW50IFNlbGVjdGlvbiAob25seSBmb3IgdG91Y2ggZGV2aWNlcylcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi5mYy1ldmVudC5mYy1zZWxlY3RlZCB7XG4gIHotaW5kZXg6IDk5OTkgIWltcG9ydGFudDtcbiAgLyogb3ZlcmNvbWVzIGlubGluZSB6LWluZGV4ICovXG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi5mYy1ldmVudC5mYy1zZWxlY3RlZDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgLyogc2FtZSB6LWluZGV4IGFzIGZjLWJnLCBiZWhpbmQgdGV4dCAqL1xuICAvKiBvdmVyY29tZSB0aGUgYm9yZGVycyAqL1xuICB0b3A6IC0xcHg7XG4gIHJpZ2h0OiAtMXB4O1xuICBib3R0b206IC0xcHg7XG4gIGxlZnQ6IC0xcHg7XG4gIC8qIGRhcmtlbmluZyBlZmZlY3QgKi9cbiAgYmFja2dyb3VuZDogIzAwMDtcbiAgb3BhY2l0eTogMC4yNTtcbn1cblxuLyogRXZlbnQgRHJhZ2dpbmdcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi5mYy1ldmVudC5mYy1kcmFnZ2luZy5mYy1zZWxlY3RlZCB7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDdweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG5cbi5mYy1ldmVudC5mYy1kcmFnZ2luZzpub3QoLmZjLXNlbGVjdGVkKSB7XG4gIG9wYWNpdHk6IDAuNzU7XG59XG5cbi8qIEhvcml6b250YWwgRXZlbnRzXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4vKiBiaWdnZXIgdG91Y2ggYXJlYSB3aGVuIHNlbGVjdGVkICovXG4uZmMtaC1ldmVudC5mYy1zZWxlY3RlZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDM7XG4gIC8qIGJlbG93IHJlc2l6ZXJzICovXG4gIHRvcDogLTEwcHg7XG4gIGJvdHRvbTogLTEwcHg7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4vKiBldmVudHMgdGhhdCBhcmUgY29udGludWluZyB0by9mcm9tIGFub3RoZXIgd2Vlay4ga2lsbCByb3VuZGVkIGNvcm5lcnMgYW5kIGJ1dHQgdXAgYWdhaW5zdCBlZGdlICovXG4uZmMtbHRyIC5mYy1oLWV2ZW50LmZjLW5vdC1zdGFydCxcbi5mYy1ydGwgLmZjLWgtZXZlbnQuZmMtbm90LWVuZCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBib3JkZXItbGVmdC13aWR0aDogMDtcbiAgcGFkZGluZy1sZWZ0OiAxcHg7XG4gIC8qIHJlcGxhY2UgdGhlIGJvcmRlciB3aXRoIHBhZGRpbmcgKi9cbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbn1cblxuLmZjLWx0ciAuZmMtaC1ldmVudC5mYy1ub3QtZW5kLFxuLmZjLXJ0bCAuZmMtaC1ldmVudC5mYy1ub3Qtc3RhcnQge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIGJvcmRlci1yaWdodC13aWR0aDogMDtcbiAgcGFkZGluZy1yaWdodDogMXB4O1xuICAvKiByZXBsYWNlIHRoZSBib3JkZXIgd2l0aCBwYWRkaW5nICovXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbn1cblxuLyogcmVzaXplciAoY3Vyc29yIEFORCB0b3VjaCBkZXZpY2VzKSAqL1xuLyogbGVmdCByZXNpemVyICAqL1xuLmZjLWx0ciAuZmMtaC1ldmVudCAuZmMtc3RhcnQtcmVzaXplcixcbi5mYy1ydGwgLmZjLWgtZXZlbnQgLmZjLWVuZC1yZXNpemVyIHtcbiAgY3Vyc29yOiB3LXJlc2l6ZTtcbiAgbGVmdDogLTFweDtcbiAgLyogb3ZlcmNvbWUgYm9yZGVyICovXG59XG5cbi8qIHJpZ2h0IHJlc2l6ZXIgKi9cbi5mYy1sdHIgLmZjLWgtZXZlbnQgLmZjLWVuZC1yZXNpemVyLFxuLmZjLXJ0bCAuZmMtaC1ldmVudCAuZmMtc3RhcnQtcmVzaXplciB7XG4gIGN1cnNvcjogZS1yZXNpemU7XG4gIHJpZ2h0OiAtMXB4O1xuICAvKiBvdmVyY29tZSBib3JkZXIgKi9cbn1cblxuLyogcmVzaXplciAobW91c2UgZGV2aWNlcykgKi9cbi5mYy1oLWV2ZW50LmZjLWFsbG93LW1vdXNlLXJlc2l6ZSAuZmMtcmVzaXplciB7XG4gIHdpZHRoOiA3cHg7XG4gIHRvcDogLTFweDtcbiAgLyogb3ZlcmNvbWUgdG9wIGJvcmRlciAqL1xuICBib3R0b206IC0xcHg7XG4gIC8qIG92ZXJjb21lIGJvdHRvbSBib3JkZXIgKi9cbn1cblxuLyogcmVzaXplciAodG91Y2ggZGV2aWNlcykgKi9cbi5mYy1oLWV2ZW50LmZjLXNlbGVjdGVkIC5mYy1yZXNpemVyIHtcbiAgLyogOHg4IGxpdHRsZSBkb3QgKi9cbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgd2lkdGg6IDZweDtcbiAgaGVpZ2h0OiA2cHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogaW5oZXJpdDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgLyogdmVydGljYWxseSBjZW50ZXIgKi9cbiAgdG9wOiA1MCU7XG4gIG1hcmdpbi10b3A6IC00cHg7XG59XG5cbi8qIGxlZnQgcmVzaXplciAgKi9cbi5mYy1sdHIgLmZjLWgtZXZlbnQuZmMtc2VsZWN0ZWQgLmZjLXN0YXJ0LXJlc2l6ZXIsXG4uZmMtcnRsIC5mYy1oLWV2ZW50LmZjLXNlbGVjdGVkIC5mYy1lbmQtcmVzaXplciB7XG4gIG1hcmdpbi1sZWZ0OiAtNHB4O1xuICAvKiBjZW50ZXJzIHRoZSA4eDggZG90IG9uIHRoZSBsZWZ0IGVkZ2UgKi9cbn1cblxuLyogcmlnaHQgcmVzaXplciAqL1xuLmZjLWx0ciAuZmMtaC1ldmVudC5mYy1zZWxlY3RlZCAuZmMtZW5kLXJlc2l6ZXIsXG4uZmMtcnRsIC5mYy1oLWV2ZW50LmZjLXNlbGVjdGVkIC5mYy1zdGFydC1yZXNpemVyIHtcbiAgbWFyZ2luLXJpZ2h0OiAtNHB4O1xuICAvKiBjZW50ZXJzIHRoZSA4eDggZG90IG9uIHRoZSByaWdodCBlZGdlICovXG59XG5cbi8qIERheUdyaWQgZXZlbnRzXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5XZSB1c2UgdGhlIGZ1bGwgXCJmYy1kYXktZ3JpZC1ldmVudFwiIGNsYXNzIGluc3RlYWQgb2YgdXNpbmcgZGVzY2VuZGFudHMgYmVjYXVzZSB0aGUgZXZlbnQgd29uJ3RcbmJlIGEgZGVzY2VuZGFudCBvZiB0aGUgZ3JpZCB3aGVuIGl0IGlzIGJlaW5nIGRyYWdnZWQuXG4qL1xuLmZjLWRheS1ncmlkLWV2ZW50IHtcbiAgbWFyZ2luOiAxcHggMnB4IDA7XG4gIC8qIHNwYWNpbmcgYmV0d2VlbiBldmVudHMgYW5kIGVkZ2VzICovXG4gIHBhZGRpbmc6IDAgMXB4O1xufVxuXG50cjpmaXJzdC1jaGlsZCA+IHRkID4gLmZjLWRheS1ncmlkLWV2ZW50IHtcbiAgbWFyZ2luLXRvcDogMnB4O1xuICAvKiBhIGxpdHRsZSBiaXQgbW9yZSBzcGFjZSBiZWZvcmUgdGhlIGZpcnN0IGV2ZW50ICovXG59XG5cbi5mYy1taXJyb3Itc2tlbGV0b24gdHI6Zmlyc3QtY2hpbGQgPiB0ZCA+IC5mYy1kYXktZ3JpZC1ldmVudCB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIC8qIGV4Y2VwdCBmb3IgbWlycm9yIHNrZWxldG9uICovXG59XG5cbi5mYy1kYXktZ3JpZC1ldmVudCAuZmMtY29udGVudCB7XG4gIC8qIGZvcmNlIGV2ZW50cyB0byBiZSBvbmUtbGluZSB0YWxsICovXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5mYy1kYXktZ3JpZC1ldmVudCAuZmMtdGltZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4vKiByZXNpemVyIChjdXJzb3IgZGV2aWNlcykgKi9cbi8qIGxlZnQgcmVzaXplciAgKi9cbi5mYy1sdHIgLmZjLWRheS1ncmlkLWV2ZW50LmZjLWFsbG93LW1vdXNlLXJlc2l6ZSAuZmMtc3RhcnQtcmVzaXplcixcbi5mYy1ydGwgLmZjLWRheS1ncmlkLWV2ZW50LmZjLWFsbG93LW1vdXNlLXJlc2l6ZSAuZmMtZW5kLXJlc2l6ZXIge1xuICBtYXJnaW4tbGVmdDogLTJweDtcbiAgLyogdG8gdGhlIGRheSBjZWxsJ3MgZWRnZSAqL1xufVxuXG4vKiByaWdodCByZXNpemVyICovXG4uZmMtbHRyIC5mYy1kYXktZ3JpZC1ldmVudC5mYy1hbGxvdy1tb3VzZS1yZXNpemUgLmZjLWVuZC1yZXNpemVyLFxuLmZjLXJ0bCAuZmMtZGF5LWdyaWQtZXZlbnQuZmMtYWxsb3ctbW91c2UtcmVzaXplIC5mYy1zdGFydC1yZXNpemVyIHtcbiAgbWFyZ2luLXJpZ2h0OiAtMnB4O1xuICAvKiB0byB0aGUgZGF5IGNlbGwncyBlZGdlICovXG59XG5cbi8qIEV2ZW50IExpbWl0aW5nXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4vKiBcIm1vcmVcIiBsaW5rIHRoYXQgcmVwcmVzZW50cyBoaWRkZW4gZXZlbnRzICovXG5hLmZjLW1vcmUge1xuICBtYXJnaW46IDFweCAzcHg7XG4gIGZvbnQtc2l6ZTogMC44NWVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuYS5mYy1tb3JlOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5mYy1saW1pdGVkIHtcbiAgLyogcm93cyBhbmQgY2VsbHMgdGhhdCBhcmUgaGlkZGVuIGJlY2F1c2Ugb2YgYSBcIm1vcmVcIiBsaW5rICovXG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qIHBvcG92ZXIgdGhhdCBhcHBlYXJzIHdoZW4gXCJtb3JlXCIgbGluayBpcyBjbGlja2VkICovXG4uZmMtZGF5LWdyaWQgLmZjLXJvdyB7XG4gIHotaW5kZXg6IDE7XG4gIC8qIG1ha2UgdGhlIFwibW9yZVwiIHBvcG92ZXIgb25lIGhpZ2hlciB0aGFuIHRoaXMgKi9cbn1cblxuLmZjLW1vcmUtcG9wb3ZlciB7XG4gIHotaW5kZXg6IDI7XG4gIHdpZHRoOiAyMjBweDtcbn1cblxuLmZjLW1vcmUtcG9wb3ZlciAuZmMtZXZlbnQtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLyogTm93IEluZGljYXRvclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLmZjLW5vdy1pbmRpY2F0b3Ige1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlcjogMCBzb2xpZCByZWQ7XG59XG5cbi8qIFV0aWxpdGllc1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLmZjLXVuc2VsZWN0YWJsZSB7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG59XG5cbi8qXG5UT0RPOiBtb3JlIGRpc3RpbmN0aW9uIGJldHdlZW4gdGhpcyBmaWxlIGFuZCBjb21tb24uY3NzXG4qL1xuLyogQ29sb3JzXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4uZmMtdW50aGVtZWQgdGgsXG4uZmMtdW50aGVtZWQgdGQsXG4uZmMtdW50aGVtZWQgdGhlYWQsXG4uZmMtdW50aGVtZWQgdGJvZHksXG4uZmMtdW50aGVtZWQgLmZjLWRpdmlkZXIsXG4uZmMtdW50aGVtZWQgLmZjLXJvdyxcbi5mYy11bnRoZW1lZCAuZmMtY29udGVudCxcbi5mYy11bnRoZW1lZCAuZmMtcG9wb3Zlcixcbi5mYy11bnRoZW1lZCAuZmMtbGlzdC12aWV3LFxuLmZjLXVudGhlbWVkIC5mYy1saXN0LWhlYWRpbmcgdGQge1xuICBib3JkZXItY29sb3I6ICNkZGQ7XG59XG5cbi5mYy11bnRoZW1lZCAuZmMtcG9wb3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi5mYy11bnRoZW1lZCAuZmMtZGl2aWRlcixcbi5mYy11bnRoZW1lZCAuZmMtcG9wb3ZlciAuZmMtaGVhZGVyLFxuLmZjLXVudGhlbWVkIC5mYy1saXN0LWhlYWRpbmcgdGQge1xuICBiYWNrZ3JvdW5kOiAjZWVlO1xufVxuXG4uZmMtdW50aGVtZWQgdGQuZmMtdG9kYXkge1xuICBiYWNrZ3JvdW5kOiAjZmNmOGUzO1xufVxuXG4uZmMtdW50aGVtZWQgLmZjLWRpc2FibGVkLWRheSB7XG4gIGJhY2tncm91bmQ6ICNkN2Q3ZDc7XG4gIG9wYWNpdHk6IDAuMztcbn1cblxuLyogSWNvbnNcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5mcm9tIGh0dHBzOi8vZmVhdGhlcmljb25zLmNvbS8gYW5kIGJ1aWx0IHdpdGggSWNvTW9vblxuKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJmY2ljb25zXCI7XG4gIHNyYzogdXJsKFwiZGF0YTphcHBsaWNhdGlvbi94LWZvbnQtdHRmO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LEFBRUFBQUFMQUlBQUF3QXdUMU12TWc4U0JmQUFBQUM4QUFBQVlHTnRZWEFYVnRLTkFBQUJIQUFBQUZSbllYTndBQUFBRUFBQUFYQUFBQUFJWjJ4NVpnWXlkeElBQUFGNEFBQUZOR2hsWVdRVUo3Y0lBQUFHckFBQUFEWm9hR1ZoQjIwRHpBQUFCdVFBQUFBa2FHMTBlQ0lBQmhRQUFBY0lBQUFBTEd4dlkyRUQ0QVU2QUFBSE5BQUFBQmh0WVhod0FBOEFqQUFBQjB3QUFBQWdibUZ0WlhzcjY5MEFBQWRzQUFBQmhuQnZjM1FBQXdBQUFBQUk5QUFBQUNBQUF3UEFBWkFBQlFBQUFwa0N6QUFBQUk4Q21RTE1BQUFCNndBekFRa0FBQUFBQUFBQUFBQUFBQUFBQUFBQkVBQUFBQUFBQUFBQUFBQUFBQUFBQUFCQUFBRHBCZ1BBLzhBQVFBUEFBRUFBQUFBQkFBQUFBQUFBQUFBQUFBQWdBQUFBQUFBREFBQUFBd0FBQUJ3QUFRQURBQUFBSEFBREFBRUFBQUFjQUFRQU9BQUFBQW9BQ0FBQ0FBSUFBUUFnNlFiLy9mLy9BQUFBQUFBZzZRRC8vZi8vQUFILzR4Y0VBQU1BQVFBQUFBQUFBQUFBQUFBQUFRQUIvLzhBRHdBQkFBQUFBQUFBQUFBQUFnQUFOemtCQUFBQUFBRUFBQUFBQUFBQUFBQUNBQUEzT1FFQUFBQUFBUUFBQUFBQUFBQUFBQUlBQURjNUFRQUFBQUFCQVdJQWpRS2VBc2tBRXdBQUpTYzNOalFuSmlJSEFRWVVGd0VXTWpjMk5DY0NudUxpRFEwTUpBei9BQTBOQVFBTUpBd05EY25pNGd3akRRd00vd0FOSXd6L0FBME5EQ01OQUFBQUFRRmlBSTBDbmdMSkFCTUFBQ1VCTmpRbkFTWWlCd1lVSHdFSEJoUVhGakkzQVo0QkFBME4vd0FNSkF3TkRlTGlEUTBNSkF5TkFRQU1JdzBCQUF3TURTTU00dUlOSXd3TkRRQUFBQUlBNGdDM0F4NENuZ0FUQUNjQUFDVW5OelkwSnlZaUR3RUdGQjhCRmpJM05qUW5JU2MzTmpRbkppSVBBUVlVSHdFV01qYzJOQ2NCODdlM0RRME1JdzNWRFEzVkRTTU1EUTBCSzdlM0RRME1KQXpWRFEzVkRDUU1EUTN6dUxjTUpBd05EZFVOSXd6V0RBd05Jd3k0dHd3a0RBME4xUTBqRE5ZTURBMGpEQUFBQWdEaUFMY0RIZ0tlQUJNQUp3QUFKVGMyTkM4QkppSUhCaFFmQVFjR0ZCY1dNamNoTnpZMEx3RW1JZ2NHRkI4QkJ3WVVGeFl5TndKSjFRME4xUTBqREEwTnQ3Y05EUXdqRGY3VjFRME4xUXdrREEwTnQ3Y05EUXdrRExmV0RDTU4xUTBORENRTXQ3Z01JdzBNRE5ZTUl3M1ZEUTBNSkF5M3VBd2pEUXdNQUFBREFGVUFBQU9yQTFVQU13Qm9BSGNBQUJNaUJnY09BUWNPQVFjT0FSVVJGQllYSGdFWEhnRVhIZ0V6SVRJMk56NEJOejRCTno0Qk5SRTBKaWN1QVNjdUFTY3VBU01GSVRJV0Z4NEJGeDRCRng0QkZSRVVCZ2NPQVFjT0FRY09BU01oSWlZbkxnRW5MZ0VuTGdFMUVUUTJOejRCTno0Qk56NEJNeE1oTWpZMU5DWWpJU0lHRlJRV005VU5HQXdMRlFrSkRnVUZCUVVGQlE0SkNSVUxEQmdOQWxZTkdBd0xGUWtKRGdVRkJRVUZCUTRKQ1JVTERCZ04vYW9DVmdRSUJBUUhBd01GQVFJQkFRSUJCUU1EQndRRUNBVDlxZ1FJQkFRSEF3TUZBUUlCQVFJQkJRTURCd1FFQ0FTQUFWWVJHUmtSL3FvUkdSa1JBMVVGQkFVT0NRa1ZEQXNaRGYyckRSa0xEQlVKQ0E0RkJRVUZCUVVPQ1FnVkRBc1pEUUpWRFJrTERCVUpDUTRGQkFWVkFnRUNCUU1DQndRRUNBWDlxd1FKQXdRSEF3TUZBUUlDQWdJQkJRTURCd1FEQ1FRQ1ZRVUlCQVFIQWdNRkFnRUMvb0FaRWhFWkdSRVNHUUFBQUFBREFGVUFBQU9yQTFVQU13Qm9BSWtBQUJNaUJnY09BUWNPQVFjT0FSVVJGQllYSGdFWEhnRVhIZ0V6SVRJMk56NEJOejRCTno0Qk5SRTBKaWN1QVNjdUFTY3VBU01GSVRJV0Z4NEJGeDRCRng0QkZSRVVCZ2NPQVFjT0FRY09BU01oSWlZbkxnRW5MZ0VuTGdFMUVUUTJOejRCTno0Qk56NEJNeE16RlJRV016STJQUUV6TWpZMU5DWXJBVFUwSmlNaUJoMEJJeUlHRlJRV005VU5HQXdMRlFrSkRnVUZCUVVGQlE0SkNSVUxEQmdOQWxZTkdBd0xGUWtKRGdVRkJRVUZCUTRKQ1JVTERCZ04vYW9DVmdRSUJBUUhBd01GQVFJQkFRSUJCUU1EQndRRUNBVDlxZ1FJQkFRSEF3TUZBUUlCQVFJQkJRTURCd1FFQ0FTQWdCa1NFaG1BRVJrWkVZQVpFaElaZ0JFWkdSRURWUVVFQlE0SkNSVU1DeGtOL2FzTkdRc01GUWtJRGdVRkJRVUZCUTRKQ0JVTUN4a05BbFVOR1FzTUZRa0pEZ1VFQlZVQ0FRSUZBd0lIQkFRSUJmMnJCQWtEQkFjREF3VUJBZ0lDQWdFRkF3TUhCQU1KQkFKVkJRZ0VCQWNDQXdVQ0FRTCtnSUFTR1JrU2dCa1NFUm1BRWhrWkVvQVpFUklaQUFBQkFPSUFqUU1lQXNrQUlBQUFFeGNIQmhRWEZqSS9BUmNXTWpjMk5DOEJOelkwSnlZaUR3RW5KaUlIQmhRWDR1TGlEUTBNSkF6aTRnd2tEQTBONHVJTkRRd2tET0xpRENRTURRMENqZUxpRFNNTURRM2g0UTBORENNTjR1SU1JdzBNRE9MaURBd05Jd3dBQUFBQkFBQUFBUUFBYTVuMHkxOFBQUFVBQ3dRQUFBQUFBTml2T1ZzQUFBQUEySzg1V3dBQUFBQURxd05WQUFBQUNBQUNBQUFBQUFBQUFBRUFBQVBBLzhBQUFBUUFBQUFBQUFPckFBRUFBQUFBQUFBQUFBQUFBQUFBQUFBTEJBQUFBQUFBQUFBQUFBQUFBZ0FBQUFRQUFXSUVBQUZpQkFBQTRnUUFBT0lFQUFCVkJBQUFWUVFBQU9JQUFBQUFBQW9BRkFBZUFFUUFhZ0NxQU9vQm5nSmtBcG9BQVFBQUFBc0FpZ0FEQUFBQUFBQUNBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQTRBcmdBQkFBQUFBQUFCQUFjQUFBQUJBQUFBQUFBQ0FBY0FZQUFCQUFBQUFBQURBQWNBTmdBQkFBQUFBQUFFQUFjQWRRQUJBQUFBQUFBRkFBc0FGUUFCQUFBQUFBQUdBQWNBU3dBQkFBQUFBQUFLQUJvQWlnQURBQUVFQ1FBQkFBNEFCd0FEQUFFRUNRQUNBQTRBWndBREFBRUVDUUFEQUE0QVBRQURBQUVFQ1FBRUFBNEFmQUFEQUFFRUNRQUZBQllBSUFBREFBRUVDUUFHQUE0QVVnQURBQUVFQ1FBS0FEUUFwR1pqYVdOdmJuTUFaZ0JqQUdrQVl3QnZBRzRBYzFabGNuTnBiMjRnTVM0d0FGWUFaUUJ5QUhNQWFRQnZBRzRBSUFBeEFDNEFNR1pqYVdOdmJuTUFaZ0JqQUdrQVl3QnZBRzRBYzJaamFXTnZibk1BWmdCakFHa0FZd0J2QUc0QWMxSmxaM1ZzWVhJQVVnQmxBR2NBZFFCc0FHRUFjbVpqYVdOdmJuTUFaZ0JqQUdrQVl3QnZBRzRBYzBadmJuUWdaMlZ1WlhKaGRHVmtJR0o1SUVsamIwMXZiMjR1QUVZQWJ3QnVBSFFBSUFCbkFHVUFiZ0JsQUhJQVlRQjBBR1VBWkFBZ0FHSUFlUUFnQUVrQVl3QnZBRTBBYndCdkFHNEFMZ0FBQUFNQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQT1cIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbi5mYy1pY29uIHtcbiAgLyogdXNlICFpbXBvcnRhbnQgdG8gcHJldmVudCBpc3N1ZXMgd2l0aCBicm93c2VyIGV4dGVuc2lvbnMgdGhhdCBjaGFuZ2UgZm9udHMgKi9cbiAgZm9udC1mYW1pbHk6IFwiZmNpY29uc1wiICFpbXBvcnRhbnQ7XG4gIHNwZWFrOiBub25lO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtdmFyaWFudDogbm9ybWFsO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIC8qIEJldHRlciBGb250IFJlbmRlcmluZyA9PT09PT09PT09PSAqL1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuLmZjLWljb24tY2hldnJvbi1sZWZ0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7qSAXCI7XG59XG5cbi5mYy1pY29uLWNoZXZyb24tcmlnaHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLupIFcIjtcbn1cblxuLmZjLWljb24tY2hldnJvbnMtbGVmdDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6kglwiO1xufVxuXG4uZmMtaWNvbi1jaGV2cm9ucy1yaWdodDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6kg1wiO1xufVxuXG4uZmMtaWNvbi1taW51cy1zcXVhcmU6YmVmb3JlIHtcbiAgY29udGVudDogXCLupIRcIjtcbn1cblxuLmZjLWljb24tcGx1cy1zcXVhcmU6YmVmb3JlIHtcbiAgY29udGVudDogXCLupIVcIjtcbn1cblxuLmZjLWljb24teDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6khlwiO1xufVxuXG4uZmMtaWNvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDFlbTtcbiAgaGVpZ2h0OiAxZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLyogQnV0dG9uc1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkxvdHMgdGFrZW4gZnJvbSBGbGF0bHkgKE1JVCk6IGh0dHBzOi8vYm9vdHN3YXRjaC5jb20vNC9mbGF0bHkvYm9vdHN0cmFwLmNzc1xuKi9cbi8qIHJlc2V0ICovXG4uZmMtYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xufVxuXG4uZmMtYnV0dG9uOmZvY3VzIHtcbiAgb3V0bGluZTogMXB4IGRvdHRlZDtcbiAgb3V0bGluZTogNXB4IGF1dG8gLXdlYmtpdC1mb2N1cy1yaW5nLWNvbG9yO1xufVxuXG4uZmMtYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XG59XG5cbi5mYy1idXR0b246bm90KDpkaXNhYmxlZCkge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5mYy1idXR0b246Oi1tb3otZm9jdXMtaW5uZXIge1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXItc3R5bGU6IG5vbmU7XG59XG5cbi8qIHRoZW1lICovXG4uZmMtYnV0dG9uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzIxMjUyOTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmc6IDAuNGVtIDAuNjVlbTtcbiAgZm9udC1zaXplOiAxZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcbn1cblxuLmZjLWJ1dHRvbjpob3ZlciB7XG4gIGNvbG9yOiAjMjEyNTI5O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5mYy1idXR0b246Zm9jdXMge1xuICBvdXRsaW5lOiAwO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDQ0LCA2MiwgODAsIDAuMjUpO1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSg0NCwgNjIsIDgwLCAwLjI1KTtcbn1cblxuLmZjLWJ1dHRvbjpkaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNjU7XG59XG5cbi8qIFwicHJpbWFyeVwiIGNvbG9yaW5nICovXG4uZmMtYnV0dG9uLXByaW1hcnkge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJDM0U1MDtcbiAgYm9yZGVyLWNvbG9yOiAjMkMzRTUwO1xufVxuXG4uZmMtYnV0dG9uLXByaW1hcnk6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFlMmIzNztcbiAgYm9yZGVyLWNvbG9yOiAjMWEyNTJmO1xufVxuXG4uZmMtYnV0dG9uLXByaW1hcnk6Zm9jdXMge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDc2LCA5MSwgMTA2LCAwLjUpO1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSg3NiwgOTEsIDEwNiwgMC41KTtcbn1cblxuLmZjLWJ1dHRvbi1wcmltYXJ5OmRpc2FibGVkIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyQzNFNTA7XG4gIGJvcmRlci1jb2xvcjogIzJDM0U1MDtcbn1cblxuLmZjLWJ1dHRvbi1wcmltYXJ5Om5vdCg6ZGlzYWJsZWQpOmFjdGl2ZSxcbi5mYy1idXR0b24tcHJpbWFyeTpub3QoOmRpc2FibGVkKS5mYy1idXR0b24tYWN0aXZlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYTI1MmY7XG4gIGJvcmRlci1jb2xvcjogIzE1MWUyNztcbn1cblxuLmZjLWJ1dHRvbi1wcmltYXJ5Om5vdCg6ZGlzYWJsZWQpOmFjdGl2ZTpmb2N1cyxcbi5mYy1idXR0b24tcHJpbWFyeTpub3QoOmRpc2FibGVkKS5mYy1idXR0b24tYWN0aXZlOmZvY3VzIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSg3NiwgOTEsIDEwNiwgMC41KTtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoNzYsIDkxLCAxMDYsIDAuNSk7XG59XG5cbi8qIGljb25zIHdpdGhpbiBidXR0b25zICovXG4uZmMtYnV0dG9uIC5mYy1pY29uIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgZm9udC1zaXplOiAxLjVlbTtcbn1cblxuLyogQnV0dG9ucyBHcm91cHNcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi5mYy1idXR0b24tZ3JvdXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IC13ZWJraXQtaW5saW5lLWJveDtcbiAgZGlzcGxheTogLW1zLWlubGluZS1mbGV4Ym94O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmZjLWJ1dHRvbi1ncm91cCA+IC5mYy1idXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XG4gIC1tcy1mbGV4OiAxIDEgYXV0bztcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbi5mYy1idXR0b24tZ3JvdXAgPiAuZmMtYnV0dG9uOmhvdmVyIHtcbiAgei1pbmRleDogMTtcbn1cblxuLmZjLWJ1dHRvbi1ncm91cCA+IC5mYy1idXR0b246Zm9jdXMsXG4uZmMtYnV0dG9uLWdyb3VwID4gLmZjLWJ1dHRvbjphY3RpdmUsXG4uZmMtYnV0dG9uLWdyb3VwID4gLmZjLWJ1dHRvbi5mYy1idXR0b24tYWN0aXZlIHtcbiAgei1pbmRleDogMTtcbn1cblxuLmZjLWJ1dHRvbi1ncm91cCA+IC5mYy1idXR0b246bm90KDpmaXJzdC1jaGlsZCkge1xuICBtYXJnaW4tbGVmdDogLTFweDtcbn1cblxuLmZjLWJ1dHRvbi1ncm91cCA+IC5mYy1idXR0b246bm90KDpsYXN0LWNoaWxkKSB7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbn1cblxuLmZjLWJ1dHRvbi1ncm91cCA+IC5mYy1idXR0b246bm90KDpmaXJzdC1jaGlsZCkge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xufVxuXG4vKiBQb3BvdmVyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4uZmMtdW50aGVtZWQgLmZjLXBvcG92ZXIge1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbn1cblxuLyogTGlzdCBWaWV3XG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4uZmMtdW50aGVtZWQgLmZjLWxpc3QtaXRlbTpob3ZlciB0ZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG59XG5cbi8qIFRvb2xiYXJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi5mYy10b29sYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZmMtdG9vbGJhci5mYy1oZWFkZXItdG9vbGJhciB7XG4gIG1hcmdpbi1ib3R0b206IDEuNWVtO1xufVxuXG4uZmMtdG9vbGJhci5mYy1mb290ZXItdG9vbGJhciB7XG4gIG1hcmdpbi10b3A6IDEuNWVtO1xufVxuXG4vKiBpbm5lciBjb250ZW50ICovXG4uZmMtdG9vbGJhciA+ICogPiA6bm90KDpmaXJzdC1jaGlsZCkge1xuICBtYXJnaW4tbGVmdDogMC43NWVtO1xufVxuXG4uZmMtdG9vbGJhciBoMiB7XG4gIGZvbnQtc2l6ZTogMS43NWVtO1xuICBtYXJnaW46IDA7XG59XG5cbi8qIFZpZXcgU3RydWN0dXJlXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4uZmMtdmlldy1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi8qIHVuZG8gdHdpdHRlciBib290c3RyYXAncyBib3gtc2l6aW5nIHJ1bGVzLiBub3JtYWxpemVzIHBvc2l0aW9uaW5nIHRlY2huaXF1ZXMgKi9cbi8qIGRvbid0IGRvIHRoaXMgZm9yIHRoZSB0b29sYmFyIGJlY2F1c2Ugd2UnbGwgd2FudCBib290c3RyYXAgdG8gc3R5bGUgdGhvc2UgYnV0dG9ucyBhcyBzb21lIHB0ICovXG4uZmMtdmlldy1jb250YWluZXIgKixcbi5mYy12aWV3LWNvbnRhaW5lciAqOmJlZm9yZSxcbi5mYy12aWV3LWNvbnRhaW5lciAqOmFmdGVyIHtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG59XG5cbi5mYy12aWV3LFxuLmZjLXZpZXcgPiB0YWJsZSB7XG4gIC8qIHNvIGRyYWdnZWQgZWxlbWVudHMgY2FuIGJlIGFib3ZlIHRoZSB2aWV3J3MgbWFpbiBlbGVtZW50ICovXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbn1cblxuQG1lZGlhIHByaW50IHtcbiAgLmZjIHtcbiAgICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC8qIEdsb2JhbCBFdmVudCBSZXN0eWxpbmdcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAuZmMtZXZlbnQge1xuICAgIGJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xuICAgIHBhZ2UtYnJlYWstaW5zaWRlOiBhdm9pZDtcbiAgfVxuXG4gIC5mYy1ldmVudCAuZmMtcmVzaXplciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC8qIFRhYmxlICYgRGF5LVJvdyBSZXN0eWxpbmdcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAuZmMgdGgsXG4uZmMgdGQsXG4uZmMgaHIsXG4uZmMgdGhlYWQsXG4uZmMgdGJvZHksXG4uZmMtcm93IHtcbiAgICBib3JkZXItY29sb3I6ICNjY2MgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XG4gIH1cblxuICAvKiBraWxsIHRoZSBvdmVybGFpZCwgYWJzb2x1dGVseS1wb3NpdGlvbmVkIGNvbXBvbmVudHMgKi9cbiAgLyogY29tbW9uLi4uICovXG4gIC5mYy1iZyxcbi5mYy1iZ2V2ZW50LXNrZWxldG9uLFxuLmZjLWhpZ2hsaWdodC1za2VsZXRvbixcbi5mYy1taXJyb3Itc2tlbGV0b24sXG4uZmMtYmdldmVudC1jb250YWluZXIsXG4uZmMtYnVzaW5lc3MtY29udGFpbmVyLFxuLmZjLWhpZ2hsaWdodC1jb250YWluZXIsXG4uZmMtbWlycm9yLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC8qIGRvbid0IGZvcmNlIGEgbWluLWhlaWdodCBvbiByb3dzIChmb3IgRGF5R3JpZCkgKi9cbiAgLmZjIHRib2R5IC5mYy1yb3cge1xuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgIC8qIHVuZG8gaGVpZ2h0IHRoYXQgSlMgc2V0IGluIGRpc3RyaWJ1dGVIZWlnaHQgKi9cbiAgICBtaW4taGVpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gICAgLyogdW5kbyB0aGUgbWluLWhlaWdodCBmcm9tIGVhY2ggdmlldydzIHNwZWNpZmljIHN0eWxlc2hlZXQgKi9cbiAgfVxuXG4gIC5mYyB0Ym9keSAuZmMtcm93IC5mYy1jb250ZW50LXNrZWxldG9uIHtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgIC8qIHVuZG8gLmZjLXJpZ2lkICovXG4gICAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgICAvKiB1c2UgYSBtb3JlIGJvcmRlci1mcmllbmRseSBtZXRob2QgZm9yIHRoaXMuLi4gKi9cbiAgfVxuXG4gIC5mYyB0Ym9keSAuZmMtcm93IC5mYy1jb250ZW50LXNrZWxldG9uIHRib2R5IHRyOmxhc3QtY2hpbGQgdGQge1xuICAgIC8qIG9ubHkgd29ya3MgaW4gbmV3ZXIgYnJvd3NlcnMgKi9cbiAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xuICAgIC8qIC4uLmdpdmVzIHNwYWNlIHdpdGhpbiB0aGUgc2tlbGV0b24uIGFsc28gZW5zdXJlcyBtaW4gaGVpZ2h0IGluIGEgd2F5ICovXG4gIH1cblxuICAuZmMgdGJvZHkgLmZjLXJvdyAuZmMtY29udGVudC1za2VsZXRvbiB0YWJsZSB7XG4gICAgLyogcHJvdmlkZXMgYSBtaW4taGVpZ2h0IGZvciB0aGUgcm93LCBidXQgb25seSBlZmZlY3RpdmUgZm9yIElFLCB3aGljaCBleGFnZ2VyYXRlcyB0aGlzIHZhbHVlLFxuICAgICAgIG1ha2luZyBpdCBsb29rIG1vcmUgbGlrZSAzZW0uIGZvciBvdGhlciBicm93ZXJzLCBpdCB3aWxsIGFscmVhZHkgYmUgdGhpcyB0YWxsICovXG4gICAgaGVpZ2h0OiAxZW07XG4gIH1cblxuICAvKiBVbmRvIG1vbnRoLXZpZXcgZXZlbnQgbGltaXRpbmcuIERpc3BsYXkgYWxsIGV2ZW50cyBhbmQgaGlkZSB0aGUgXCJtb3JlXCIgbGlua3NcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAuZmMtbW9yZS1jZWxsLFxuLmZjLW1vcmUge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5mYyB0ci5mYy1saW1pdGVkIHtcbiAgICBkaXNwbGF5OiB0YWJsZS1yb3cgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5mYyB0ZC5mYy1saW1pdGVkIHtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZmMtcG9wb3ZlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICAvKiBuZXZlciBkaXNwbGF5IHRoZSBcIm1vcmUuLlwiIHBvcG92ZXIgaW4gcHJpbnQgbW9kZSAqL1xuICB9XG5cbiAgLyogVGltZUdyaWQgUmVzdHlsaW5nXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgLyogdW5kbyB0aGUgbWluLWhlaWdodCAxMDAlIHRyaWNrIHVzZWQgdG8gZmlsbCB0aGUgY29udGFpbmVyJ3MgaGVpZ2h0ICovXG4gIC5mYy10aW1lLWdyaWQge1xuICAgIG1pbi1oZWlnaHQ6IDAgIWltcG9ydGFudDtcbiAgfVxuXG4gIC8qIGRvbid0IGRpc3BsYXkgdGhlIHNpZGUgYXhpcyBhdCBhbGwgKFwiYWxsLWRheVwiIGFuZCB0aW1lIGNlbGxzKSAqL1xuICAuZmMtdGltZUdyaWQtdmlldyAuZmMtYXhpcyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC8qIGRvbid0IGRpc3BsYXkgdGhlIGhvcml6b250YWwgbGluZXMgKi9cbiAgLmZjLXNsYXRzLFxuLmZjLXRpbWUtZ3JpZCBociB7XG4gICAgLyogdGhpcyBociBpcyB1c2VkIHdoZW4gaGVpZ2h0IGlzIHVuZGVydXNlZCBhbmQgbmVlZHMgdG8gYmUgZmlsbGVkICovXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgIC8qIGltcG9ydGFudCBvdmVycmlkZXMgaW5saW5lIGRlY2xhcmF0aW9uICovXG4gIH1cblxuICAvKiBsZXQgdGhlIGNvbnRhaW5lciB0aGF0IGhvbGRzIHRoZSBldmVudHMgYmUgbmF0dXJhbGx5IHBvc2l0aW9uZWQgYW5kIGNyZWF0ZSByZWFsIGhlaWdodCAqL1xuICAuZmMtdGltZS1ncmlkIC5mYy1jb250ZW50LXNrZWxldG9uIHtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICB9XG5cbiAgLyogaW4gY2FzZSB0aGVyZSBhcmUgbm8gZXZlbnRzLCB3ZSBzdGlsbCB3YW50IHNvbWUgaGVpZ2h0ICovXG4gIC5mYy10aW1lLWdyaWQgLmZjLWNvbnRlbnQtc2tlbGV0b24gdGFibGUge1xuICAgIGhlaWdodDogNGVtO1xuICB9XG5cbiAgLyoga2lsbCB0aGUgaG9yaXpvbnRhbCBzcGFjaW5nIG1hZGUgYnkgdGhlIGV2ZW50IGNvbnRhaW5lci4gZXZlbnQgbWFyZ2lucyB3aWxsIGJlIGRvbmUgYmVsb3cgKi9cbiAgLmZjLXRpbWUtZ3JpZCAuZmMtZXZlbnQtY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgfVxuXG4gIC8qIFRpbWVHcmlkICpFdmVudCogUmVzdHlsaW5nXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgLyogbmF0dXJhbGx5IHBvc2l0aW9uIGV2ZW50cywgdmVydGljYWxseSBzdGFja2luZyB0aGVtICovXG4gIC5mYy10aW1lLWdyaWQgLmZjLWV2ZW50IHtcbiAgICBwb3NpdGlvbjogc3RhdGljICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAzcHggMnB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAvKiBmb3IgZXZlbnRzIHRoYXQgY29udGludWUgdG8gYSBmdXR1cmUgZGF5LCBnaXZlIHRoZSBib3R0b20gYm9yZGVyIGJhY2sgKi9cbiAgLmZjLXRpbWUtZ3JpZCAuZmMtZXZlbnQuZmMtbm90LWVuZCB7XG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAvKiBpbmRpY2F0ZSB0aGUgZXZlbnQgY29udGludWVzIHZpYSBcIi4uLlwiIHRleHQgKi9cbiAgLmZjLXRpbWUtZ3JpZCAuZmMtZXZlbnQuZmMtbm90LWVuZDphZnRlciB7XG4gICAgY29udGVudDogXCIuLi5cIjtcbiAgfVxuXG4gIC8qIGZvciBldmVudHMgdGhhdCBhcmUgY29udGludWF0aW9ucyBmcm9tIHByZXZpb3VzIGRheXMsIGdpdmUgdGhlIHRvcCBib3JkZXIgYmFjayAqL1xuICAuZmMtdGltZS1ncmlkIC5mYy1ldmVudC5mYy1ub3Qtc3RhcnQge1xuICAgIGJvcmRlci10b3Atd2lkdGg6IDFweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLyogaW5kaWNhdGUgdGhlIGV2ZW50IGlzIGEgY29udGludWF0aW9uIHZpYSBcIi4uLlwiIHRleHQgKi9cbiAgLmZjLXRpbWUtZ3JpZCAuZmMtZXZlbnQuZmMtbm90LXN0YXJ0OmJlZm9yZSB7XG4gICAgY29udGVudDogXCIuLi5cIjtcbiAgfVxuXG4gIC8qIHRpbWUgKi9cbiAgLyogdW5kbyBhIHByZXZpb3VzIGRlY2xhcmF0aW9uIGFuZCBsZXQgdGhlIHRpbWUgdGV4dCBzcGFuIHRvIGEgc2Vjb25kIGxpbmUgKi9cbiAgLmZjLXRpbWUtZ3JpZCAuZmMtZXZlbnQgLmZjLXRpbWUge1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgfVxuXG4gIC8qIGhpZGUgdGhlIHRoZSB0aW1lIHRoYXQgaXMgbm9ybWFsbHkgZGlzcGxheWVkLi4uICovXG4gIC5mYy10aW1lLWdyaWQgLmZjLWV2ZW50IC5mYy10aW1lIHNwYW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAvKiAuLi5yZXBsYWNlIGl0IHdpdGggYSBtb3JlIHZlcmJvc2UgdmVyc2lvbiAoaW5jbHVkZXMgQU0vUE0pIHN0b3JlZCBpbiBhbiBodG1sIGF0dHJpYnV0ZSAqL1xuICAuZmMtdGltZS1ncmlkIC5mYy1ldmVudCAuZmMtdGltZTphZnRlciB7XG4gICAgY29udGVudDogYXR0cihkYXRhLWZ1bGwpO1xuICB9XG5cbiAgLyogVmVydGljYWwgU2Nyb2xsZXIgJiBDb250YWluZXJzXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgLyoga2lsbCB0aGUgc2Nyb2xsYmFycyBhbmQgYWxsb3cgbmF0dXJhbCBoZWlnaHQgKi9cbiAgLmZjLXNjcm9sbGVyLFxuLmZjLWRheS1ncmlkLWNvbnRhaW5lcixcbi5mYy10aW1lLWdyaWQtY29udGFpbmVyIHtcbiAgICAvKiAqL1xuICAgIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cblxuICAvKiBraWxsIHRoZSBob3Jpem9udGFsIGJvcmRlci9wYWRkaW5nIHVzZWQgdG8gY29tcGVuc2F0ZSBmb3Igc2Nyb2xsYmFycyAqL1xuICAuZmMtcm93IHtcbiAgICBib3JkZXI6IDAgIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgfVxuXG4gIC8qIEJ1dHRvbiBDb250cm9sc1xuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gIC5mYy1idXR0b24tZ3JvdXAsXG4uZmMgYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIC8qIGRvbid0IGRpc3BsYXkgYW55IGJ1dHRvbi1yZWxhdGVkIGNvbnRyb2xzICovXG4gIH1cbn1cbiIsIi8qIERheUdyaWRWaWV3XG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4vKiBkYXkgcm93IHN0cnVjdHVyZSAqL1xuLmZjLWRheUdyaWRXZWVrLXZpZXcgLmZjLWNvbnRlbnQtc2tlbGV0b24sXG4uZmMtZGF5R3JpZERheS12aWV3IC5mYy1jb250ZW50LXNrZWxldG9uIHtcbiAgLyogdGhlcmUgbWF5IGJlIHdlZWsgbnVtYmVycyBpbiB0aGVzZSB2aWV3cywgc28gbm8gcGFkZGluZy10b3AgKi9cbiAgcGFkZGluZy1ib3R0b206IDFlbTtcbiAgLyogZW5zdXJlIGEgc3BhY2UgYXQgYm90dG9tIG9mIGNlbGwgZm9yIHVzZXIgc2VsZWN0aW5nL2NsaWNraW5nICovXG59XG5cbi5mYy1kYXlHcmlkLXZpZXcgLmZjLWJvZHkgLmZjLXJvdyB7XG4gIG1pbi1oZWlnaHQ6IDRlbTtcbiAgLyogZW5zdXJlIHRoYXQgYWxsIHJvd3MgYXJlIGF0IGxlYXN0IHRoaXMgdGFsbCAqL1xufVxuXG4vKiBhIFwicmlnaWRcIiByb3cgd2lsbCB0YWtlIHVwIGEgY29uc3RhbnQgYW1vdW50IG9mIGhlaWdodCBiZWNhdXNlIGNvbnRlbnQtc2tlbGV0b24gaXMgYWJzb2x1dGUgKi9cbi5mYy1yb3cuZmMtcmlnaWQge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uZmMtcm93LmZjLXJpZ2lkIC5mYy1jb250ZW50LXNrZWxldG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4vKiB3ZWVrIGFuZCBkYXkgbnVtYmVyIHN0eWxpbmcgKi9cbi5mYy1kYXktdG9wLmZjLW90aGVyLW1vbnRoIHtcbiAgb3BhY2l0eTogMC4zO1xufVxuXG4uZmMtZGF5R3JpZC12aWV3IC5mYy13ZWVrLW51bWJlcixcbi5mYy1kYXlHcmlkLXZpZXcgLmZjLWRheS1udW1iZXIge1xuICBwYWRkaW5nOiAycHg7XG59XG5cbi5mYy1kYXlHcmlkLXZpZXcgdGguZmMtd2Vlay1udW1iZXIsXG4uZmMtZGF5R3JpZC12aWV3IHRoLmZjLWRheS1udW1iZXIge1xuICBwYWRkaW5nOiAwIDJweDtcbiAgLyogY29sdW1uIGhlYWRlcnMgY2FuJ3QgaGF2ZSBhcyBtdWNoIHYgc3BhY2UgKi9cbn1cblxuLmZjLWx0ciAuZmMtZGF5R3JpZC12aWV3IC5mYy1kYXktdG9wIC5mYy1kYXktbnVtYmVyIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uZmMtcnRsIC5mYy1kYXlHcmlkLXZpZXcgLmZjLWRheS10b3AgLmZjLWRheS1udW1iZXIge1xuICBmbG9hdDogbGVmdDtcbn1cblxuLmZjLWx0ciAuZmMtZGF5R3JpZC12aWV3IC5mYy1kYXktdG9wIC5mYy13ZWVrLW51bWJlciB7XG4gIGZsb2F0OiBsZWZ0O1xuICBib3JkZXItcmFkaXVzOiAwIDAgM3B4IDA7XG59XG5cbi5mYy1ydGwgLmZjLWRheUdyaWQtdmlldyAuZmMtZGF5LXRvcCAuZmMtd2Vlay1udW1iZXIge1xuICBmbG9hdDogcmlnaHQ7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAwIDNweDtcbn1cblxuLmZjLWRheUdyaWQtdmlldyAuZmMtZGF5LXRvcCAuZmMtd2Vlay1udW1iZXIge1xuICBtaW4td2lkdGg6IDEuNWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gIGNvbG9yOiAjODA4MDgwO1xufVxuXG4vKiB3aGVuIHdlZWsvZGF5IG51bWJlciBoYXZlIG93biBjb2x1bW4gKi9cbi5mYy1kYXlHcmlkLXZpZXcgdGQuZmMtd2Vlay1udW1iZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5mYy1kYXlHcmlkLXZpZXcgdGQuZmMtd2Vlay1udW1iZXIgPiAqIHtcbiAgLyogd29yayBhcm91bmQgdGhlIHdheSB3ZSBkbyBjb2x1bW4gcmVzaXppbmcgYW5kIGVuc3VyZSBhIG1pbmltdW0gd2lkdGggKi9cbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtaW4td2lkdGg6IDEuMjVlbTtcbn1cbiIsIkBpbXBvcnQgJ35AZnVsbGNhbGVuZGFyL2NvcmUvbWFpbi5jc3MnO1xuQGltcG9ydCAnfkBmdWxsY2FsZW5kYXIvZGF5Z3JpZC9tYWluLmNzcyc7XG4uZmMtZGF5LWdyaWQtZXZlbnQge2NvbG9yOiB3aGl0ZSFpbXBvcnRhbnQ7fVxuIl19 */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FullCalendarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-full-calendar',
                templateUrl: './full-calendar.component.html',
                styleUrls: ['./full-calendar.component.css'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, { calendarWeekends: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], calendarPlugins: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], calendarEvents: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "gjQn":
/*!**********************************************************!*\
  !*** ./src/app/store/reducers/ticket-booking.reducer.ts ***!
  \**********************************************************/
/*! exports provided: TicketBookingReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketBookingReducer", function() { return TicketBookingReducer; });
/* harmony import */ var _states_ticket_booking_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../states/ticket-booking.state */ "FhZn");
/* harmony import */ var _actions_ticket_booking_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/ticket-booking.actions */ "loCu");


function TicketBookingReducer(state = _states_ticket_booking_state__WEBPACK_IMPORTED_MODULE_0__["initialTicketBookingState"], action) {
    switch (action.type) {
        case _actions_ticket_booking_actions__WEBPACK_IMPORTED_MODULE_1__["TicketBookingActionTypes"].countTicketBooking:
            return {
                ticketCount: action.payload.countTicket
            };
        default:
            return state;
    }
}


/***/ }),

/***/ "htIi":
/*!****************************************************!*\
  !*** ./src/app/components/sofbox/sofbox.module.ts ***!
  \****************************************************/
/*! exports provided: SofboxModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SofboxModule", function() { return SofboxModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _loaders_loader1_loader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loaders/loader1/loader.component */ "Aq+l");
/* harmony import */ var _scroll_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scroll-top/scroll-top.component */ "67Dq");
/* harmony import */ var _nav_bars_nav_bar1_nav_bar1_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nav-bars/nav-bar1/nav-bar1.component */ "AL1Q");
/* harmony import */ var _side_bars_side_bar1_side_bar1_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./side-bars/side-bar1/side-bar1.component */ "sH7z");
/* harmony import */ var _charts_apex_chart_apex_chart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./charts/apex-chart/apex-chart.component */ "7OHa");
/* harmony import */ var _breadcrumbs_breadcrumb1_breadcrumb1_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./breadcrumbs/breadcrumb1/breadcrumb1.component */ "wqnk");
/* harmony import */ var _cards_iq_card_iq_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cards/iq-card/iq-card.component */ "LzsS");
/* harmony import */ var _menus_list_style1_list_style1_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./menus/list-style1/list-style1.component */ "ei1P");
/* harmony import */ var ngx_scrollbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-scrollbar */ "G1Gu");
/* harmony import */ var _charts_high_chart_high_chart_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./charts/high-chart/high-chart.component */ "+E+/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tabs_tab_nav_tab_nav_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tabs/tab-nav/tab-nav.component */ "lgFu");
/* harmony import */ var _tabs_tab_content_tab_content_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./tabs/tab-content/tab-content.component */ "+9Lo");
/* harmony import */ var _full_calendar_full_calendar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./full-calendar/full-calendar.component */ "gSEH");
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fullcalendar/angular */ "IvIE");
/* harmony import */ var _card_with_image_card_with_image_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./card-with-image/card-with-image.component */ "0NJz");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "+Cnu");





















class SofboxModule {
}
SofboxModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SofboxModule });
SofboxModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SofboxModule_Factory(t) { return new (t || SofboxModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ngx_scrollbar__WEBPACK_IMPORTED_MODULE_10__["NgScrollbarModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"],
            _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_16__["FullCalendarModule"],
            ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_18__["CollapseModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SofboxModule, { declarations: [_loaders_loader1_loader_component__WEBPACK_IMPORTED_MODULE_2__["LoaderComponent"],
        _scroll_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_3__["ScrollTopComponent"],
        _nav_bars_nav_bar1_nav_bar1_component__WEBPACK_IMPORTED_MODULE_4__["NavBar1Component"],
        _side_bars_side_bar1_side_bar1_component__WEBPACK_IMPORTED_MODULE_5__["SideBar1Component"],
        _charts_apex_chart_apex_chart_component__WEBPACK_IMPORTED_MODULE_6__["ApexChartComponent"],
        _breadcrumbs_breadcrumb1_breadcrumb1_component__WEBPACK_IMPORTED_MODULE_7__["Breadcrumb1Component"],
        _cards_iq_card_iq_card_component__WEBPACK_IMPORTED_MODULE_8__["IqCardComponent"],
        _menus_list_style1_list_style1_component__WEBPACK_IMPORTED_MODULE_9__["ListStyle1Component"],
        _tabs_tab_nav_tab_nav_component__WEBPACK_IMPORTED_MODULE_13__["TabNavComponent"],
        _tabs_tab_content_tab_content_component__WEBPACK_IMPORTED_MODULE_14__["TabContentComponent"],
        _charts_high_chart_high_chart_component__WEBPACK_IMPORTED_MODULE_11__["HighChartComponent"],
        _full_calendar_full_calendar_component__WEBPACK_IMPORTED_MODULE_15__["FullCalendarComponent"],
        _card_with_image_card_with_image_component__WEBPACK_IMPORTED_MODULE_17__["CardWithImageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        ngx_scrollbar__WEBPACK_IMPORTED_MODULE_10__["NgScrollbarModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"],
        _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_16__["FullCalendarModule"], ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_18__["CollapseModule"]], exports: [_loaders_loader1_loader_component__WEBPACK_IMPORTED_MODULE_2__["LoaderComponent"],
        _scroll_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_3__["ScrollTopComponent"],
        _nav_bars_nav_bar1_nav_bar1_component__WEBPACK_IMPORTED_MODULE_4__["NavBar1Component"],
        _side_bars_side_bar1_side_bar1_component__WEBPACK_IMPORTED_MODULE_5__["SideBar1Component"],
        _charts_apex_chart_apex_chart_component__WEBPACK_IMPORTED_MODULE_6__["ApexChartComponent"],
        _breadcrumbs_breadcrumb1_breadcrumb1_component__WEBPACK_IMPORTED_MODULE_7__["Breadcrumb1Component"],
        _cards_iq_card_iq_card_component__WEBPACK_IMPORTED_MODULE_8__["IqCardComponent"],
        _menus_list_style1_list_style1_component__WEBPACK_IMPORTED_MODULE_9__["ListStyle1Component"],
        _tabs_tab_nav_tab_nav_component__WEBPACK_IMPORTED_MODULE_13__["TabNavComponent"],
        _tabs_tab_content_tab_content_component__WEBPACK_IMPORTED_MODULE_14__["TabContentComponent"],
        _charts_high_chart_high_chart_component__WEBPACK_IMPORTED_MODULE_11__["HighChartComponent"],
        _full_calendar_full_calendar_component__WEBPACK_IMPORTED_MODULE_15__["FullCalendarComponent"],
        _card_with_image_card_with_image_component__WEBPACK_IMPORTED_MODULE_17__["CardWithImageComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SofboxModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _loaders_loader1_loader_component__WEBPACK_IMPORTED_MODULE_2__["LoaderComponent"],
                    _scroll_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_3__["ScrollTopComponent"],
                    _nav_bars_nav_bar1_nav_bar1_component__WEBPACK_IMPORTED_MODULE_4__["NavBar1Component"],
                    _side_bars_side_bar1_side_bar1_component__WEBPACK_IMPORTED_MODULE_5__["SideBar1Component"],
                    _charts_apex_chart_apex_chart_component__WEBPACK_IMPORTED_MODULE_6__["ApexChartComponent"],
                    _breadcrumbs_breadcrumb1_breadcrumb1_component__WEBPACK_IMPORTED_MODULE_7__["Breadcrumb1Component"],
                    _cards_iq_card_iq_card_component__WEBPACK_IMPORTED_MODULE_8__["IqCardComponent"],
                    _menus_list_style1_list_style1_component__WEBPACK_IMPORTED_MODULE_9__["ListStyle1Component"],
                    _tabs_tab_nav_tab_nav_component__WEBPACK_IMPORTED_MODULE_13__["TabNavComponent"],
                    _tabs_tab_content_tab_content_component__WEBPACK_IMPORTED_MODULE_14__["TabContentComponent"],
                    _charts_high_chart_high_chart_component__WEBPACK_IMPORTED_MODULE_11__["HighChartComponent"],
                    _full_calendar_full_calendar_component__WEBPACK_IMPORTED_MODULE_15__["FullCalendarComponent"],
                    _card_with_image_card_with_image_component__WEBPACK_IMPORTED_MODULE_17__["CardWithImageComponent"]
                ],
                exports: [
                    _loaders_loader1_loader_component__WEBPACK_IMPORTED_MODULE_2__["LoaderComponent"],
                    _scroll_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_3__["ScrollTopComponent"],
                    _nav_bars_nav_bar1_nav_bar1_component__WEBPACK_IMPORTED_MODULE_4__["NavBar1Component"],
                    _side_bars_side_bar1_side_bar1_component__WEBPACK_IMPORTED_MODULE_5__["SideBar1Component"],
                    _charts_apex_chart_apex_chart_component__WEBPACK_IMPORTED_MODULE_6__["ApexChartComponent"],
                    _breadcrumbs_breadcrumb1_breadcrumb1_component__WEBPACK_IMPORTED_MODULE_7__["Breadcrumb1Component"],
                    _cards_iq_card_iq_card_component__WEBPACK_IMPORTED_MODULE_8__["IqCardComponent"],
                    _menus_list_style1_list_style1_component__WEBPACK_IMPORTED_MODULE_9__["ListStyle1Component"],
                    _tabs_tab_nav_tab_nav_component__WEBPACK_IMPORTED_MODULE_13__["TabNavComponent"],
                    _tabs_tab_content_tab_content_component__WEBPACK_IMPORTED_MODULE_14__["TabContentComponent"],
                    _charts_high_chart_high_chart_component__WEBPACK_IMPORTED_MODULE_11__["HighChartComponent"],
                    _full_calendar_full_calendar_component__WEBPACK_IMPORTED_MODULE_15__["FullCalendarComponent"],
                    _card_with_image_card_with_image_component__WEBPACK_IMPORTED_MODULE_17__["CardWithImageComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    ngx_scrollbar__WEBPACK_IMPORTED_MODULE_10__["NgScrollbarModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"],
                    _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_16__["FullCalendarModule"],
                    ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_18__["CollapseModule"].forRoot()
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "lgFu":
/*!*********************************************************************!*\
  !*** ./src/app/components/sofbox/tabs/tab-nav/tab-nav.component.ts ***!
  \*********************************************************************/
/*! exports provided: TabNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabNavComponent", function() { return TabNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function TabNavComponent_li_1_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 0);
} if (rf & 2) {
    const tabNavItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("classList", tabNavItem_r1.icon);
} }
function TabNavComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TabNavComponent_li_1_i_2_Template, 1, 1, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tabNavItem_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", tabNavItem_r1.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("ngClass", tabNavItem_r1.isActive ? "nav-link active" : "nav-link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("active", tabNavItem_r1.isActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tabNavItem_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", tabNavItem_r1.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", tabNavItem_r1.append, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
class TabNavComponent {
    constructor() {
        this.tabClass = 'nav nav-pills';
        this.tagToggleType = 'pill';
        this.tabNavItems = [];
    }
    ngOnInit() {
    }
}
TabNavComponent.ɵfac = function TabNavComponent_Factory(t) { return new (t || TabNavComponent)(); };
TabNavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TabNavComponent, selectors: [["app-tab-nav"]], inputs: { tabClass: "tabClass", tagToggleType: "tagToggleType", tabNavItems: "tabNavItems" }, decls: 2, vars: 2, consts: [[3, "classList"], [4, "ngFor", "ngForOf"], ["role", "tab", "data-toggle", "pill", 3, "href", "ngClass"], [3, "classList", 4, "ngIf"], [3, "innerHTML"]], template: function TabNavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TabNavComponent_li_1_Template, 5, 6, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("classList", ctx.tabClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tabNavItems);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TabNavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tab-nav',
                templateUrl: './tab-nav.component.html',
                styles: []
            }]
    }], function () { return []; }, { tabClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], tagToggleType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], tabNavItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "loCu":
/*!*********************************************************!*\
  !*** ./src/app/store/actions/ticket-booking.actions.ts ***!
  \*********************************************************/
/*! exports provided: TicketBookingActionTypes, TicketBookingAction, CountTicketBooking */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketBookingActionTypes", function() { return TicketBookingActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketBookingAction", function() { return TicketBookingAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountTicketBooking", function() { return CountTicketBooking; });
var TicketBookingActionTypes;
(function (TicketBookingActionTypes) {
    TicketBookingActionTypes["countTicketBooking"] = "[TicketBooking] Count TicketBookings";
})(TicketBookingActionTypes || (TicketBookingActionTypes = {}));
class TicketBookingAction {
}
class CountTicketBooking {
    constructor(payload) {
        this.payload = payload;
        this.type = TicketBookingActionTypes.countTicketBooking;
    }
}


/***/ }),

/***/ "sH7z":
/*!******************************************************************************!*\
  !*** ./src/app/components/sofbox/side-bars/side-bar1/side-bar1.component.ts ***!
  \******************************************************************************/
/*! exports provided: SideBar1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideBar1Component", function() { return SideBar1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fake_api_json_SideBar_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../fake-api/json/SideBar.json */ "cbZr");
var _fake_api_json_SideBar_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../../fake-api/json/SideBar.json */ "cbZr", 1);
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../service/api.service */ "PLN7");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-scrollbar */ "G1Gu");
/* harmony import */ var _menus_list_style1_list_style1_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../menus/list-style1/list-style1.component */ "ei1P");







class SideBar1Component {
    constructor(apiService) {
        this.apiService = apiService;
        this.menuItems = _fake_api_json_SideBar_json__WEBPACK_IMPORTED_MODULE_1__.data;
    }
    ngOnInit() {
        this.getMenuItems();
    }
    getMenuItems() {
        /*this.apiService.getMenuList().subscribe((data: {}) => {
          this.menuItems = data;
        });*/
    }
}
SideBar1Component.ɵfac = function SideBar1Component_Factory(t) { return new (t || SideBar1Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"])); };
SideBar1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SideBar1Component, selectors: [["app-side-bar1"]], decls: 15, vars: 2, consts: [[1, "iq-sidebar"], [1, "iq-sidebar-logo", "d-flex", "justify-content-between"], ["routerLink", "/"], ["src", "assets/images/logo.png", "alt", "", 1, "img-fluid"], [1, "iq-menu-bt", "align-self-center"], [1, "wrapper-menu"], [1, "line-menu", "half", "start"], [1, "line-menu"], [1, "line-menu", "half", "end"], [1, "iq-sidebar-menu"], ["id", "iq-sidebar-toggle", 3, "listItems", "collapseOpen"], [1, "p-3"]], template: function SideBar1Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Sofbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ng-scrollbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nav", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-list-style1", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("listItems", ctx.menuItems)("collapseOpen", true);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], ngx_scrollbar__WEBPACK_IMPORTED_MODULE_4__["NgScrollbar"], _menus_list_style1_list_style1_component__WEBPACK_IMPORTED_MODULE_5__["ListStyle1Component"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SideBar1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-side-bar1',
                templateUrl: './side-bar1.component.html',
                styleUrls: [],
            }]
    }], function () { return [{ type: _service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "tg95":
/*!*****************************************!*\
  !*** ./src/app/store/reducers/index.ts ***!
  \*****************************************/
/*! exports provided: reducers, metaReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _ticket_booking_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ticket-booking.reducer */ "gjQn");


const reducers = {
    ticketBooking: _ticket_booking_reducer__WEBPACK_IMPORTED_MODULE_1__["TicketBookingReducer"]
};
const metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].production ? [] : [];


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index/index.component */ "aUdj");
/* harmony import */ var _views_pages_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/pages/error-page/error-page.component */ "cDE/");






const routes = [
    { path: '', component: _index_index_component__WEBPACK_IMPORTED_MODULE_2__["IndexComponent"] },
    { path: 'home', loadChildren: () => __webpack_require__.e(/*! import() | layouts-layout1-layout1-module */ "layouts-layout1-layout1-module").then(__webpack_require__.bind(null, /*! ./layouts/layout1/layout1.module */ "puj7")).then(m => m.Layout1Module) },
    // { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) }
    { path: 'auth', loadChildren: () => Promise.all(/*! import() | layouts-auth-layout-auth-layout-module */[__webpack_require__.e("default~layouts-auth-layout-auth-layout-module~views-views-module"), __webpack_require__.e("layouts-auth-layout-auth-layout-module")]).then(__webpack_require__.bind(null, /*! ./layouts/auth-layout/auth-layout.module */ "PTPi")).then(m => m.AuthLayoutModule) },
    { path: 'users', loadChildren: () => Promise.all(/*! import() | pages-users-users-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-users-users-module")]).then(__webpack_require__.bind(null, /*! ./pages/users/users.module */ "+P1L")).then(m => m.UsersModule) },
    { path: 'typeupload', loadChildren: () => Promise.all(/*! import() | pages-typeuploads-typeuploads-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-typeuploads-typeuploads-module")]).then(__webpack_require__.bind(null, /*! ./pages/typeuploads/typeuploads.module */ "G45u")).then(m => m.TypeUploadsModule) },
    { path: 'orders', loadChildren: () => Promise.all(/*! import() | pages-orders-orders-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-orders-orders-module")]).then(__webpack_require__.bind(null, /*! ./pages/orders/orders.module */ "Xlj8")).then(m => m.OrdersModule) },
    { path: 'myorders', loadChildren: () => Promise.all(/*! import() | pages-myorder-myorder-module */[__webpack_require__.e("default~pages-myorder-myorder-module~views-forms-forms-module"), __webpack_require__.e("common"), __webpack_require__.e("pages-myorder-myorder-module")]).then(__webpack_require__.bind(null, /*! ./pages/myorder/myorder.module */ "eRbX")).then(m => m.MyorderModule) },
    { path: '**', component: _views_pages_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_3__["ErrorPageComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "wqnk":
/*!************************************************************************************!*\
  !*** ./src/app/components/sofbox/breadcrumbs/breadcrumb1/breadcrumb1.component.ts ***!
  \************************************************************************************/
/*! exports provided: Breadcrumb1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Breadcrumb1Component", function() { return Breadcrumb1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function Breadcrumb1Component_li_5_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.label);
} }
function Breadcrumb1Component_li_5_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", item_r1.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.label);
} }
function Breadcrumb1Component_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Breadcrumb1Component_li_5_span_1_Template, 2, 1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Breadcrumb1Component_li_5_a_2_Template, 2, 2, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("breadcrumb-item ", item_r1.isActive ? "active" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.isActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r1.isActive);
} }
class Breadcrumb1Component {
    constructor() { }
    ngOnInit() {
    }
}
Breadcrumb1Component.ɵfac = function Breadcrumb1Component_Factory(t) { return new (t || Breadcrumb1Component)(); };
Breadcrumb1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Breadcrumb1Component, selectors: [["app-breadcrumb1"]], inputs: { title: "title", items: "items" }, decls: 6, vars: 2, consts: [[1, "navbar-breadcrumb"], [1, "mb-0"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [3, "class", 4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "href", 4, "ngIf"], [3, "href"]], template: function Breadcrumb1Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, Breadcrumb1Component_li_5_Template, 3, 5, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Breadcrumb1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-breadcrumb1',
                templateUrl: './breadcrumb1.component.html',
                styles: []
            }]
    }], function () { return []; }, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "yq7U":
/*!************************************!*\
  !*** ./src/app/plugins.service.ts ***!
  \************************************/
/*! exports provided: PluginsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PluginsService", function() { return PluginsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PluginsService {
    constructor() {
        // @ts-ignore
        this.$ = window.$;
    }
    index() {
        this.loaderInit();
    }
    dashboardIndex() {
        this.sideBarToggle(this.$);
        this.navBarAction(this.$);
        this.wrapperMenuToggle(this.$);
        this.fullscreen(this.$);
        this.accordionToggle(this.$);
    }
    // Function for toggle page Loader...
    loaderInit() {
        this.$('#load').fadeOut();
        this.$('#loading').delay(1000).fadeOut('slow');
    }
    checkElement(type, element) {
        let found = false;
        let elements;
        switch (type) {
            case 'class':
                elements = document.getElementsByClassName(element);
                if (elements !== undefined && elements !== null && elements.length > 0) {
                    found = true;
                }
                break;
            case 'id':
                elements = document.getElementById(element);
                if (elements !== undefined && elements !== null) {
                    found = true;
                }
                break;
        }
        return found;
    }
    sideBarToggle($) {
        const elementExist = this.checkElement('class', 'iq-sidebar-menu');
        if (elementExist) {
            // $(document).on('click', '.iq-sidebar-menu li', function() {
            //   if ($(this).hasClass('menu-open')) {
            //     $(this).find('.iq-submenu').slideUp('slow');
            //     $(this).removeClass('menu-open');
            //     if (!$(this).find('.iq-submenu.menu-open .menu-open').length) {
            //       $(this).find('.menu-open').removeClass('menu-open');
            //     } else {
            //       $(this).find('.iq-submenu').removeClass('menu-open');
            //     }
            //   } else if ($(this).find('.iq-submenu').length) {
            //     $(this).find('.iq-submenu').slideDown('slow');
            //     $(this).addClass('menu-open');
            //     $(this).find('.iq-submenu').addClass('menu-open');
            //   }
            // });
        }
    }
    navBarAction($) {
        $(document).on('click', function (e) {
            const myTargetElement = e.target;
            // tslint:disable-next-line:one-variable-per-declaration
            let selector, mainElement;
            if ($(myTargetElement).hasClass('search-toggle')
                || $(myTargetElement).parent().hasClass('search-toggle')
                || $(myTargetElement).parent().parent().hasClass('search-toggle')) {
                if ($(myTargetElement).hasClass('search-toggle')) {
                    selector = $(myTargetElement).parent();
                    mainElement = $(myTargetElement);
                }
                else if ($(myTargetElement).parent().hasClass('search-toggle')) {
                    selector = $(myTargetElement).parent().parent();
                    mainElement = $(myTargetElement).parent();
                }
                else if ($(myTargetElement).parent().parent().hasClass('search-toggle')) {
                    selector = $(myTargetElement).parent().parent().parent();
                    mainElement = $(myTargetElement).parent().parent();
                }
                if (!mainElement.hasClass('active') && $('.navbar-list li').find('.active')) {
                    $('.navbar-list li').removeClass('iq-show');
                    $('.navbar-list li .search-toggle').removeClass('active');
                }
                selector.toggleClass('iq-show');
                mainElement.toggleClass('active');
                e.preventDefault();
            }
            else if ($(myTargetElement).is('.search-input')) { }
            else {
                $('.navbar-list li').removeClass('iq-show');
                $('.navbar-list li .search-toggle').removeClass('active');
            }
        });
    }
    wrapperMenuToggle($) {
        const elementExist = this.checkElement('class', 'wrapper-menu');
        if (elementExist) {
            const wrapperMenu = document.querySelectorAll('.wrapper-menu');
            const body = document.querySelector('body');
            for (let i = 0; i < wrapperMenu.length; i++) {
                wrapperMenu[i].addEventListener('click', function () {
                    wrapperMenu[i].classList.toggle('open');
                    body.classList.toggle('sidebar-main');
                });
            }
        }
    }
    fullscreen($) {
        const elementExist = this.checkElement('class', 'iq-full-screen');
        if (elementExist) {
            $(document).on('click', '.iq-full-screen', function () {
                /*const elem = $(this);
                if (!document.fullscreenElement &&
                  !document.mozFullScreenElement &&
                  !document.webkitFullscreenElement &&
                  !document.msFullscreenElement) {
                  if (document.documentElement.requestFullscreen) {
                    document.documentElement.requestFullscreen();
                  } else if (document.documentElement.mozRequestFullScreen) {
                    document.documentElement.mozRequestFullScreen();
                  } else if (document.documentElement.webkitRequestFullscreen) {
                    document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
                  } else if (document.documentElement.msRequestFullscreen) {
                    document.documentElement.msRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
                  }
                } else {
                  if (document.cancelFullScreen) {
                    document.cancelFullScreen();
                  } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                  } else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen();
                  } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                  }
                }
                elem.find('i').toggleClass('ri-fullscreen-line').toggleClass('ri-fullscreen-exit-line');*/
            });
        }
    }
    apexChart(element, chartOption) {
        const selector = '#' + element;
        if (chartOption !== undefined) {
            const chart = new ApexCharts(document.querySelector(selector), chartOption);
            chart.render();
        }
    }
    accordionToggle($) {
        $('.iq-accordion .iq-accordion-block .accordion-details').hide();
        $('.iq-accordion .iq-accordion-block:first').addClass('accordion-active').children().slideDown('slow');
        $(document).on('click', '.iq-accordion .iq-accordion-block', function () {
            if ($(this).children('div.accordion-details ').is(':hidden')) {
                $('.iq-accordion .iq-accordion-block').removeClass('accordion-active').children('div.accordion-details ').slideUp('slow');
                $(this).toggleClass('accordion-active').children('div.accordion-details ').slideDown('slow');
            }
        });
    }
    getActiveLink(item, activeRoute) {
        let active = false;
        if (item.children !== undefined) {
            item.children.filter((child) => {
                if (child.link === activeRoute) {
                    active = true;
                }
            });
        }
        else {
            if (item.link === activeRoute) {
                active = true;
            }
        }
        return active;
    }
}
PluginsService.ɵfac = function PluginsService_Factory(t) { return new (t || PluginsService)(); };
PluginsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PluginsService, factory: PluginsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PluginsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map