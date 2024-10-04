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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\n      <ul class=\"nav nav-tabs\">\n        <li role=\"presentation\" class=\"nav-item\" ><a class=\"nav-link\" routerLinkActive=\"active\" \n          [routerLinkActiveOptions]=\"{exact: true}\" routerLink=\"/\">Home</a></li>\n        <li role=\"presentation\" class=\"nav-item\"><a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/servers\">Servers</a></li>\n        <li role=\"presentation\" class=\"nav-item\"><a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/users']\">Users</a></li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/forms/reactive-form/reactive-form.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/forms/reactive-form/reactive-form.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\n            <form [formGroup]=\"signupForm\" (ngSubmit)=\"onSubmit()\"> \n                <div id=\"user-data\" formGroupName=\"userData1\">\n                    <div class=\"form-group\">\n                        <label for=\"username1\">Username</label>\n                        <input type=\"text\" id=\"username1\" \n                        [formControlName]=\"'username'\"\n                        class=\"form-control\" placeholder=\"* Enter your username\" autofocus=\"on\">\n\n                        <span \n                        *ngIf=\"!signupForm.get('userData1.username').valid && signupForm.get('userData1.username').touched\">\n                            <span class=\"help-block text-danger\"\n                            *ngIf=\"signupForm.get('userData1.username').errors['userNameIsForbidden']\">\n                        User name is forbidden, choose something else</span>\n                            <span class=\"help-block text-danger\"\n                            *ngIf=\"signupForm.get('userData1.username').errors['required']\">\n                            Please enter a user name</span>\n                        </span>\n\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"email1\">Mail</label>\n                        <input type=\"email\" id=\"email1\" \n                        formControlName=\"email\"\n                        class=\"form-control\" placeholder=\"* Enter your email\" autocomplete=\"on\">\n\n                        <span class=\"help-block text-danger\" \n                        *ngIf=\"!signupForm.get('userData1.email').valid && signupForm.get('userData1.email').touched\">\n                        Please enter a valid email!</span>\n\n                    </div>\n                </div>\n                \n                <div class=\"radio\" *ngFor=\"let gender of genders\">\n                    <label>\n                        <input \n                        type=\"radio\"\n                        formControlName=\"genderOptn\"\n                        [value]=\"gender\">\n                        {{gender}}\n                    </label>\n                </div>\n\n                <div formArrayName=\"hobbies\">\n                    <h3>Your hobbies</h3>\n                    <button class=\"btn btn-outline-success\" type=\"button\" (click)=\"onAddHobbies()\">Add Hobby</button>\n                    \n                    <hr *ngIf=\"spaceNeeded\">\n                    <div class=\"form-group\" \n                    *ngFor=\"let hobbycontrol of signupForm.get('hobbies').controls; let i=index\">\n                        <input\n                        type=\"text\" class=\"form-control\" placeholder=\"* Type your hobby: {{i+1}}\"\n                        [formControlName]=\"i\">\n                        <button class=\"btn btn-outline-danger\" type=\"button\" (click)=\"removeThisHobby(i)\">Remove</button>\n                    </div>\n                </div>\n                <span class=\"help-block text-danger\" \n                        *ngIf=\"!signupForm.valid && signupForm.touched\">\n                        (* indicates required field)</span>\n                <br>\n                <div>\n                    <button class=\"btn btn-outline-primary\" \n                    type=\"submit\" [disabled]=\"!signupForm.valid\">\n                    Submit</button>\n                </div>\n            </form>\n            </div>\n        </div>\n\n        <div *ngIf=\"isSubmited\">\n            <hr>\n            <h3>Your information</h3>\n            <div class=\"row\">\n                <div class=\"col-xs-12\">\n                    <p>Username: {{user.name}}</p>\n                    <p>E-mail: {{user.email}}</p> \n                    <p>Gender: {{user.gender}}</p> \n                    <p>Your hobbies:\n                    <label *ngFor=\"let hobby of user.hobbies\">\n                        {{hobby}} ,</label>\n                    </p>\n                </div>\n            </div>\n        </div>\n    </div>\n    "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/forms/td-form/td-form.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/forms/td-form/td-form.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\n        <!-- <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\"> -->\n        <form (ngSubmit)=\"onSubmit()\" #f=\"ngForm\">\n            <div id=\"user-data\" ngModelGroup=\"userData\" #userData1=\"ngModelGroup\">\n            <div class=\"form-group\">\n                <label for=\"username1\">Username</label>\n                <input type=\"text\" id=\"username1\" \n                class=\"form-control\" placeholder=\"Enter your username\" autofocus=\"on\"\n                ngModel name=\"username1\" required>\n            </div>\n            <button class=\"btn btn-outline-secondary\" type=\"button\"\n            (click)=\"suggestUserName()\">Suggest an Username</button>\n            <div class=\"form-group\">\n                <label for=\"email1\">Mail</label>\n                <input type=\"email\" id=\"email1\" \n                class=\"form-control\" placeholder=\"Enter your email\" autocomplete=\"on\"\n                ngModel name=\"email1\" required email #email=\"ngModel\">\n                <span class=\"help-block text-danger\" *ngIf=\"!email.valid && email.touched\">Please enter a valid email!</span>&nbsp;\n                <span class=\"help-block text-danger\" *ngIf=\"!userData1.valid && userData1.touched\">User data invalid!</span>\n            </div>\n            </div>\n            <div class=\"form-group\">\n            <label for=\"secret1\">Secret Questions</label>\n            <select id=\"secret1\" class=\"form-control\"\n            [ngModel]=\"defaultQn\" name=\"secret1\">\n                <option value=\"pet\">Your first Pet?</option>\n                <option value=\"teacher\">Your first teacher?</option>\n                <option value=\"person\">Your favourite person?</option>\n                <option value=\"place\">Your birth place?</option>\n                <option value=\"book\">Your favourite book?</option>\n            </select>\n            </div>\n            <div class=\"form-group\">\n                <textarea name=\"qtnAnswer\" rows=\"3\" class=\"form-control\" \n                [(ngModel)]=\"answer\" required></textarea>\n            </div>\n            <p *ngIf=\"answer != ''\">Your answer is: {{answer}}</p>\n            \n            <div class=\"radio\" *ngFor=\"let gender of genders\">\n                <label>\n                    <input \n                    type=\"radio\"\n                    name=\"radio\"\n                    ngModel\n                    [value]=\"gender\">\n                    {{gender}}\n                </label>\n            </div>\n            <!-- <div>\n                <label>Choose your interests</label><br>\n                <div class=\"form-check form-check-inline\" \n                *ngFor=\"let interest of interests\">\n                    <label>\n                        <input class=\"form-check-input\" type=\"checkbox\"\n                        ngModel name=\"checkbox\"\n                        [value]=\"interest\" required>\n                        {{interest}}\n                    </label>\n                </div>\n            </div> -->\n            <div>\n                <button class=\"btn btn-outline-primary\" \n                type=\"submit\" [disabled]=\"!f.valid\">Submit</button>\n            </div>\n        </form>\n        </div>\n    </div>\n    <div *ngIf=\"isSubmited\">\n        <hr>\n        <h3>Your information</h3>\n        <div class=\"row\">\n            <div class=\"col-xs-12\">\n                <p>Username: {{user.name}}</p>\n                <p>E-mail: {{user.email}}</p> \n                <p>Gender: {{user.gender}}</p> \n                <p>Your Question: {{user.qtn}}</p>\n                <p>answer: {{user.answer}}</p>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>Welcome to Server Manager 4.0</h4>\n<p>Manage your Servers and Users.</p>\n<button (click)=\"onLoadServers()\" class=\"btn btn-warning\">Load the servers</button>\n<hr>\n<button [disabled]=\"login\" class=\"btn btn-success\" (click)=\"onLogin()\">Log In</button>&nbsp;\n<button [disabled]=\"!login\" class=\"btn btn-danger\" (click)=\"onLogOut()\">Log Out</button>\n<hr>\n<button class=\"btn btn-outline-info\" (click)=\"onTdClick()\">TD form</button>&nbsp;\n<button class=\"btn btn-outline-success\" (click)=\"onReactiveClick()\">Reactive Form</button>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/page-not-found/page-not-found.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page-not-found/page-not-found.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>We know that you're searching for water in a desert</p>\n{{errorMessage}}\n<button class=\"btn btn-success\" (click)=\"onLoadHome()\">Find something here</button>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/servers/edit-server/edit-server.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/servers/edit-server/edit-server.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 *ngIf=\"!allowEdit\">you can't edit this Server. It's default</h2>\n<div *ngIf=\"allowEdit\">\n    <div class=\"form-group\">\n        <label for=\"name\">Server Name</label>\n        <input\n          type=\"text\"\n          id=\"name\"\n          class=\"form-control\"\n          [(ngModel)]=\"serverName\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"status\">Server Status</label>\n      <select\n        id=\"status\"\n        class=\"form-control\"\n        [(ngModel)]=\"serverStatus\">\n        <option value=\"online\">Online</option>\n        <option value=\"offline\">Offline</option>\n      </select>\n    </div>\n    <button\n      class=\"btn btn-primary\"\n      (click)=\"onUpdateServer()\">Update Server</button>\n      \n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/servers/server/server.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/servers/server/server.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h5>{{ server.name }}</h5>\n<p>Server status is {{ server.status }}</p>\n<button class=\"btn btn-primary\" (click)=\"onEdit()\"> Edit {{server.name}}</button>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/servers/servers.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/servers/servers.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12 col-sm-4\">\n    <div class=\"list-group\">\n      <a\n        [routerLink]=\"['/servers',server.id]\"\n        [queryParams]=\"{allowEdit: server.id == 3 ? '1' : '0'}\"\n        fragment='Loading'\n        class=\"list-group-item\"\n        *ngFor=\"let server of servers\">\n        {{ server.name }}\n      </a>\n    </div>\n  </div>\n  <div class=\"col-xs-12 col-sm-4\">\n    <router-outlet></router-outlet>\n    <!-- <button class=\"btn btn-danger\" (click)=\"onLoadServer(1)\">Load Server 1</button>\n    <app-edit-server></app-edit-server>\n    <hr>\n    <app-server></app-server> -->\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/users/user/user.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/users/user/user.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>User with ID - {{user.id}} is loaded.</p>\n<p>User's name is {{user.name}}</p>\n<a [routerLink]=\"['/users',13,'Anand']\"><button class=\"btn btn-success\">Load AR</button></a>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/users/users.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/users/users.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12 col-sm-4\">\n    <div class=\"list-group\">\n      <a\n        [routerLink]=\"['/users', user.id, user.name]\"\n        class=\"list-group-item\"\n        *ngFor=\"let user of users\">\n        {{ user.name }}\n      </a>\n    </div>\n  </div>\n  <div class=\"col-xs-12 col-sm-4\">\n    <router-outlet></router-outlet>\n    <!-- <app-user></app-user> -->\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/app-routing-module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing-module.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var home_component_1 = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
var user_component_1 = __webpack_require__(/*! ./users/user/user.component */ "./src/app/users/user/user.component.ts");
var users_component_1 = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
var servers_component_1 = __webpack_require__(/*! ./servers/servers.component */ "./src/app/servers/servers.component.ts");
var server_component_1 = __webpack_require__(/*! ./servers/server/server.component */ "./src/app/servers/server/server.component.ts");
var edit_server_component_1 = __webpack_require__(/*! ./servers/edit-server/edit-server.component */ "./src/app/servers/edit-server/edit-server.component.ts");
var page_not_found_component_1 = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
var guard_component_service_1 = __webpack_require__(/*! ./guards/guard-component.service */ "./src/app/guards/guard-component.service.ts");
var can_deact_guard_service_1 = __webpack_require__(/*! ./guards/can-deact-guard.service */ "./src/app/guards/can-deact-guard.service.ts");
var resolve_server_service_1 = __webpack_require__(/*! ./guards/resolve-server.service */ "./src/app/guards/resolve-server.service.ts");
var td_form_component_1 = __webpack_require__(/*! ./forms/td-form/td-form.component */ "./src/app/forms/td-form/td-form.component.ts");
var reactive_form_component_1 = __webpack_require__(/*! ./forms/reactive-form/reactive-form.component */ "./src/app/forms/reactive-form/reactive-form.component.ts");
var appRoot = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'users', component: users_component_1.UsersComponent, children: [
            { path: ':id/:name', component: user_component_1.UserComponent }
        ] },
    { path: 'servers', canActivateChild: [guard_component_service_1.GuardComponent], component: servers_component_1.ServersComponent, children: [
            { path: ':id', resolve: { serverData: resolve_server_service_1.ResolveServer }, component: server_component_1.ServerComponent },
            { path: ':id/edit', canDeactivate: [can_deact_guard_service_1.CanDeactivateGuard], component: edit_server_component_1.EditServerComponent }
        ] },
    { path: 'Template-Driven-Form', component: td_form_component_1.TDFormComponent },
    { path: 'Reactive-Form', component: reactive_form_component_1.ReactiveFormComponent },
    { path: 'no-water-here', component: page_not_found_component_1.PageNotFoundComponent, data: { message: 'Page not found!' } },
    { path: '**', redirectTo: '/no-water-here' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                // RouterModule.forRoot(appRoot, {useHash: true})
                router_1.RouterModule.forRoot(appRoot)
            ],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin-top: 30px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var app_routing_module_1 = __webpack_require__(/*! ./app-routing-module */ "./src/app/app-routing-module.ts");
var app_component_1 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var home_component_1 = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
var users_component_1 = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
var servers_component_1 = __webpack_require__(/*! ./servers/servers.component */ "./src/app/servers/servers.component.ts");
var user_component_1 = __webpack_require__(/*! ./users/user/user.component */ "./src/app/users/user/user.component.ts");
var edit_server_component_1 = __webpack_require__(/*! ./servers/edit-server/edit-server.component */ "./src/app/servers/edit-server/edit-server.component.ts");
var server_component_1 = __webpack_require__(/*! ./servers/server/server.component */ "./src/app/servers/server/server.component.ts");
var servers_service_1 = __webpack_require__(/*! ./servers/servers.service */ "./src/app/servers/servers.service.ts");
var page_not_found_component_1 = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
var auth_service_1 = __webpack_require__(/*! ./guards/auth.service */ "./src/app/guards/auth.service.ts");
var guard_component_service_1 = __webpack_require__(/*! ./guards/guard-component.service */ "./src/app/guards/guard-component.service.ts");
var can_deact_guard_service_1 = __webpack_require__(/*! ./guards/can-deact-guard.service */ "./src/app/guards/can-deact-guard.service.ts");
var resolve_server_service_1 = __webpack_require__(/*! ./guards/resolve-server.service */ "./src/app/guards/resolve-server.service.ts");
var td_form_component_1 = __webpack_require__(/*! ./forms/td-form/td-form.component */ "./src/app/forms/td-form/td-form.component.ts");
var reactive_form_component_1 = __webpack_require__(/*! ./forms/reactive-form/reactive-form.component */ "./src/app/forms/reactive-form/reactive-form.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                users_component_1.UsersComponent,
                servers_component_1.ServersComponent,
                user_component_1.UserComponent,
                edit_server_component_1.EditServerComponent,
                server_component_1.ServerComponent,
                page_not_found_component_1.PageNotFoundComponent,
                td_form_component_1.TDFormComponent,
                reactive_form_component_1.ReactiveFormComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                app_routing_module_1.AppRoutingModule
            ],
            providers: [servers_service_1.ServersService, auth_service_1.AuthService, guard_component_service_1.GuardComponent, can_deact_guard_service_1.CanDeactivateGuard, resolve_server_service_1.ResolveServer],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/forms/reactive-form/reactive-form.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/forms/reactive-form/reactive-form.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    margin-top: 30px;\n  }\n\ninput.ng-invalid.ng-touched {\n  border: 1px solid red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybXMvcmVhY3RpdmUtZm9ybS9yZWFjdGl2ZS1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7RUFDbEI7O0FBRUY7RUFDRSxxQkFBcUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9mb3Jtcy9yZWFjdGl2ZS1mb3JtL3JlYWN0aXZlLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gIH1cblxuaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/forms/reactive-form/reactive-form.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/forms/reactive-form/reactive-form.component.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var ReactiveFormComponent = /** @class */ (function () {
    function ReactiveFormComponent() {
        this.genders = ['male', 'female', 'not interested'];
        this.spaceNeeded = false;
        this.forbiddenUserNames = ['Anand', 'AR', 'AnandRaja', 'superUser'];
        this.isSubmited = false;
        this.user = {
            name: '',
            email: '',
            gender: '',
            hobbies: [null]
        };
    }
    ReactiveFormComponent.prototype.ngOnInit = function () {
        this.signupForm = new forms_1.FormGroup({
            userData1: new forms_1.FormGroup({
                'username': new forms_1.FormControl(null, [forms_1.Validators.required, this.forbiddenNames.bind(this)]),
                'email': new forms_1.FormControl(null, [forms_1.Validators.required, forms_1.Validators.email], this.forbiddenEmails)
            }),
            'genderOptn': new forms_1.FormControl('not interested'),
            'hobbies': new forms_1.FormArray([])
        });
        // this.signupForm.valueChanges.subscribe((value)=>{
        //   console.log(value);
        // });
        // this.signupForm.statusChanges.subscribe((status)=>{
        //   console.log(status);
        // });
    };
    ReactiveFormComponent.prototype.onSubmit = function () {
        this.isSubmited = true;
        this.user.name = this.signupForm.get('userData1.username').value;
        this.user.email = this.signupForm.get('userData1.email').value;
        this.user.gender = this.signupForm.get('genderOptn').value;
        this.user.hobbies = this.signupForm.get('hobbies').value;
        this.signupForm.reset();
    };
    ReactiveFormComponent.prototype.onAddHobbies = function () {
        this.spaceNeeded = true;
        var control = new forms_1.FormControl(null, forms_1.Validators.required);
        this.signupForm.get('hobbies').push(control);
    };
    ReactiveFormComponent.prototype.removeThisHobby = function (index) {
        this.signupForm.get('hobbies').removeAt(index);
    };
    ReactiveFormComponent.prototype.forbiddenNames = function (control) {
        if (this.forbiddenUserNames.indexOf(control.value) !== -1) {
            return { 'userNameIsForbidden': true };
        }
        else
            return null;
    };
    ReactiveFormComponent.prototype.forbiddenEmails = function (control) {
        var promise = new Promise(function (resolve, reject) {
            setTimeout(function () {
                if (control.value === 'ar@ar.com') {
                    resolve({ 'emailIsInvalid': true });
                }
                else {
                    resolve(null);
                }
            }, 2000);
        });
        return promise;
    };
    ReactiveFormComponent = __decorate([
        core_1.Component({
            selector: 'app-reactive-form',
            template: __webpack_require__(/*! raw-loader!./reactive-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/forms/reactive-form/reactive-form.component.html"),
            styles: [__webpack_require__(/*! ./reactive-form.component.css */ "./src/app/forms/reactive-form/reactive-form.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ReactiveFormComponent);
    return ReactiveFormComponent;
}());
exports.ReactiveFormComponent = ReactiveFormComponent;


/***/ }),

/***/ "./src/app/forms/td-form/td-form.component.css":
/*!*****************************************************!*\
  !*** ./src/app/forms/td-form/td-form.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    margin-top: 30px;\n  }\n\ninput.ng-invalid.ng-touched {\n  border: 1px solid red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybXMvdGQtZm9ybS90ZC1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7RUFDbEI7O0FBRUY7RUFDRSxxQkFBcUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9mb3Jtcy90ZC1mb3JtL3RkLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gIH1cblxuaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/forms/td-form/td-form.component.ts":
/*!****************************************************!*\
  !*** ./src/app/forms/td-form/td-form.component.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var TDFormComponent = /** @class */ (function () {
    function TDFormComponent() {
        this.defaultQn = 'person';
        this.answer = '';
        this.genders = ['male', 'female', 'not interested'];
        this.isSubmited = false;
        this.user = {
            name: '',
            email: '',
            gender: '',
            qtn: '',
            answer: ''
        };
    }
    TDFormComponent.prototype.ngOnInit = function () {
    };
    //   interests = ['cooking','singing','drawing','sleeping','chatting','surfing in net',
    // 'gaming','online games','coding','reading','writing','meditation','talking','others'];
    TDFormComponent.prototype.suggestUserName = function () {
        var suggestedName = 'New_user';
        // this.signUpForm.setValue({
        //   userData: {
        //     username1: suggestedName,
        //     email1: ''
        //   },
        //   secret1: 'person',
        //   qtnAnswer: 'Anand',
        //   radio: 'female'
        // });
        this.signUpForm.form.patchValue({
            userData: {
                username1: suggestedName
            }
        });
    };
    // onSubmit(form: NgForm){
    //   console.log(form);
    // }
    TDFormComponent.prototype.onSubmit = function () {
        this.isSubmited = true;
        console.log(this.signUpForm);
        this.user.name = this.signUpForm.value.userData.username1;
        this.user.email = this.signUpForm.value.userData.email1;
        this.user.gender = this.signUpForm.value.radio;
        this.user.qtn = this.signUpForm.value.secret1;
        this.user.answer = this.signUpForm.value.qtnAnswer;
        this.signUpForm.reset();
    };
    __decorate([
        core_1.ViewChild('f', { static: true }),
        __metadata("design:type", forms_1.NgForm)
    ], TDFormComponent.prototype, "signUpForm", void 0);
    TDFormComponent = __decorate([
        core_1.Component({
            selector: 'app-td-form',
            template: __webpack_require__(/*! raw-loader!./td-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/forms/td-form/td-form.component.html"),
            styles: [__webpack_require__(/*! ./td-form.component.css */ "./src/app/forms/td-form/td-form.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TDFormComponent);
    return TDFormComponent;
}());
exports.TDFormComponent = TDFormComponent;


/***/ }),

/***/ "./src/app/guards/auth.service.ts":
/*!****************************************!*\
  !*** ./src/app/guards/auth.service.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AuthService = /** @class */ (function () {
    function AuthService() {
        this.loggedIn = false;
    }
    AuthService.prototype.login = function () {
        this.loggedIn = true;
    };
    AuthService.prototype.logout = function () {
        this.loggedIn = false;
    };
    AuthService.prototype.isAuthenticated = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(_this.loggedIn);
            }, 800);
        });
        return promise;
    };
    return AuthService;
}());
exports.AuthService = AuthService;


/***/ }),

/***/ "./src/app/guards/can-deact-guard.service.ts":
/*!***************************************************!*\
  !*** ./src/app/guards/can-deact-guard.service.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CanDeactivateGuard = /** @class */ (function () {
    function CanDeactivateGuard() {
    }
    CanDeactivateGuard.prototype.canDeactivate = function (component, route, state) {
        return component.canDeactivate();
    };
    return CanDeactivateGuard;
}());
exports.CanDeactivateGuard = CanDeactivateGuard;


/***/ }),

/***/ "./src/app/guards/guard-component.service.ts":
/*!***************************************************!*\
  !*** ./src/app/guards/guard-component.service.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var auth_service_1 = __webpack_require__(/*! ./auth.service */ "./src/app/guards/auth.service.ts");
var GuardComponent = /** @class */ (function () {
    function GuardComponent(authservice, router) {
        this.authservice = authservice;
        this.router = router;
        this.allowed = false;
    }
    GuardComponent.prototype.canActivate = function (route, state) {
        var _this = this;
        this.authservice.isAuthenticated().then(function (authenticated) {
            if (authenticated) {
                _this.allowed = true;
            }
            else {
                _this.allowed = false;
            }
        });
        if (this.allowed) {
            return true;
        }
        else {
            this.router.navigate(['/']);
            return false;
        }
    };
    GuardComponent.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    GuardComponent.ctorParameters = function () { return [
        { type: auth_service_1.AuthService },
        { type: router_1.Router }
    ]; };
    GuardComponent = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [auth_service_1.AuthService, router_1.Router])
    ], GuardComponent);
    return GuardComponent;
}());
exports.GuardComponent = GuardComponent;


/***/ }),

/***/ "./src/app/guards/resolve-server.service.ts":
/*!**************************************************!*\
  !*** ./src/app/guards/resolve-server.service.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var servers_service_1 = __webpack_require__(/*! ../servers/servers.service */ "./src/app/servers/servers.service.ts");
var ResolveServer = /** @class */ (function () {
    function ResolveServer(serverService) {
        this.serverService = serverService;
    }
    ResolveServer.prototype.resolve = function (route, state) {
        return this.serverService.getServer(+route.params['id']);
    };
    ResolveServer.ctorParameters = function () { return [
        { type: servers_service_1.ServersService }
    ]; };
    ResolveServer = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [servers_service_1.ServersService])
    ], ResolveServer);
    return ResolveServer;
}());
exports.ResolveServer = ResolveServer;


/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var auth_service_1 = __webpack_require__(/*! ../guards/auth.service */ "./src/app/guards/auth.service.ts");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, authservice, route) {
        this.router = router;
        this.authservice = authservice;
        this.route = route;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.login = this.authservice.loggedIn;
        //  this.homeSubscription = interval(1000).subscribe({
        //    next: count =>{
        //       console.log(count);
        //     }
        //   });
        var customObservable = rxjs_1.Observable.create(function (observer) {
            var count = 0;
            setInterval(function () {
                observer.next(count);
                if (count === 5) {
                    observer.complete();
                }
                if (count > 6) {
                    observer.error(new Error('count is greater than 3'));
                }
                count++;
            }, 1000);
        });
        this.homeSubscription = customObservable.subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log(error);
            alert(error.message);
        }, function () {
            console.log('Observer is completed');
            alert('Observer is completed');
        });
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        this.homeSubscription.unsubscribe();
    };
    HomeComponent.prototype.onLoadServers = function () {
        this.router.navigate(['/servers']);
    };
    HomeComponent.prototype.onLogin = function () {
        this.authservice.login();
        this.login = this.authservice.loggedIn;
    };
    HomeComponent.prototype.onLogOut = function () {
        this.authservice.logout();
        this.login = this.authservice.loggedIn;
    };
    HomeComponent.prototype.onTdClick = function () {
        this.router.navigate(['/Template-Driven-Form'], { relativeTo: this.route });
    };
    HomeComponent.prototype.onReactiveClick = function () {
        this.router.navigate(['/Reactive-Form'], { relativeTo: this.route });
    };
    HomeComponent.ctorParameters = function () { return [
        { type: router_1.Router },
        { type: auth_service_1.AuthService },
        { type: router_1.ActivatedRoute }
    ]; };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.Router, auth_service_1.AuthService, router_1.ActivatedRoute])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p{\n    color: darkgreen;\n    font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicHtcbiAgICBjb2xvcjogZGFya2dyZWVuO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent(router, route) {
        this.router = router;
        this.route = route;
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
        // this.errorMessage=this.route.snapshot.data['message'];
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.errorMessage = data['message'];
        });
    };
    PageNotFoundComponent.prototype.onLoadHome = function () {
        this.router.navigate(['/']);
    };
    PageNotFoundComponent.ctorParameters = function () { return [
        { type: router_1.Router },
        { type: router_1.ActivatedRoute }
    ]; };
    PageNotFoundComponent = __decorate([
        core_1.Component({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/index.js!./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());
exports.PageNotFoundComponent = PageNotFoundComponent;


/***/ }),

/***/ "./src/app/servers/edit-server/edit-server.component.css":
/*!***************************************************************!*\
  !*** ./src/app/servers/edit-server/edit-server.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZlcnMvZWRpdC1zZXJ2ZXIvZWRpdC1zZXJ2ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/servers/edit-server/edit-server.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/servers/edit-server/edit-server.component.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var servers_service_1 = __webpack_require__(/*! ../servers.service */ "./src/app/servers/servers.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var EditServerComponent = /** @class */ (function () {
    function EditServerComponent(serversService, route, router) {
        this.serversService = serversService;
        this.route = route;
        this.router = router;
        this.serverName = '';
        this.serverStatus = '';
        this.allowEdit = false;
        this.isSaved = false;
    }
    EditServerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (queryParams) {
            _this.allowEdit = queryParams['allowEdit'] == '1' ? true : false;
        });
        this.route.params.subscribe(function (params) {
            id = +params['id'];
        });
        var id = +this.route.snapshot.params['id'];
        this.server = this.serversService.getServer(id);
        this.serverName = this.server.name;
        this.serverStatus = this.server.status;
    };
    EditServerComponent.prototype.onUpdateServer = function () {
        this.serversService.updateServer(this.server.id, { name: this.serverName, status: this.serverStatus });
        this.isSaved = true;
        this.router.navigate(['../'], { relativeTo: this.route });
    };
    EditServerComponent.prototype.canDeactivate = function () {
        if (!this.allowEdit) {
            return true;
        }
        if ((this.serverName != this.server.name || this.serverStatus != this.server.status) && (!this.isSaved)) {
            return confirm('Do you want to discard the changes?');
        }
        else {
            return true;
        }
    };
    EditServerComponent.ctorParameters = function () { return [
        { type: servers_service_1.ServersService },
        { type: router_1.ActivatedRoute },
        { type: router_1.Router }
    ]; };
    EditServerComponent = __decorate([
        core_1.Component({
            selector: 'app-edit-server',
            template: __webpack_require__(/*! raw-loader!./edit-server.component.html */ "./node_modules/raw-loader/index.js!./src/app/servers/edit-server/edit-server.component.html"),
            styles: [__webpack_require__(/*! ./edit-server.component.css */ "./src/app/servers/edit-server/edit-server.component.css")]
        }),
        __metadata("design:paramtypes", [servers_service_1.ServersService,
            router_1.ActivatedRoute, router_1.Router])
    ], EditServerComponent);
    return EditServerComponent;
}());
exports.EditServerComponent = EditServerComponent;


/***/ }),

/***/ "./src/app/servers/server/server.component.css":
/*!*****************************************************!*\
  !*** ./src/app/servers/server/server.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZlcnMvc2VydmVyL3NlcnZlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/servers/server/server.component.ts":
/*!****************************************************!*\
  !*** ./src/app/servers/server/server.component.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var servers_service_1 = __webpack_require__(/*! ../servers.service */ "./src/app/servers/servers.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var ServerComponent = /** @class */ (function () {
    function ServerComponent(serversService, route, router) {
        this.serversService = serversService;
        this.route = route;
        this.router = router;
    }
    ServerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.server = data['serverData'];
        });
        // const id = +this.route.snapshot.queryParams['id'];
        // this.server = this.serversService.getServer(id);
        // this.route.params.subscribe(
        //   (params: Params)=>{
        //     this.server = this.serversService.getServer(+params['id']);
        // });
    };
    ServerComponent.prototype.onEdit = function () {
        this.router.navigate(['edit'], { relativeTo: this.route, queryParamsHandling: 'preserve' });
    };
    ServerComponent.ctorParameters = function () { return [
        { type: servers_service_1.ServersService },
        { type: router_1.ActivatedRoute },
        { type: router_1.Router }
    ]; };
    ServerComponent = __decorate([
        core_1.Component({
            selector: 'app-server',
            template: __webpack_require__(/*! raw-loader!./server.component.html */ "./node_modules/raw-loader/index.js!./src/app/servers/server/server.component.html"),
            styles: [__webpack_require__(/*! ./server.component.css */ "./src/app/servers/server/server.component.css")]
        }),
        __metadata("design:paramtypes", [servers_service_1.ServersService,
            router_1.ActivatedRoute, router_1.Router])
    ], ServerComponent);
    return ServerComponent;
}());
exports.ServerComponent = ServerComponent;


/***/ }),

/***/ "./src/app/servers/servers.component.css":
/*!***********************************************!*\
  !*** ./src/app/servers/servers.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZlcnMvc2VydmVycy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/servers/servers.component.ts":
/*!**********************************************!*\
  !*** ./src/app/servers/servers.component.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var servers_service_1 = __webpack_require__(/*! ./servers.service */ "./src/app/servers/servers.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var ServersComponent = /** @class */ (function () {
    function ServersComponent(serversService, router, route) {
        this.serversService = serversService;
        this.router = router;
        this.route = route;
        this.servers = [];
    }
    ServersComponent.prototype.ngOnInit = function () {
        this.servers = this.serversService.getServers();
    };
    ServersComponent.prototype.onLoadServer = function () {
        // this.router.navigate(['servers'], {relativeTo: this.route});
        this.router.navigate(['/servers', 1, 'edit'], { queryParams: { 'allowEdit': '1' }, fragment: 'Loading' });
    };
    ServersComponent.ctorParameters = function () { return [
        { type: servers_service_1.ServersService },
        { type: router_1.Router },
        { type: router_1.ActivatedRoute }
    ]; };
    ServersComponent = __decorate([
        core_1.Component({
            selector: 'app-servers',
            template: __webpack_require__(/*! raw-loader!./servers.component.html */ "./node_modules/raw-loader/index.js!./src/app/servers/servers.component.html"),
            styles: [__webpack_require__(/*! ./servers.component.css */ "./src/app/servers/servers.component.css")]
        }),
        __metadata("design:paramtypes", [servers_service_1.ServersService,
            router_1.Router, router_1.ActivatedRoute])
    ], ServersComponent);
    return ServersComponent;
}());
exports.ServersComponent = ServersComponent;


/***/ }),

/***/ "./src/app/servers/servers.service.ts":
/*!********************************************!*\
  !*** ./src/app/servers/servers.service.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ServersService = /** @class */ (function () {
    function ServersService() {
        this.servers = [
            {
                id: 1,
                name: 'Productionserver',
                status: 'online'
            },
            {
                id: 2,
                name: 'Testserver',
                status: 'offline'
            },
            {
                id: 3,
                name: 'Devserver',
                status: 'offline'
            }
        ];
    }
    ServersService.prototype.getServers = function () {
        return this.servers;
    };
    ServersService.prototype.getServer = function (id) {
        var server = this.servers.find(function (s) {
            return s.id === id;
        });
        return server;
    };
    ServersService.prototype.updateServer = function (id, serverInfo) {
        var server = this.servers.find(function (s) {
            return s.id === id;
        });
        if (server) {
            server.name = serverInfo.name;
            server.status = serverInfo.status;
        }
    };
    return ServersService;
}());
exports.ServersService = ServersService;


/***/ }),

/***/ "./src/app/users/user/user.component.css":
/*!***********************************************!*\
  !*** ./src/app/users/user/user.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXIvdXNlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/users/user/user.component.ts":
/*!**********************************************!*\
  !*** ./src/app/users/user/user.component.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var UserComponent = /** @class */ (function () {
    function UserComponent(route) {
        this.route = route;
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = {
            id: this.route.snapshot.params['id'],
            name: this.route.snapshot.params['name']
        };
        this.paramsSubscription = this.route.params.subscribe(function (params) {
            _this.user.id = params['id'];
            _this.user.name = params['name'];
        });
    };
    UserComponent.prototype.ngOnDestroy = function () {
        this.paramsSubscription.unsubscribe();
    };
    UserComponent.ctorParameters = function () { return [
        { type: router_1.ActivatedRoute }
    ]; };
    UserComponent = __decorate([
        core_1.Component({
            selector: 'app-user',
            template: __webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/index.js!./src/app/users/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/users/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;


/***/ }),

/***/ "./src/app/users/users.component.css":
/*!*******************************************!*\
  !*** ./src/app/users/users.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/users/users.component.ts":
/*!******************************************!*\
  !*** ./src/app/users/users.component.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var UsersComponent = /** @class */ (function () {
    function UsersComponent() {
        this.users = [
            {
                id: 1,
                name: 'Max'
            },
            {
                id: 2,
                name: 'Anna'
            },
            {
                id: 3,
                name: 'Chris'
            }
        ];
    }
    UsersComponent = __decorate([
        core_1.Component({
            selector: 'app-users',
            template: __webpack_require__(/*! raw-loader!./users.component.html */ "./node_modules/raw-loader/index.js!./src/app/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.css */ "./src/app/users/users.component.css")]
        })
    ], UsersComponent);
    return UsersComponent;
}());
exports.UsersComponent = UsersComponent;


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
var environment_1 = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/Angular-study-routing/Angular-study-routing/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map