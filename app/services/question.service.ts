import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Question } from 'app/components/meetingQ/question';




@Injectable()
export class QuestionService {
private heroesUrl = 'http://localhost:8080/api/questions';  // URL to web api


constructor(private http: Http) { }
/*getQuestions()
{
  console.log('hi jane ossai ');
  //return http.get('/api/questions')
}
*/
getQuestions(): Promise<Question[]> {
    return this.http.get(this.heroesUrl)
               .toPromise()
               .then(response => response.json().data)
               .catch(this.handleError);
  }

  private handleError(error: any) {
     console.error('An error occurred', error);
     return Promise.reject(error.message || error);
   }
  /*getQuestions() {
    return ---;

    // return api/questions
  }*/

}
