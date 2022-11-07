import { HttpErrorResponse } from "@angular/common/http";
import { throwError } from "rxjs";

export class Api{
 constructor(){};



handleError(error: HttpErrorResponse) {

  // internal console log error
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
        if(error.status == 409){
          console.error("The record already exits!!")
        }
        if(error.status == 500){
          console.error("Server down")
        }
        if(error.status == 400){
          console.error("Requrie to fill up all in input")
        }
        if(error.status == 404){
          console.error("Not Found")
        }
    }
    return throwError(
      'Something bad happened; please try again later.');
  };

  // alert error 
 
  
}