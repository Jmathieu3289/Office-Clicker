webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".no-gutters {\r\n  margin-right: 0;\r\n  margin-left: 0;\r\n  > .col,\r\n  > [class*=\"col-\"] {\r\n    padding-right: 0;\r\n    padding-left: 0;\r\n  }\r\n}\r\n\r\n.container-fluid {\r\n\tpadding-right: 0;\r\n\tpadding-left: 0;\r\n\tmargin-top: 0px;\r\n\tpadding-bottom: 2.5em;\r\n\theight: 100%;\r\n}", "", {"version":3,"sources":["C:/Users/Justin/Documents/GitHub/Office-Clicker/src/app/app.component.css"],"names":[],"mappings":"AAAA;EACE,gBAAgB;EAChB,eAAe;EACf;;IAEE,iBAAiB;IACjB,gBAAgB;GACjB;CACF;;AAED;CACC,iBAAiB;CACjB,gBAAgB;CAChB,gBAAgB;CAChB,sBAAsB;CACtB,aAAa;CACb","file":"app.component.css","sourcesContent":[".no-gutters {\r\n  margin-right: 0;\r\n  margin-left: 0;\r\n  > .col,\r\n  > [class*=\"col-\"] {\r\n    padding-right: 0;\r\n    padding-left: 0;\r\n  }\r\n}\r\n\r\n.container-fluid {\r\n\tpadding-right: 0;\r\n\tpadding-left: 0;\r\n\tmargin-top: 0px;\r\n\tpadding-bottom: 2.5em;\r\n\theight: 100%;\r\n}"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <!--<app-character-sheet [inventory]=\"inventory\" [slots]=\"slots\"></app-character-sheet>-->\r\n  <app-inventory [inventory]=\"inventory\" [slots]=\"slots\"></app-inventory>\r\n  <app-desktop #desktop></app-desktop>\r\n  <app-taskbar #taskbar></app-taskbar>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__inventory_inventory_item__ = __webpack_require__("../../../../../src/app/inventory/inventory-item.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
        this.inventory = Array();
        this.slots = Array();
        for (var i = 0; i < 3; i++) {
            this.inventory[i * 3 + 0] = new __WEBPACK_IMPORTED_MODULE_1__inventory_inventory_item__["a" /* InventoryItem */]('Head Item', 'head');
            this.inventory[i * 3 + 1] = new __WEBPACK_IMPORTED_MODULE_1__inventory_inventory_item__["a" /* InventoryItem */]('Body Item', 'body');
            this.inventory[i * 3 + 2] = new __WEBPACK_IMPORTED_MODULE_1__inventory_inventory_item__["a" /* InventoryItem */]('Weapon', 'weapon');
        }
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_drag_drop__ = __webpack_require__("../../../../ng2-drag-drop/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_drag_drop___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_drag_drop__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__inventory_inventory_component__ = __webpack_require__("../../../../../src/app/inventory/inventory.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__character_sheet_character_sheet_component__ = __webpack_require__("../../../../../src/app/character-sheet/character-sheet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__taskbar_taskbar_component__ = __webpack_require__("../../../../../src/app/taskbar/taskbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__desktop_desktop_component__ = __webpack_require__("../../../../../src/app/desktop/desktop.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__inventory_inventory_component__["a" /* InventoryComponent */],
            __WEBPACK_IMPORTED_MODULE_5__character_sheet_character_sheet_component__["a" /* CharacterSheetComponent */],
            __WEBPACK_IMPORTED_MODULE_6__taskbar_taskbar_component__["a" /* TaskbarComponent */],
            __WEBPACK_IMPORTED_MODULE_7__desktop_desktop_component__["a" /* DesktopComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ng2_drag_drop__["Ng2DragDropModule"].forRoot()
        ],
        exports: [],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/character-sheet/character-sheet.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "div.slot{\r\n\theight: 3vw;\r\n\twidth: 3vw;\r\n\tborder: 2px solid black;\r\n\tborder-radius: 2px;\r\n\tmargin: 3px;\r\n}\r\nimg{\r\n\theight: 3vw;\r\n\twidth: 3vw;\r\n\tmargin: 0px;\r\n}", "", {"version":3,"sources":["C:/Users/Justin/Documents/GitHub/Office-Clicker/src/app/character-sheet/character-sheet.component.css"],"names":[],"mappings":"AAAA;CACC,YAAY;CACZ,WAAW;CACX,wBAAwB;CACxB,mBAAmB;CACnB,YAAY;CACZ;AACD;CACC,YAAY;CACZ,WAAW;CACX,YAAY;CACZ","file":"character-sheet.component.css","sourcesContent":["div.slot{\r\n\theight: 3vw;\r\n\twidth: 3vw;\r\n\tborder: 2px solid black;\r\n\tborder-radius: 2px;\r\n\tmargin: 3px;\r\n}\r\nimg{\r\n\theight: 3vw;\r\n\twidth: 3vw;\r\n\tmargin: 0px;\r\n}"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/character-sheet/character-sheet.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\t<div class=\"col\">\r\n\t\t<label>Head</label>\r\n\t\t<div class=\"slot\" droppable [dropScope]=\"'head'\" (onDrop)=\"onItemDrop('head',$event)\">\r\n\t \t  <img *ngIf=\"slots['head']\" draggable [dragData]=\"slots['head']\" src=\"{{slots['head'].img_id}}\" />\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"col\">\r\n\t\t<label>Body</label>\r\n\t\t<div class=\"slot\" droppable [dropScope]=\"'body'\" (onDrop)=\"onItemDrop('body',$event)\">\r\n\t \t  <img *ngIf=\"slots['body']\" draggable [dragData]=\"slots['body']\" src=\"{{slots['body'].img_id}}\" />\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<div class=\"row\">\r\n\t<div class=\"col\">\r\n\tHead: <span *ngIf=\"slots['head']\">{{slots['head'].name}}</span>\r\n\tBody: <span *ngIf=\"slots['body']\">{{slots['body'].name}}</span>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/character-sheet/character-sheet.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharacterSheetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CharacterSheetComponent = (function () {
    function CharacterSheetComponent() {
    }
    CharacterSheetComponent.prototype.onItemDrop = function (slot, e) {
        if (this.slots[slot] != null) {
            this.slots[slot].src = null;
            this.inventory.push(this.slots[slot]);
        }
        this.slots[slot] = e.dragData;
        if (this.slots[slot].src == null) {
            this.inventory.splice(this.inventory.indexOf(this.slots[slot]), 1);
        }
        else {
            this.slots[this.slots[slot].src] = null;
        }
        this.slots[slot].src = slot;
    };
    CharacterSheetComponent.prototype.ngOnInit = function () {
    };
    return CharacterSheetComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CharacterSheetComponent.prototype, "inventory", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CharacterSheetComponent.prototype, "slots", void 0);
CharacterSheetComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-character-sheet',
        template: __webpack_require__("../../../../../src/app/character-sheet/character-sheet.component.html"),
        styles: [__webpack_require__("../../../../../src/app/character-sheet/character-sheet.component.css")],
        providers: []
    }),
    __metadata("design:paramtypes", [])
], CharacterSheetComponent);

//# sourceMappingURL=character-sheet.component.js.map

/***/ }),

/***/ "../../../../../src/app/desktop/desktop.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "div.desktop {\r\n\theight: 100%;\r\n\tpadding: 20px;\r\n\tcolor: white;\r\n}\r\n\r\ndiv.desktop-icon {\r\n\twidth: 70px;\r\n\tmin-height: 70px;\r\n\tmargin: 1px;\r\n\tcursor: pointer;\r\n}\r\n\r\ndiv.desktop-icon:hover{\r\n\tborder: 1px dotted white;\r\n}\r\n\r\ndiv.icon-image {\r\n\ttext-align: center;\r\n\tfont-size: 26px;\r\n}\r\n\r\ndiv.icon-text {\r\n\ttext-align: center;\r\n}\r\n", "", {"version":3,"sources":["C:/Users/Justin/Documents/GitHub/Office-Clicker/src/app/desktop/desktop.component.css"],"names":[],"mappings":"AAAA;CACC,aAAa;CACb,cAAc;CACd,aAAa;CACb;;AAED;CACC,YAAY;CACZ,iBAAiB;CACjB,YAAY;CACZ,gBAAgB;CAChB;;AAED;CACC,yBAAyB;CACzB;;AAED;CACC,mBAAmB;CACnB,gBAAgB;CAChB;;AAED;CACC,mBAAmB;CACnB","file":"desktop.component.css","sourcesContent":["div.desktop {\r\n\theight: 100%;\r\n\tpadding: 20px;\r\n\tcolor: white;\r\n}\r\n\r\ndiv.desktop-icon {\r\n\twidth: 70px;\r\n\tmin-height: 70px;\r\n\tmargin: 1px;\r\n\tcursor: pointer;\r\n}\r\n\r\ndiv.desktop-icon:hover{\r\n\tborder: 1px dotted white;\r\n}\r\n\r\ndiv.icon-image {\r\n\ttext-align: center;\r\n\tfont-size: 26px;\r\n}\r\n\r\ndiv.icon-text {\r\n\ttext-align: center;\r\n}\r\n"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/desktop/desktop.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"desktop d-flex flex-column\">\r\n\t<div class=\"desktop-icon\">\r\n\t\t<div class=\"icon-image\">\r\n\t\t\t<i class=\"fa fa-folder\"></i>\t\r\n\t\t</div>\r\n\t\t<div class=\"icon-text\">\r\n\t\t\tMy Loot\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"desktop-icon\">\r\n\t\t<div class=\"icon-image\">\r\n\t\t\t<i class=\"fa fa-user\"></i>\t\r\n\t\t</div>\r\n\t\t<div class=\"icon-text\">\r\n\t\t\tJustin's Stats\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/desktop/desktop.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DesktopComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DesktopComponent = (function () {
    function DesktopComponent() {
    }
    DesktopComponent.prototype.ngOnInit = function () {
    };
    return DesktopComponent;
}());
DesktopComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-desktop',
        template: __webpack_require__("../../../../../src/app/desktop/desktop.component.html"),
        styles: [__webpack_require__("../../../../../src/app/desktop/desktop.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DesktopComponent);

//# sourceMappingURL=desktop.component.js.map

/***/ }),

/***/ "../../../../../src/app/inventory/inventory-item.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InventoryItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rarity_enum__ = __webpack_require__("../../../../../src/app/rarity.enum.ts");

var InventoryItem = (function () {
    function InventoryItem(name, type) {
        this.rarities = [__WEBPACK_IMPORTED_MODULE_0__rarity_enum__["a" /* Rarity */].ARTIFACT, __WEBPACK_IMPORTED_MODULE_0__rarity_enum__["a" /* Rarity */].COMMON, __WEBPACK_IMPORTED_MODULE_0__rarity_enum__["a" /* Rarity */].EPIC, __WEBPACK_IMPORTED_MODULE_0__rarity_enum__["a" /* Rarity */].LEGENDARY, __WEBPACK_IMPORTED_MODULE_0__rarity_enum__["a" /* Rarity */].RARE, __WEBPACK_IMPORTED_MODULE_0__rarity_enum__["a" /* Rarity */].UNCOMMON];
        this.rarity = __WEBPACK_IMPORTED_MODULE_0__rarity_enum__["a" /* Rarity */].ARTIFACT;
        this.rarity = this.rarities[Math.floor(Math.random() * this.rarities.length)];
        this.name = InventoryItem.PREFIXES[Math.floor(Math.random() * InventoryItem.PREFIXES.length)] +
            ' ' + name + ' ' + InventoryItem.SUFFIXES[Math.floor(Math.random() * InventoryItem.SUFFIXES.length)];
        this.type = type;
        this.uuid = this.uuidv4();
        if (this.type === 'head') {
            this.img_id = '/assets/Helmet/CommandButtons/BTNINV_Helmet_0' + Math.ceil(Math.random() * 9) + '.jpg';
        }
        else if (this.type === 'body') {
            this.img_id = '/assets/Chest/CommandButtons/BTNINV_Chest_Chain_0' + Math.ceil(Math.random() * 9) + '.jpg';
        }
        else {
            this.img_id = '/assets/Weapon/CommandButtons/BTNINV_Sword_0' + Math.ceil(Math.random() * 9) + '.jpg';
        }
    }
    InventoryItem.prototype.uuidv4 = function () {
        return '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, function (c) {
            return (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);
        });
    };
    return InventoryItem;
}());

InventoryItem.PREFIXES = ['Speedy', 'Sharp', 'Whacky'];
InventoryItem.SUFFIXES = ['Of Might', 'Of Speed', 'Of Charm'];
//# sourceMappingURL=inventory-item.js.map

/***/ }),

/***/ "../../../../../src/app/inventory/inventory.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "/* -- Window -- */\r\n\r\ndiv.window {\r\n\tfloat: left;\r\n\tposition: absolute;\r\n\tmin-height: 200px;\r\n\tmin-width: 200px;\r\n\ttop: 25%;\r\n\tleft: 25%;\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-orient: vertical;\r\n\t-webkit-box-direction: normal;\r\n\t    -ms-flex-direction: column;\r\n\t        flex-direction: column;\r\n}\r\n\r\ndiv.windowed {\r\n\tmax-width: 800px;\r\n}\r\n\r\ndiv.fullscreen {\r\n\ttop: 0;\r\n\tleft: 0;\r\n\twidth: 100%;\r\n\theight: calc(100% - 2.5em);\r\n}\r\n\r\ndiv.window-title {\r\n\tbackground-color: #808080;\r\n\tpadding: 3px 4px 3px 4px;\r\n\t-ms-flex-item-align: start;\r\n\t    align-self: flex-start;\r\n\twidth: 100%;\r\n}\r\n\r\ndiv.window-title h1 {\r\n    font-weight: bold;\r\n    color: #bcbcbc;\r\n    font-size: 13px;\r\n    margin: 0;\r\n}\r\n\r\ndiv.window-title button {\r\n\tborder: 2px solid;\r\n\tborder-bottom-color: #444;\r\n\tborder-right-color: #444;\r\n\tborder-left-color: #a6a6a6;\r\n\tborder-top-color: #a6a6a6;\r\n\tbackground-color: #bfbfbf;\r\n\tposition: absolute;\r\n\tfont-size: 9px;\r\n\tline-height: 0;\r\n\tmargin-top: 3px;\r\n\tmargin-right: 3px;\r\n\tpadding: 1px;\r\n\theight: 15px;\r\n\twidth: 15px;\r\n\ttop: 2px;\r\n\tcursor: pointer;\r\n}\r\n\r\nbutton.minimize {\r\n\tright: 34px;\r\n}\r\nbutton.expand {\r\n\tright: 18px;\r\n}\r\nbutton.times {\r\n\tright: 2px;\r\n}\r\n\r\ndiv.window-toolbar {\r\n\tpadding: 2px 0;\r\n\tmargin: 0;\r\n}\r\n\r\ndiv.window-toolbar-command {\r\n\tpadding: 0 5px;\r\n\tcursor: pointer;\r\n}\r\n\r\ndiv.window-file-area {\r\n\theight: 100%;\r\n\twidth: 100%;\r\n}\r\n\r\ndiv.window-file-icon {\r\n\twidth: 100px;\r\n\theight: auto;\r\n\tmin-height: 70px;\r\n\tmargin: 1px;\r\n\tcursor: pointer;\r\n}\r\n\r\ndiv.window-file-icon:hover{\r\n\tborder: 1px dotted black;\r\n}\r\n\r\ndiv.window-file-icon-image {\r\n\ttext-align: center;\r\n\tfont-size: 26px;\r\n}\r\n\r\ndiv.window-file-icon-text {\r\n\ttext-align: center;\r\n\tcolor: black;\r\n}\r\n\r\ndiv.window-status-bar {\r\n\tborder: 1px solid;\r\n  \tborder-color: #888 #dadada #dadada #888;\r\n  \tpadding: 0px 5px;\r\n  \tfont-size: 11px;\t\r\n  \t-ms-flex-item-align: end;\t\r\n  \t    align-self: flex-end;\r\n  \twidth: 100%;\r\n}", "", {"version":3,"sources":["C:/Users/Justin/Documents/GitHub/Office-Clicker/src/app/inventory/inventory.component.css"],"names":[],"mappings":"AAAA,kBAAkB;;AAElB;CACC,YAAY;CACZ,mBAAmB;CACnB,kBAAkB;CAClB,iBAAiB;CACjB,SAAS;CACT,UAAU;CACV,qBAAc;CAAd,qBAAc;CAAd,cAAc;CACd,6BAAuB;CAAvB,8BAAuB;KAAvB,2BAAuB;SAAvB,uBAAuB;CACvB;;AAED;CACC,iBAAiB;CACjB;;AAED;CACC,OAAO;CACP,QAAQ;CACR,YAAY;CACZ,2BAA2B;CAC3B;;AAED;CACC,0BAA0B;CAC1B,yBAAyB;CACzB,2BAAuB;KAAvB,uBAAuB;CACvB,YAAY;CACZ;;AAED;IACI,kBAAkB;IAClB,eAAe;IACf,gBAAgB;IAChB,UAAU;CACb;;AAED;CACC,kBAAkB;CAClB,0BAA0B;CAC1B,yBAAyB;CACzB,2BAA2B;CAC3B,0BAA0B;CAC1B,0BAA0B;CAC1B,mBAAmB;CACnB,eAAe;CACf,eAAe;CACf,gBAAgB;CAChB,kBAAkB;CAClB,aAAa;CACb,aAAa;CACb,YAAY;CACZ,SAAS;CACT,gBAAgB;CAChB;;AAED;CACC,YAAY;CACZ;AACD;CACC,YAAY;CACZ;AACD;CACC,WAAW;CACX;;AAED;CACC,eAAe;CACf,UAAU;CACV;;AAED;CACC,eAAe;CACf,gBAAgB;CAChB;;AAED;CACC,aAAa;CACb,YAAY;CACZ;;AAED;CACC,aAAa;CACb,aAAa;CACb,iBAAiB;CACjB,YAAY;CACZ,gBAAgB;CAChB;;AAED;CACC,yBAAyB;CACzB;;AAED;CACC,mBAAmB;CACnB,gBAAgB;CAChB;;AAED;CACC,mBAAmB;CACnB,aAAa;CACb;;AAED;CACC,kBAAkB;GAChB,wCAAwC;GACxC,iBAAiB;GACjB,gBAAgB;GAChB,yBAAqB;OAArB,qBAAqB;GACrB,YAAY;CACd","file":"inventory.component.css","sourcesContent":["/* -- Window -- */\r\n\r\ndiv.window {\r\n\tfloat: left;\r\n\tposition: absolute;\r\n\tmin-height: 200px;\r\n\tmin-width: 200px;\r\n\ttop: 25%;\r\n\tleft: 25%;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n}\r\n\r\ndiv.windowed {\r\n\tmax-width: 800px;\r\n}\r\n\r\ndiv.fullscreen {\r\n\ttop: 0;\r\n\tleft: 0;\r\n\twidth: 100%;\r\n\theight: calc(100% - 2.5em);\r\n}\r\n\r\ndiv.window-title {\r\n\tbackground-color: #808080;\r\n\tpadding: 3px 4px 3px 4px;\r\n\talign-self: flex-start;\r\n\twidth: 100%;\r\n}\r\n\r\ndiv.window-title h1 {\r\n    font-weight: bold;\r\n    color: #bcbcbc;\r\n    font-size: 13px;\r\n    margin: 0;\r\n}\r\n\r\ndiv.window-title button {\r\n\tborder: 2px solid;\r\n\tborder-bottom-color: #444;\r\n\tborder-right-color: #444;\r\n\tborder-left-color: #a6a6a6;\r\n\tborder-top-color: #a6a6a6;\r\n\tbackground-color: #bfbfbf;\r\n\tposition: absolute;\r\n\tfont-size: 9px;\r\n\tline-height: 0;\r\n\tmargin-top: 3px;\r\n\tmargin-right: 3px;\r\n\tpadding: 1px;\r\n\theight: 15px;\r\n\twidth: 15px;\r\n\ttop: 2px;\r\n\tcursor: pointer;\r\n}\r\n\r\nbutton.minimize {\r\n\tright: 34px;\r\n}\r\nbutton.expand {\r\n\tright: 18px;\r\n}\r\nbutton.times {\r\n\tright: 2px;\r\n}\r\n\r\ndiv.window-toolbar {\r\n\tpadding: 2px 0;\r\n\tmargin: 0;\r\n}\r\n\r\ndiv.window-toolbar-command {\r\n\tpadding: 0 5px;\r\n\tcursor: pointer;\r\n}\r\n\r\ndiv.window-file-area {\r\n\theight: 100%;\r\n\twidth: 100%;\r\n}\r\n\r\ndiv.window-file-icon {\r\n\twidth: 100px;\r\n\theight: auto;\r\n\tmin-height: 70px;\r\n\tmargin: 1px;\r\n\tcursor: pointer;\r\n}\r\n\r\ndiv.window-file-icon:hover{\r\n\tborder: 1px dotted black;\r\n}\r\n\r\ndiv.window-file-icon-image {\r\n\ttext-align: center;\r\n\tfont-size: 26px;\r\n}\r\n\r\ndiv.window-file-icon-text {\r\n\ttext-align: center;\r\n\tcolor: black;\r\n}\r\n\r\ndiv.window-status-bar {\r\n\tborder: 1px solid;\r\n  \tborder-color: #888 #dadada #dadada #888;\r\n  \tpadding: 0px 5px;\r\n  \tfont-size: 11px;\t\r\n  \talign-self: flex-end;\r\n  \twidth: 100%;\r\n}"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/inventory/inventory.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"window container-outer\" *ngIf=\"visible\" [ngClass]=\"{'window container-outer' : true, 'windowed' : state=='windowed', 'fullscreen' : state=='fullscreen'}\" [style.left.px]=\"left\" [style.top.px]=\"top\">\r\n\t<div class=\"window-title\">\r\n\t\t<div class=\"pull-right\">\r\n\t\t\t<button class=\"minimize\" (click)=\"minimize()\"><span class=\"fa fa-minus\"></span></button>\r\n\t      \t<button class=\"expand\" (click)=\"toggleSize()\"><span class=\"fa fa-square-o\"></span></button>\r\n\t      \t<button class=\"times\" (click)=\"close()\"><span class=\"fa fa-times\"></span></button>\r\n      \t</div>\r\n      \t<h1>Inventory</h1>\r\n\t</div>\r\n\t<div class=\"window-toolbar\">\r\n\t\t<div class=\"d-flex\">\r\n\t\t\t<div class=\"window-toolbar-command\">\r\n\t\t\t\t<u>S</u>ort\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"d-flex flex-wrap align-items-start container-inner window-file-area\" droppable (onDrop)=\"onItemDrop($event)\">\r\n\t  <div *ngFor=\"let inv of inventory\" class=\"window-file-icon\" draggable [dragData]=\"inv\" [dragScope]=\"inv.type\">\r\n\t  \t<div class=\"window-file-icon-image\"><i [ngClass]=\"inv.rarity\" class=\"fa fa-folder\"></i></div>\r\n\t  \t<div class=\"window-file-icon-text\">{{inv.name}}</div>\r\n\t  </div>\r\n\t</div>\r\n\t<div class=\"window-status-bar\">\r\n\t\t6 item(s) total\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/inventory/inventory.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InventoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InventoryComponent = (function () {
    function InventoryComponent(elementRef) {
        this.size = 144;
        this.state = 'windowed';
        this.visible = true;
        this.left = 0;
        this.top = 0;
        this.mouseDown = false;
        this.xOffset = 0;
        this.yOffset = 0;
        this.el = elementRef.nativeElement;
    }
    InventoryComponent.prototype.onWindowMouseup = function () {
        console.log('mouse up');
        this.mouseDown = false;
    };
    InventoryComponent.prototype.onMouseup = function () {
        this.mouseDown = false;
    };
    InventoryComponent.prototype.onMousemove = function (event) {
        if (this.mouseDown) {
            this.left = event.clientX - this.xOffset;
            this.top = event.clientY - this.yOffset;
        }
    };
    InventoryComponent.prototype.onMousedown = function (event) {
        if (event.target.tagName === 'H1') {
            this.mouseDown = true;
            this.xOffset = event.clientX - this.left;
            this.yOffset = event.clientY - this.top;
        }
    };
    InventoryComponent.prototype.ngOnInit = function () {
    };
    InventoryComponent.prototype.onItemDrop = function (e) {
        if (e.dragData.src != null) {
            this.slots[e.dragData.src] = null;
            e.dragData.src = null;
            this.inventory.push(e.dragData);
        }
    };
    InventoryComponent.prototype.minimize = function () {
        this.visible = false;
    };
    InventoryComponent.prototype.close = function () {
        this.visible = false;
    };
    InventoryComponent.prototype.toggleSize = function () {
        if (this.state === 'windowed') {
            this.state = 'fullscreen';
        }
        else {
            this.state = 'windowed';
        }
    };
    return InventoryComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], InventoryComponent.prototype, "inventory", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], InventoryComponent.prototype, "slots", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:mouseup'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], InventoryComponent.prototype, "onWindowMouseup", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mouseup'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], InventoryComponent.prototype, "onMouseup", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:mousemove', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], InventoryComponent.prototype, "onMousemove", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mousedown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], InventoryComponent.prototype, "onMousedown", null);
InventoryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-inventory',
        template: __webpack_require__("../../../../../src/app/inventory/inventory.component.html"),
        styles: [__webpack_require__("../../../../../src/app/inventory/inventory.component.css")],
        providers: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], InventoryComponent);

var _a;
//# sourceMappingURL=inventory.component.js.map

/***/ }),

/***/ "../../../../../src/app/rarity.enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Rarity; });
var Rarity;
(function (Rarity) {
    Rarity[Rarity["COMMON"] = 'common'] = "COMMON";
    Rarity[Rarity["UNCOMMON"] = 'uncommon'] = "UNCOMMON";
    Rarity[Rarity["RARE"] = 'rare'] = "RARE";
    Rarity[Rarity["EPIC"] = 'epic'] = "EPIC";
    Rarity[Rarity["LEGENDARY"] = 'legendary'] = "LEGENDARY";
    Rarity[Rarity["ARTIFACT"] = 'artifact'] = "ARTIFACT";
})(Rarity || (Rarity = {}));
//# sourceMappingURL=rarity.enum.js.map

/***/ }),

/***/ "../../../../../src/app/taskbar/taskbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "div.taskbar {\r\n\theight: 2.5em;\r\n\tbackground-color: #bfbfbf;\r\n\tborder-top: 2px solid #dbdbdb;\r\n\tpadding: 2px 2px;\r\n\tz-index: 1;\r\n}\r\n\r\ndiv.start-menu {\r\n\tmargin-bottom: 2.2em;\r\n\tmargin-left: 2px;\r\n\tmax-width: 200px;\r\n\tz-index: 2;\r\n}\r\n\r\ndiv.start-menu-button {\r\n\tcursor: pointer;\r\n}\r\n\r\ndiv.row {\r\n\tmargin: 0px;\r\n}\r\n\r\ndiv.col-2, div.col-10{\r\n\tpadding: 0px;\r\n}\r\n\r\ndiv.start-menu-bar {\r\n\tbackground-color: #808080;\r\n\tcolor: #bfbfbf;\r\n}\r\n\r\ndiv.start-menu-item {\r\n\tpadding: 5px;\r\n\tpadding-left: 15px;\r\n\tcursor: pointer;\r\n\tfont-size: 16px;\r\n}\r\n\r\ndiv.start-menu-item:hover {\r\n\tcolor: white;\r\n\tbackground-color: #000080;\r\n}\r\n\r\ni.start-menu-item {\r\n\tmargin-right: 5px;\r\n}\r\n\r\ndiv.start-menu-hr {\r\n\theight: 2px;\r\n\tborder: 1px solid;\r\n\tborder-bottom-color: #dbdbdb;\r\n\tborder-top-color: #535353;\r\n}", "", {"version":3,"sources":["C:/Users/Justin/Documents/GitHub/Office-Clicker/src/app/taskbar/taskbar.component.css"],"names":[],"mappings":"AAAA;CACC,cAAc;CACd,0BAA0B;CAC1B,8BAA8B;CAC9B,iBAAiB;CACjB,WAAW;CACX;;AAED;CACC,qBAAqB;CACrB,iBAAiB;CACjB,iBAAiB;CACjB,WAAW;CACX;;AAED;CACC,gBAAgB;CAChB;;AAED;CACC,YAAY;CACZ;;AAED;CACC,aAAa;CACb;;AAED;CACC,0BAA0B;CAC1B,eAAe;CACf;;AAED;CACC,aAAa;CACb,mBAAmB;CACnB,gBAAgB;CAChB,gBAAgB;CAChB;;AAED;CACC,aAAa;CACb,0BAA0B;CAC1B;;AAED;CACC,kBAAkB;CAClB;;AAED;CACC,YAAY;CACZ,kBAAkB;CAClB,6BAA6B;CAC7B,0BAA0B;CAC1B","file":"taskbar.component.css","sourcesContent":["div.taskbar {\r\n\theight: 2.5em;\r\n\tbackground-color: #bfbfbf;\r\n\tborder-top: 2px solid #dbdbdb;\r\n\tpadding: 2px 2px;\r\n\tz-index: 1;\r\n}\r\n\r\ndiv.start-menu {\r\n\tmargin-bottom: 2.2em;\r\n\tmargin-left: 2px;\r\n\tmax-width: 200px;\r\n\tz-index: 2;\r\n}\r\n\r\ndiv.start-menu-button {\r\n\tcursor: pointer;\r\n}\r\n\r\ndiv.row {\r\n\tmargin: 0px;\r\n}\r\n\r\ndiv.col-2, div.col-10{\r\n\tpadding: 0px;\r\n}\r\n\r\ndiv.start-menu-bar {\r\n\tbackground-color: #808080;\r\n\tcolor: #bfbfbf;\r\n}\r\n\r\ndiv.start-menu-item {\r\n\tpadding: 5px;\r\n\tpadding-left: 15px;\r\n\tcursor: pointer;\r\n\tfont-size: 16px;\r\n}\r\n\r\ndiv.start-menu-item:hover {\r\n\tcolor: white;\r\n\tbackground-color: #000080;\r\n}\r\n\r\ni.start-menu-item {\r\n\tmargin-right: 5px;\r\n}\r\n\r\ndiv.start-menu-hr {\r\n\theight: 2px;\r\n\tborder: 1px solid;\r\n\tborder-bottom-color: #dbdbdb;\r\n\tborder-top-color: #535353;\r\n}"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/taskbar/taskbar.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Start Menu-->\r\n<div class=\"fixed-bottom container-outer start-menu container\" [hidden]=\"!startMenuActive\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-2 start-menu-bar\">\r\n\t\t</div>\r\n\t\t<div class=\"col-10\">\r\n\t\t\t<div class=\"start-menu-item\">\r\n\t\t\t\t<i class=\"fa fa-user start-menu-item\"></i> Character Sheet\r\n\t\t\t</div>\r\n\t\t\t<div class=\"start-menu-item\">\r\n\t\t\t\t<i class=\"fa fa-folder start-menu-item\"></i> Inventory\r\n\t\t\t</div>\r\n\t\t\t<div class=\"start-menu-item\">\r\n\t\t\t\t<i class=\"fa fa-cog start-menu-item\"></i> Settings\r\n\t\t\t</div>\r\n\t\t\t<div class=\"start-menu-hr\"></div>\r\n\t\t\t<div class=\"start-menu-item\">\r\n\t\t\t\t<i class=\"fa fa-power-off start-menu-item\"></i> Shut Down...\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<!--Taskbar-->\r\n<div class=\"fixed-bottom taskbar d-flex\">\r\n\t<div class=\"start-menu-button container-outer\" [ngClass]=\"{'active':startMenuActive}\" (click)=\"toggleMenu()\">\r\n\t\t<i class=\"fa fa-bars\"></i> Start\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/taskbar/taskbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TaskbarComponent = (function () {
    function TaskbarComponent() {
        this.startMenuActive = false;
    }
    TaskbarComponent.prototype.ngOnInit = function () {
    };
    TaskbarComponent.prototype.toggleMenu = function () {
        this.startMenuActive = !this.startMenuActive;
    };
    TaskbarComponent.prototype.closeMenu = function () {
        if (this.startMenuActive) {
            this.startMenuActive = false;
        }
    };
    return TaskbarComponent;
}());
TaskbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-taskbar',
        template: __webpack_require__("../../../../../src/app/taskbar/taskbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/taskbar/taskbar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TaskbarComponent);

//# sourceMappingURL=taskbar.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map