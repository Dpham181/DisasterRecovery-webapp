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

  deleteOneJob(id:number):Observable<any> {
    console.log(this.API_URL + "/" + id);
    return this.httpClient.delete(this.API_URL + "/" + id, {headers: this.headers}).pipe(
      catchError(new Api().handleError)
    );
  }

  getJobs(): Observable<job[]>{
    return this.httpClient.get<job[]>(this.API_URL, {headers: this.headers})
    .pipe(catchError(new Api().handleError));
  }

  getJobById(id: number): Observable<job[]>{
    return this.httpClient.get<job[]>(this.API_URL+ '/' + id,  {headers: this.headers})
    .pipe(catchError(new Api().handleError));
  }

  addJob(jobData: any): Observable<job[]>{
  
    console.log(jobData);
    return this.httpClient.post<job[]>(this.API_URL, jobData, {headers: this.headers})
    .pipe(catchError(new Api().handleError));
  }

  updateJob(id: number, jobData: any): Observable<job[]>{
    console.log(jobData)
    console.log(this.API_URL + '/' + id)
    return this.httpClient.put<job[]>(this.API_URL + '/' + id, jobData, {headers: this.headers})
    .pipe(catchError(new Api().handleError));
  }
}
