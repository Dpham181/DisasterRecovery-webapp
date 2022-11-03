import { Component, OnInit } from '@angular/core';
import { JobserviceService } from './service/jobservice.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {
  public jobs: any;
  errorMsg: any;
  constructor(private jobSer: JobserviceService) { }

  ngOnInit(): void {
   // localStorage.setItem("JWT_token", "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJleHAiOjE2Njc0NTQxNDcsImlhdCI6MTY2NzQzNjE0N30.d0O6eMMmyfxPeLTcJUQg62EK4yWFIXYg0RfcXrh7gXckWizvocAy1yBXno0fg0ks7C_C_YWfVqZ8WMh2LJEjmg");
    this.jobSer.ListOfJobs.subscribe({
      next: (v) => {this.jobs=v; console.log(v)},
      error: (e) => console.error(e),
      complete: () => console.info('complete') }
    )
  }

}
