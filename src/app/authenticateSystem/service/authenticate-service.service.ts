import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Api } from 'src/ExceptionAPI/ApiErrorHandler';
import { user } from 'src/model/user';
import { JWT_token } from '../login/JWT_TOKEN';
@Injectable({
  providedIn: 'root'
})
export class AuthenticateServiceService {
  private API_URL= environment.API_URL + "users";

  constructor(private httpClient: HttpClient) { }  



  authenticateMethod(user:user):Observable<JWT_token>{



    return this.httpClient.post<JWT_token>(this.API_URL + "/login",user).pipe(
      catchError(new Api().handleError)
    );
  }
  

}
