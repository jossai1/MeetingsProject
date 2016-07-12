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
var answer_service_1 = require('app/services/answer.service');
require('rxjs/add/operator/toPromise');
//questions: Array<Question>;
var MeetingRoomComponent = (function () {
    //public questions: Question[] =[];
    function MeetingRoomComponent(questionService, answerService) {
        this.questionService = questionService;
        this.answerService = answerService;
        this.imageArray = [];
        this.time1 = "";
        this.questions = [];
        this.answers = [];
        this.question = 'How do you feel? ';
        this.GreenCount = 0;
        this.RedCount = 0;
        this.AmberCount = 0;
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
    //to display answers
    //will use this for admin
    MeetingRoomComponent.prototype.getAnswers = function () {
        var _this = this;
        this.answerService
            .getAnswers()
            .then(function (heroes) { return _this.answers = heroes; })
            .catch(function (error) { return _this.error = error; });
    };
    MeetingRoomComponent.prototype.logVote = function (questionID, response, time) {
        var _this = this;
        if (!response) {
            return;
        }
        console.log('done');
        this.answerService.logVote(questionID, response, time)
            .then(function (error) { return _this.errorMessage = error; });
    };
    //  getDateTime() {
    //     var now     = new Date();
    //     var year    = now.getFullYear();
    //     var month   = now.getMonth()+1;
    //     var day     = now.getDate();
    //     var hour    = now.getHours();
    //     var minute  = now.getMinutes();
    //     var second  = now.getSeconds();
    //     if(month.toString().length == 1) {
    //         var month = '0'+month;
    //     }
    //     if(day.toString().length == 1) {
    //         var day = '0'+day;
    //     }
    //     if(hour.toString().length == 1) {
    //         var hour = '0'+hour;
    //     }
    //     if(minute.toString().length == 1) {
    //         var minute = '0'+minute;
    //     }
    //     if(second.toString().length == 1) {
    //         var second = '0'+second;
    //     }
    //     var dateTime = year+'/'+month+'/'+day+' '+hour+':'+minute+':'+second;
    //     this.time1 = dateTime;
    //      return dateTime;
    // }
    MeetingRoomComponent.prototype.getTime = function () {
        var date = new Date();
        var currentTime = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' - ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
        return currentTime;
    };
    MeetingRoomComponent.prototype.handleClicks = function (i) {
        if (i == 0) {
            this.GreenCount++;
            console.log('GreenCount: ' + this.GreenCount + ' - ' + this.getTime());
            this.logVote("5784d21e69c702ad3b000002", "green", this.getTime());
        }
        else if (i == 1) {
            this.AmberCount++;
            console.log('AmberCount: ' + this.AmberCount + ' - ' + this.getTime());
            this.logVote("5784d21e69c702ad3b000002", "amber", this.getTime());
        }
        else {
            this.RedCount++;
            console.log('Redcount:' + this.RedCount + ' - ' + this.getTime());
            this.logVote("5784d21e69c702ad3b000002", "red", this.getTime());
        }
    };
    MeetingRoomComponent.prototype.ngOnInit = function () {
        this.getQuestions();
    };
    MeetingRoomComponent.prototype.regClick = function () {
        //nothing is being added to the array
        /*doesnt show anything */ //this.questions.push([{text: 'jane', _id:'d',__v:0}]);
        //this.questions= ([{text: 'jane', _id:'d',__v:0}]);
        // this.getDateTime();
        console.log('question length: ' + this.questions.length);
        //questions.size()
    };
    MeetingRoomComponent = __decorate([
        core_1.Component({
            selector: 'my-meeting-comp',
            templateUrl: 'app/components/meetingQ/meeting-questions.component.html',
            styleUrls: ['app/components/meetingQ/meeting-questions.component.css'],
            providers: [question_service_1.QuestionService, answer_service_1.AnswerService]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof question_service_1.QuestionService !== 'undefined' && question_service_1.QuestionService) === 'function' && _a) || Object, (typeof (_b = typeof answer_service_1.AnswerService !== 'undefined' && answer_service_1.AnswerService) === 'function' && _b) || Object])
    ], MeetingRoomComponent);
    return MeetingRoomComponent;
    var _a, _b;
}());
exports.MeetingRoomComponent = MeetingRoomComponent;
//# sourceMappingURL=meeting-questions.component.js.map