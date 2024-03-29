import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    console.log("here")
    localStorage.setItem('JWT_token',"");    
    localStorage.setItem('role',"");    
    localStorage.setItem('email',"");    

    this.router.navigate(['/home']);
  }

}
