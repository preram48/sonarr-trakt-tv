webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container{\n    max-width: 900px;\n    margin: auto;\n    width: 100%;\n    margin-top: 100px;\n}\n\n.mat-toolbar{\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n}\n\n.spacer {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n    text-align: right;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<mat-toolbar color=\"primary\">\n    <div class=\"spacer\">\n        <a mat-button target=\"_blank\" href=\"https://github.com/preram48/sonarr-trakt-tv\">\n            <img src=\"./assets/github-circle-white-transparent.svg\" />\n        </a>\n    </div>\n</mat-toolbar>\n<div style=\"text-align:center\" class=\"container\">\n    <mat-tab-group>\n        <mat-tab label=\"List\">\n            <app-list></app-list>\n        </mat-tab>\n        <mat-tab label=\"Settings\">\n            <app-settings></app-settings>\n        </mat-tab>\n    </mat-tab-group>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__list_list_component__ = __webpack_require__("../../../../../src/app/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__settings_settings_component__ = __webpack_require__("../../../../../src/app/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__list_dialog_list_dialog_component__ = __webpack_require__("../../../../../src/app/list-dialog/list-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["H" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__list_list_component__["a" /* ListComponent */],
                __WEBPACK_IMPORTED_MODULE_8__settings_settings_component__["a" /* SettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__list_dialog_list_dialog_component__["a" /* ListDialogComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* NoopAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["g" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["h" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["j" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["l" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["m" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["n" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["o" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["p" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["q" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["r" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["s" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["t" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["u" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["v" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["w" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["x" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["y" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["A" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["z" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["B" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["C" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["E" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["F" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["G" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["H" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["D" /* MatStepperModule */],
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_9__list_dialog_list_dialog_component__["a" /* ListDialogComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/list-dialog/list-dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-form-field {\n    display: block;\n    width: 350px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/list-dialog/list-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: right;\">\n  <button mat-button (click)=\"close()\">\n    <mat-icon>close</mat-icon>\n  </button>\n</div>\n<form novalidate style=\"text-align: center\"  #listForm=\"ngForm\">\n  <mat-form-field>\n    <input matInput placeholder=\"Name\" required [(ngModel)]=\"listItem.name\" name=\"name\">\n  </mat-form-field>\n  <mat-form-field>\n    <mat-select placeholder=\"List Type\" [(ngModel)]=\"listItem.listType\" name=\"list\" required>\n      <mat-option *ngFor=\"let item of trakList\" [value]=\"item.value\">\n        {{ item.viewValue }}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n  <mat-form-field>\n    <mat-select placeholder=\"Quality Profile\" [(ngModel)]=\"listItem.profile\" name=\"profile\" required>\n      <mat-option *ngFor=\"let profile of profiles\" [value]=\"profile.id\">\n        {{ profile.name }}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n  <mat-form-field>\n    <mat-select placeholder=\"Folder\" [(ngModel)]=\"listItem.folder\" name=\"folder\" required>\n      <mat-option *ngFor=\"let folder of folders\" [value]=\"folder.path\">\n        {{ folder.path }}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n  <mat-form-field>\n    <input matInput placeholder=\"Username\" [(ngModel)]=\"listItem.username\" name=\"username\" required>\n  </mat-form-field>\n  <div>\n    <button (click)=\"saveList(listItem)\" mat-raised-button color=\"primary\" [disabled]=\"listForm.invalid\">save</button>\n  </div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/list-dialog/list-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_service__ = __webpack_require__("../../../../../src/app/list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sonarr_service__ = __webpack_require__("../../../../../src/app/sonarr.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var ListItem = (function () {
    function ListItem() {
    }
    return ListItem;
}());
var ListDialogComponent = (function () {
    function ListDialogComponent(dialogRef, data, listService, sonarrService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.listService = listService;
        this.sonarrService = sonarrService;
    }
    ListDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listItem = this.data;
        this.trakList = [{
                value: 1,
                viewValue: 'Watchlist'
            }];
        this.sonarrService.fetchPaths().subscribe(function (folders) { return _this.folders = folders; });
        this.sonarrService.fetchProfiles().subscribe(function (profiles) { return _this.profiles = profiles; });
    };
    ListDialogComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    ListDialogComponent.prototype.saveList = function (item) {
        var _this = this;
        if (item.id) {
            this.listService.updateList(item.id, item).subscribe(function () {
                _this.close();
            });
        }
        else {
            item.enabled = true;
            this.listService.createList(item).subscribe(function () {
                _this.close();
            });
        }
    };
    ListDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-list-dialog',
            template: __webpack_require__("../../../../../src/app/list-dialog/list-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/list-dialog/list-dialog.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__list_service__["a" /* ListService */], __WEBPACK_IMPORTED_MODULE_3__sonarr_service__["a" /* SonarrService */]]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_2__list_service__["a" /* ListService */],
            __WEBPACK_IMPORTED_MODULE_3__sonarr_service__["a" /* SonarrService */]])
    ], ListDialogComponent);
    return ListDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/list.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/mergeMap.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListService = (function () {
    function ListService(http) {
        this.http = http;
    }
    ListService.prototype.fetchList = function () {
        return this.http.get("/api/list")
            .map(function (res) { return res.json(); });
    };
    ListService.prototype.updateList = function (id, body) {
        return this.http.put("/api/list/" + id, body)
            .map(function (res) { return res.json(); });
    };
    ListService.prototype.createList = function (body) {
        return this.http.post("/api/list", body)
            .map(function (res) { return res.json(); });
    };
    ListService.prototype.deleteList = function (id) {
        return this.http.delete("/api/list/" + id)
            .map(function (res) { return res.json(); });
    };
    ListService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], ListService);
    return ListService;
}());



/***/ }),

/***/ "../../../../../src/app/list/list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fab-add {\n    position: fixed !important;\n    bottom: 50px !important;\n    right: 50px !important;\n}\n\n.flex {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n\n.mat-card {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    max-width: 350px;\n    min-width: 350px;\n    margin: 15px;\n}\n\n.mat-card-content {\n    cursor: pointer;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"flex\">\n  <button mat-fab color=\"primary\" class=\"fab-add\" (click)=\"addList()\">\n    <mat-icon>add</mat-icon>\n  </button>\n  <mat-card *ngFor=\"let listItem of list\">\n    <mat-card-content (click)=\"openDialog(listItem)\">\n      <h2>{{listItem.name}}</h2>\n    </mat-card-content>\n    <mat-card-actions>\n      <mat-slide-toggle [checked]=\"listItem.enabled\" (change)=\"saveList(listItem, $event)\" name=\"enabled\">Enabled</mat-slide-toggle>\n      <button (click)=\"deleteList(listItem)\" mat-button>DELETE</button>\n    </mat-card-actions>\n  </mat-card>\n  <mat-card *ngIf=\"list.length === 0\">\n    <mat-card-content>    \n      <h2>No List Found</h2>\n    </mat-card-content>\n  </mat-card>\n</div>"

/***/ }),

/***/ "../../../../../src/app/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_dialog_list_dialog_component__ = __webpack_require__("../../../../../src/app/list-dialog/list-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_service__ = __webpack_require__("../../../../../src/app/list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sonarr_service__ = __webpack_require__("../../../../../src/app/sonarr.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListItem = (function () {
    function ListItem() {
    }
    return ListItem;
}());
var ListComponent = (function () {
    function ListComponent(listService, sonarrService, dialog) {
        this.listService = listService;
        this.sonarrService = sonarrService;
        this.dialog = dialog;
        this.list = new Array();
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listService.fetchList().subscribe(function (list) { return _this.list = list; });
    };
    ListComponent.prototype.addList = function () {
        this.openDialog(new ListItem());
    };
    ListComponent.prototype.deleteList = function (list) {
        if (list.id) {
            this.listService.deleteList(list.id).subscribe(function () { });
        }
        this.list.splice(this.list.findIndex(function (element) { return element === list; }), 1);
    };
    ListComponent.prototype.saveList = function (item, $event) {
        item.enabled = $event.checked;
        this.listService.updateList(item.id, item).subscribe(function () { });
    };
    ListComponent.prototype.openDialog = function (listItem) {
        var _this = this;
        var itemCopy = {};
        Object.assign(itemCopy, listItem);
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__list_dialog_list_dialog_component__["a" /* ListDialogComponent */], {
            data: itemCopy
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.listService.fetchList().subscribe(function (list) { return _this.list = list; });
        });
    };
    ListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-list',
            template: __webpack_require__("../../../../../src/app/list/list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/list/list.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__list_service__["a" /* ListService */], __WEBPACK_IMPORTED_MODULE_4__sonarr_service__["a" /* SonarrService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__list_service__["a" /* ListService */], __WEBPACK_IMPORTED_MODULE_4__sonarr_service__["a" /* SonarrService */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatDialog */]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/settings.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/mergeMap.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SettingsService = (function () {
    function SettingsService(http) {
        this.http = http;
    }
    SettingsService.prototype.fetchSettings = function () {
        return this.http.get("/api/settings")
            .map(function (res) { return res.json(); });
    };
    SettingsService.prototype.updateSettings = function (id, body) {
        return this.http.put("/api/settings/" + id, body)
            .map(function (res) { return res.json(); });
    };
    SettingsService.prototype.createSettings = function (body) {
        return this.http.post("/api/settings", body)
            .map(function (res) { return res.json(); });
    };
    SettingsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], SettingsService);
    return SettingsService;
}());



/***/ }),

/***/ "../../../../../src/app/settings/settings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.settings mat-form-field {\n    width: 50%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<form novalidate class=\"settings\">\n  <h2>Sonarr Settings</h2>\n  <mat-form-field>\n    <input matInput placeholder=\"Hostname\" required [(ngModel)]=\"settings.hostname\" name=\"hostname\">\n  </mat-form-field>\n  <mat-form-field>\n    <input matInput placeholder=\"Port\" required [(ngModel)]=\"settings.port\" name=\"port\">\n  </mat-form-field>\n  <mat-form-field>\n    <input matInput placeholder=\"Api Key\" required [(ngModel)]=\"settings.apiKey\" name=\"apiKey\">\n  </mat-form-field>\n  <mat-form-field>\n    <input matInput placeholder=\"Update Interval In Minutes\" required [(ngModel)]=\"settings.interval\" name=\"interval\">\n  </mat-form-field>\n  <div style=\"text-align: center;\">\n    <button (click)=\"saveSettings()\" mat-raised-button color=\"primary\">Save</button>\n  </div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings_service__ = __webpack_require__("../../../../../src/app/settings.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Settings = (function () {
    function Settings() {
    }
    return Settings;
}());
var SettingsComponent = (function () {
    function SettingsComponent(settingService) {
        this.settingService = settingService;
        this.settings = new Settings();
    }
    SettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.settingService.fetchSettings().subscribe(function (settings) { return _this.settings = settings; });
    };
    SettingsComponent.prototype.saveSettings = function () {
        if (this.settings.id) {
            this.settingService.updateSettings(this.settings.id, this.settings).subscribe(function () { });
        }
        else {
            this.settingService.createSettings(this.settings).subscribe(function () { });
        }
    };
    SettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-settings',
            template: __webpack_require__("../../../../../src/app/settings/settings.component.html"),
            styles: [__webpack_require__("../../../../../src/app/settings/settings.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__settings_service__["a" /* SettingsService */]],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__settings_service__["a" /* SettingsService */]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/sonarr.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SonarrService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/mergeMap.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SonarrService = (function () {
    function SonarrService(http) {
        this.http = http;
    }
    SonarrService.prototype.fetchPaths = function () {
        return this.http.get("/api/sonarr/paths")
            .map(function (res) { return res.json(); });
    };
    SonarrService.prototype.fetchProfiles = function () {
        return this.http.get("/api/sonarr/profiles")
            .map(function (res) { return res.json(); });
    };
    SonarrService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], SonarrService);
    return SonarrService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map