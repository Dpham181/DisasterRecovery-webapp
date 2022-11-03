import { job } from './../../../../model/job';
import { MachineserviceService } from './../../machine/service/machineservice.service';
import { machine } from 'src/model/machine';
import { JobserviceService } from './../../job/service/jobservice.service';
import { TimecardserviceService } from './../service/timecardservice.service';
import { timecard } from 'src/model/timecard';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-timecard-creation',
  templateUrl: './timecard-creation.component.html',
  styleUrls: ['./timecard-creation.component.css']
})
export class TimecardCreationComponent implements OnInit {

  public timecardForm: any;
  timecards: any;
  jobs:any;
  jobcode!:string;
  jobrate!:number;
  totaljobworked!:number;
  jobworkedhour!: number;

 machines:any;
  errorMsg: any;
  

  constructor(private timecardS: TimecardserviceService,private jobSer:JobserviceService ,private machineSer:MachineserviceService ,  private fb:FormBuilder, private router:Router) {}

  ngOnInit(): void {
    this.jobSer.ListOfJobs.subscribe({
      next: (v) => {this.jobs=v; console.log(v)},
      error: (e) => console.error(e),
      complete: () => console.info('complete') }
    );

    this.machineSer.ListOfMachines.subscribe({
      next: (m) => {this.machines = m; console.log(m)},
      error: (e) => console.error(e),
      complete: () => console.info('complete') 
    }
    )
    this.timecardForm = this.fb.group({code: '', contractor: '', date: '', hours:''})
  
  }
  
  onSubmit(timecardForm:any)
  {
    console.log(this.timecardForm.value);
   
  }
  calJobtotal(){
   this.jobs.array.forEach((_job: job) => {
      if(_job._code === this.jobcode )
      {
       this.totaljobworked =  this.jobrate * this.jobworkedhour;
      }
   });
  }
  get code()
  {
    return this.timecardForm.get('code');
  }
  get description()
  {
    return this.timecardForm.get('description');
  }
  get rate()
  {
    return this.timecardForm.get('rate');
  }
  get hours()
  {
    return this.timecardForm.get('hours');
  }

}
