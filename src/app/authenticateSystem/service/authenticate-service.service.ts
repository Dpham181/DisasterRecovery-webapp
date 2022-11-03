import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Api } from 'src/ExceptionAPI/ApiErrorHandler';
import { user } from 'src/model/user';
@Injectable({
  providedIn: 'root'
})
export class AuthenticateServiceService {
  private API_URL= environment.API_URL + "users";


  constructor(private httpClient: HttpClient) { }  

  get ListOfUser():Observable<user[]>{
    return this.httpClient.get<user[]>(this.API_URL).pipe(
      catchError(new Api().handleError)
    );
  }

  

}
