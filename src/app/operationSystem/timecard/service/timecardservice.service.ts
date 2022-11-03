import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Api } from 'src/ExceptionAPI/ApiErrorHandler';
import { timecard } from 'src/model/timecard';

@Injectable({
  providedIn: 'root'
})
export class TimecardserviceService {
  private API_URL= environment.API_URL + "TimeCards";
  private headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('JWT_token'));

  constructor(private httpClient: HttpClient) { }

  get ListOfTimecards():Observable<timecard[]>{
    return this.httpClient.get<timecard[]>(this.API_URL, {headers: this.headers}).pipe(
      catchError(new Api().handleError)
    );
  }
}
