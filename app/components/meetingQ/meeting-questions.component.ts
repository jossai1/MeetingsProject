import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { QuestionService } from 'app/services/question.service';
import { Question } from './question.model';
import 'rxjs/add/operator/toPromise';
//an object
interface imageArray {
  link: string
}

//questions: Array<Question>;
@Component({

  selector: 'my-meeting-comp',
  templateUrl: 'app/components/meetingQ/meeting-questions.component.html',
  styleUrls: ['app/components/meetingQ/meeting-questions.component.css'],
  providers: [ QuestionService ]
})

export class MeetingRoomComponent implements OnInit{
  imageArray: Array<Object> = [];
  //questions: Question[];
  error: any;
  questions: Question[] =[];

  //public questions: Question[] =[];

  constructor(private questionService: QuestionService){
    //an array of strings
    this.imageArray = [
      {link: 'app/img/greenSmiley.png'},
      {link: 'app/img/amberSmiley.png'},
      {link: 'app/img/redSmiley.png'}];
  }
  question = 'How do you feel ? ';


  getQuestions() {
    this.questionService
       .getQuestions()
       .then(heroes => this.questions = heroes)
       .catch(error => this.error = error);

    }

  ngOnInit() {
      this.getQuestions();
    }

  regClick(){
    //nothing is being added to the array
    /*doesnt show anything *///this.questions.push([{text: 'jane', _id:'d',__v:0}]);
    //this.questions= ([{text: 'jane', _id:'d',__v:0}]);
    console.log(this.questions.length);
    //questions.size()
  }

}
