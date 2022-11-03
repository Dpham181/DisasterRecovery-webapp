import { Component, OnInit } from '@angular/core';
import { AuthenticateServiceService } from '../service/authenticate-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public users: any;
  errorMsg: any;
  constructor(private authS: AuthenticateServiceService) { }

  ngOnInit(): void {

    this.authS.ListOfUser.subscribe({
      next: (v) => console.log(v),
      error: (e) => console.error(e),
      complete: () => console.info('complete') }
    )
  }

}
