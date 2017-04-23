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
const core_1 = require("@angular/core");
const http_1 = require("@angular/http");
require("rxjs/add/operator/map");
let AppComponentService = class AppComponentService {
    constructor(http) {
        this._options = null;
        this._http = null;
        this._http = http;
        const headers = new http_1.Headers({
            "Content-Type": "application/json"
        });
        this._options = new http_1.RequestOptions({ headers: headers });
    }
    GetQuestionnaire() {
        return this._http.get("http://localhost:50014/api/questions/", this._options)
            .map((res) => res.json());
    }
};
AppComponentService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AppComponentService);
exports.AppComponentService = AppComponentService;
