import { bootstrap }    from '@angular/platform-browser-dynamic';
import { MeetingRoomComponent } from './components/meetingQ/meeting-questions.component';
import { HTTP_PROVIDERS } from '@angular/http';


bootstrap(MeetingRoomComponent, [ HTTP_PROVIDERS]);
