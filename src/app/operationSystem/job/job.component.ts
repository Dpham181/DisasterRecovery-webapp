import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobserviceService } from './service/jobservice.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {
  public jobs: any;
  errorMsg: any;
  constructor(private jobSer: JobserviceService, private router:Router) { }

  ngOnInit(): void {
    localStorage.setItem("JWT_token", "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJleHAiOjE2Njc0ODUyMTMsImlhdCI6MTY2NzQ2NzIxM30.S5-97XjLkFRuvpXSPdNQ5TUQhy2LJIGlZmE9On1KJZVzFnucWfFWgRnNQ879P50ZT1nTjS7ZsDI8NLnTcHQCXQ");
    this.jobSer.ListOfJobs.subscribe({
      next: (v) => {this.jobs=v; console.log(v)},
      error: (e) => console.error(e),
      complete: () => console.info('complete') }
    )
  }

  createJob()
  {
    this.router.navigate(["/management/newJob"]);
  }

  editJob(job:any){

    this.router.navigate(["/management/editJob/", job.id]);
  }

  deleteJob(id:number) {
    console.log(id);
    this.jobSer.deleteOneJob(id).subscribe({
      next: (v) => this.router.navigate(["management/job"])
      .then(() => {
        window.location.reload();
      }),
      error: (e) => console.error(e)
    });
  } 

}
