import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { QuestionService } from 'app/services/question.service';
import { AnswerService} from 'app/services/answer.service';
import { Question } from './question.model';
import { Question } from './answer.model';
import 'rxjs/add/operator/toPromise';
//an object
// for iamges
interface imageArray {
  link: string
}

//questions: Array<Question>;
@Component({

  selector: 'my-meeting-comp',
  templateUrl: 'app/components/meetingQ/meeting-questions.component.html',
  styleUrls: ['app/components/meetingQ/meeting-questions.component.css'],
  providers: [ QuestionService, AnswerService ]
})

export class MeetingRoomComponent implements OnInit{
  imageArray: Array<Object> = [];

  //questions: Question[];
  error: any;
  time1: string = "";
  questions: Question[] =[];
  answers: Answer[] =[];
  question = 'How do you feel? ';
  GreenCount: number = 0;
  RedCount: number = 0;
  AmberCount: number = 0;


  //public questions: Question[] =[];

  constructor(private questionService: QuestionService,private answerService: AnswerService){
    //an array of strings
    this.imageArray = [
      {link: 'app/img/greenSmiley.png'},
      {link: 'app/img/amberSmiley.png'},
      {link: 'app/img/redSmiley.png'}];
  }

  getQuestions() {
    this.questionService
       .getQuestions()
       .then(heroes => this.questions = heroes)
       .catch(error => this.error = error);


    }

//to display answers
//will use this for admin
    getAnswers() {
      this.answerService
         .getAnswers()
         .then(heroes => this.answers = heroes)
         .catch(error => this.error = error);


      }

    logVote (questionID:string, response:string, time:string) {
  if (!response) { return; }
  console.log('done');
  this.answerService.logVote(questionID,response,time)
                   .then(
                     error =>  this.errorMessage = <any>error);
}
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
  getTime() {
    var date  = new Date();
    var currentTime = date.getDate() +'/'+ (date.getMonth()+1) + '/' + date.getFullYear() + ' - '+ date.getHours() + ':' + date.getMinutes() + ':'+ date.getSeconds();
    return currentTime;
  }

  handleClicks(i) {
    if(i == 0) {
      this.GreenCount++;
      console.log('GreenCount: '+ this.GreenCount + ' - ' +  this.getTime());
      this.logVote("5784d21e69c702ad3b000002","green", this.getTime());
    } else if (i == 1) {
      this.AmberCount++;
      console.log('AmberCount: ' +this.AmberCount + ' - ' +  this.getTime());
      this.logVote("5784d21e69c702ad3b000002","amber", this.getTime());
    } else {
      this.RedCount++;
      console.log('Redcount:' + this.RedCount+ ' - ' +  this.getTime());
      this.logVote("5784d21e69c702ad3b000002","red", this.getTime());
    }

  }

  ngOnInit() {
      this.getQuestions();
    }

  regClick(){
    //nothing is being added to the array
    /*doesnt show anything *///this.questions.push([{text: 'jane', _id:'d',__v:0}]);
    //this.questions= ([{text: 'jane', _id:'d',__v:0}]);
    // this.getDateTime();
    console.log('question length: '+ this.questions.length);
    //questions.size()
  }




}
