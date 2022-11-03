import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.css']
})
export class AccessComponent implements OnInit {
   public role:any;
   public email:any;
  constructor() { }

  ngOnInit(): void {
    this.role = localStorage.getItem("role");
    this.email = localStorage.getItem("email");

  }
 
}
