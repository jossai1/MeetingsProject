import { Component } from '@angular/core';

//an object
interface imageArray {
  link: string
}

@Component({

  selector: 'my-meeting-comp',
  templateUrl: 'app/components/meetingQ/meeting-questions.component.html',
  styleUrls: ['app/components/meetingQ/meeting-questions.component.css']

})

export class MeetingRoomComponent {
  imageArray: Array<string> = [];
  constructor(){
    //an array of strings
    this.imageArray = [
      {link: 'app/img/greenSmiley.png'},
      {link: 'app/img/amberSmiley.png'},
      {link: 'app/img/redSmiley.png'}];
  }
  question = 'How do you feel ? ';


  regClick(){
    console.log("hi");
  }

}
