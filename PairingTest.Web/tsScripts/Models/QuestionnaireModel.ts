export interface IQuestionnaireModel {
    QuestionnaireTitle: string,
    QuestionsText: { [id: string]: string }
};

export class QuestionnaireModel {
    QuestionnaireTitle: string = "";
    QuestionsText: { [id: string]: string } = {};

    constructor() {
    }
};