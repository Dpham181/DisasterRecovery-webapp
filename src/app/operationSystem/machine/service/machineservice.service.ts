import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Api } from 'src/ExceptionAPI/ApiErrorHandler';
import { machine } from 'src/model/machine';

@Injectable({
  providedIn: 'root'
})
export class MachineserviceService {

  private API_URL= environment.API_URL + "machines";

  private headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('JWT_token'));
  constructor(private httpClient: HttpClient) { }

  get ListOfMachines():Observable<machine[]>{
    return this.httpClient.get<machine[]>(this.API_URL, {headers: this.headers}).pipe(
      catchError(new Api().handleError)
    );
  }
}
