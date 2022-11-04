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

  deleteOneMachine(id:number):Observable<any> {
    console.log(this.API_URL + "/" + id);
    return this.httpClient.delete(this.API_URL + "/" + id, {headers: this.headers}).pipe(
      catchError(new Api().handleError)
    );
  }
  getMachines(): Observable<machine[]>{
    return this.httpClient.get<machine[]>(this.API_URL, {headers: this.headers})
    .pipe(catchError(new Api().handleError));
  }

  getMachineById(id: number): Observable<machine>{
    return this.httpClient.get<machine>(this.API_URL+ '/' + id,  {headers: this.headers})
    .pipe(catchError(new Api().handleError));
  }

  addMachine(machineData: any): Observable<machine[]>{
  
    console.log(machineData);
    return this.httpClient.post<machine[]>(this.API_URL, machineData, {headers: this.headers})
    .pipe(catchError(new Api().handleError));
  }

  updateMachine(id: number, machineData: any): Observable<machine[]>{
    console.log(machineData)
    console.log(this.API_URL + '/' + id)
    return this.httpClient.put<machine[]>(this.API_URL + '/' + id, machineData, {headers: this.headers})
    .pipe(catchError(new Api().handleError));
  }
}
