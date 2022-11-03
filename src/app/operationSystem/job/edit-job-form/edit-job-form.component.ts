import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { JobserviceService } from '../service/jobservice.service';

@Component({
  selector: 'app-edit-job-form',
  templateUrl: './edit-job-form.component.html',
  styleUrls: ['./edit-job-form.component.css']
})
export class EditJobFormComponent implements OnInit {

  jobs: any;
  job: any;
  jobId: any;
  errorMsg: any;
  constructor(private actRoute: ActivatedRoute, private jobSer: JobserviceService, private fb:FormBuilder, private router:Router) { }

  public editJob = this.fb.group(
    {code: '', description: '', rate: '', hours:''}
  )
  ngOnInit(): void {
    localStorage.setItem("JWT_token", "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJleHAiOjE2Njc0ODUyMTMsImlhdCI6MTY2NzQ2NzIxM30.S5-97XjLkFRuvpXSPdNQ5TUQhy2LJIGlZmE9On1KJZVzFnucWfFWgRnNQ879P50ZT1nTjS7ZsDI8NLnTcHQCXQ");
  
    this.actRoute.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      console.log(id);
      this.jobId = id;
      console.log(this.jobId);
      this.jobs = this.jobSer.getJobById(this.jobId).subscribe(
        (data) => {this.jobs = data; console.log(data);
        this.editJob = this.fb.group( {
          code: [this.jobs.code], 
          description: [this.jobs.description], 
          rate: [this.jobs.rate], 
          hours: [this.jobs.hours]}
        );
      },
      (error) => {this.errorMsg = error; console.log(error); }
      );
    })
  }
  get code()
  {
    return this.editJob.get('code');
  }
  get description()
  {
    return this.editJob.get('description');
  }
  get rate()
  {
    return this.editJob.get('rate');
  }
  get hours()
  {
    return this.editJob.get('hours');
  }

  update(jobId:number, editJob: any)
  {
    console.log(this.jobId);
    console.log(this.editJob);
    this.jobSer.updateJob(this.jobId, this.editJob.value).subscribe(
      (data) => {this.jobs = data; console.log(data);
        this.jobSer.getJobs().subscribe(
          (data) => this.jobs = data,
          (error) => this.errorMsg = error
        )
      },
      (error) => {this.errorMsg = error; console.log(error); }
    );
    this.router.navigate(["management/job"]).then(() => {
      window.location.reload();
    });
  }

}
