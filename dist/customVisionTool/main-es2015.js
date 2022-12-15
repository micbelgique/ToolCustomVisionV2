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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/bottom-sheet-detail/bottom-sheet-detail.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bottom-sheet-detail/bottom-sheet-detail.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-nav-list style=\"margin-bottom: 20%\">\r\n    <div style='text-align:center'>\r\n      <h1>{{ data.label | uppercase }}</h1>\r\n      <img style='height:10%' *ngIf=data.image [src]=data.image alt='object'>\r\n    </div>\r\n    <hr>\r\n    <p>{{data.description}}</p>\r\n    <p>{{data.hint}}</p>\r\n  </mat-nav-list>  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/detector/detector.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/detector/detector.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class='content'>\r\n    <mat-progress-bar *ngIf=\"this.isLoading && !this.stateContainer\" mode=\"indeterminate\"></mat-progress-bar>\r\n    <div [style.display]=\"!this.stateContainer ? 'block' : 'none'\" style=\"text-align: center;\">\r\n        <div *ngIf=this.alertContainer>\r\n            <p>{{alertMessage}}</p>\r\n            <button mat-raised-button (click)=\"this.initStreamDetection()\" color=\"primary\" i18n=\"@@facecamRetry\">Réessayer</button>\r\n        </div>\r\n        <br>\r\n        <mat-form-field>\r\n            <mat-select placeholder=\"Video capture\" [value]=this.videoSource>\r\n              <mat-option *ngFor=\"let cam of this.selectors\" (click)=\"this.startStream(cam.id)\" [value]=\"cam.id\">\r\n                  Camera {{cam.label}}\r\n              </mat-option>\r\n            </mat-select>\r\n        </mat-form-field>\r\n        <br>\r\n        <div [style.display]=this.displayStream >\r\n          <div id=\"overlayContainer\" class=\"center\">\r\n            <video id=\"stream\" #webcam autoplay></video>\r\n            <canvas #overlay id=\"overlay\" ></canvas>\r\n          </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"preview-card\">\r\n        <div *ngIf=this.stateContainer >\r\n            <h1>{{stateMessage}}</h1>\r\n        </div>\r\n    </div>\r\n    </div>\r\n    ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div  class=\"title\">Custom vision model</div>\r\n\r\n<mat-card class=\"settings\">\r\n  <!-- <mat-slide-toggle [(ngModel)]=\"isLocal\" class=\"example-full-width\">\r\n    Working localy?\r\n  </mat-slide-toggle> -->\r\n\r\n\r\n  <div *ngIf=\"this.isLocal\">\r\n    <mat-form-field class=\"example-full-width\">\r\n      <input\r\n        matInput\r\n        placeholder=\"Put model blob link\"\r\n        [(ngModel)]=\"modelEndpoint\"\r\n      />\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"example-full-width\">\r\n      <input\r\n        matInput\r\n        placeholder=\"Put model labels blob\"\r\n        [(ngModel)]=\"modelLabel\"\r\n      />\r\n    </mat-form-field>\r\n  </div>\r\n\r\n \r\n\r\n\r\n\r\n\r\n  <div *ngIf=\"!this.isLocal\">\r\n    <mat-form-field class=\"example-full-width\">\r\n      <input\r\n        matInput\r\n        placeholder=\"Put customvision endpoint\"\r\n        [(ngModel)]=\"endpoint\"\r\n      />\r\n    </mat-form-field>\r\n    <mat-form-field class=\"example-full-width\">\r\n      <input matInput placeholder=\"Put customvision key\" [(ngModel)]=\"key\" />\r\n    </mat-form-field>\r\n    <!-- <mat-slide-toggle [(ngModel)]=\"isStoringImage\" class=\"example-full-width\">\r\n      Storing image?\r\n    </mat-slide-toggle> -->\r\n  </div>\r\n\r\n  <div>\r\n\r\n    <mat-form-field class=\"example-full-width\">\r\n      <input\r\n        matInput\r\n        placeholder=\"URL API\"\r\n        [(ngModel)]=\"URLApi\"\r\n      />\r\n    </mat-form-field>\r\n    \r\n    <mat-form-field class=\"example-full-width\">\r\n      <input\r\n        matInput\r\n        placeholder=\"Filter\"\r\n        [(ngModel)]=\"Filter\"\r\n      />\r\n    </mat-form-field>\r\n    \r\n\r\n\r\n  </div>\r\n    \r\n  <label class=\"labeltool\">Confidence\r\n       <b class=\"example-full-width\">{{confidence.value}}</b>\r\n  </label>\r\n\r\n  <mat-slider class=\"example-full-width\" (change)=\"updateSetting($event)\"  #confidence  step=\"1\" min=\"0\" max=\"100\" [value]=\"confidence\">\r\n  </mat-slider>\r\n\r\n  <mat-form-field class=\"example-full-width\">\r\n    <textarea  matInput\r\n    placeholder=\"Meta Data\"\r\n    [(ngModel)]=\"MetaData\">\r\n    </textarea>\r\n  </mat-form-field>\r\n\r\n  <button\r\n    mat-raised-button\r\n    color=\"primary\"\r\n    (click)=\"setEndpointsAndKey()\"\r\n    class=\"example-full-width\"\r\n   >\r\n    Save\r\n  </button>\r\n</mat-card>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/test-local/test-local.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/test-local/test-local.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<img\r\n  id=\"image\"\r\n  src=\"https://pbs.twimg.com/media/EelNQwaWoAAxx51?format=jpg\"\r\n  crossorigin=\"anonymous\"\r\n/>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _detector_detector_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detector/detector.component */ "./src/app/detector/detector.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _test_local_test_local_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./test-local/test-local.component */ "./src/app/test-local/test-local.component.ts");






const routes = [
    { path: 'scanner', component: _detector_detector_component__WEBPACK_IMPORTED_MODULE_3__["DetectorComponent"] },
    { path: 'local', component: _test_local_test_local_component__WEBPACK_IMPORTED_MODULE_5__["TestLocalComponent"] },
    { path: '**', component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_4__["SettingsComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'customVisionTool';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _bottom_sheet_detail_bottom_sheet_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bottom-sheet-detail/bottom-sheet-detail.component */ "./src/app/bottom-sheet-detail/bottom-sheet-detail.component.ts");
/* harmony import */ var _detector_detector_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./detector/detector.component */ "./src/app/detector/detector.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _test_local_test_local_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./test-local/test-local.component */ "./src/app/test-local/test-local.component.ts");













let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _bottom_sheet_detail_bottom_sheet_detail_component__WEBPACK_IMPORTED_MODULE_6__["BottomSheetDetailComponent"],
            _detector_detector_component__WEBPACK_IMPORTED_MODULE_7__["DetectorComponent"],
            _settings_settings_component__WEBPACK_IMPORTED_MODULE_11__["SettingsComponent"],
            _test_local_test_local_component__WEBPACK_IMPORTED_MODULE_12__["TestLocalComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatBottomSheetModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatProgressBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatOptionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSliderModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]
        ],
        entryComponents: [
            _bottom_sheet_detail_bottom_sheet_detail_component__WEBPACK_IMPORTED_MODULE_6__["BottomSheetDetailComponent"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/bottom-sheet-detail/bottom-sheet-detail.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/bottom-sheet-detail/bottom-sheet-detail.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvdHRvbS1zaGVldC1kZXRhaWwvYm90dG9tLXNoZWV0LWRldGFpbC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/bottom-sheet-detail/bottom-sheet-detail.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/bottom-sheet-detail/bottom-sheet-detail.component.ts ***!
  \**********************************************************************/
/*! exports provided: BottomSheetDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomSheetDetailComponent", function() { return BottomSheetDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _utilities_object__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities/object */ "./src/app/utilities/object.ts");




let BottomSheetDetailComponent = class BottomSheetDetailComponent {
    constructor(bottomSheetRef, data) {
        this.bottomSheetRef = bottomSheetRef;
        this.data = data;
    }
    ngOnInit() { }
};
BottomSheetDetailComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetRef"] },
    { type: _utilities_object__WEBPACK_IMPORTED_MODULE_3__["Objects"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_BOTTOM_SHEET_DATA"],] }] }
];
BottomSheetDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bottom-sheet-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bottom-sheet-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/bottom-sheet-detail/bottom-sheet-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bottom-sheet-detail.component.css */ "./src/app/bottom-sheet-detail/bottom-sheet-detail.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_BOTTOM_SHEET_DATA"]))
], BottomSheetDetailComponent);



/***/ }),

/***/ "./src/app/detector/detector.component.css":
/*!*************************************************!*\
  !*** ./src/app/detector/detector.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.content {\r\n    height: 95vh;\r\n    overflow-y: auto;\r\n  }\r\n  \r\n  \r\n  #overlayContainer #stream, #overlay {\r\n    position: absolute;\r\n    height: 100%;\r\n    width: 100%;\r\n  }\r\n  \r\n  \r\n  #stream {\r\n    border: 2px solid black;\r\n    height: 100%;\r\n    width: 100%;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n    z-index: -100;\r\n    right: 0;\r\n    bottom: 0;\r\n    overflow: hidden;\r\n  }\r\n  \r\n  \r\n  #overlay {\r\n    height: 100%;\r\n    width: 100%;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n    z-index: -99;\r\n    right: 0;\r\n    bottom: 0;\r\n    overflow: hidden;\r\n  }\r\n  \r\n  \r\n  .detections {\r\n    height: 10%;\r\n    width: 20%;\r\n    z-index: 0;\r\n    margin: 5%;\r\n    -webkit-animation: pulse 1s forwards;\r\n            animation: pulse 1s forwards;\r\n  }\r\n  \r\n  \r\n  @-webkit-keyframes pulse {\r\n    0% {\r\n      opacity: 0;\r\n    }\r\n    100% {\r\n      opacity: 1;\r\n    }\r\n  }\r\n  \r\n  \r\n  @keyframes pulse {\r\n    0% {\r\n      opacity: 0;\r\n    }\r\n    100% {\r\n      opacity: 1;\r\n    }\r\n  }\r\n  \r\n  \r\n  .center {\r\n    margin: 0;\r\n    width: 50%;\r\n  }\r\n  \r\n  \r\n  .preview-card {\r\n    top: 80%;\r\n    width: 80%;\r\n    left: 10%;\r\n    right: 10%;\r\n    text-align: center;\r\n    position: absolute;\r\n    float: left;\r\n    clear: both;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0ZWN0b3IvZGV0ZWN0b3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0VBQ2xCOzs7RUFHQTtJQUNFLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztFQUNiOzs7RUFFQTtJQUNFLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osV0FBVztJQUNYLG9CQUFpQjtPQUFqQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0JBQWdCO0VBQ2xCOzs7RUFFQTtJQUNFLFlBQVk7SUFDWixXQUFXO0lBQ1gsb0JBQWlCO09BQWpCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osUUFBUTtJQUNSLFNBQVM7SUFDVCxnQkFBZ0I7RUFDbEI7OztFQUVBO0lBQ0UsV0FBVztJQUNYLFVBQVU7SUFDVixVQUFVO0lBQ1YsVUFBVTtJQUNWLG9DQUE0QjtZQUE1Qiw0QkFBNEI7RUFDOUI7OztFQUVBO0lBQ0U7TUFDRSxVQUFVO0lBQ1o7SUFDQTtNQUNFLFVBQVU7SUFDWjtFQUNGOzs7RUFQQTtJQUNFO01BQ0UsVUFBVTtJQUNaO0lBQ0E7TUFDRSxVQUFVO0lBQ1o7RUFDRjs7O0VBRUE7SUFDRSxTQUFTO0lBQ1QsVUFBVTtFQUNaOzs7RUFFQTtJQUNFLFFBQVE7SUFDUixVQUFVO0lBQ1YsU0FBUztJQUNULFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxXQUFXO0VBQ2IiLCJmaWxlIjoic3JjL2FwcC9kZXRlY3Rvci9kZXRlY3Rvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5jb250ZW50IHtcclxuICAgIGhlaWdodDogOTV2aDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gICNvdmVybGF5Q29udGFpbmVyICNzdHJlYW0sICNvdmVybGF5IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAjc3RyZWFtIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIHotaW5kZXg6IC0xMDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG4gIFxyXG4gICNvdmVybGF5IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICB6LWluZGV4OiAtOTk7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG4gIFxyXG4gIC5kZXRlY3Rpb25zIHtcclxuICAgIGhlaWdodDogMTAlO1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIHotaW5kZXg6IDA7XHJcbiAgICBtYXJnaW46IDUlO1xyXG4gICAgYW5pbWF0aW9uOiBwdWxzZSAxcyBmb3J3YXJkcztcclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBwdWxzZSB7XHJcbiAgICAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmNlbnRlciB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gIH1cclxuICBcclxuICAucHJldmlldy1jYXJkIHtcclxuICAgIHRvcDogODAlO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGxlZnQ6IDEwJTtcclxuICAgIHJpZ2h0OiAxMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gIH1cclxuICAiXX0= */");

/***/ }),

/***/ "./src/app/detector/detector.component.ts":
/*!************************************************!*\
  !*** ./src/app/detector/detector.component.ts ***!
  \************************************************/
/*! exports provided: DetectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetectorComponent", function() { return DetectorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _oneroomic_facecognitivelibrary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @oneroomic/facecognitivelibrary */ "./node_modules/@oneroomic/facecognitivelibrary/fesm2015/oneroomic-facecognitivelibrary.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _microsoft_customvision_tfjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @microsoft/customvision-tfjs */ "./node_modules/@microsoft/customvision-tfjs/lib/index.js");
/* harmony import */ var _microsoft_customvision_tfjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_microsoft_customvision_tfjs__WEBPACK_IMPORTED_MODULE_5__);


// tslint:disable-next-line:max-line-length




// import { Console } from "console";
let DetectorComponent = class DetectorComponent {
    constructor(dialog, predictionService, http) {
        this.dialog = dialog;
        this.predictionService = predictionService;
        this.http = http;
        /* input stream devices */
        /* selector devices */
        this.selectors = [];
        // loading models and stream not available
        this.displayStream = "none";
        this.isLoading = true;
        // alert
        this.alertContainer = false;
        this.alertMessage = "";
        // state game
        this.stateContainer = false;
        this.stateMessage = "";
        // detection overlay objects detected
        this.objectsDictionary = [];
        // tslint:disable-next-line:max-line-length
        this.customVisionEndpoint = "InsertYourCustomVisionEndpoint";
        this.customVisionKey = "InsertYourCustomVisionKey";
        this.modelEndpoint = "";
        this.URLApi = "";
        this.confidence = 75;
        this.Filter = "";
        this.Metadata = "";
        this.modelLabel = "";
        this.isStoringImage = "false";
        this.isLocal = false;
        this.labl = [];
        this.loadedModel = false;
        this.stream = null;
        this.opencam();
    }
    loadModel() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.model = new _microsoft_customvision_tfjs__WEBPACK_IMPORTED_MODULE_5__["ObjectDetectionModel"]();
            yield this.model.loadModelAsync(this.modelEndpoint);
            this.http
                .get(this.modelLabel, { responseType: "text" })
                .subscribe((result) => {
                this.file = result;
                for (const line of this.file.split(/[\r\n]+/)) {
                    this.labl.push(line);
                }
            });
            this.loadedModel = true;
        });
    }
    ngOnInit() {
        if (localStorage.getItem("settings")) {
            const settings = JSON.parse(localStorage.getItem("settings"));
            this.customVisionEndpoint = settings.customVisionEndpoint;
            this.customVisionKey = settings.customVisionKey;
            this.isStoringImage = settings.isStoringImage;
            this.isLocal = settings.isLocal;
            this.modelEndpoint = settings.modelEndpoint;
            this.modelLabel = settings.modelLabel;
            this.URLApi = settings.URLApi;
            this.Filter = settings.Filter;
            this.Metadata = settings.MetaData;
            this.confidence = settings.confidence;
        }
        this.loadModel();
        this.detectId = null;
        if (localStorage.getItem("videoSource")) {
            this.videoSource = localStorage.getItem("videoSource");
        }
        // init lock
        this.alertContainer = false;
        this.stateContainer = false;
        // save canvas context
        this.ctx = this.overlay.nativeElement.getContext("2d");
        // refreshRate
        this.refreshRate = 3000;
        if (localStorage.getItem("refreshRate")) {
            this.refreshRate = Number(localStorage.getItem("refreshRate"));
            if (this.refreshRate < 250) {
                this.refreshRate = 3000;
            }
        }
        // set objects retrieved from challenge
    }
    initStreamDetection() {
        if (this.stream === null) {
            this.startStream();
            if (this.detectId === null) {
                // detection interval: default 3000
                this.detectId = setInterval(() => {
                    // state still registering
                    if (!this.stateContainer) {
                        if (this.stream !== null) {
                            this.detectObjects();
                        }
                    }
                }, 1000);
            }
        }
    }
    detectObjects() {
        this.clearOverlay();
        this.imageCapture(this.video.nativeElement);
        if (this.displayStream === "none") {
            this.displayStream = "block";
            this.isLoading = false;
        }
    }
    // clear canvas overlay
    clearOverlay() {
        this.ctx.clearRect(0, 0, this.overlay.nativeElement.width, this.overlay.nativeElement.height);
    }
    drawOverlay(x, y, w, h, title = null) {
        this.ctx.beginPath();
        this.ctx.rect(x, y, w, h);
        if (title !== null) {
            this.ctx.font = "20px Arial";
            this.ctx.fillText(title, x + w * 0.05, y + h / 1.05);
        }
        this.ctx.stroke();
        this.ctx.closePath();
    }
    /* initialize capture webcam */
    opencam() {
        navigator.mediaDevices
            .enumerateDevices()
            .then((d) => {
            this.selectors = this.getCaptureDevices(d);
            this.initStreamDetection();
        })
            .catch(this.handleError);
    }
    /* Start or restart the stream using a specific videosource and inject it in a container */
    startStream(videoSource = null) {
        if (navigator.mediaDevices) {
            if (this.selectors.map((s) => s.id).indexOf(this.videoSource) === -1) {
                // check if prefered cam is available in the list
                this.videoSource = null;
            }
            // select specific camera on mobile
            this.videoSource = videoSource
                ? videoSource
                : this.videoSource
                    ? this.videoSource
                    : this.selectors[0].id;
            localStorage.setItem("videoSource", this.videoSource);
            // access the web cam
            navigator.mediaDevices
                .getUserMedia({
                audio: false,
                video: {
                    // selfie mode
                    // facingMode: {exact: 'user' },
                    deviceId: this.videoSource
                        ? { exact: this.videoSource }
                        : undefined,
                },
            })
                // permission granted:
                .then((stream) => {
                this.stream = stream;
                this.alertContainer = false;
                // on getUserMedia
                this.video.nativeElement.srcObject = stream;
                this.video.nativeElement.play();
                // set canvas size = video size when known
                this.video.nativeElement.addEventListener("loadedmetadata", () => {
                    // overlay
                    this.overlay.nativeElement.width =
                        this.video.nativeElement.videoWidth;
                    this.overlay.nativeElement.height =
                        this.video.nativeElement.videoHeight;
                });
            })
                // permission denied:
                .catch((error) => {
                console.log("Camera init failed : " + error.name);
                this.alertContainer = true;
                this.alertMessage =
                    "Could not access the camera. Error: " + error.name;
            });
        }
        return this.video;
    }
    /* Detect possible capture devices */
    getCaptureDevices(deviceInfos) {
        // Handles being called several times to update labels. Preserve values.
        const videouputs = [];
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < deviceInfos.length; i++) {
            if (deviceInfos[i].kind === "videoinput") {
                videouputs.push({
                    id: deviceInfos[i].deviceId,
                    label: deviceInfos[i].label,
                });
            }
        }
        return videouputs;
    }
    imageCapture(video) {
        const canvas = document.createElement("canvas");
        canvas.width = this.overlay.nativeElement.width;
        canvas.height = this.overlay.nativeElement.height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(video, 0, 0);
        if (this.isLocal) {
            this.imageDetectionLocal(canvas);
        }
        else {
            this.imageDetectionOnline(canvas);
        }
    }
    imageDetectionOnline(canvas) {
        console.log("Working online");
        canvas.toBlob((blob) => {
            let detection$;
            if (this.isStoringImage) {
                detection$ = this.predictionService.predictImage(blob, this.customVisionEndpoint, this.customVisionKey);
            }
            else {
                detection$ = this.predictionService.predictImageWithNoStore(blob, this.customVisionEndpoint, this.customVisionKey);
            }
            detection$.subscribe((predictions) => {
                predictions.predictions.forEach((p) => {
                    if (p.tagName == this.Filter || "" || " ")
                        if (p.probability >= this.confidence / 100) {
                            this.drawOverlay(p.boundingBox.left * this.overlay.nativeElement.width, p.boundingBox.top * this.overlay.nativeElement.height, p.boundingBox.width * this.overlay.nativeElement.width, p.boundingBox.height * this.overlay.nativeElement.height, p.tagName);
                            console.log(p.tagName + " " + p.probability * 100 + " % ");
                            if (p.tagName == this.Filter || "" || " ") {
                                this.http.post(this.URLApi, { deviceID: "Cam1", alertType: p.tagName, metaData: this.Metadata }).subscribe((res) => {
                                });
                            }
                        }
                });
            });
        });
    }
    imageDetectionLocal(canvas) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.loadedModel) {
                console.log("Working offline");
                const result = yield this.model.executeAsync(canvas);
                // tslint:disable-next-line: prefer-for-of
                for (let index = 0; index < result[0].length; index++) {
                    if (result[1][index] > 0.4) {
                        const w = result[0][index][2] * this.overlay.nativeElement.width -
                            result[0][index][0] * this.overlay.nativeElement.width;
                        const h = result[0][index][3] * this.overlay.nativeElement.height -
                            result[0][index][1] * this.overlay.nativeElement.height;
                        this.drawOverlay(result[0][index][0] * this.overlay.nativeElement.width, result[0][index][1] * this.overlay.nativeElement.height, w, h, this.labl[result[2][index]]);
                    }
                }
            }
        });
    }
    stopCaptureStream() {
        // stop camera capture
        if (this.stream) {
            this.stream.getTracks().forEach((track) => {
                track.stop();
            });
        }
    }
    /* handles all type of errors from usermedia API */
    handleError(error) {
        console.log("navigator.getUserMedia error: ", error);
    }
    ngOnDestroy() {
        this.stopCaptureStream();
        clearInterval(this.detectId);
        this.detectId = null;
        this.stream = null;
    }
};
DetectorComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _oneroomic_facecognitivelibrary__WEBPACK_IMPORTED_MODULE_3__["CustomVisionPredictionService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("overlay", { static: true })
], DetectorComponent.prototype, "overlay", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("webcam", { static: true })
], DetectorComponent.prototype, "video", void 0);
DetectorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-detector",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./detector.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/detector/detector.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./detector.component.css */ "./src/app/detector/detector.component.css")).default]
    })
], DetectorComponent);



/***/ }),

/***/ "./src/app/settings/settings.component.css":
/*!*************************************************!*\
  !*** ./src/app/settings/settings.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".settings {\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n.example-form {\r\n    min-width: 150px;\r\n    max-width: 500px;\r\n    width: 90%;\r\n  }\r\n.example-full-width {\r\n width: 90%;\r\n}\r\n.title{\r\n  font-size: xx-large;\r\n  text-align: center;\r\n  margin: 3%;\r\n  text-transform: uppercase;\r\n  color:#0f2832;\r\n  }\r\n.labeltool{\r\n  color:#828282;\r\n  margin: 3%;\r\n  width: 90%;\r\n\r\n\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsVUFBVTtFQUNaO0FBRUY7Q0FDQyxVQUFVO0FBQ1g7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2I7QUFFRjtFQUNFLGFBQWE7RUFDYixVQUFVO0VBQ1YsVUFBVTs7O0FBR1oiLCJmaWxlIjoic3JjL2FwcC9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNldHRpbmdzIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5leGFtcGxlLWZvcm0ge1xyXG4gICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gIH1cclxuXHJcbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xyXG4gd2lkdGg6IDkwJTtcclxufVxyXG5cclxuLnRpdGxle1xyXG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMyU7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBjb2xvcjojMGYyODMyO1xyXG4gIH1cclxuXHJcbi5sYWJlbHRvb2x7XHJcbiAgY29sb3I6IzgyODI4MjtcclxuICBtYXJnaW46IDMlO1xyXG4gIHdpZHRoOiA5MCU7XHJcblxyXG5cclxufVxyXG5cclxuIl19 */");

/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let SettingsComponent = class SettingsComponent {
    constructor(router) {
        this.router = router;
        this.confidence = 0;
        if (localStorage.getItem("settings")) {
            const settings = JSON.parse(localStorage.getItem("settings"));
            this.endpoint = settings.customVisionEndpoint;
            this.key = settings.customVisionKey;
            this.isStoringImage = settings.isStoringImage;
            this.isLocal = settings.isLocal;
            this.modelEndpoint = settings.modelEndpoint;
            this.modelLabel = settings.modelLabel;
            this.URLApi = settings.URLApi;
            this.Filter = settings.Filter;
            this.MetaData = settings.MetaData;
            this.confidence = settings.confidence;
        }
    }
    ngOnInit() { }
    updateSetting(event) {
        this.confidence = event.value;
    }
    setEndpointsAndKey() {
        const settings = {
            customVisionEndpoint: this.endpoint,
            customVisionKey: this.key,
            isStoringImage: this.isStoringImage,
            isLocal: this.isLocal,
            modelEndpoint: this.modelEndpoint,
            modelLabel: this.modelLabel,
            URLApi: this.URLApi,
            MetaData: this.MetaData,
            Filter: this.Filter,
            confidence: this.confidence
        };
        localStorage.setItem("settings", JSON.stringify(settings));
        this.router.navigate(["/scanner"]);
        console.log(this.confidence);
    }
};
SettingsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-settings",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./settings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./settings.component.css */ "./src/app/settings/settings.component.css")).default]
    })
], SettingsComponent);



/***/ }),

/***/ "./src/app/test-local/test-local.component.css":
/*!*****************************************************!*\
  !*** ./src/app/test-local/test-local.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3QtbG9jYWwvdGVzdC1sb2NhbC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/test-local/test-local.component.ts":
/*!****************************************************!*\
  !*** ./src/app/test-local/test-local.component.ts ***!
  \****************************************************/
/*! exports provided: TestLocalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestLocalComponent", function() { return TestLocalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _microsoft_customvision_tfjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/customvision-tfjs */ "./node_modules/@microsoft/customvision-tfjs/lib/index.js");
/* harmony import */ var _microsoft_customvision_tfjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_customvision_tfjs__WEBPACK_IMPORTED_MODULE_2__);



let TestLocalComponent = class TestLocalComponent {
    constructor() { }
    ngOnInit() {
        this.launchModel();
    }
    launchModel() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let model = new _microsoft_customvision_tfjs__WEBPACK_IMPORTED_MODULE_2__["ObjectDetectionModel"]();
            yield model.loadModelAsync("http://localhost:4200/assets/model.json");
            console.log(model);
            const image = document.getElementById("image");
            const result = yield model.executeAsync(image);
            console.log(result);
        });
    }
};
TestLocalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-test-local",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./test-local.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/test-local/test-local.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./test-local.component.css */ "./src/app/test-local/test-local.component.css")).default]
    })
], TestLocalComponent);



/***/ }),

/***/ "./src/app/utilities/object.ts":
/*!*************************************!*\
  !*** ./src/app/utilities/object.ts ***!
  \*************************************/
/*! exports provided: Objects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Objects", function() { return Objects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Objects {
    constructor(label, description) {
        this.image = null;
        this.label = label;
        this.description = description;
        this.hint = '';
        this.image = null;
    }
}


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\antoi\OneDrive\Bureau\Project-Mic\CustomVisionTool_EC2k2\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!****************************!*\
  !*** node-fetch (ignored) ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!********************************!*\
  !*** string_decoder (ignored) ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map