import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { user } from 'src/model/user';
import { AuthenticateServiceService } from '../service/authenticate-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  public login: any;
  private token:any;
  constructor(private fb: FormBuilder, private userS:AuthenticateServiceService , private router:Router) { 
    this.login = this.fb.group({
      email: new FormControl(null,   [Validators.required,Validators.email]),
      password: new FormControl(null,[Validators.required, Validators.minLength(6)])
     });
    }

  ngOnInit(): void {
  }

  submit(login:any){
  
    this.token = this.userS.authenticateMethod(new user(this.login.value.email, this.login.value.password));
    if(this.token !=="") localStorage.setItem('JWT_token',this.token);    

 
    }

    get email() {
      return this.login.get('email');
    }
    get password() {
      return this.login.get('password');
    }

}
