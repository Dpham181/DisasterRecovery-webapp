import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticateServiceService } from '../service/authenticate-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  public login: any;
  constructor(private fb: FormBuilder, private userS:AuthenticateServiceService , private router:Router) { 
    this.login = this.fb.group({
      email: new FormControl(null,   [Validators.required,Validators.email]),
      password: new FormControl(null,[Validators.required, Validators.minLength(6)])
     });
    }

  ngOnInit(): void {
  }

  submit(login:any){
    localStorage.setItem('isLoggedIn','false');    
  /*
     this.userS.UserPersitDatabase.subscribe(
      {
        next: (users) => {
        
        users.forEach(user => {
          if(user.email === this.login.value.email){
              if(user.password === this.login.value.password)
                 { 
                  
                  this.router.navigate(['employees']) 
                 localStorage.setItem('isLoggedIn','true');    
                  if(user.role === 0){
                    localStorage.setItem('role','admin');    

                  }
                  if(user.role === 1){
                    localStorage.setItem('role','user');    

                  }

                }
          }
        });
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete') 

      }

     )
  */
    }

    get email() {
      return this.login.get('email');
    }
    get password() {
      return this.login.get('password');
    }

}
