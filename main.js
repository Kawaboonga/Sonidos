"use strict";
(self["webpackChunksonidos_ng"] = self["webpackChunksonidos_ng"] || []).push([["main"],{

/***/ 4114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _components_pages_home_one_home_one_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/pages/home-one/home-one.component */ 7992);
/* harmony import */ var _components_pages_about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/pages/about/about.component */ 9374);
/* harmony import */ var _components_pages_instructor_instructor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/pages/instructor/instructor.component */ 858);
/* harmony import */ var _components_pages_courses_courses_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/pages/courses/courses.component */ 10);
/* harmony import */ var _components_pages_error_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/pages/error/error.component */ 9746);
/* harmony import */ var _components_pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/pages/login/login.component */ 4914);
/* harmony import */ var _components_pages_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/pages/register/register.component */ 4166);
/* harmony import */ var _components_pages_services_services_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/pages/services/services.component */ 2691);
/* harmony import */ var _components_pages_services_details_services_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/pages/services-details/services-details.component */ 4586);
/* harmony import */ var _components_pages_news_news_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/pages/news/news.component */ 8374);
/* harmony import */ var _components_pages_news_details_news_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/pages/news-details/news-details.component */ 6372);
/* harmony import */ var _components_pages_products_details_products_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/pages/products-details/products-details.component */ 9350);
/* harmony import */ var _components_pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/pages/contact/contact.component */ 6006);
/* harmony import */ var _components_pages_admin_admin_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/pages/admin/admin.component */ 430);
/* harmony import */ var _components_pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/pages/profile/profile.component */ 4546);
/* harmony import */ var _components_pages_unauthorized_unauthorized_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/pages/unauthorized/unauthorized.component */ 6832);
/* harmony import */ var _components_pages_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/pages/forgot-password/forgot-password.component */ 1590);
/* harmony import */ var _components_pages_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/pages/reset-password/reset-password.component */ 6606);
/* harmony import */ var _guards_role_guard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./guards/role.guard */ 5458);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 7580);






















const routes = [{
  path: '',
  component: _components_pages_home_one_home_one_component__WEBPACK_IMPORTED_MODULE_0__.HomeOneComponent
}, {
  path: 'register',
  component: _components_pages_register_register_component__WEBPACK_IMPORTED_MODULE_6__.RegisterComponent
}, {
  path: 'admin',
  component: _components_pages_admin_admin_component__WEBPACK_IMPORTED_MODULE_13__.AdminComponent,
  canActivate: [_guards_role_guard__WEBPACK_IMPORTED_MODULE_18__.RoleGuard],
  data: {
    role: 'admin'
  }
}, {
  path: 'profile',
  component: _components_pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_14__.ProfileComponent,
  canActivate: [_guards_role_guard__WEBPACK_IMPORTED_MODULE_18__.RoleGuard],
  data: {
    role: 'user'
  }
}, {
  path: 'forgot-password',
  component: _components_pages_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_16__.ForgotPasswordComponent
}, {
  path: 'reset-password',
  component: _components_pages_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_17__.ResetPasswordComponent
}, {
  path: 'unauthorized',
  component: _components_pages_unauthorized_unauthorized_component__WEBPACK_IMPORTED_MODULE_15__.UnauthorizedComponent
}, {
  path: 'about',
  component: _components_pages_about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent
}, {
  path: 'instructor',
  component: _components_pages_instructor_instructor_component__WEBPACK_IMPORTED_MODULE_2__.InstructorComponent
}, {
  path: 'courses',
  component: _components_pages_courses_courses_component__WEBPACK_IMPORTED_MODULE_3__.CoursesComponent
}, {
  path: 'error',
  component: _components_pages_error_error_component__WEBPACK_IMPORTED_MODULE_4__.ErrorComponent
}, {
  path: 'login',
  component: _components_pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__.LoginComponent
}, {
  path: 'services',
  component: _components_pages_services_services_component__WEBPACK_IMPORTED_MODULE_7__.ServicesComponent
}, {
  path: 'services-details',
  component: _components_pages_services_details_services_details_component__WEBPACK_IMPORTED_MODULE_8__.ServicesDetailsComponent
}, {
  path: 'news',
  component: _components_pages_news_news_component__WEBPACK_IMPORTED_MODULE_9__.NewsComponent
}, {
  path: 'news-details',
  component: _components_pages_news_details_news_details_component__WEBPACK_IMPORTED_MODULE_10__.NewsDetailsComponent
}, {
  path: 'products-details',
  component: _components_pages_products_details_products_details_component__WEBPACK_IMPORTED_MODULE_11__.ProductsDetailsComponent
}, {
  path: 'contact',
  component: _components_pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_12__.ContactComponent
}, {
  path: '**',
  component: _components_pages_error_error_component__WEBPACK_IMPORTED_MODULE_4__.ErrorComponent
}];
class AppRoutingModule {
  static {
    this.ɵfac = function AppRoutingModule_Factory(t) {
      return new (t || AppRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterModule.forRoot(routes, {}), _angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterModule]
  });
})();

/***/ }),

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 1567);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _components_common_preloader_preloader_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/common/preloader/preloader.component */ 7235);
/* harmony import */ var _components_common_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/common/footer/footer.component */ 2595);







class AppComponent {
  constructor(router) {
    this.router = router;
  }
  ngOnInit() {
    this.recallJsFuntions();
  }
  recallJsFuntions() {
    this.router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationStart) {
        $('.preloader').fadeIn('slow');
      }
    });
    this.routerSubscription = this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationEnd || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationCancel)).subscribe(event => {
      $.getScript('../assets/js/custom.js');
      $('.preloader').fadeOut('slow');
      this.location = this.router.url;
      if (!(event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
  static {
    this.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_5__.Location, {
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_5__.LocationStrategy,
        useClass: _angular_common__WEBPACK_IMPORTED_MODULE_5__.PathLocationStrategy
      }])],
      decls: 3,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-preloader")(1, "router-outlet")(2, "app-footer");
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _components_common_preloader_preloader_component__WEBPACK_IMPORTED_MODULE_0__.PreloaderComponent, _components_common_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _components_pages_home_one_home_one_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/pages/home-one/home-one.component */ 7992);
/* harmony import */ var _components_common_preloader_preloader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/common/preloader/preloader.component */ 7235);
/* harmony import */ var _components_common_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/common/footer/footer.component */ 2595);
/* harmony import */ var _components_common_navbar_style_one_navbar_style_one_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/common/navbar-style-one/navbar-style-one.component */ 9755);
/* harmony import */ var _components_common_navbar_style_two_navbar_style_two_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/common/navbar-style-two/navbar-style-two.component */ 8587);
/* harmony import */ var _components_pages_about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/pages/about/about.component */ 9374);
/* harmony import */ var _components_pages_instructor_instructor_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/pages/instructor/instructor.component */ 858);
/* harmony import */ var _components_pages_courses_courses_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/pages/courses/courses.component */ 10);
/* harmony import */ var _components_pages_error_error_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/pages/error/error.component */ 9746);
/* harmony import */ var _components_pages_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/pages/login/login.component */ 4914);
/* harmony import */ var _components_pages_register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/pages/register/register.component */ 4166);
/* harmony import */ var _components_pages_services_services_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/pages/services/services.component */ 2691);
/* harmony import */ var _components_pages_services_details_services_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/pages/services-details/services-details.component */ 4586);
/* harmony import */ var _components_pages_news_news_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/pages/news/news.component */ 8374);
/* harmony import */ var _components_pages_news_details_news_details_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/pages/news-details/news-details.component */ 6372);
/* harmony import */ var _components_pages_products_details_products_details_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/pages/products-details/products-details.component */ 9350);
/* harmony import */ var _components_pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/pages/contact/contact.component */ 6006);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _components_pages_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/pages/forgot-password/forgot-password.component */ 1590);
/* harmony import */ var _components_pages_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/pages/reset-password/reset-password.component */ 6606);
/* harmony import */ var _components_pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/pages/profile/profile.component */ 4546);
/* harmony import */ var _components_pages_admin_admin_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/pages/admin/admin.component */ 430);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/core */ 7580);


























class AppModule {
  static {
    this.ɵfac = function AppModule_Factory(t) {
      return new (t || AppModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineInjector"]({
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_24__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.ReactiveFormsModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _components_pages_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_19__.ForgotPasswordComponent, _components_pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_21__.ProfileComponent, _components_pages_home_one_home_one_component__WEBPACK_IMPORTED_MODULE_2__.HomeOneComponent, _components_common_preloader_preloader_component__WEBPACK_IMPORTED_MODULE_3__.PreloaderComponent, _components_common_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__.FooterComponent, _components_common_navbar_style_one_navbar_style_one_component__WEBPACK_IMPORTED_MODULE_5__.NavbarStyleOneComponent, _components_common_navbar_style_two_navbar_style_two_component__WEBPACK_IMPORTED_MODULE_6__.NavbarStyleTwoComponent, _components_pages_about_about_component__WEBPACK_IMPORTED_MODULE_7__.AboutComponent, _components_pages_instructor_instructor_component__WEBPACK_IMPORTED_MODULE_8__.InstructorComponent, _components_pages_courses_courses_component__WEBPACK_IMPORTED_MODULE_9__.CoursesComponent, _components_pages_error_error_component__WEBPACK_IMPORTED_MODULE_10__.ErrorComponent, _components_pages_login_login_component__WEBPACK_IMPORTED_MODULE_11__.LoginComponent, _components_pages_register_register_component__WEBPACK_IMPORTED_MODULE_12__.RegisterComponent, _components_pages_services_services_component__WEBPACK_IMPORTED_MODULE_13__.ServicesComponent, _components_pages_services_details_services_details_component__WEBPACK_IMPORTED_MODULE_14__.ServicesDetailsComponent, _components_pages_news_news_component__WEBPACK_IMPORTED_MODULE_15__.NewsComponent, _components_pages_news_details_news_details_component__WEBPACK_IMPORTED_MODULE_16__.NewsDetailsComponent, _components_pages_products_details_products_details_component__WEBPACK_IMPORTED_MODULE_17__.ProductsDetailsComponent, _components_pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__.ContactComponent, _components_pages_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_20__.ResetPasswordComponent, _components_pages_admin_admin_component__WEBPACK_IMPORTED_MODULE_22__.AdminComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_24__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.ReactiveFormsModule]
  });
})();

/***/ }),

/***/ 2595:
/*!**************************************************************!*\
  !*** ./src/app/components/common/footer/footer.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);



class FooterComponent {
  constructor() {}
  ngOnInit() {}
  static {
    this.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 76,
      vars: 0,
      consts: [[1, "footer-area"], [1, "footer-top", "pt-100", "pb-70"], [1, "container"], [1, "row"], [1, "col-lg-8", "col-sm-12"], [1, "footer-content"], [1, "footer-conten-title"], ["routerLink", "/"], ["src", "assets/img/logo.png", "alt", "Logo"], [1, "newsleter-area"], [1, "newsletter-form"], ["type", "email", "placeholder", "Email", "name", "EMAIL", "required", "", "autocomplete", "off", 1, "form-control"], ["type", "submit", 1, "subscribe-btn"], [1, "footer-social"], ["href", "#", "target", "_blank"], [1, "fab", "fa-facebook-f"], [1, "fab", "fa-instagram"], [1, "col-lg-4", "col-sm-12", "text-lg-end", "text-sm-start"], [1, "footer-list"], [1, "text-lg-end"], ["href", "tel:+56123456789"], [1, "fas", "fa-mobile-alt"], ["href", "mailto:hello@sonidos.com"], [1, "far", "fa-envelope"], [1, "fas", "fa-map-marker-alt"], [1, "footer-bottom"], [1, "row", "align-items-center"], [1, "col-lg-7"], [1, "bottom-list"], ["routerLink", "/about"], ["routerLink", "/services"], ["routerLink", "/gallery"], ["routerLink", "/news"], ["routerLink", "/shop"], ["routerLink", "/contact"], [1, "col-lg-5"], [1, "bottom-text"], ["href", "https://google.com/", "target", "_blank"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9)(10, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Deja que sea el propio equipo el que vaya a ti");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Guarda esta b\u00FAsqueda para ser la primera persona en enterarte cuando se a\u00F1ada alg\u00FAn equipo nuevo.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "form", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Subscribete");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13)(20, "ul")(21, "li")(22, "a", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li")(25, "a", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 17)(28, "div", 18)(29, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Contacto");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ul", 19)(32, "li")(33, "a", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " +56 123 456 789");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li")(37, "a", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " hello.com");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Santiago");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 25)(44, "div", 2)(45, "div", 26)(46, "div", 27)(47, "div", 28)(48, "ul")(49, "li")(50, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Home");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li")(53, "a", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Nosotros");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li")(56, "a", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Servicios");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li")(59, "a", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Galeria");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li")(62, "a", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Novedades");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li")(65, "a", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Tienda");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li")(68, "a", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Contacto");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 35)(71, "div", 36)(72, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "\u00A9 sonidos ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "SoundSeeker");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 9755:
/*!**********************************************************************************!*\
  !*** ./src/app/components/common/navbar-style-one/navbar-style-one.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavbarStyleOneComponent: () => (/* binding */ NavbarStyleOneComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);




const _c0 = () => ({
  exact: true
});
function NavbarStyleOneComponent_li_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 24)(1, "a", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00BFOlvidaste tu clave?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function NavbarStyleOneComponent_li_102_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 24)(1, "a", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Perfil");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function NavbarStyleOneComponent_li_103_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 24)(1, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarStyleOneComponent_li_103_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Cerrar sesi\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
class NavbarStyleOneComponent {
  constructor() {
    this.userName = 'Visitante';
    this.isLoggedIn = false;
  }
  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('currentUser') || 'null');
    if (user) {
      this.userName = user.firstName || user.email;
      this.isLoggedIn = true;
    }
  }
  logout() {
    localStorage.removeItem('currentUser');
    this.userName = 'Visitante';
    this.isLoggedIn = false;
  }
  static {
    this.ɵfac = function NavbarStyleOneComponent_Factory(t) {
      return new (t || NavbarStyleOneComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarStyleOneComponent,
      selectors: [["app-navbar-style-one"]],
      decls: 117,
      vars: 28,
      consts: [[1, "header-area", "top-header"], [1, "container"], [1, "row", "align-items-center"], [1, "col-lg-8"], [1, "header-left"], [1, "fas", "fa-clock"], [1, "fas", "fa-map-marker-alt"], ["href", "tel:+56123456789"], [1, "fas", "fa-phone-alt"], [1, "col-lg-4"], [1, "social-icon"], ["href", "#", "target", "_blank"], [1, "fab", "fa-facebook-f"], [1, "fab", "fa-youtube"], [1, "fab", "fa-instagram"], [1, "navbar-area"], [1, "mobile-nav"], ["routerLink", "/", 1, "logo"], ["src", "assets/img/logo.png", "alt", "Logo"], [1, "main-nav"], [1, "navbar", "navbar-expand-md", "navbar-light"], ["routerLink", "/", 1, "navbar-brand"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse", "mean-menu"], [1, "navbar-nav", "m-auto"], [1, "nav-item"], ["routerLink", "/courses", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/instructor", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["href", "javascript:void(0)", 1, "nav-link"], [1, "fas", "fa-chevron-right"], [1, "dropdown-menu"], ["routerLink", "/login", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/register", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["class", "nav-item", 4, "ngIf"], ["routerLink", "/services", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/services-details", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/news", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/news-details", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/shop", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/cart", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/products-details", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/contact", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], [1, "navbar-nav", "ms-auto"], [1, "other-side"], [1, "search-area"], [1, "other-option"], [1, "search-item"], ["href", "#", 1, "search-btn"], [1, "flaticon-loupe"], [1, "close-btn", "fas", "fa-times"], [1, "search-overlay", "search-popup"], [1, "search-box"], [1, "search-form"], ["name", "search", "placeholder", "Search", "type", "text", 1, "search-input"], ["type", "submit", 1, "search-button"], ["routerLink", "/forgot-password", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/profile", "routerLinkActive", "active", 1, "nav-link"], ["href", "javascript:void(0)", 1, "nav-link", "text-danger", 3, "click"]],
      template: function NavbarStyleOneComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "ul")(6, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " LUN - VIE (10:00 AM - 6:00PM) ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Santiago ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li")(13, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " +56 9 1234 5678 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9)(17, "div", 10)(18, "ul")(19, "li")(20, "a", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li")(23, "a", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li")(26, "a", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 15)(29, "div", 16)(30, "a", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 19)(33, "div", 1)(34, "nav", 20)(35, "a", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 22)(38, "ul", 23)(39, "li", 24)(40, "a", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Cursos");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li", 24)(43, "a", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Instructor");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li", 24)(46, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Ingresar ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "ul", 29)(50, "li", 24)(51, "a", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Log In");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li", 24)(54, "a", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Registro");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, NavbarStyleOneComponent_li_56_Template, 3, 0, "li", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li", 24)(58, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Servicios ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "i", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "ul", 29)(62, "li", 24)(63, "a", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Reparaciones ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li", 24)(66, "a", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Servicios Detalle");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li", 24)(69, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "News ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "i", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "ul", 29)(73, "li", 24)(74, "a", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Novedades");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li", 24)(77, "a", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Novedades Detalle");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "li", 24)(80, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Tienda ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "i", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "ul", 29)(84, "li", 24)(85, "a", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Instrumentos");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "li", 24)(88, "a", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Efectos");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "li", 24)(91, "a", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Detalle del producto");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "li", 24)(94, "a", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Contacto");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "ul", 41)(97, "li", 24)(98, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "i", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "ul", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](102, NavbarStyleOneComponent_li_102_Template, 3, 0, "li", 32)(103, NavbarStyleOneComponent_li_103_Template, 3, 0, "li", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 42)(105, "div", 43)(106, "div", 44)(107, "div", 45)(108, "a", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "i", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "i", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 49)(112, "div", 50)(113, "form", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "input", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "button", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "i", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](40);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](27, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\uD83D\uDC64 ", ctx.userName, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 8587:
/*!**********************************************************************************!*\
  !*** ./src/app/components/common/navbar-style-two/navbar-style-two.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavbarStyleTwoComponent: () => (/* binding */ NavbarStyleTwoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);



const _c0 = () => ({
  exact: true
});
class NavbarStyleTwoComponent {
  constructor() {}
  ngOnInit() {}
  static {
    this.ɵfac = function NavbarStyleTwoComponent_Factory(t) {
      return new (t || NavbarStyleTwoComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarStyleTwoComponent,
      selectors: [["app-navbar-style-two"]],
      decls: 86,
      vars: 22,
      consts: [[1, "navbar-area"], [1, "mobile-nav"], ["routerLink", "/", 1, "logo"], ["src", "assets/img/logo.png", "alt", "Logo"], [1, "main-nav", "nav-top"], [1, "container"], [1, "navbar", "navbar-expand-md", "navbar-light"], ["routerLink", "/", 1, "navbar-brand"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse", "mean-menu"], [1, "navbar-nav", "m-auto"], [1, "nav-item"], ["routerLink", "/", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/about", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/login", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/register", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["href", "javascript:void(0)", 1, "nav-link"], [1, "fas", "fa-chevron-right"], [1, "dropdown-menu"], ["routerLink", "/instructor", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/courses", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/services", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/services-details", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/news", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/news-details", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/contact", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], [1, "other-side"], [1, "search-area"], [1, "other-option"], [1, "search-item"], ["href", "#", 1, "search-btn"], [1, "flaticon-loupe"], [1, "close-btn", "fas", "fa-times"], [1, "search-overlay", "search-popup"], [1, "search-box"], [1, "search-form"], ["name", "search", "placeholder", "Search", "type", "text", 1, "search-input"], ["type", "submit", 1, "search-button"], [1, "modal-menu"], ["href", "#", "data-bs-toggle", "modal", "data-bs-target", "#myModal2"], [1, "flaticon-menu"], [1, "sidebar-modal"], ["id", "myModal2", "tabindex", "-1", "role", "dialog", 1, "modal", "right", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "fas", "fa-times"], ["id", "myModalLabel2", 1, "modal-title"], ["routerLink", "/"]],
      template: function NavbarStyleTwoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "a", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "nav", 6)(7, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8)(10, "ul", 9)(11, "li", 10)(12, "a", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Home");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 10)(15, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "About");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 10)(18, "a", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Log In");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 10)(21, "a", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Register");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 10)(24, "a", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Pages ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ul", 17)(28, "li", 10)(29, "a", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Instructor");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 10)(32, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Courses");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li", 10)(35, "a", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Servicios ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "ul", 17)(39, "li", 10)(40, "a", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Servicios ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li", 10)(43, "a", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Servicios Detalle");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li", 10)(46, "a", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Novedades ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "ul", 17)(50, "li", 10)(51, "a", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Novedades");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li", 10)(54, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Novedades Detalle");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li", 10)(57, "a", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Contacto");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 25)(60, "div", 26)(61, "div", 27)(62, "div", 28)(63, "a", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "i", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "i", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 32)(67, "div", 33)(68, "form", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "input", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "button", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "i", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 37)(73, "a", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "i", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 40)(76, "div", 41)(77, "div", 42)(78, "div", 43)(79, "div", 44)(80, "button", 45)(81, "span", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "i", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h2", 48)(84, "a", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "img", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c0));
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 7235:
/*!********************************************************************!*\
  !*** ./src/app/components/common/preloader/preloader.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PreloaderComponent: () => (/* binding */ PreloaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class PreloaderComponent {
  constructor() {}
  ngOnInit() {}
  static {
    this.ɵfac = function PreloaderComponent_Factory(t) {
      return new (t || PreloaderComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PreloaderComponent,
      selectors: [["app-preloader"]],
      decls: 2,
      vars: 0,
      consts: [[1, "preloader"], [1, "preloader-wave"]],
      template: function PreloaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 9374:
/*!***********************************************************!*\
  !*** ./src/app/components/pages/about/about.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutComponent: () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _common_navbar_style_one_navbar_style_one_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/navbar-style-one/navbar-style-one.component */ 9755);



class AboutComponent {
  constructor() {}
  ngOnInit() {}
  static {
    this.ɵfac = function AboutComponent_Factory(t) {
      return new (t || AboutComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AboutComponent,
      selectors: [["app-about"]],
      decls: 152,
      vars: 0,
      consts: [[1, "inner-banner", "bg-shape1", "bg-color1"], [1, "d-table"], [1, "d-table-cell"], [1, "conatiner"], [1, "inner-title", "text-center"], ["href", "index.html"], [1, "fas", "fa-chevron-right"], [1, "about-detl", "pt-100", "pb-70"], [1, "container"], [1, "row"], [1, "col-lg-8"], [1, "common-dtel-text"], [1, "col-lg-4"], [1, "common-offer"], [1, "drive-img"], ["src", "assets/img/instrumento.png", "alt", "Icono musical"], [1, "common-offer-text"], ["href", "tel:+56912345678", 1, "call-btn"], [1, "product-area", "pt-100", "pb-70"], [1, "scetion-title", "text-center", "mb-50"], [1, "col-lg-3", "col-sm-6"], [1, "product-item"], ["routerLink", "/products-details"], ["src", "assets/img/product/1.jpg", "alt", "Guitarra el\u00E9ctrica"], [1, "product-cotent"], [1, "product-text"], ["routerLink", "/cart", 1, "add-product"], [1, "flaticon-plus"], ["src", "assets/img/product/2.jpg", "alt", "Pedal Overdrive"], ["src", "assets/img/product/3.jpg", "alt", "Sintetizador"], ["src", "assets/img/product/4.jpg", "alt", "Interfaz de audio"], [1, "trainers-area", "pt-100", "pb-70"], [1, "trainer-card"], ["routerLink", "/instructor"], ["src", "assets/img/trainers/1.jpg", "alt", "Imagen equipo"], [1, "trainer-content"], [1, "social-icon"], ["href", "#"], [1, "fab", "fa-linkedin-in"], [1, "fab", "fa-facebook-f"], [1, "fas", "fa-envelope"], ["src", "assets/img/trainers/2.jpg", "alt", "Imagen equipo"]],
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navbar-style-one");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Nosotros");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ul")(9, "li")(10, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Home");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Nosotros");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 7)(17, "div", 8)(18, "div", 9)(19, "div", 10)(20, "div", 11)(21, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Sonidos");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Sonidos es una plataforma dedicada a la compra, venta e intercambio de instrumentos musicales y pedales de efectos de segunda mano. Nuestra misi\u00F3n es conectar m\u00FAsicos de todo el pa\u00EDs, facilitando el acceso a equipos \u00FAnicos, accesibles y en buen estado.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Creemos en el poder de la m\u00FAsica como medio de expresi\u00F3n y comunidad. Por eso, ofrecemos un espacio donde cada instrumento cuenta una historia y cada usuario puede seguir construyendo la suya.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Adem\u00E1s, promovemos el consumo responsable y la reutilizaci\u00F3n de equipos, fomentando as\u00ED una cultura sustentable dentro del mundo musical. Explora, comparte y encuentra el sonido que buscas en Sonidos.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 12)(30, "div", 13)(31, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "img", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 16)(34, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "\u00BFTienes instrumentos que ya no usas?");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "a", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Cont\u00E1ctanos");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "section", 18)(39, "div", 8)(40, "div", 19)(41, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Nuestros Productos");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Encuentra el equipo que necesitas");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Explora nuestra selecci\u00F3n de instrumentos musicales y pedales de efectos usados en excelente estado, listos para acompa\u00F1arte en tu pr\u00F3ximo proyecto sonoro.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 9)(48, "div", 20)(49, "div", 21)(50, "a", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "img", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 24)(53, "div", 25)(54, "a", 22)(55, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Guitarra El\u00E9ctrica Stratocaster");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "$120.000");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "a", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "i", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 20)(62, "div", 21)(63, "a", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "img", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 24)(66, "div", 25)(67, "a", 22)(68, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Pedal Overdrive Boss SD-1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "$45.000");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "a", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](73, "i", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 20)(75, "div", 21)(76, "a", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "img", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 24)(79, "div", 25)(80, "a", 22)(81, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "Sintetizador Korg Volca Keys");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "$70.000");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "a", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](86, "i", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 20)(88, "div", 21)(89, "a", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](90, "img", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 24)(92, "div", 25)(93, "a", 22)(94, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "Interfaz Focusrite Scarlett 2i2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "$95.000");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "a", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](99, "i", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "section", 31)(101, "div", 8)(102, "div", 19)(103, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "Nuestro Equipo");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "Conoce a nuestros colaboradores");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, "Somos un equipo de m\u00FAsicos, t\u00E9cnicos y amantes del sonido que trabajamos para ofrecerte una experiencia de compra segura, cercana y confiable.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div", 9)(110, "div", 20)(111, "div", 32)(112, "a", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](113, "img", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 35)(115, "a", 33)(116, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, "Daniel Rojas");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119, "Guitarrista y asesor de productos");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "div", 36)(121, "ul")(122, "li")(123, "a", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](124, "i", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "li")(126, "a", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](127, "i", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "li")(129, "a", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](130, "i", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "div", 20)(132, "div", 32)(133, "a", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](134, "img", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "div", 35)(136, "a", 33)(137, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](138, "Marcela D\u00EDaz");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](140, "Especialista en pedales de efectos");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "div", 36)(142, "ul")(143, "li")(144, "a", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](145, "i", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "li")(147, "a", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](148, "i", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "li")(150, "a", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](151, "i", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()();
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _common_navbar_style_one_navbar_style_one_component__WEBPACK_IMPORTED_MODULE_0__.NavbarStyleOneComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 430:
/*!***********************************************************!*\
  !*** ./src/app/components/pages/admin/admin.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminComponent: () => (/* binding */ AdminComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _common_navbar_style_one_navbar_style_one_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/navbar-style-one/navbar-style-one.component */ 9755);






function AdminComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " El nombre es obligatorio. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AdminComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " El apellido es obligatorio. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AdminComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Ingresa un correo v\u00E1lido. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AdminComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " El tel\u00E9fono es obligatorio. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AdminComponent_div_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " La fecha de nacimiento es obligatoria. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AdminComponent_div_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " M\u00EDnimo 6-18 caracteres, 1 may\u00FAscula, 1 n\u00FAmero y 1 s\u00EDmbolo. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AdminComponent_div_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Las contrase\u00F1as no coinciden. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AdminComponent_div_82_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Perfil actualizado correctamente. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class AdminComponent {
  constructor(fb) {
    this.fb = fb;
    this.submitted = false;
    this.updateSuccess = false;
  }
  ngOnInit() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    this.profileForm = this.fb.group({
      firstName: [currentUser.firstName || '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      lastName: [currentUser.lastName || '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      email: [currentUser.email || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]],
      phone: [currentUser.phone || '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      address: [currentUser.address || ''],
      birthDate: [currentUser.birthDate || '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      currentPassword: [''],
      newPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{6,18}$/)]],
      confirmPassword: ['']
    }, {
      validators: this.passwordsMatch
    });
  }
  passwordsMatch(control) {
    const newPassword = control.get('newPassword')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    return newPassword === confirmPassword ? null : {
      mismatch: true
    };
  }
  onSubmit() {
    this.submitted = true;
    if (this.profileForm.invalid) return;
    const updatedData = this.profileForm.value;
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const index = users.findIndex(u => u.email === updatedData.email);
    if (index !== -1) {
      users[index] = {
        ...users[index],
        ...updatedData,
        password: updatedData.newPassword || users[index].password
      };
      localStorage.setItem('users', JSON.stringify(users));
      localStorage.setItem('currentUser', JSON.stringify(users[index]));
      this.updateSuccess = true;
    }
  }
  onReset() {
    this.profileForm.reset();
    this.submitted = false;
    this.updateSuccess = false;
  }
  static {
    this.ɵfac = function AdminComponent_Factory(t) {
      return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AdminComponent,
      selectors: [["app-admin"]],
      decls: 83,
      vars: 9,
      consts: [[1, "inner-banner", "bg-shape3", "bg-color4"], [1, "d-table"], [1, "d-table-cell"], [1, "conatiner"], [1, "inner-title", "text-center"], ["routerLink", "/"], [1, "fas", "fa-chevron-right"], [1, "container", "mt-5"], [3, "ngSubmit", "formGroup"], [1, "row"], [1, "col-md-6"], [1, "form-group"], ["for", "firstName"], ["type", "text", "id", "firstName", "formControlName", "firstName", "placeholder", "Tu nombre", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], ["for", "lastName"], ["type", "text", "id", "lastName", "formControlName", "lastName", "placeholder", "Tu apellido", 1, "form-control"], ["for", "email"], ["type", "email", "id", "email", "formControlName", "email", "placeholder", "ejemplo@correo.com", 1, "form-control"], ["for", "phone"], ["type", "text", "id", "phone", "formControlName", "phone", "placeholder", "+56 9 1234 5678", 1, "form-control"], ["for", "address"], ["type", "text", "id", "address", "formControlName", "address", "placeholder", "Direcci\u00F3n de despacho", 1, "form-control"], ["for", "birthDate"], ["type", "date", "id", "birthDate", "formControlName", "birthDate", 1, "form-control"], [1, "col-md-12"], [1, "my-4"], [1, "col-md-4"], ["type", "password", "formControlName", "currentPassword", 1, "form-control"], ["type", "password", "formControlName", "newPassword", 1, "form-control"], ["type", "password", "formControlName", "confirmPassword", 1, "form-control"], [1, "mt-4", "text-center", "pb-70"], ["type", "submit", 1, "btn", "btn-success"], ["type", "button", 1, "btn", "btn-secondary", "ms-2", 3, "click"], ["class", "alert alert-success mt-4 text-center pb-70", 4, "ngIf"], [1, "text-danger"], [1, "alert", "alert-success", "mt-4", "text-center", "pb-70"]],
      template: function AdminComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navbar-style-one");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Panel de Administraci\u00F3n");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ul")(9, "li")(10, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Inicio");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Admin");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 7)(17, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Mi Perfil (Administrador)");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "form", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AdminComponent_Template_form_ngSubmit_19_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 9)(21, "div", 10)(22, "div", 11)(23, "label", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Nombre");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "input", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, AdminComponent_div_26_Template, 2, 0, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 10)(28, "div", 11)(29, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Apellido");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, AdminComponent_div_32_Template, 2, 0, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 10)(34, "div", 11)(35, "label", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Correo electr\u00F3nico");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "input", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, AdminComponent_div_38_Template, 2, 0, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 10)(40, "div", 11)(41, "label", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Tel\u00E9fono");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "input", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, AdminComponent_div_44_Template, 2, 0, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 10)(46, "div", 11)(47, "label", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Direcci\u00F3n");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "input", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 10)(51, "div", 11)(52, "label", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Fecha de nacimiento");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "input", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](55, AdminComponent_div_55_Template, 2, 0, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "hr", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Cambiar contrase\u00F1a");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 27)(61, "div", 11)(62, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Contrase\u00F1a actual");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "input", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 27)(66, "div", 11)(67, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Nueva contrase\u00F1a");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "input", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](70, AdminComponent_div_70_Template, 2, 0, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 27)(72, "div", 11)(73, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Confirmar nueva contrase\u00F1a");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](75, "input", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](76, AdminComponent_div_76_Template, 2, 0, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 31)(78, "button", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Guardar cambios");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "button", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_80_listener() {
            return ctx.onReset();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "Restablecer");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](82, AdminComponent_div_82_Template, 2, 0, "div", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          let tmp_1_0;
          let tmp_2_0;
          let tmp_3_0;
          let tmp_4_0;
          let tmp_5_0;
          let tmp_6_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.profileForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted && ((tmp_1_0 = ctx.profileForm.get("firstName")) == null ? null : tmp_1_0.invalid));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted && ((tmp_2_0 = ctx.profileForm.get("lastName")) == null ? null : tmp_2_0.invalid));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted && ((tmp_3_0 = ctx.profileForm.get("email")) == null ? null : tmp_3_0.invalid));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted && ((tmp_4_0 = ctx.profileForm.get("phone")) == null ? null : tmp_4_0.invalid));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted && ((tmp_5_0 = ctx.profileForm.get("birthDate")) == null ? null : tmp_5_0.invalid));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted && ((tmp_6_0 = ctx.profileForm.get("newPassword")) == null ? null : tmp_6_0.invalid));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.profileForm.hasError("mismatch"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.updateSuccess);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _common_navbar_style_one_navbar_style_one_component__WEBPACK_IMPORTED_MODULE_0__.NavbarStyleOneComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 6006:
/*!***************************************************************!*\
  !*** ./src/app/components/pages/contact/contact.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactComponent: () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _common_navbar_style_one_navbar_style_one_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/navbar-style-one/navbar-style-one.component */ 9755);



class ContactComponent {
  constructor() {}
  ngOnInit() {}
  static {
    this.ɵfac = function ContactComponent_Factory(t) {
      return new (t || ContactComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ContactComponent,
      selectors: [["app-contact"]],
      decls: 52,
      vars: 0,
      consts: [[1, "inner-banner", "bg-shape2", "bg-color2"], [1, "d-table"], [1, "d-table-cell"], [1, "conatiner"], [1, "inner-title", "text-center"], ["href", "index.html"], [1, "fas", "fa-chevron-right"], [1, "contact-area", "pt-100", "pb-70"], [1, "container"], [1, "contact-title", "text-center", "mb-50"], [1, "contact-form", "pb-70"], [1, "container-fluid"], [1, "row", "align-items-center"], [1, "col-lg-6", "p-0"], [1, "contact-img"], ["src", "assets/img/contact.png", "alt", "Imagen de contacto"], [1, "col-lg-6"], [1, "form-area"], [1, "form-section"], ["id", "contactForm"], [1, "row"], [1, "col-lg-6", "col-sm-6"], [1, "form-group"], ["type", "text", "name", "name", "id", "name", "required", "", "placeholder", "Tu nombre", 1, "form-control"], ["type", "email", "name", "email", "id", "email", "required", "", "placeholder", "Tu correo electr\u00F3nico", 1, "form-control"], ["type", "text", "name", "phone_number", "id", "phone_number", "required", "", "placeholder", "Tu tel\u00E9fono", 1, "form-control"], ["type", "text", "name", "msg_subject", "id", "msg_subject", "required", "", "placeholder", "Asunto", 1, "form-control"], [1, "col-lg-12", "col-md-12"], ["name", "message", "id", "message", "cols", "30", "rows", "5", "required", "", "placeholder", "Tu mensaje", 1, "form-message", "textarea-hight"], ["type", "submit", 1, "default-btn1", "btn-two"]],
      template: function ContactComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navbar-style-one");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Cont\u00E1ctanos");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ul")(9, "li")(10, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Inicio");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Cont\u00E1ctanos");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 7)(17, "div", 8)(18, "div", 9)(19, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "En Sonidos estamos disponibles de lunes a viernes de 10:00 a 19:00 hrs. \u00A1Tambi\u00E9n puedes escribirnos 24/7!");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 10)(22, "div", 11)(23, "div", 12)(24, "div", 13)(25, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "img", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 16)(28, "div", 17)(29, "div", 18)(30, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "\u00BFEn qu\u00E9 podemos ayudarte?");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "form", 19)(33, "div", 20)(34, "div", 21)(35, "div", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "input", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 21)(38, "div", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "input", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 21)(41, "div", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "input", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 21)(44, "div", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "input", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 27)(47, "div", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "textarea", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 27)(50, "button", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Enviar mensaje");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()();
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _common_navbar_style_one_navbar_style_one_component__WEBPACK_IMPORTED_MODULE_0__.NavbarStyleOneComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 10:
/*!***************************************************************!*\
  !*** ./src/app/components/pages/courses/courses.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CoursesComponent: () => (/* binding */ CoursesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _common_navbar_style_one_navbar_style_one_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/navbar-style-one/navbar-style-one.component */ 9755);



class CoursesComponent {
  constructor() {}
  ngOnInit() {}
  static {
    this.ɵfac = function CoursesComponent_Factory(t) {
      return new (t || CoursesComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CoursesComponent,
      selectors: [["app-courses"]],
      decls: 146,
      vars: 0,
      consts: [[1, "inner-banner", "bg-shape2", "bg-color3"], [1, "d-table"], [1, "d-table-cell"], [1, "conatiner"], [1, "inner-title", "text-center"], ["href", "index.html"], [1, "fas", "fa-chevron-right"], [1, "course-area", "pt-100", "pb-70"], [1, "container"], [1, "scetion-title", "text-center", "mb-50"], [1, "row"], [1, "col-lg-4", "col-md-6"], [1, "courses-card-item"], [1, "courses-card-img"], ["routerLink", "/"], ["src", "assets/img/course/3.jpg", "alt", "Curso de Guitarra"], [1, "courses-card-text"], [1, "active"], [1, "courses-card-content"], ["routerLink", "/", 1, "course-book-btn"], ["src", "assets/img/course/1.jpg", "alt", "Curso de Pedales"], ["src", "assets/img/course/2.jpg", "alt", "Curso de Bajo"], ["src", "assets/img/course/4.jpg", "alt", "Curso producci\u00F3n musical"], ["src", "assets/img/course/5.jpg", "alt", "Curso improvisaci\u00F3n"], ["src", "assets/img/course/6.jpg", "alt", "Curso canto"]],
      template: function CoursesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navbar-style-one");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Cursos");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ul")(9, "li")(10, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Inicio");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Cursos");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 7)(17, "div", 8)(18, "div", 9)(19, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Formaci\u00F3n Musical");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Nuestros Cursos Disponibles");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Aprende m\u00FAsica con personas talentosas de tu misma comuna. Todos los cursos son presenciales y dictados por instructores locales con experiencia.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 10)(26, "div", 11)(27, "div", 12)(28, "div", 13)(29, "a", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "img", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "$20.000");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "ul")(34, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Cupos Disponibles");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "4 sesiones");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 18)(39, "a", 14)(40, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Introducci\u00F3n a la Guitarra El\u00E9ctrica");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Aprende los acordes b\u00E1sicos, escalas y primeros riffs. No necesitas conocimientos previos, solo ganas de tocar.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Inscribirme");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 11)(47, "div", 12)(48, "div", 13)(49, "a", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "img", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "$25.000");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "ul")(54, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Cupos Disponibles");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "3 sesiones");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 18)(59, "a", 14)(60, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Pedales de Efectos: Uso y Configuraci\u00F3n");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Conoce los distintos tipos de pedales, c\u00F3mo encadenarlos, y c\u00F3mo sacar el mejor sonido para tu estilo.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Inscribirme");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 11)(67, "div", 12)(68, "div", 13)(69, "a", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "img", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "$22.000");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "ul")(74, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Cupos Disponibles");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "5 sesiones");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 18)(79, "a", 14)(80, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "Bajo El\u00E9ctrico para Principiantes");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Una base s\u00F3lida para quienes quieren iniciarse en el bajo: t\u00E9cnica, groove y acompa\u00F1amiento.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "Inscribirme");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 11)(87, "div", 12)(88, "div", 13)(89, "a", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](90, "img", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "$30.000");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "ul")(94, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "Cupos Disponibles");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "6 sesiones");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 18)(99, "a", 14)(100, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "Producci\u00F3n Musical desde Cero");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "Aprende a grabar, editar y mezclar tus canciones usando software gratuito y equipo accesible.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "Inscribirme");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "div", 11)(107, "div", 12)(108, "div", 13)(109, "a", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](110, "img", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "$27.000");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "ul")(114, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, "Cupos Disponibles");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, "4 sesiones");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "div", 18)(119, "a", 14)(120, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, "Improvisaci\u00F3n Musical para Guitarra");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123, "Ejercicios pr\u00E1cticos y herramientas creativas para desarrollar tu estilo y soltura al improvisar.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](125, "Inscribirme");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "div", 11)(127, "div", 12)(128, "div", 13)(129, "a", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](130, "img", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](132, "$18.000");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "ul")(134, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, "Cupos Disponibles");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](137, "3 sesiones");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "div", 18)(139, "a", 14)(140, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](141, "Canto Popular: T\u00E9cnica y Expresi\u00F3n");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143, "Domina la respiraci\u00F3n, afinaci\u00F3n y expresi\u00F3n vocal en este curso pr\u00E1ctico con acompa\u00F1amiento en vivo.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](145, "Inscribirme");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _common_navbar_style_one_navbar_style_one_component__WEBPACK_IMPORTED_MODULE_0__.NavbarStyleOneComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 9746:
/*!***********************************************************!*\
  !*** ./src/app/components/pages/error/error.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorComponent: () => (/* binding */ ErrorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);


class ErrorComponent {
  constructor() {}
  ngOnInit() {}
  static {
    this.ɵfac = function ErrorComponent_Factory(t) {
      return new (t || ErrorComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ErrorComponent,
      selectors: [["app-error"]],
      decls: 30,
      vars: 0,
      consts: [[1, "inner-banner", "bg-shape2", "bg-color5"], [1, "d-table"], [1, "d-table-cell"], [1, "conatiner"], [1, "inner-title", "text-center"], ["href", "index.html"], [1, "fas", "fa-chevron-right"], [1, "error-area"], [1, "error-content"], ["routerLink", "/", 1, "default-btn1", "page-btn"]],
      template: function ErrorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Error 404");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul")(8, "li")(9, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Inicio");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Error 404");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7)(16, "div", 1)(17, "div", 2)(18, "div", 8)(19, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "4 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "0");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " 4");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u00A1Uy! P\u00E1gina no encontrada");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "La p\u00E1gina que est\u00E1s buscando no existe, ha cambiado de nombre o est\u00E1 temporalmente fuera de servicio.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Volver al inicio");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 1590:
/*!*******************************************************************************!*\
  !*** ./src/app/components/pages/forgot-password/forgot-password.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForgotPasswordComponent: () => (/* binding */ ForgotPasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _common_navbar_style_one_navbar_style_one_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/navbar-style-one/navbar-style-one.component */ 9755);






function ForgotPasswordComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Ingrese un correo v\u00E1lido. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ForgotPasswordComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Hemos enviado un enlace de recuperaci\u00F3n a tu correo. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u00BFYa tienes el enlace? Restablecer contrase\u00F1a aqu\u00ED");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function ForgotPasswordComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No encontramos un usuario registrado con ese correo. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class ForgotPasswordComponent {
  constructor(fb) {
    this.fb = fb;
    this.submitted = false;
    this.resetSuccess = false;
    this.userFound = false;
  }
  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]]
    });
  }
  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) return;
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const email = this.form.value.email;
    const user = users.find(u => u.email === email);
    if (user) {
      this.userFound = true;
      this.resetSuccess = true;
      // Aquí se podría enviar un email real si tuvieras backend
      console.log(`Enlace de recuperación enviado a ${email}`);
    } else {
      this.userFound = false;
      this.resetSuccess = false;
    }
  }
  static {
    this.ɵfac = function ForgotPasswordComponent_Factory(t) {
      return new (t || ForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ForgotPasswordComponent,
      selectors: [["app-forgot-password"]],
      decls: 38,
      vars: 4,
      consts: [[1, "inner-banner", "bg-shape3", "bg-color3"], [1, "d-table"], [1, "d-table-cell"], [1, "conatiner"], [1, "inner-title", "text-center"], ["href", "/"], [1, "fas", "fa-chevron-right"], [1, "login-area", "ptb-100"], [1, "container"], [1, "login-form"], [1, "login-title"], [1, "fas", "fa-key", "text-center"], [3, "ngSubmit", "formGroup"], [1, "form-group"], ["for", "email"], ["type", "email", "formControlName", "email", "placeholder", "ejemplo@correo.com", 1, "form-control"], ["class", "text-danger mt-1", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", "w-100", "mt-3"], ["class", "alert alert-success mt-3", 4, "ngIf"], ["class", "alert alert-danger mt-3", 4, "ngIf"], [1, "mt-3", "text-center"], ["routerLink", "/login"], [1, "text-danger", "mt-1"], [1, "alert", "alert-success", "mt-3"], ["routerLink", "/reset-password"], [1, "alert", "alert-danger", "mt-3"]],
      template: function ForgotPasswordComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navbar-style-one");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Recuperar Contrase\u00F1a");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ul")(9, "li")(10, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Inicio");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Recuperar Contrase\u00F1a");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 7)(17, "div", 8)(18, "div", 9)(19, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "i", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "\u00BFOlvidaste tu contrase\u00F1a?");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Ingresa tu correo y te enviaremos un enlace para restablecerla.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "form", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ForgotPasswordComponent_Template_form_ngSubmit_25_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 13)(27, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Correo electr\u00F3nico");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "input", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, ForgotPasswordComponent_div_30_Template, 2, 0, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "button", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Enviar enlace");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, ForgotPasswordComponent_div_33_Template, 5, 0, "div", 18)(34, ForgotPasswordComponent_div_34_Template, 2, 0, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 20)(36, "a", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Volver a iniciar sesi\u00F3n");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          let tmp_1_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted && ((tmp_1_0 = ctx.form.get("email")) == null ? null : tmp_1_0.invalid));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.resetSuccess);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted && !ctx.userFound);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _common_navbar_style_one_navbar_style_one_component__WEBPACK_IMPORTED_MODULE_0__.NavbarStyleOneComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 7992:
/*!*****************************************************************!*\
  !*** ./src/app/components/pages/home-one/home-one.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeOneComponent: () => (/* binding */ HomeOneComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _common_navbar_style_one_navbar_style_one_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/navbar-style-one/navbar-style-one.component */ 9755);



class HomeOneComponent {
  constructor() {}
  ngOnInit() {}
  static {
    this.ɵfac = function HomeOneComponent_Factory(t) {
      return new (t || HomeOneComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: HomeOneComponent,
      selectors: [["app-home-one"]],
      decls: 318,
      vars: 0,
      consts: [[1, "home-slider"], [1, "slider-area", "owl-carousel", "owl-theme"], [1, "slider-item", "slider-bg1"], [1, "d-table"], [1, "d-table-cell"], [1, "container"], [1, "slider-text"], [1, "slider-item", "slider-bg2"], [1, "slider-item", "slider-bg3"], [1, "about-area", "pt-100", "pb-70"], [1, "row", "align-items-center"], [1, "col-lg-6"], [1, "about-text"], [1, "scetion-title"], [1, "about-btn"], ["routerLink", "/about", 1, "default-btn2"], [1, "about-right"], [1, "play-area"], ["width", "560", "height", "315", "src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtrustConstantResourceUrl"]`https://www.youtube.com/embed/TyHE-M1fHaM?si=2-Oh7xYjoYPkWu6s`, "title", "YouTube video player", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", "referrerpolicy", "strict-origin-when-cross-origin", "allowfullscreen", ""], [1, "icon-shape-1"], [1, "flaticon-guitar"], [1, "icon-shape-2"], [1, "service-area", "pt-100", "pb-70"], [1, "scetion-title", "text-center", "mb-50"], [1, "service-item-area", "owl-carousel", "owl-theme"], [1, "service-item"], ["routerLink", "/service-details", 1, "service-item-icon"], [1, "flaticon-teacher"], ["routerLink", "/service-details", 1, "service-head"], [1, "course-area", "pt-100", "pb-70"], [1, "container-fluid"], [1, "row"], [1, "col-lg-7"], [1, "course-item"], [1, "course-text"], [1, "course-btn"], ["routerLink", "/guia", 1, "default-btn2"], [1, "col-lg-5"], [1, "course-img"], ["src", "assets/img/course/1.jpg", "alt", "Imagen Instrumento"], [1, "course-another", "pt-70"], [1, "course-img-2"], ["src", "assets/img/course/2.jpg", "alt", "Imagen Pedal"], [1, "course-item-2"], [1, "icon-shape-3"], [1, "flaticon-music"], [1, "icon-shape-4"], [1, "product-area", "pt-100", "pb-70"], [1, "col-lg-3", "col-sm-6"], [1, "product-item"], ["routerLink", "/products-details"], ["src", "assets/img/product/1.jpg", "alt", "Guitarra Stratocaster"], [1, "product-cotent"], [1, "product-text"], ["routerLink", "/cart", 1, "add-product"], [1, "flaticon-plus"], ["src", "assets/img/product/2.jpg", "alt", "Pedal Delay Boss DD-7"], ["src", "assets/img/product/3.jpg", "alt", "Sintetizador Korg Minilogue"], ["src", "assets/img/product/4.jpg", "alt", "Pedal Overdrive Tube Screamer"], [1, "trainers-area", "pt-70", "pb-70"], [1, "trainer-card"], ["src", "assets/img/trainers/1.jpg", "alt", "Foto Equipo"], [1, "trainer-content"], ["src", "assets/img/trainers/2.jpg", "alt", "Foto Equipo"], ["src", "assets/img/trainers/3.jpg", "alt", "Foto Equipo"], ["src", "assets/img/trainers/4.jpg", "alt", "Foto Equipo"], [1, "news-area", "pb-70"], [1, "col-lg-4", "col-md-6"], [1, "news-card"], [1, "news-img"], ["routerLink", "/news-details"], ["src", "assets/img/news/1.jpg", "alt", "Evento SoundSeeker"], [1, "sub-text"], ["routerLink", "/"], ["href", ""], [1, "news-content"], ["routerLink", "/news-details", 1, "news-icon"], ["src", "assets/img/news/2.jpg", "alt", "Lanzamiento nuevos productos"], ["src", "assets/img/news/3.jpg", "alt", "Tips de mantenimiento"]],
      template: function HomeOneComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navbar-style-one");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "DESCUBRE TU SONIDO CON NOSOTROS");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Explora nuestra selecci\u00F3n de instrumentos musicales y pedales de efectos de segunda mano. Encuentra piezas \u00FAnicas, probadas y listas para seguir creando m\u00FAsica.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7)(13, "div", 3)(14, "div", 4)(15, "div", 5)(16, "div", 6)(17, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "INSTRUMENTOS QUE INSPIRAN, PRECIOS QUE SORPRENDEN");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Cada instrumento tiene una historia. S\u00FAmate a nuestra comunidad y dale nueva vida a guitarras, sintetizadores, bajos y m\u00E1s.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 8)(22, "div", 3)(23, "div", 4)(24, "div", 5)(25, "div", 6)(26, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "CAMBIA, VENDE Y ENCUENTRA TU PR\u00D3XIMO EQUIPO");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Conecta con otros m\u00FAsicos, publica tus equipos usados o encuentra justo lo que necesitas para llevar tu sonido al siguiente nivel.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 9)(31, "div", 5)(32, "div", 10)(33, "div", 11)(34, "div", 12)(35, "div", 13)(36, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Nosotros");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Compra, vende o intercambia instrumentos con confianza");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "SoundSeeker es un espacio pensado para m\u00FAsicos y amantes del audio. Facilitamos la compraventa e intercambio de instrumentos musicales y efectos usados, asegurando calidad, comunidad y buen trato.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 14)(43, "a", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Ver m\u00E1s");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 11)(46, "div", 16)(47, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "iframe", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "i", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "i", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "section", 22)(54, "div", 5)(55, "div", 23)(56, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Servicios");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "\u00BFQu\u00E9 ofrecemos?");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Una plataforma segura y amigable para publicar tus instrumentos, descubrir equipos \u00FAnicos y conectar con otros m\u00FAsicos apasionados como t\u00FA.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 24)(63, "div", 25)(64, "a", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "i", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "a", 28)(67, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Venta de Instrumentos");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Publica tus instrumentos usados en minutos y llega a m\u00FAsicos de todo el pa\u00EDs.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 25)(72, "a", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](73, "i", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "a", 28)(75, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Intercambio Seguro");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "\u00BFTienes un pedal que no usas? Encuentra a alguien que tenga lo que t\u00FA buscas.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 25)(80, "a", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](81, "i", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "a", 28)(83, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "Accesorios y Efectos");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "Explora nuestra colecci\u00F3n de pedales de efectos, cuerdas, estuches y m\u00E1s.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 25)(88, "a", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](89, "i", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "a", 28)(91, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "Accesorios y Efectos");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "Explora nuestra colecci\u00F3n de pedales de efectos, cuerdas, estuches y m\u00E1s.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "div", 29)(96, "div", 30)(97, "div", 31)(98, "div", 32)(99, "div", 33)(100, "div", 34)(101, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "Consejos de Venta");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "\u00BFC\u00F3mo publicar tu instrumento de forma efectiva?");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "Te mostramos c\u00F3mo destacar tu anuncio: desde fotos n\u00EDtidas hasta una descripci\u00F3n atractiva y realista. Aumenta tus posibilidades de venta con recomendaciones pr\u00E1cticas.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, "Utiliza t\u00EDtulos claros, incluye detalles t\u00E9cnicos (modelo, estado, a\u00F1o) y responde con rapidez a las consultas para generar confianza.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div", 35)(110, "a", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, "Ver Gu\u00EDas");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "div", 37)(113, "div", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](114, "img", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "div", 40)(116, "div", 31)(117, "div", 37)(118, "div", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](119, "img", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "div", 32)(121, "div", 43)(122, "div", 34)(123, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, "Consejos de Compra");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, "\u00BFQu\u00E9 revisar antes de comprar un instrumento usado?");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, "Desde probar cada control hasta verificar detalles est\u00E9ticos, te guiamos para tomar decisiones informadas al adquirir guitarras, bajos, sintetizadores y m\u00E1s.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, "Compara precios similares, solicita fotos adicionales si es necesario y prioriza vendedores con buena reputaci\u00F3n.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "div", 35)(132, "a", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](133, "Ver Gu\u00EDas");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "div", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](135, "i", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "div", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](137, "i", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "section", 47)(139, "div", 5)(140, "div", 23)(141, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](142, "Nuestros Productos");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](144, "Encuentra el equipo ideal para tu m\u00FAsica");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](146, "Desde guitarras vintage hasta pedales boutique, descubre piezas \u00FAnicas seleccionadas por y para m\u00FAsicos.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "div", 31)(148, "div", 48)(149, "div", 49)(150, "a", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](151, "img", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "div", 52)(153, "div", 53)(154, "a", 50)(155, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](156, "Guitarra Stratocaster");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](158, "$450.000");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "a", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](160, "i", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "div", 48)(162, "div", 49)(163, "a", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](164, "img", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "div", 52)(166, "div", 53)(167, "a", 50)(168, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](169, "Pedal Delay Boss DD-7");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](171, "$120.000");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "a", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](173, "i", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "div", 48)(175, "div", 49)(176, "a", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](177, "img", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "div", 52)(179, "div", 53)(180, "a", 50)(181, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](182, "Sintetizador Korg Minilogue");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](183, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](184, "$370.000");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "a", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](186, "i", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "div", 48)(188, "div", 49)(189, "a", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](190, "img", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](191, "div", 52)(192, "div", 53)(193, "a", 50)(194, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](195, "Pedal Overdrive Tube Screamer");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](196, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](197, "$90.000");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "a", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](199, "i", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](200, "section", 59)(201, "div", 5)(202, "div", 23)(203, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](204, "El equipo");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](205, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](206, "Personas detr\u00E1s de Sounidos");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](207, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](208, "Somos m\u00FAsicos, t\u00E9cnicos y entusiastas del audio. Trabajamos para que cada instrumento llegue a manos que lo valoren.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](209, "div", 31)(210, "div", 48)(211, "div", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](212, "img", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](213, "div", 62)(214, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](215, "Crist\u00F3bal S\u00E1nchez");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](216, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](217, "Revisor de calidad");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](218, "div", 48)(219, "div", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](220, "img", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](221, "div", 62)(222, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](223, "Marcelo Rojas");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](224, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](225, "Guitarrista y asesor de pedales");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](226, "div", 48)(227, "div", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](228, "img", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](229, "div", 62)(230, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](231, "Fernanda Soto");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](232, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](233, "Especialista en sintetizadores vintage");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](234, "div", 48)(235, "div", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](236, "img", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](237, "div", 62)(238, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](239, "Diego Contreras");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](240, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](241, "Especialista en instrumentos de cuerda");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](242, "section", 66)(243, "div", 5)(244, "div", 23)(245, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](246, "Noticias");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](247, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](248, "Novedades de nuestra comunidad");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](249, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](250, "Actualizaciones de productos, eventos de intercambio, lanzamientos y m\u00E1s.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](251, "div", 31)(252, "div", 67)(253, "div", 68)(254, "div", 69)(255, "a", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](256, "img", 71);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](257, "div", 72)(258, "a", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](259, "EVENTO");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](260, "ul")(261, "li")(262, "a", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](263, "Equipo");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](264, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](265, "15 JUL 2025");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](266, "div", 75)(267, "a", 70)(268, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](269, "Encuentro de intercambio en Santiago");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](270, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](271, "M\u00E1s de 100 m\u00FAsicos participaron en nuestra jornada de intercambio y pruebas en vivo de equipos usados.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](272, "a", 76);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](273, "Leer m\u00E1s");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](274, "div", 67)(275, "div", 68)(276, "div", 69)(277, "a", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](278, "img", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](279, "div", 72)(280, "a", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](281, "LANZAMIENTO");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](282, "ul")(283, "li")(284, "a", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](285, "Equipo");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](286, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](287, "10 JUL 2025");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](288, "div", 75)(289, "a", 70)(290, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](291, "Llegaron nuevos pedales boutique");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](292, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](293, "Consulta nuestra nueva l\u00EDnea de efectos tra\u00EDdos por m\u00FAsicos independientes de EE.UU. y Jap\u00F3n.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](294, "a", 76);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](295, "Leer m\u00E1s");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](296, "div", 67)(297, "div", 68)(298, "div", 69)(299, "a", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](300, "img", 78);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](301, "div", 72)(302, "a", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](303, "CONSEJOS");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](304, "ul")(305, "li")(306, "a", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](307, "Equipo");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](308, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](309, "8 JUL 2025");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](310, "div", 75)(311, "a", 70)(312, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](313, "5 tips para mantener tu equipo en buen estado");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](314, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](315, "Desde limpieza hasta almacenaje: prolonga la vida \u00FAtil de tus instrumentos y efectos.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](316, "a", 76);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](317, "Leer m\u00E1s");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _common_navbar_style_one_navbar_style_one_component__WEBPACK_IMPORTED_MODULE_0__.NavbarStyleOneComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 858:
/*!*********************************************************************!*\
  !*** ./src/app/components/pages/instructor/instructor.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InstructorComponent: () => (/* binding */ InstructorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _common_navbar_style_one_navbar_style_one_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/navbar-style-one/navbar-style-one.component */ 9755);



class InstructorComponent {
  constructor() {}
  ngOnInit() {}
  static {
    this.ɵfac = function InstructorComponent_Factory(t) {
      return new (t || InstructorComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: InstructorComponent,
      selectors: [["app-instructor"]],
      decls: 98,
      vars: 0,
      consts: [[1, "inner-banner", "bg-shape3", "bg-color4"], [1, "d-table"], [1, "d-table-cell"], [1, "conatiner"], [1, "inner-title", "text-center"], ["href", "index.html"], [1, "fas", "fa-chevron-right"], [1, "trainers-area", "pt-100", "pb-70"], [1, "container"], [1, "scetion-title", "text-center", "mb-50"], [1, "row"], [1, "col-lg-3", "col-sm-6"], [1, "trainer-card"], ["routerLink", "/instructor"], ["src", "assets/img/trainers/1.jpg", "alt", "Imagen del instructor"], [1, "trainer-content"], [1, "social-icon"], ["href", "#"], [1, "fab", "fa-linkedin-in"], [1, "fas", "fa-envelope"], ["src", "assets/img/trainers/2.jpg", "alt", "Imagen del instructor"], ["src", "assets/img/trainers/3.jpg", "alt", "Imagen del instructor"], ["src", "assets/img/trainers/4.jpg", "alt", "Imagen del instructor"]],
      template: function InstructorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navbar-style-one");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Instructor");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ul")(9, "li")(10, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Inicio");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Instructor");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "section", 7)(17, "div", 8)(18, "div", 9)(19, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Nuestro Equipo");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Conoce a nuestros instructores");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Todos los cursos son impartidos por m\u00FAsicos locales apasionados por ense\u00F1ar, compartir sus conocimientos y fortalecer la comunidad musical de nuestra comuna.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 10)(26, "div", 11)(27, "div", 12)(28, "a", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "img", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 15)(31, "a", 13)(32, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Crist\u00F3bal S\u00E1nchez");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Guitarras el\u00E9ctricas y efectos");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 16)(37, "ul")(38, "li")(39, "a", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "i", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "li")(42, "a", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 11)(45, "div", 12)(46, "a", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "img", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 15)(49, "a", 13)(50, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Marcelo Rojas");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Percusi\u00F3n electr\u00F3nica y loops");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 16)(55, "ul")(56, "li")(57, "a", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "i", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "li")(60, "a", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 11)(63, "div", 12)(64, "a", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "img", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 15)(67, "a", 13)(68, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Valentina Morales");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Productora y dise\u00F1adora de sonido");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 16)(73, "ul")(74, "li")(75, "a", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](76, "i", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "li")(78, "a", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](79, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 11)(81, "div", 12)(82, "a", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](83, "img", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 15)(85, "a", 13)(86, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "Diego Contreras");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "Instructor de bajo, tecnicas de slap");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 16)(91, "ul")(92, "li")(93, "a", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](94, "i", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "li")(96, "a", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](97, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()();
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _common_navbar_style_one_navbar_style_one_component__WEBPACK_IMPORTED_MODULE_0__.NavbarStyleOneComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 4914:
/*!***********************************************************!*\
  !*** ./src/app/components/pages/login/login.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _common_navbar_style_one_navbar_style_one_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/navbar-style-one/navbar-style-one.component */ 9755);






function LoginComponent_div_31_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "El correo es obligatorio.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function LoginComponent_div_31_small_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Formato inv\u00E1lido.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function LoginComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LoginComponent_div_31_small_1_Template, 2, 0, "small", 30)(2, LoginComponent_div_31_small_2_Template, 2, 0, "small", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r0.loginForm.get("email")) == null ? null : tmp_1_0.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r0.loginForm.get("email")) == null ? null : tmp_2_0.hasError("email"));
  }
}
function LoginComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "La contrase\u00F1a es obligatoria.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function LoginComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.loginError);
  }
}
class LoginComponent {
  constructor(fb, router) {
    this.fb = fb;
    this.router = router;
    this.loginError = '';
  }
  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]],
      password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]
    });
  }
  onSubmit() {
    if (this.loginForm.valid) {
      const {
        email,
        password
      } = this.loginForm.value;
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const user = users.find(u => u.email === email && u.password === password);
      if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        // Redirección según rol
        if (user.role === 'admin') {
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/']);
        }
      } else {
        this.loginError = 'Credenciales inválidas';
      }
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
  static {
    this.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 54,
      vars: 4,
      consts: [[1, "inner-banner", "bg-shape3", "bg-color3"], [1, "d-table"], [1, "d-table-cell"], [1, "conatiner"], [1, "inner-title", "text-center"], ["href", "index.html"], [1, "fas", "fa-chevron-right"], [1, "login-area", "ptb-100"], [1, "container"], [1, "login-form"], [1, "login-title"], [1, "far", "fa-user", "text-center"], [1, "form-sign"], [3, "ngSubmit", "formGroup"], [1, "row"], [1, "col-lg-12", "col-md-12"], [1, "form-group"], ["type", "email", "formControlName", "email", "placeholder", "ejemplo@correo.com", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], ["type", "password", "formControlName", "password", "placeholder", "Ingresa tu contrase\u00F1a", 1, "form-control"], [1, "form-check", "form-group"], ["type", "checkbox", "id", "ExampleCheckbox", 1, "form-check-input"], ["for", "ExampleCheckbox", 1, "form-check-label"], ["class", "text-danger text-center", 4, "ngIf"], [1, "col-lg-12", "col-md-12", "text-center"], ["type", "submit", 1, "login-btn", "btn-two"], [1, "mt-3", "text-center"], ["routerLink", "/forgot-password"], ["routerLink", "/register"], [1, "text-danger"], [4, "ngIf"], [1, "text-danger", "text-center"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navbar-style-one");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Iniciar Sesi\u00F3n");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ul")(9, "li")(10, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Inicio");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Iniciar Sesi\u00F3n");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 7)(17, "div", 8)(18, "div", 9)(19, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "i", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Inicia sesi\u00F3n en Sonidos");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 12)(24, "form", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_24_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 14)(26, "div", 15)(27, "div", 16)(28, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Correo electr\u00F3nico");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, LoginComponent_div_31_Template, 3, 2, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 15)(33, "div", 16)(34, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Contrase\u00F1a");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "input", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, LoginComponent_div_37_Template, 3, 0, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 15)(39, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "input", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "label", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Recordarme");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, LoginComponent_div_43_Template, 3, 1, "div", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 24)(45, "button", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Entrar");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 26)(48, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "\u00BFOlvidaste tu contrase\u00F1a?");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "\u00BFNo tienes cuenta? ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "a", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Reg\u00EDstrate aqu\u00ED");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          let tmp_1_0;
          let tmp_2_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.loginForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx.loginForm.get("email")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx.loginForm.get("email")) == null ? null : tmp_1_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx.loginForm.get("password")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx.loginForm.get("password")) == null ? null : tmp_2_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loginError);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _common_navbar_style_one_navbar_style_one_component__WEBPACK_IMPORTED_MODULE_0__.NavbarStyleOneComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 6372:
/*!*************************************************************************!*\
  !*** ./src/app/components/pages/news-details/news-details.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewsDetailsComponent: () => (/* binding */ NewsDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _common_navbar_style_one_navbar_style_one_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/navbar-style-one/navbar-style-one.component */ 9755);



class NewsDetailsComponent {
  constructor() {}
  ngOnInit() {}
  static {
    this.ɵfac = function NewsDetailsComponent_Factory(t) {
      return new (t || NewsDetailsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: NewsDetailsComponent,
      selectors: [["app-news-details"]],
      decls: 53,
      vars: 0,
      consts: [[1, "inner-banner", "bg-shape1", "bg-color4"], [1, "d-table"], [1, "d-table-cell"], [1, "conatiner"], [1, "inner-title", "text-center"], ["href", "index.html"], [1, "fas", "fa-chevron-right"], [1, "news-detl", "pt-100", "pb-70"], [1, "container"], [1, "row"], [1, "col-lg-8"], [1, "common-dtel-img"], ["src", "assets/img/news/news-detl.jpg", "alt", "Imagen destacada de la noticia"], [1, "common-dtel-text"], [1, "col-lg-4"], [1, "widget-area"], [1, "widget-categories"], ["routerLink", "/news-details"]],
      template: function NewsDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navbar-style-one");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Detalle de Novedad");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ul")(9, "li")(10, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Inicio");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Detalle de Novedad");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 7)(17, "div", 8)(18, "div", 9)(19, "div", 10)(20, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "img", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 13)(23, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Lanzamos el nuevo curso de pedalboard b\u00E1sico");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "En Sonidos, creemos que cada m\u00FAsico deber\u00EDa dominar su sonido. Por eso, a partir del pr\u00F3ximo mes abrimos inscripciones para un nuevo curso pr\u00E1ctico de **armado y configuraci\u00F3n de pedaleras de efectos**. Ideal para guitarristas y bajistas que est\u00E1n dando sus primeros pasos o quieren optimizar su cadena de se\u00F1al.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "El curso ser\u00E1 impartido por instructores locales de la comuna, con experiencia en escenarios en vivo y grabaci\u00F3n casera. Adem\u00E1s, cada clase incluir\u00E1 demostraciones con pedales reales (an\u00E1logos y digitales) y an\u00E1lisis de configuraciones populares.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Las clases se realizar\u00E1n los d\u00EDas s\u00E1bados en modalidad presencial, con cupos limitados. \u00A1Aprovecha esta oportunidad para construir tu pedalera desde cero y entender c\u00F3mo lograr un tono profesional!");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 14)(32, "div", 15)(33, "div", 16)(34, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Otras novedades");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "ul")(37, "li")(38, "a", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Entrevista a Carla Fuentes sobre t\u00E9cnica vocal ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "li")(42, "a", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Nueva tanda de pedales disponibles en tienda ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "li")(46, "a", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Encuentro musical local en plaza central ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "li")(50, "a", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Recomendaciones para grabar en casa ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()();
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _common_navbar_style_one_navbar_style_one_component__WEBPACK_IMPORTED_MODULE_0__.NavbarStyleOneComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 8374:
/*!*********************************************************!*\
  !*** ./src/app/components/pages/news/news.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewsComponent: () => (/* binding */ NewsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _common_navbar_style_one_navbar_style_one_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/navbar-style-one/navbar-style-one.component */ 9755);



class NewsComponent {
  constructor() {}
  ngOnInit() {}
  static {
    this.ɵfac = function NewsComponent_Factory(t) {
      return new (t || NewsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: NewsComponent,
      selectors: [["app-news"]],
      decls: 166,
      vars: 0,
      consts: [[1, "inner-banner", "bg-shape2", "bg-color2"], [1, "d-table"], [1, "d-table-cell"], [1, "conatiner"], [1, "inner-title", "text-center"], ["href", "index.html"], [1, "fas", "fa-chevron-right"], [1, "news-area", "pt-94", "pb-70"], [1, "container"], [1, "scetion-title", "text-center", "mb-30"], [1, "row"], [1, "col-lg-4", "col-md-6"], [1, "news-card"], [1, "news-img"], ["routerLink", "/news-details"], ["src", "assets/img/news/1.jpg", "alt", "Imagen de noticia"], [1, "sub-text"], ["routerLink", "/news"], [1, "news-content"], ["routerLink", "/news-details", 1, "news-icon"], ["src", "assets/img/news/2.jpg", "alt", "Imagen de noticia"], ["src", "assets/img/news/3.jpg", "alt", "Imagen de noticia"], ["src", "assets/img/news/4.jpg", "alt", "Imagen de noticia"], ["src", "assets/img/news/5.jpg", "alt", "Imagen de noticia"], ["src", "assets/img/news/6.jpg", "alt", "Imagen de noticia"], [1, "col-lg-12", "col-md-12"], [1, "pagination-area"], ["routerLink", "/news", 1, "prev", "page-numbers"], [1, "fas", "fa-chevron-left"], ["routerLink", "/news", "aria-current", "page", 1, "page-numbers", "current"], ["routerLink", "/news", 1, "page-numbers"], ["routerLink", "/news", 1, "next", "page-numbers"]],
      template: function NewsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navbar-style-one");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Novedades");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ul")(9, "li")(10, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Inicio");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Novedades");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "section", 7)(17, "div", 8)(18, "div", 9)(19, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "\u00DAltimas noticias, lanzamientos y actividades de Sonidos");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 10)(22, "div", 11)(23, "div", 12)(24, "div", 13)(25, "a", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "img", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 16)(28, "a", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "TALLERES");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "ul")(31, "li")(32, "a", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Equipo Sonidos");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "14 JUL 2025");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 18)(37, "a", 14)(38, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Nuevo curso de pedalboard b\u00E1sico comienza este mes");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Aprende a armar tu propia pedalera con instructores locales. Incluye sesiones pr\u00E1cticas y gu\u00EDa personalizada.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Leer m\u00E1s");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 11)(45, "div", 12)(46, "div", 13)(47, "a", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "img", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 16)(50, "a", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "COMUNIDAD");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "ul")(53, "li")(54, "a", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Equipo Sonidos");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "12 JUL 2025");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 18)(59, "a", 14)(60, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Encuentro musical local reuni\u00F3 a m\u00E1s de 50 m\u00FAsicos");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "El evento incluy\u00F3 presentaciones en vivo, feria de intercambio de equipos y networking entre artistas independientes.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Leer m\u00E1s");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 11)(67, "div", 12)(68, "div", 13)(69, "a", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "img", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 16)(72, "a", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "EQUIPOS");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "ul")(75, "li")(76, "a", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Equipo Sonidos");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "10 JUL 2025");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 18)(81, "a", 14)(82, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Nuevos instrumentos disponibles en el cat\u00E1logo");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "Revisa la secci\u00F3n de productos: llegaron guitarras, pedales anal\u00F3gicos y teclados a precios accesibles.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "Leer m\u00E1s");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 11)(89, "div", 12)(90, "div", 13)(91, "a", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](92, "img", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 16)(94, "a", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "ENTREVISTAS");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "ul")(97, "li")(98, "a", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "Equipo Sonidos");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "08 JUL 2025");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "div", 18)(103, "a", 14)(104, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "Entrevista con Carla Fuentes: \u201CEl canto es para todos\u201D");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, "Nuestra instructora de canto habla sobre su experiencia, su visi\u00F3n de la ense\u00F1anza y sus inicios como artista local.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "Leer m\u00E1s");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 11)(111, "div", 12)(112, "div", 13)(113, "a", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](114, "img", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "div", 16)(116, "a", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, "TIPS");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "ul")(119, "li")(120, "a", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, "Equipo Sonidos");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123, "06 JUL 2025");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "div", 18)(125, "a", 14)(126, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](127, "C\u00F3mo mantener en buen estado tus pedales de efectos");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](129, "Recomendaciones pr\u00E1cticas para alargar la vida \u00FAtil de tus equipos y evitar ruidos molestos en vivo.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](131, "Leer m\u00E1s");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "div", 11)(133, "div", 12)(134, "div", 13)(135, "a", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](136, "img", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "div", 16)(138, "a", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](139, "LANZAMIENTOS");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "ul")(141, "li")(142, "a", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143, "Equipo Sonidos");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](145, "03 JUL 2025");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "div", 18)(147, "a", 14)(148, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](149, "Llega el Boss DS-1 edici\u00F3n especial a nuestra tienda");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](151, "Uno de los pedales m\u00E1s ic\u00F3nicos ya est\u00E1 disponible en versi\u00F3n limitada. \u00A1No te quedes sin el tuyo!");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](153, "Leer m\u00E1s");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "div", 25)(155, "div", 26)(156, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](157, "i", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "a", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](159, "1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "a", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](161, "2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "a", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](163, "3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "a", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](165, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _common_navbar_style_one_navbar_style_one_component__WEBPACK_IMPORTED_MODULE_0__.NavbarStyleOneComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 9350:
/*!*********************************************************************************!*\
  !*** ./src/app/components/pages/products-details/products-details.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductsDetailsComponent: () => (/* binding */ ProductsDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _common_navbar_style_one_navbar_style_one_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/navbar-style-one/navbar-style-one.component */ 9755);




class ProductsDetailsComponent {
  constructor() {}
  ngOnInit() {}
  static {
    this.ɵfac = function ProductsDetailsComponent_Factory(t) {
      return new (t || ProductsDetailsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ProductsDetailsComponent,
      selectors: [["app-products-details"]],
      decls: 166,
      vars: 0,
      consts: [[1, "inner-banner", "bg-shape2", "bg-color5"], [1, "d-table"], [1, "d-table-cell"], [1, "conatiner"], [1, "inner-title", "text-center"], ["href", "index.html"], [1, "fas", "fa-chevron-right"], [1, "shop-detls", "ptb-100"], [1, "container"], [1, "row", "align-items-center"], [1, "col-lg-6", "col-md-12"], [1, "shop-detls-image"], ["src", "assets/img/product/shop-detl.jpg", "alt", "Imagen del producto"], [1, "shop-desc"], [1, "price"], [1, "new-price"], [1, "old-price"], [1, "shop-review"], [1, "rating"], [1, "fas", "fa-star"], [1, "fas", "fa-star-half-alt"], ["routerLink", "/products-details", 1, "rating-count"], [1, "shop-add"], [1, "input-counter"], [1, "minus-btn"], [1, "fas", "fa-minus"], ["type", "text", "min", "1", "value", "1"], [1, "plus-btn"], [1, "fas", "fa-plus"], ["type", "submit", 1, "shop-btn"], [1, "fas", "fa-cart-plus"], [1, "buy-checkbox-btn"], [1, "item"], ["id", "cbx", "type", "checkbox", 1, "inp-cbx"], ["for", "cbx", 1, "cbx"], ["routerLink", "/checkout", 1, "btn", "btn-buy"], [1, "custom-payment"], [1, "payment-methods"], ["href", "#"], ["src", "assets/img/product/add2.svg", "alt", "Pago seguro"], ["src", "assets/img/product/add3.svg", "alt", "Pago seguro"], [1, "col-lg-12", "col-md-12"], [1, "tab", "shop-detls-tab"], [1, "row"], [1, "tabs"], [1, "tab_content", "current", "active"], [1, "tabs_item", "current"], [1, "shop-detls-tab-content"], [1, "tabs_item"], [1, "additional-information"], [1, "shop-review-form"], [1, "review-title"], [1, "far", "fa-star"], ["routerLink", "/products-details", 1, "default-btn", "btn-right"], [1, "review-comments"], [1, "review-item"], ["routerLink", "/products-details", 1, "review-report-link"], [1, "review-form"], [1, "col-lg-6"], [1, "form-group"], ["type", "text", "placeholder", "Tu nombre", 1, "form-control"], ["type", "email", "placeholder", "Tu correo electr\u00F3nico", 1, "form-control"], [1, "col-lg-12"], ["type", "text", "placeholder", "T\u00EDtulo de la rese\u00F1a", 1, "form-control"], ["rows", "5", "placeholder", "Escribe tu comentario aqu\u00ED", 1, "form-message"], ["type", "submit", 1, "btn-submit"]],
      template: function ProductsDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navbar-style-one");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Detalle del Producto");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ul")(9, "li")(10, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Inicio");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Detalle del Producto");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "section", 7)(17, "div", 8)(18, "div", 9)(19, "div", 10)(20, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "img", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 10)(23, "div", 13)(24, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Pedal Boss DS-1 Distortion");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 14)(27, "span", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "$45.000");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "span", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "$60.000");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 17)(32, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "i", 19)(34, "i", 19)(35, "i", 19)(36, "i", 19)(37, "i", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "a", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "3 rese\u00F1as");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Pedal cl\u00E1sico de distorsi\u00F3n con tono c\u00E1lido y definido. Ideal para guitarristas que buscan versatilidad y potencia en su sonido. Producto en excelente estado, probado y funcionando al 100%.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 22)(43, "div", 23)(44, "span", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "input", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "span", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "i", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "button", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "i", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, " Agregar al carrito");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 31)(53, "div", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "input", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "label", 34)(56, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Acepto los t\u00E9rminos y condiciones");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 32)(59, "a", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Comprar ahora");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 36)(62, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Pago seguro garantizado:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 37)(65, "a", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "img", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "a", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "img", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 41)(70, "div", 42)(71, "div", 43)(72, "div", 41)(73, "ul", 44)(74, "li")(75, "a", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Descripci\u00F3n");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "li")(78, "a", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Informaci\u00F3n adicional");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "li")(81, "a", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "Rese\u00F1as");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 41)(84, "div", 45)(85, "div", 46)(86, "div", 47)(87, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "El Boss DS-1 es uno de los pedales m\u00E1s ic\u00F3nicos del mundo de la guitarra. Desde los 80, ha sido utilizado por artistas como Kurt Cobain, Steve Vai y Joe Satriani. Su carcasa robusta y su circuito anal\u00F3gico entregan un tono agresivo pero controlado, ideal para rock, punk y grunge.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 48)(90, "div", 47)(91, "ul", 49)(92, "li")(93, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "Marca:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, " Boss");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "li")(97, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "Color:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, " Naranja cl\u00E1sico");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "li")(101, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "Condici\u00F3n:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, " Usado - Muy buen estado");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "li")(105, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "Incluye:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, " Caja original");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "li")(109, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "Compatibilidad:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, " Fuente 9V o bater\u00EDa");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "div", 48)(113, "div", 47)(114, "div", 50)(115, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "Rese\u00F1as de clientes");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "div", 51)(118, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](119, "i", 19)(120, "i", 19)(121, "i", 19)(122, "i", 19)(123, "i", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](125, "Basado en 3 opiniones");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "a", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](127, "Escribir rese\u00F1a");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "div", 54)(129, "div", 55)(130, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](131, "i", 19)(132, "i", 19)(133, "i", 19)(134, "i", 19)(135, "i", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](137, "Gran pedal");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "span")(139, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](140, "Crist\u00F3bal");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](141, " el ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143, "21 SEP 2024");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](145, "Muy buena distorsi\u00F3n, cl\u00E1sico y confiable. Lo uso con mi Telecaster y suena brutal.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "a", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](147, "Reportar");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "div", 57)(149, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](150, "Escribe una rese\u00F1a");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "form")(152, "div", 43)(153, "div", 58)(154, "div", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](155, "input", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "div", 58)(157, "div", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](158, "input", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "div", 62)(160, "div", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](161, "input", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "div", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](163, "textarea", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "button", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](165, "Enviar rese\u00F1a");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()()()()()();
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _common_navbar_style_one_navbar_style_one_component__WEBPACK_IMPORTED_MODULE_0__.NavbarStyleOneComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 4546:
/*!***************************************************************!*\
  !*** ./src/app/components/pages/profile/profile.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileComponent: () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);




function ProfileComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " El nombre es obligatorio. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function ProfileComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " El apellido es obligatorio. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function ProfileComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Ingresa un correo v\u00E1lido. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function ProfileComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " El tel\u00E9fono es obligatorio. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function ProfileComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " La fecha de nacimiento es obligatoria. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function ProfileComponent_div_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " M\u00EDnimo 6-18 caracteres, 1 may\u00FAscula, 1 n\u00FAmero y 1 s\u00EDmbolo. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function ProfileComponent_div_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Las contrase\u00F1as no coinciden. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function ProfileComponent_div_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Perfil actualizado correctamente. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class ProfileComponent {
  constructor(fb) {
    this.fb = fb;
    this.submitted = false; // Marca si se intentó enviar el formulario
    this.updateSuccess = false; // Controla si mostrar el mensaje de éxito
  }
  ngOnInit() {
    // Cargar los datos del usuario actualmente autenticado desde localStorage
    this.userData = JSON.parse(localStorage.getItem('currentUser') || '{}');
    // Inicializar el formulario con los datos del usuario
    this.profileForm = this.fb.group({
      firstName: [this.userData.firstName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      lastName: [this.userData.lastName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      email: [this.userData.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.email]],
      phone: [this.userData.phone, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      address: [this.userData.address || ''],
      birthDate: [this.userData.birthDate, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      // Campos para cambio de contraseña
      currentPassword: [''],
      newPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{6,18}$/)],
      confirmPassword: ['']
    }, {
      validators: this.passwordsMatch
    }); // Validación cruzada para las contraseñas
  }
  // Verifica si las nuevas contraseñas coinciden
  passwordsMatch(group) {
    const newPass = group.get('newPassword')?.value;
    const confirm = group.get('confirmPassword')?.value;
    return newPass === confirm ? null : {
      mismatch: true
    };
  }
  // Método ejecutado al hacer submit del formulario
  onSubmit() {
    this.submitted = true;
    if (this.profileForm.invalid) return;
    const updatedData = this.profileForm.value;
    // Obtener lista de usuarios
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const index = users.findIndex(u => u.email === this.userData.email);
    if (index !== -1) {
      // Si se quiere cambiar la contraseña, validar la actual
      if (updatedData.newPassword) {
        const currentStoredPass = users[index].password;
        if (updatedData.currentPassword !== currentStoredPass) {
          alert('La contraseña actual es incorrecta.');
          return;
        }
        users[index].password = updatedData.newPassword;
      }
      // Guardar datos actualizados (sin los campos de cambio de contraseña)
      const dataToUpdate = {
        ...users[index],
        firstName: updatedData.firstName,
        lastName: updatedData.lastName,
        email: updatedData.email,
        phone: updatedData.phone,
        address: updatedData.address,
        birthDate: updatedData.birthDate
      };
      users[index] = dataToUpdate;
      localStorage.setItem('users', JSON.stringify(users));
      localStorage.setItem('currentUser', JSON.stringify(dataToUpdate));
      this.updateSuccess = true;
      setTimeout(() => {
        this.updateSuccess = false;
      }, 4000);
    }
  }
  // Método para restaurar el formulario con los datos originales
  onReset() {
    this.profileForm.reset({
      ...this.userData,
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    });
    this.submitted = false;
  }
  static {
    this.ɵfac = function ProfileComponent_Factory(t) {
      return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProfileComponent,
      selectors: [["app-profile"]],
      decls: 67,
      vars: 9,
      consts: [[1, "container", "mt-5"], [3, "ngSubmit", "formGroup"], [1, "row"], [1, "col-md-6"], [1, "form-group"], ["for", "firstName"], ["type", "text", "id", "firstName", "formControlName", "firstName", "placeholder", "Tu nombre", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], ["for", "lastName"], ["type", "text", "id", "lastName", "formControlName", "lastName", "placeholder", "Tu apellido", 1, "form-control"], ["for", "email"], ["type", "email", "id", "email", "formControlName", "email", "placeholder", "ejemplo@correo.com", 1, "form-control"], ["for", "phone"], ["type", "text", "id", "phone", "formControlName", "phone", "placeholder", "+56 9 1234 5678", 1, "form-control"], ["for", "address"], ["type", "text", "id", "address", "formControlName", "address", "placeholder", "Direcci\u00F3n de despacho", 1, "form-control"], ["for", "birthDate"], ["type", "date", "id", "birthDate", "formControlName", "birthDate", 1, "form-control"], [1, "col-md-12"], [1, "my-4"], [1, "col-md-4"], ["type", "password", "formControlName", "currentPassword", 1, "form-control"], ["type", "password", "formControlName", "newPassword", 1, "form-control"], ["type", "password", "formControlName", "confirmPassword", 1, "form-control"], [1, "mt-4", "text-center"], ["type", "submit", 1, "btn", "btn-success"], ["type", "button", 1, "btn", "btn-secondary", "ms-2", 3, "click"], ["class", "alert alert-success mt-4 text-center", 4, "ngIf"], [1, "text-danger"], [1, "alert", "alert-success", "mt-4", "text-center"]],
      template: function ProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Mi Perfil");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ProfileComponent_Template_form_ngSubmit_3_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Nombre");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProfileComponent_div_10_Template, 2, 0, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3)(12, "div", 4)(13, "label", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Apellido");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ProfileComponent_div_16_Template, 2, 0, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3)(18, "div", 4)(19, "label", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Correo electr\u00F3nico");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ProfileComponent_div_22_Template, 2, 0, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 3)(24, "div", 4)(25, "label", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Tel\u00E9fono");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ProfileComponent_div_28_Template, 2, 0, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 3)(30, "div", 4)(31, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Direcci\u00F3n");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 3)(35, "div", 4)(36, "label", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Fecha de nacimiento");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, ProfileComponent_div_39_Template, 2, 0, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "hr", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Cambiar contrase\u00F1a");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 20)(45, "div", 4)(46, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Contrase\u00F1a actual");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 20)(50, "div", 4)(51, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Nueva contrase\u00F1a");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "input", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, ProfileComponent_div_54_Template, 2, 0, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 20)(56, "div", 4)(57, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Confirmar nueva contrase\u00F1a");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "input", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, ProfileComponent_div_60_Template, 2, 0, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 24)(62, "button", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Guardar cambios");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "button", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_64_listener() {
            return ctx.onReset();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Restablecer");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, ProfileComponent_div_66_Template, 2, 0, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          let tmp_1_0;
          let tmp_2_0;
          let tmp_3_0;
          let tmp_4_0;
          let tmp_5_0;
          let tmp_6_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.profileForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ((tmp_1_0 = ctx.profileForm.get("firstName")) == null ? null : tmp_1_0.invalid));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ((tmp_2_0 = ctx.profileForm.get("lastName")) == null ? null : tmp_2_0.invalid));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ((tmp_3_0 = ctx.profileForm.get("email")) == null ? null : tmp_3_0.invalid));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ((tmp_4_0 = ctx.profileForm.get("phone")) == null ? null : tmp_4_0.invalid));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ((tmp_5_0 = ctx.profileForm.get("birthDate")) == null ? null : tmp_5_0.invalid));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ((tmp_6_0 = ctx.profileForm.get("newPassword")) == null ? null : tmp_6_0.invalid));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.profileForm.hasError("mismatch"));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.updateSuccess);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 4166:
/*!*****************************************************************!*\
  !*** ./src/app/components/pages/register/register.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegisterComponent: () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _common_navbar_style_one_navbar_style_one_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/navbar-style-one/navbar-style-one.component */ 9755);






function RegisterComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "El nombre es obligatorio.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function RegisterComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "El apellido es obligatorio.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function RegisterComponent_div_41_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "El correo es obligatorio.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_div_41_small_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Debe tener formato v\u00E1lido.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RegisterComponent_div_41_small_1_Template, 2, 0, "small", 33)(2, RegisterComponent_div_41_small_2_Template, 2, 0, "small", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.getError("email", "required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.getError("email", "email"));
  }
}
function RegisterComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "El tel\u00E9fono es obligatorio.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function RegisterComponent_div_58_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "La fecha de nacimiento es obligatoria.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_div_58_small_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Debes tener al menos 13 a\u00F1os.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_div_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RegisterComponent_div_58_small_1_Template, 2, 0, "small", 33)(2, RegisterComponent_div_58_small_2_Template, 2, 0, "small", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.getError("birthDate", "required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.getError("birthDate", "underage"));
  }
}
function RegisterComponent_div_64_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "La contrase\u00F1a es obligatoria.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_div_64_small_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Debe tener entre 6 y 18 caracteres, incluir al menos una may\u00FAscula, un n\u00FAmero y un s\u00EDmbolo. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_div_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RegisterComponent_div_64_small_1_Template, 2, 0, "small", 33)(2, RegisterComponent_div_64_small_2_Template, 2, 0, "small", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.getError("password", "required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.getError("password", "pattern"));
  }
}
function RegisterComponent_div_70_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Debes repetir la contrase\u00F1a.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_div_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RegisterComponent_div_70_small_1_Template, 2, 0, "small", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.getError("confirmPassword", "required"));
  }
}
function RegisterComponent_div_71_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Las contrase\u00F1as no coinciden.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function RegisterComponent_div_81_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Debes seleccionar un rol.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
class RegisterComponent {
  constructor(fb, router) {
    this.fb = fb;
    this.router = router;
  }
  ngOnInit() {
    this.registerForm = this.fb.group({
      firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]],
      phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      address: [''],
      birthDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, this.minAgeValidator(13)]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{6,18}$/)]],
      confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      role: ['user', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]
    }, {
      validators: this.passwordsMatch
    });
  }
  passwordsMatch(control) {
    const pass = control.get('password')?.value;
    const confirm = control.get('confirmPassword')?.value;
    return pass === confirm ? null : {
      mismatch: true
    };
  }
  minAgeValidator(minAge) {
    return control => {
      const birthDate = new Date(control.value);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || m === 0 && today.getDate() < birthDate.getDate()) {
        age--;
      }
      return age >= minAge ? null : {
        underage: true
      };
    };
  }
  onSubmit() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const newUser = this.registerForm.value;
    const exists = users.some(u => u.email === newUser.email);
    if (exists) {
      alert('Este correo ya está registrado.');
      return;
    }
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registro exitoso. Ahora puedes iniciar sesión.');
    this.registerForm.reset();
    // Redirigir al login
    this.router.navigate(['/login']);
  }
  onReset() {
    this.registerForm.reset();
  }
  isInvalid(controlName) {
    const control = this.registerForm.get(controlName);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }
  getError(controlName, error) {
    const control = this.registerForm.get(controlName);
    return !!(control && control.hasError(error));
  }
  static {
    this.ɵfac = function RegisterComponent_Factory(t) {
      return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: RegisterComponent,
      selectors: [["app-register"]],
      decls: 91,
      vars: 10,
      consts: [[1, "inner-banner", "bg-shape3", "bg-color3"], [1, "d-table"], [1, "d-table-cell"], [1, "conatiner"], [1, "inner-title", "text-center"], ["href", "index.html"], [1, "fas", "fa-chevron-right"], [1, "register-area", "ptb-100"], [1, "container"], [1, "register-form"], [1, "form-sign"], [3, "ngSubmit", "formGroup"], [1, "row"], [1, "col-lg-6", "col-md-6"], [1, "form-group"], ["formControlName", "firstName", "type", "text", "placeholder", "Tu nombre", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], ["formControlName", "lastName", "type", "text", "placeholder", "Tu apellido", 1, "form-control"], ["formControlName", "email", "type", "email", "placeholder", "ejemplo@correo.com", 1, "form-control"], ["formControlName", "phone", "type", "tel", "placeholder", "+56 9 1234 5678", 1, "form-control"], ["formControlName", "address", "type", "text", "placeholder", "Direcci\u00F3n de despacho", 1, "form-control"], ["formControlName", "birthDate", "type", "date", 1, "form-control"], ["formControlName", "password", "type", "password", "placeholder", "Crea una contrase\u00F1a segura", 1, "form-control"], ["formControlName", "confirmPassword", "type", "password", "placeholder", "Repite tu contrase\u00F1a", 1, "form-control"], [1, "col-lg-12", "col-md-12"], ["formControlName", "role", 1, "form-control"], ["value", "user"], ["value", "admin"], [1, "col-lg-12", "col-md-12", "text-center"], ["type", "submit", 1, "default-btn1", "btn-two"], ["type", "button", 1, "default-btn1", "btn-two", "ms-2", 3, "click"], ["routerLink", "/login"], [1, "text-danger"], [4, "ngIf"]],
      template: function RegisterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navbar-style-one");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Crear Cuenta");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ul")(9, "li")(10, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Inicio");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Registro");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 7)(17, "div", 8)(18, "div", 9)(19, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Reg\u00EDstrate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 10)(22, "form", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_22_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 12)(24, "div", 13)(25, "div", 14)(26, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Nombre");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "input", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, RegisterComponent_div_29_Template, 3, 0, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 13)(31, "div", 14)(32, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Apellido");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, RegisterComponent_div_35_Template, 3, 0, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 13)(37, "div", 14)(38, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Correo electr\u00F3nico");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "input", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, RegisterComponent_div_41_Template, 3, 2, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 13)(43, "div", 14)(44, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Tel\u00E9fono");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "input", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, RegisterComponent_div_47_Template, 3, 0, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 13)(49, "div", 14)(50, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Direcci\u00F3n (opcional)");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "input", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 13)(54, "div", 14)(55, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Fecha de nacimiento");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "input", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](58, RegisterComponent_div_58_Template, 3, 2, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 13)(60, "div", 14)(61, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Contrase\u00F1a");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "input", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](64, RegisterComponent_div_64_Template, 3, 2, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 13)(66, "div", 14)(67, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Confirmar contrase\u00F1a");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "input", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](70, RegisterComponent_div_70_Template, 2, 1, "div", 16)(71, RegisterComponent_div_71_Template, 3, 0, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 24)(73, "div", 14)(74, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Selecciona tu rol");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "select", 25)(77, "option", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Usuario");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "option", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "Administrador");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](81, RegisterComponent_div_81_Template, 3, 0, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 28)(83, "button", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "Registrarme");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "button", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_85_listener() {
            return ctx.onReset();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "Limpiar");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "\u00BFYa tienes una cuenta? ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "a", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "Inicia sesi\u00F3n");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.registerForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isInvalid("firstName"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isInvalid("lastName"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isInvalid("email"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isInvalid("phone"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isInvalid("birthDate"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isInvalid("password"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isInvalid("confirmPassword"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.registerForm.hasError("mismatch"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isInvalid("role"));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _common_navbar_style_one_navbar_style_one_component__WEBPACK_IMPORTED_MODULE_0__.NavbarStyleOneComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 6606:
/*!*****************************************************************************!*\
  !*** ./src/app/components/pages/reset-password/reset-password.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResetPasswordComponent: () => (/* binding */ ResetPasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);




function ResetPasswordComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Ingrese un correo v\u00E1lido. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function ResetPasswordComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " M\u00EDnimo 6, m\u00E1ximo 18 caracteres, 1 may\u00FAscula, 1 n\u00FAmero, 1 car\u00E1cter especial. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function ResetPasswordComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Las contrase\u00F1as no coinciden. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function ResetPasswordComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Contrase\u00F1a actualizada correctamente. Puedes iniciar sesi\u00F3n. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function ResetPasswordComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Usuario no encontrado. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class ResetPasswordComponent {
  constructor(fb) {
    this.fb = fb;
    this.submitted = false;
    this.resetSuccess = false;
  }
  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.email]],
      newPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{6,18}$/)]],
      confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]
    }, {
      validators: this.passwordsMatch
    });
  }
  passwordsMatch(group) {
    const password = group.get('newPassword')?.value;
    const confirm = group.get('confirmPassword')?.value;
    return password === confirm ? null : {
      mismatch: true
    };
  }
  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) return;
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const index = users.findIndex(u => u.email === this.form.value.email);
    if (index !== -1) {
      users[index].password = this.form.value.newPassword;
      localStorage.setItem('users', JSON.stringify(users));
      this.resetSuccess = true;
    } else {
      this.resetSuccess = false;
    }
  }
  static {
    this.ɵfac = function ResetPasswordComponent_Factory(t) {
      return new (t || ResetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ResetPasswordComponent,
      selectors: [["app-reset-password"]],
      decls: 23,
      vars: 6,
      consts: [[1, "container", "mt-5"], [3, "ngSubmit", "formGroup"], [1, "form-group"], ["for", "email"], ["type", "email", "formControlName", "email", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], ["type", "password", "formControlName", "newPassword", 1, "form-control"], ["type", "password", "formControlName", "confirmPassword", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "mt-3"], ["class", "alert alert-success mt-3", 4, "ngIf"], ["class", "alert alert-danger mt-3", 4, "ngIf"], [1, "text-danger"], [1, "alert", "alert-success", "mt-3"], [1, "alert", "alert-danger", "mt-3"]],
      template: function ResetPasswordComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Restablecer contrase\u00F1a");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ResetPasswordComponent_Template_form_ngSubmit_3_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2)(5, "label", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Correo registrado");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ResetPasswordComponent_div_8_Template, 2, 0, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2)(10, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Nueva contrase\u00F1a");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ResetPasswordComponent_div_13_Template, 2, 0, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2)(15, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Confirmar contrase\u00F1a");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ResetPasswordComponent_div_18_Template, 2, 0, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Actualizar contrase\u00F1a");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ResetPasswordComponent_div_21_Template, 2, 0, "div", 9)(22, ResetPasswordComponent_div_22_Template, 2, 0, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          let tmp_1_0;
          let tmp_2_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ((tmp_1_0 = ctx.form.get("email")) == null ? null : tmp_1_0.invalid));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ((tmp_2_0 = ctx.form.get("newPassword")) == null ? null : tmp_2_0.invalid));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.form.hasError("mismatch"));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.resetSuccess);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && !ctx.resetSuccess);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 4586:
/*!*********************************************************************************!*\
  !*** ./src/app/components/pages/services-details/services-details.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServicesDetailsComponent: () => (/* binding */ ServicesDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _common_navbar_style_one_navbar_style_one_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/navbar-style-one/navbar-style-one.component */ 9755);



class ServicesDetailsComponent {
  constructor() {}
  ngOnInit() {}
  static {
    this.ɵfac = function ServicesDetailsComponent_Factory(t) {
      return new (t || ServicesDetailsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ServicesDetailsComponent,
      selectors: [["app-services-details"]],
      decls: 49,
      vars: 0,
      consts: [[1, "inner-banner", "bg-shape2", "bg-color1"], [1, "d-table"], [1, "d-table-cell"], [1, "conatiner"], [1, "inner-title", "text-center"], ["href", "index.html"], [1, "fas", "fa-chevron-right"], [1, "service-detl", "pt-100", "pb-70"], [1, "container"], [1, "row"], [1, "col-lg-8"], [1, "common-dtel-img"], ["src", "assets/img/service-detl.jpg", "alt", "Revisi\u00F3n de Pedales"], [1, "common-dtel-text"], [1, "col-lg-4"], [1, "widget-area"], [1, "widget-categories"], ["routerLink", "/service-details"], [1, "common-offer"], [1, "drive-img"], ["src", "assets/img/instrumento.png", "alt", "Servicio de revisi\u00F3n"], [1, "common-offer-text"], ["href", "tel:+56912345678", 1, "call-btn"]],
      template: function ServicesDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navbar-style-one");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Detalle del Servicio");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ul")(9, "li")(10, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Inicio");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Detalle del Servicio");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 7)(17, "div", 8)(18, "div", 9)(19, "div", 10)(20, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "img", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 13)(23, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Revisi\u00F3n y Calibraci\u00F3n de Pedales de Efectos para Guitarra y Bajo");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Ofrecemos un servicio especializado de diagn\u00F3stico, revisi\u00F3n el\u00E9ctrica y calibraci\u00F3n fina de pedales de efectos usados. Nos aseguramos de que cada pedal funcione de forma \u00F3ptima, eliminando ruidos no deseados, limpiando contactos y asegurando la integridad del circuito.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Este servicio es ideal para quienes desean vender, intercambiar o simplemente mantener sus pedales en las mejores condiciones. Contamos con t\u00E9cnicos especializados en marcas como BOSS, Electro-Harmonix, MXR, Strymon, entre otros.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "El proceso demora entre 3 a 5 d\u00EDas h\u00E1biles, dependiendo del estado del equipo. Tambi\u00E9n ofrecemos asesor\u00EDa sobre el uso y configuraci\u00F3n de tu cadena de efectos para mejorar tu sonido en vivo o en estudio.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 14)(32, "div", 15)(33, "div", 16)(34, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Otros Servicios");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "ul")(37, "li")(38, "a", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Compra y venta de instrumentos ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 18)(42, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "img", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 21)(45, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "\u00BFTienes un pedal con fallas?");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "a", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "\u00A1Ll\u00E1manos ahora!");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _common_navbar_style_one_navbar_style_one_component__WEBPACK_IMPORTED_MODULE_0__.NavbarStyleOneComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 2691:
/*!*****************************************************************!*\
  !*** ./src/app/components/pages/services/services.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServicesComponent: () => (/* binding */ ServicesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _common_navbar_style_one_navbar_style_one_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/navbar-style-one/navbar-style-one.component */ 9755);



class ServicesComponent {
  constructor() {}
  ngOnInit() {}
  static {
    this.ɵfac = function ServicesComponent_Factory(t) {
      return new (t || ServicesComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ServicesComponent,
      selectors: [["app-services"]],
      decls: 49,
      vars: 0,
      consts: [[1, "inner-banner", "bg-shape3", "bg-color4"], [1, "d-table"], [1, "d-table-cell"], [1, "conatiner"], [1, "inner-title", "text-center"], ["href", "index.html"], [1, "fas", "fa-chevron-right"], [1, "service-area", "text-center", "pt-100", "pb-70"], [1, "container"], [1, "scetion-title", "mb-50"], [1, "row"], [1, "col-lg-4", "col-md-6"], [1, "service-item", "box-shadow"], ["routerLink", "/service-details", 1, "service-item-icon"], [1, "fas", "fa-guitar"], ["routerLink", "/service-details", 1, "service-head"], [1, "fas", "fa-random"], [1, "fas", "fa-toolbox"]],
      template: function ServicesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navbar-style-one");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Servicios");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ul")(9, "li")(10, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Inicio");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Servicios");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "section", 7)(17, "div", 8)(18, "div", 9)(19, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "En Sonidos te ofrecemos estos servicios");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 10)(22, "div", 11)(23, "div", 12)(24, "a", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "i", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "a", 15)(27, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Compra y Venta de Instrumentos");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Publica tus instrumentos musicales usados o encuentra los mejores productos de segunda mano a precios convenientes.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 11)(32, "div", 12)(33, "a", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "i", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "a", 15)(36, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Intercambio entre M\u00FAsicos");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "\u00BFTienes un pedal o guitarra que ya no usas? C\u00E1mbialo por otro producto con otros miembros de la comunidad.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 11)(41, "div", 12)(42, "a", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "i", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "a", 15)(45, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Reparaci\u00F3n de Equipos");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Conecta con t\u00E9cnicos especializados en la reparaci\u00F3n de amplificadores, pedales, guitarras y m\u00E1s.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _common_navbar_style_one_navbar_style_one_component__WEBPACK_IMPORTED_MODULE_0__.NavbarStyleOneComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 6832:
/*!*************************************************************************!*\
  !*** ./src/app/components/pages/unauthorized/unauthorized.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UnauthorizedComponent: () => (/* binding */ UnauthorizedComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class UnauthorizedComponent {
  static {
    this.ɵfac = function UnauthorizedComponent_Factory(t) {
      return new (t || UnauthorizedComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UnauthorizedComponent,
      selectors: [["app-unauthorized"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 7,
      vars: 0,
      consts: [[1, "container", "mt-5", "text-center"], ["routerLink", "/"]],
      template: function UnauthorizedComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Acceso Denegado");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "No tienes permiso para acceder a esta p\u00E1gina.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Volver al inicio");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 5458:
/*!**************************************!*\
  !*** ./src/app/guards/role.guard.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RoleGuard: () => (/* binding */ RoleGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 4796);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);



class RoleGuard {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  canActivate(route, state) {
    const expectedRole = route.data['role'];
    if (!this.authService.isLoggedIn() || !this.authService.hasRole(expectedRole)) {
      this.router.navigate(['/unauthorized']);
      return false;
    }
    return true;
  }
  static {
    this.ɵfac = function RoleGuard_Factory(t) {
      return new (t || RoleGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: RoleGuard,
      factory: RoleGuard.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 4796:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);


class AuthService {
  constructor(router) {
    this.router = router;
  }
  // Simula inicio de sesión comparando con datos de localStorage
  login(email, password) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      return true;
    }
    return false;
  }
  // Obtiene usuario actual desde localStorage
  getCurrentUser() {
    return JSON.parse(localStorage.getItem('currentUser') || 'null');
  }
  // Verifica si hay un usuario logueado
  isLoggedIn() {
    return !!localStorage.getItem('currentUser');
  }
  // Verifica si el usuario tiene el rol requerido
  hasRole(role) {
    const user = this.getCurrentUser();
    return user && user.role === role;
  }
  // Cierra sesión
  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }
  static {
    this.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 5312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 635);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 5312);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map