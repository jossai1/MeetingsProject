import { Component } from '@angular/core';

@Component({

  selector: 'my-meeting-comp',
  templateUrl: 'app/components/meetingQ/meeting-questions.component.html',
  styleUrls: ['app/components/meetingQ/meeting-questions.component.css']

})

export class MeetingRoomComponent
{
  question = 'How do you feel ? ';
}
