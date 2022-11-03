import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { user } from 'src/model/user';
import { AuthenticateServiceService } from '../service/authenticate-service.service';
import { JWT_token } from './JWT_TOKEN';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
 
  public login: any;
  private token:any ;
  constructor(private fb: FormBuilder, private userS:AuthenticateServiceService , private router:Router) { 
    this.login = this.fb.group({
      email: new FormControl(null,   [Validators.required,Validators.email]),
      password: new FormControl(null,[Validators.required, Validators.minLength(6)])
     });
    }

  ngOnInit(): void {
  }

  submit(login:any){
    this.userS.authenticateMethod(new user(this.login.value.email, this.login.value.password)).subscribe(
      {
      next: (v) => {this.token= v.token,console.log(v.token)
        if(v.token.length > 0 ){
        localStorage.setItem('JWT_token',v.token);    
        this.router.navigate(['/management']);
        }

      },
      error: (e) => console.error(e),
      complete: () => console.info('complete') 
    }

    );

    }

    get email() {
      return this.login.get('email');
    }
    get password() {
      return this.login.get('password');
    }

}
