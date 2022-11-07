import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JobserviceService } from '../service/jobservice.service';

@Component({
  selector: 'app-create-job-form',
  templateUrl: './create-job-form.component.html',
  styleUrls: ['./create-job-form.component.css']
})
export class CreateJobFormComponent implements OnInit {

  public jobForm: any;
  jobs: any;
  errorMsg: any;
  

  constructor(private jobSer: JobserviceService, private fb:FormBuilder, private router:Router) {}

  ngOnInit(): void {
    this.jobSer.ListOfJobs.subscribe({
      next: (v) => {this.jobs=v; console.log(v)},
      error: (e) => console.error(e),
      complete: () => console.info('complete') }
    ),
    this.jobForm = this.fb.group({
      code: ['', [Validators.required, Validators.minLength(2)]], 
      description: ['',[Validators.required, Validators.minLength(2)]], 
      rate: ['', [Validators.required]], 
      hours:['', [Validators.required]]})
  }

  onSubmit(jobForm:any)
  {
    console.log(this.jobForm.value);
    this.jobSer.addJob(this.jobForm.value).subscribe(
      (data) => {
        this.jobs = data;
        console.log(this.jobs);
        this.jobSer.getJobs().subscribe(
          (data) => this.jobs = data
        )
      },
      (error) => this.errorMsg = error
    )
    this.router.navigate(["management/job"]).then(() => {
      window.location.reload();
    });
    this.jobForm.reset();
  }

  get code()
  {
    return this.jobForm.get('code');
  }
  get description()
  {
    return this.jobForm.get('description');
  }
  get rate()
  {
    return this.jobForm.get('rate');
  }
  get hours()
  {
    return this.jobForm.get('hours');
  }
}
