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
var core_1 = require('@angular/core');
var question_service_1 = require('app/services/question.service');
require('rxjs/add/operator/toPromise');
//questions: Array<Question>;
var MeetingRoomComponent = (function () {
    //public questions: Question[] =[];
    function MeetingRoomComponent(questionService) {
        this.questionService = questionService;
        this.imageArray = [];
        this.questions = [];
        this.question = 'How do you feel ? ';
        //an array of strings
        this.imageArray = [
            { link: 'app/img/greenSmiley.png' },
            { link: 'app/img/amberSmiley.png' },
            { link: 'app/img/redSmiley.png' }];
    }
    MeetingRoomComponent.prototype.getQuestions = function () {
        var _this = this;
        this.questionService
            .getQuestions()
            .then(function (heroes) { return _this.questions = heroes; })
            .catch(function (error) { return _this.error = error; });
    };
    MeetingRoomComponent.prototype.ngOnInit = function () {
        this.getQuestions();
    };
    MeetingRoomComponent.prototype.regClick = function () {
        //nothing is being added to the array
        /*doesnt show anything */ //this.questions.push([{text: 'jane', _id:'d',__v:0}]);
        //this.questions= ([{text: 'jane', _id:'d',__v:0}]);
        console.log(this.questions.length);
        //questions.size()
    };
    MeetingRoomComponent = __decorate([
        core_1.Component({
            selector: 'my-meeting-comp',
            templateUrl: 'app/components/meetingQ/meeting-questions.component.html',
            styleUrls: ['app/components/meetingQ/meeting-questions.component.css'],
            providers: [question_service_1.QuestionService]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof question_service_1.QuestionService !== 'undefined' && question_service_1.QuestionService) === 'function' && _a) || Object])
    ], MeetingRoomComponent);
    return MeetingRoomComponent;
    var _a;
}());
exports.MeetingRoomComponent = MeetingRoomComponent;
//# sourceMappingURL=meeting-questions.component.js.map