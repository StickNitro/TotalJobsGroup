import { Component, OnInit } from "@angular/core";
import { AppComponentService } from "./app.component.service";

@Component({
    selector: "question-app",
    templateUrl: "../tsScripts/app.component.html",
    providers: [AppComponentService]
})
export class AppComponent implements OnInit {
    public Questionnaire: any = {
        "QuestionnaireTitle": "",
        "QuestionsText": {}
    };

    private _appComponentService: AppComponentService = null;

    constructor(appComponentService: AppComponentService) {
        this._appComponentService = appComponentService;
    }

    private GetQuestionnaire() {
        this._appComponentService.GetQuestionnaire().subscribe(data => {
            this.Questionnaire = data;
        });
    }

    public QuestionnaireKeys() {
        return Object.keys(this.Questionnaire.QuestionsText);
    }

    ngOnInit() {
        this.GetQuestionnaire();
    }
}
