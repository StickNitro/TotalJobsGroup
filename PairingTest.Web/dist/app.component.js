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
const app_component_service_1 = require("./app.component.service");
const QuestionnaireModel_1 = require("./Models/QuestionnaireModel");
let AppComponent = class AppComponent {
    constructor(appComponentService) {
        this.Questionnaire = new QuestionnaireModel_1.QuestionnaireModel();
        this._appComponentService = null;
        this._appComponentService = appComponentService;
    }
    GetQuestionnaire() {
        this._appComponentService.GetQuestionnaire().subscribe(data => {
            this.Questionnaire = data;
        });
    }
    QuestionnaireKeys() {
        return Object.keys(this.Questionnaire.QuestionsText);
    }
    ngOnInit() {
        this.GetQuestionnaire();
    }
};
AppComponent = __decorate([
    core_1.Component({
        selector: "question-app",
        templateUrl: "../tsScripts/app.component.html",
        providers: [app_component_service_1.AppComponentService]
    }),
    __metadata("design:paramtypes", [app_component_service_1.AppComponentService])
], AppComponent);
exports.AppComponent = AppComponent;
