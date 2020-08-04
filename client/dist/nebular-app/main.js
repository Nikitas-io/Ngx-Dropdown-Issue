(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/pages/home-page/home-page.component */ "./src/app/components/pages/home-page/home-page.component.ts");
/* harmony import */ var _components_pages_users_page_users_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/pages/users-page/users-page.component */ "./src/app/components/pages/users-page/users-page.component.ts");
/* harmony import */ var _components_pages_profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/pages/profile-page/profile-page.component */ "./src/app/components/pages/profile-page/profile-page.component.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nebular/auth */ "./node_modules/@nebular/auth/__ivy_ngcc__/fesm2015/index.js");






// My Imports.



const routes = [
    {
        path: '',
        // canActivate: [AuthGuardService],
        component: _components_pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__["HomePageComponent"]
    },
    {
        path: 'users',
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]],
        component: _components_pages_users_page_users_page_component__WEBPACK_IMPORTED_MODULE_3__["UsersPageComponent"]
    },
    {
        path: 'profile',
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]],
        component: _components_pages_profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_4__["ProfilePageComponent"]
    },
    {
        path: 'auth',
        component: _nebular_auth__WEBPACK_IMPORTED_MODULE_6__["NbAuthComponent"],
        children: [
        // ...
        ],
    },
    // The NbAuth paths.
    {
        path: 'auth',
        component: _nebular_auth__WEBPACK_IMPORTED_MODULE_6__["NbAuthComponent"],
        children: [
            {
                path: '',
                component: _nebular_auth__WEBPACK_IMPORTED_MODULE_6__["NbLoginComponent"],
            },
            {
                path: 'login',
                component: _nebular_auth__WEBPACK_IMPORTED_MODULE_6__["NbLoginComponent"],
            },
            {
                path: 'register',
                component: _nebular_auth__WEBPACK_IMPORTED_MODULE_6__["NbRegisterComponent"],
            },
            {
                path: 'logout',
                component: _nebular_auth__WEBPACK_IMPORTED_MODULE_6__["NbLogoutComponent"],
            },
            {
                path: 'request-password',
                component: _nebular_auth__WEBPACK_IMPORTED_MODULE_6__["NbRequestPasswordComponent"],
            },
            {
                path: 'reset-password',
                component: _nebular_auth__WEBPACK_IMPORTED_MODULE_6__["NbResetPasswordComponent"],
            },
        ],
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true }),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true }),
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/auth */ "./node_modules/@nebular/auth/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

// Imports for the user dropdown NbContextMenu.








function AppComponent_nb_user_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nb-user", 6);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", ctx_r0.user.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbContextMenu", ctx_r0.dropdownItems);
} }
function AppComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(window, sidebarService, authService, usersService, nbMenuService) {
        this.window = window;
        this.sidebarService = sidebarService;
        this.authService = authService;
        this.usersService = usersService;
        this.nbMenuService = nbMenuService;
        // User login flag.
        this.isLoggedIn = false;
        // A user variable, which will store the JTW token payload inside of the component.
        this.user = {};
        // NbContextMenu dropdown options.
        this.dropdownItems = [
            {
                title: 'Profile',
                link: '/profile'
            },
            {
                title: 'Log out',
                link: '/auth/logout'
            }
        ];
        // The route paths of the application.
        this.items = [
            {
                title: 'Home',
                link: '/'
            },
            {
                title: 'Users',
                link: '/users'
            }
        ];
        // Get the user token.
        this.authService.onTokenChange().subscribe((token) => {
            // Validate the user token.
            if (token.isValid()) {
                // Receive the token payload and assign it to the `user` variable.
                this.user = token.getPayload();
                console.log(this.user["_id"]);
                // Change the login button to the user on the header.
                this.isLoggedIn = true;
                // Fetch the signed-in user's data.
                this.usersService.getUser(this.user["_id"]).subscribe(user => {
                    // Set the signed in user's name.
                    this.user["fullName"] = user["fullName"];
                });
            }
            if (!token.isValid()) {
                // Change the User to the Login button on the header.
                this.isLoggedIn = false;
            }
        });
        // Context Menu Event Handler.
        this.nbMenuService.onItemClick().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(({ tag }) => tag === 'my-context-menu'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(({ item: { title } }) => title)).subscribe((title) => {
            // Check if the Logout menu item was clicked.
            if (title == 'Log out') {
                // Logout the user.
                this.authService.logout('email').subscribe((Observable) => {
                    console.log('The logout observable is: ', Observable);
                    // Clear the user. (THIS doesn't seem like the right way to do it).
                    this.user = {};
                });
            }
        });
    }
    toggle() {
        this.sidebarService.toggle(false, 'left');
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NB_WINDOW"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbSidebarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_auth__WEBPACK_IMPORTED_MODULE_3__["NbAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbMenuService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 10, vars: 3, consts: [["fixed", ""], ["id", "hamburger-button", "nbButton", "", "status", "info", "size", "medium", 3, "click"], ["id", "user-login", "nbContextMenuTag", "my-context-menu", 3, "name", "nbContextMenu", 4, "ngIf"], ["id", "user-login", "routerLink", "/auth/login", "nbButton", "", "status", "primary", "size", "medium", 4, "ngIf"], ["tag", "left"], [3, "items"], ["id", "user-login", "nbContextMenuTag", "my-context-menu", 3, "name", "nbContextMenu"], ["id", "user-login", "routerLink", "/auth/login", "nbButton", "", "status", "primary", "size", "medium"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-layout-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_2_listener() { return ctx.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u2630");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_nb_user_4_Template, 1, 2, "nb-user", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_button_5_Template, 2, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nb-sidebar", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "nb-menu", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nb-layout-column");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.items);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbLayoutComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbLayoutHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbSidebarComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbMenuComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbLayoutColumnComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbUserComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbContextMenuDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NB_WINDOW"]]
            }] }, { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbSidebarService"] }, { type: _nebular_auth__WEBPACK_IMPORTED_MODULE_3__["NbAuthService"] }, { type: _services_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"] }, { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbMenuService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/pages/home-page/home-page.component */ "./src/app/components/pages/home-page/home-page.component.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nebular/eva-icons */ "./node_modules/@nebular/eva-icons/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nebular/auth */ "./node_modules/@nebular/auth/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _components_users_users_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/users/users.component */ "./src/app/components/users/users.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _components_pages_users_page_users_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/pages/users-page/users-page.component */ "./src/app/components/pages/users-page/users-page.component.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _components_pages_profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/pages/profile-page/profile-page.component */ "./src/app/components/pages/profile-page/profile-page.component.ts");





// My Imports.












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__["AuthGuardService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            // Nebular Imports.
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbThemeModule"].forRoot(),
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbLayoutModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbSidebarModule"].forRoot(),
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbListModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbUserModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbContextMenuModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbMenuModule"].forRoot(),
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbIconModule"],
            _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_6__["NbEvaIconsModule"],
            _nebular_auth__WEBPACK_IMPORTED_MODULE_7__["NbAuthModule"].forRoot({
                strategies: [
                    _nebular_auth__WEBPACK_IMPORTED_MODULE_7__["NbPasswordAuthStrategy"].setup({
                        name: 'email',
                        token: {
                            class: _nebular_auth__WEBPACK_IMPORTED_MODULE_7__["NbAuthJWTToken"],
                            key: 'token',
                        },
                        baseEndpoint: 'api',
                        login: {
                            redirect: {
                                success: '/',
                                failure: null,
                            },
                            endpoint: '/auth/sign-in',
                            method: 'post',
                        },
                        register: {
                            redirect: {
                                success: '/',
                                failure: null,
                            },
                            endpoint: '/auth/sign-up',
                            method: 'post',
                        },
                        logout: {
                            endpoint: '/auth/sign-out',
                            method: 'post',
                        },
                        requestPass: {
                            endpoint: '/auth/request-pass',
                            method: 'post',
                        },
                        resetPass: {
                            endpoint: '/auth/reset-pass',
                            method: 'post',
                        },
                    }),
                ],
                forms: {
                    login: {
                        redirectDelay: 0,
                        showMessages: {
                            success: true,
                        },
                    },
                    register: {
                        redirectDelay: 0,
                        showMessages: {
                            success: true,
                        },
                    },
                    requestPassword: {
                        redirectDelay: 0,
                        showMessages: {
                            success: true,
                        },
                    },
                    resetPassword: {
                        redirectDelay: 0,
                        showMessages: {
                            success: true,
                        },
                    },
                    logout: {
                        redirectDelay: 0,
                    },
                }
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"],
        _components_users_users_component__WEBPACK_IMPORTED_MODULE_8__["UsersComponent"],
        _components_pages_users_page_users_page_component__WEBPACK_IMPORTED_MODULE_11__["UsersPageComponent"],
        _components_pages_profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_13__["ProfilePageComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbThemeModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbLayoutModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbSidebarModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbListModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbUserModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbContextMenuModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbMenuModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbIconModule"],
        _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_6__["NbEvaIconsModule"], _nebular_auth__WEBPACK_IMPORTED_MODULE_7__["NbAuthModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"],
                    _components_users_users_component__WEBPACK_IMPORTED_MODULE_8__["UsersComponent"],
                    _components_pages_users_page_users_page_component__WEBPACK_IMPORTED_MODULE_11__["UsersPageComponent"],
                    _components_pages_profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_13__["ProfilePageComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                    // Nebular Imports.
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbThemeModule"].forRoot(),
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbLayoutModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbSidebarModule"].forRoot(),
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbListModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbUserModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbContextMenuModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbMenuModule"].forRoot(),
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbIconModule"],
                    _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_6__["NbEvaIconsModule"],
                    _nebular_auth__WEBPACK_IMPORTED_MODULE_7__["NbAuthModule"].forRoot({
                        strategies: [
                            _nebular_auth__WEBPACK_IMPORTED_MODULE_7__["NbPasswordAuthStrategy"].setup({
                                name: 'email',
                                token: {
                                    class: _nebular_auth__WEBPACK_IMPORTED_MODULE_7__["NbAuthJWTToken"],
                                    key: 'token',
                                },
                                baseEndpoint: 'api',
                                login: {
                                    redirect: {
                                        success: '/',
                                        failure: null,
                                    },
                                    endpoint: '/auth/sign-in',
                                    method: 'post',
                                },
                                register: {
                                    redirect: {
                                        success: '/',
                                        failure: null,
                                    },
                                    endpoint: '/auth/sign-up',
                                    method: 'post',
                                },
                                logout: {
                                    endpoint: '/auth/sign-out',
                                    method: 'post',
                                },
                                requestPass: {
                                    endpoint: '/auth/request-pass',
                                    method: 'post',
                                },
                                resetPass: {
                                    endpoint: '/auth/reset-pass',
                                    method: 'post',
                                },
                            }),
                        ],
                        forms: {
                            login: {
                                redirectDelay: 0,
                                showMessages: {
                                    success: true,
                                },
                            },
                            register: {
                                redirectDelay: 0,
                                showMessages: {
                                    success: true,
                                },
                            },
                            requestPassword: {
                                redirectDelay: 0,
                                showMessages: {
                                    success: true,
                                },
                            },
                            resetPassword: {
                                redirectDelay: 0,
                                showMessages: {
                                    success: true,
                                },
                            },
                            logout: {
                                redirectDelay: 0,
                            },
                        }
                    }),
                ],
                providers: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__["AuthGuardService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/pages/home-page/home-page.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/pages/home-page/home-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../users/users.component */ "./src/app/components/users/users.component.ts");




class HomePageComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomePageComponent.ɵfac = function HomePageComponent_Factory(t) { return new (t || HomePageComponent)(); };
HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomePageComponent, selectors: [["app-home-page"]], decls: 5, vars: 0, consts: [[1, "card-header"]], template: function HomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-card-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Microservice Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardBodyComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardHeaderComponent"], _users_users_component__WEBPACK_IMPORTED_MODULE_2__["UsersComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home-page',
                templateUrl: './home-page.component.html',
                styleUrls: ['./home-page.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/pages/profile-page/profile-page.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/pages/profile-page/profile-page.component.ts ***!
  \*************************************************************************/
/*! exports provided: ProfilePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageComponent", function() { return ProfilePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ProfilePageComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProfilePageComponent.ɵfac = function ProfilePageComponent_Factory(t) { return new (t || ProfilePageComponent)(); };
ProfilePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfilePageComponent, selectors: [["app-profile-page"]], decls: 2, vars: 0, template: function ProfilePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "profile-page works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvcHJvZmlsZS1wYWdlL3Byb2ZpbGUtcGFnZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfilePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile-page',
                templateUrl: './profile-page.component.html',
                styleUrls: ['./profile-page.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/pages/users-page/users-page.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/pages/users-page/users-page.component.ts ***!
  \*********************************************************************/
/*! exports provided: UsersPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersPageComponent", function() { return UsersPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../users/users.component */ "./src/app/components/users/users.component.ts");




class UsersPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
UsersPageComponent.ɵfac = function UsersPageComponent_Factory(t) { return new (t || UsersPageComponent)(); };
UsersPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UsersPageComponent, selectors: [["app-users-page"]], decls: 5, vars: 0, consts: [[1, "card-header"]], template: function UsersPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-card-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "User Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardBodyComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardHeaderComponent"], _users_users_component__WEBPACK_IMPORTED_MODULE_2__["UsersComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvdXNlcnMtcGFnZS91c2Vycy1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-users-page',
                templateUrl: './users-page.component.html',
                styleUrls: ['./users-page.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/users/users.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/users/users.component.ts ***!
  \*****************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function UsersComponent_nb_list_item_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nb-user", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", user_r1.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", user_r1.email);
} }
class UsersComponent {
    // We can use the private usersService object anywhere within the class with 'this.usersService'
    constructor(usersService) {
        this.usersService = usersService;
    }
    ngOnInit() {
        // This HTTP request is asynchronous (think of it as a JS promise). We use the subscribe
        // method (think of it as the .then() of the promise) to subscribe to the Observable
        // which is an asynchronous datastream.
        this.usersService.getUsers().subscribe(users => {
            // Save the users that are returned to our local users array of 'User' datatype.
            this.users = users;
        });
    }
    deleteUser(user) {
        // Delete a user by looping through all the users and returning all of them
        // except from the one that we want to deleted.
        this.users = this.users.filter(t => t._id !== user._id);
        // Remove from server by calling the deleteUser() method of the UserService.
        this.usersService.deleteUser(user).subscribe();
    }
}
UsersComponent.ɵfac = function UsersComponent_Factory(t) { return new (t || UsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"])); };
UsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UsersComponent, selectors: [["app-users"]], decls: 6, vars: 2, consts: [[3, "size"], [4, "ngFor", "ngForOf"], [3, "name", "title"]], template: function UsersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nb-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UsersComponent_nb_list_item_5_Template, 2, 2, "nb-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("size", "medium");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.users);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardBodyComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbListComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbListItemComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbUserComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlcnMvdXNlcnMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-users',
                templateUrl: './users.component.html',
                styleUrls: ['./users.component.scss']
            }]
    }], function () { return [{ type: _services_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/auth */ "./node_modules/@nebular/auth/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class AuthGuardService {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate() {
        // canActive can return Observable<boolean>, which is exactly what isAuthenticated returns.
        return this.authService.isAuthenticated().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(authenticated => {
            if (!authenticated) {
                this.router.navigate(['auth/login']);
            }
        }));
    }
}
AuthGuardService.ɵfac = function AuthGuardService_Factory(t) { return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_nebular_auth__WEBPACK_IMPORTED_MODULE_2__["NbAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuardService, factory: AuthGuardService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _nebular_auth__WEBPACK_IMPORTED_MODULE_2__["NbAuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/users.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/users.service.ts ***!
  \*******************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

// Import the HTTP modules.



// Since we are sending data to a server, we have to send with
// the HTTP request, the header that contains the content-type.
const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json',
    })
};
class UsersService {
    constructor(http) {
        this.http = http;
    }
    // Get Users. Returns an array of User Observables.
    getUser(id) {
        const url = `api/users/${id}`;
        // Make a get request using the http object that will return an array of 'User' items.
        return this.http.get(url);
    }
    // Get Users. Returns an array of User Observables.
    getUsers() {
        const url = `api/users/all`;
        // Make a get request using the http object that will return an array of 'User' items.
        return this.http.get(url);
    }
    // Delete User. Send a put request to the server and update the value.
    // This is not going to stick, since JSONPlaceholder doesn't allow people to edit
    // actual data but it does mimic the response request.
    deleteUser(user) {
        // Note that it's '_id' and not 'id' because NodeJS stored IDs in that format.
        const url = `api/users/${user._id}`;
        // A delete request to delete the user from the server.
        return this.http.delete(url, httpOptions);
        // WHEN DELETING A USER DELETE THEIR ORDERS TOO.
    }
    // Add User
    addUser(user) {
        const url = `api/users/add`;
        return this.http.post(url, user, httpOptions);
    }
    // Toggle Completed. Put-request that returns an Observable of datatype 'any'. This
    // is because the Observable isn't formated as an exact user since it has the user-id.
    toggleCompleted(user) {
        // Specify the ID of the user that is passed in.
        const url = `api/task/${user._id}`;
        // A put request is for when you are UPDATING something on the server.
        return this.http.put(url, user, httpOptions);
    }
}
UsersService.ɵfac = function UsersService_Factory(t) { return new (t || UsersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
UsersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UsersService, factory: UsersService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
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
    production: false
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\D-Programs\wamp\www\MEAN stack\Heroku Deployment\nebular-app\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map