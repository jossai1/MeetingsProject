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
var MeetingRoomComponent = (function () {
    function MeetingRoomComponent() {
        this.imageArray = [];
        this.question = 'How do you feel ? ';
        //an array of strings
        this.imageArray = [
            { link: 'app/img/greenSmiley.png' },
            { link: 'app/img/amberSmiley.png' },
            { link: 'app/img/redSmiley.png' }];
    }
    MeetingRoomComponent.prototype.regClick = function () {
        console.log("hi");
    };
    MeetingRoomComponent = __decorate([
        core_1.Component({
            selector: 'my-meeting-comp',
            templateUrl: 'app/components/meetingQ/meeting-questions.component.html',
            styleUrls: ['app/components/meetingQ/meeting-questions.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], MeetingRoomComponent);
    return MeetingRoomComponent;
}());
exports.MeetingRoomComponent = MeetingRoomComponent;
//# sourceMappingURL=meeting-questions.component.js.map