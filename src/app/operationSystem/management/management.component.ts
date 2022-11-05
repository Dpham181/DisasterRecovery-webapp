import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {

  public role:any;
   public email:any;
  constructor() { }

  ngOnInit(): void {
    this.role = localStorage.getItem("role");
    this.email = localStorage.getItem("email");

  }

}
