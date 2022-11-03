import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Api } from 'src/ExceptionAPI/ApiErrorHandler';
import { job } from 'src/model/job';

@Injectable({
  providedIn: 'root'
})
export class JobserviceService {
   
  private API_URL= environment.API_URL + "jobs";

  private headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('JWT_token'));

  constructor(private httpClient: HttpClient) { }  
  
  get ListOfJobs():Observable<job[]>{
    return this.httpClient.get<job[]>(this.API_URL, {headers: this.headers}).pipe(
      catchError(new Api().handleError)
    );
  }

}
