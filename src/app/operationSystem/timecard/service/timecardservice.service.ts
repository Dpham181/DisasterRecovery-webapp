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
  
  getTimecards(): Observable<timecard[]>{
    return this.httpClient.get<timecard[]>(this.API_URL, {headers: this.headers})
    .pipe(catchError(new Api().handleError));
  }

  getTimecardById(id: number): Observable<timecard>{
    return this.httpClient.get<timecard>(this.API_URL+ '/' + id,  {headers: this.headers})
    .pipe(catchError(new Api().handleError));
  }

  addTimecard(timecardData: any): Observable<timecard>{
  
    console.log(timecardData);
    return this.httpClient.post<timecard>(this.API_URL, timecardData, {headers: this.headers})
    .pipe(catchError(new Api().handleError));
  }

  updateTimecard(id: number, timecardData: any): Observable<timecard[]>{
    console.log(timecardData)
    console.log(this.API_URL + '/' + id)
    return this.httpClient.put<timecard[]>(this.API_URL + '/' + id, timecardData, {headers: this.headers})
    .pipe(catchError(new Api().handleError));
  }
}
