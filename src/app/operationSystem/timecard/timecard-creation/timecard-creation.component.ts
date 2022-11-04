import { job } from './../../../../model/job';
import { MachineserviceService } from './../../machine/service/machineservice.service';
import { machine } from 'src/model/machine';
import { JobserviceService } from './../../job/service/jobservice.service';
import { TimecardserviceService } from './../service/timecardservice.service';
import { timecard } from 'src/model/timecard';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-timecard-creation',
  templateUrl: './timecard-creation.component.html',
  styleUrls: ['./timecard-creation.component.css']
})
export class TimecardCreationComponent implements OnInit {

  public timecardForm: any;
  timecards: any;
  jobs:any;
  machines:any;

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
    this.timecardForm = this.fb.group(
      
    { 
      code: ['', Validators.required],
      contractor: ['', Validators.required],
      date: ['', Validators.required],
      jobsForm: this.fb.array([this.fb.group({
        JobCode: ['', Validators.required],
        JobHours: ['', Validators.required],
        JobTotal: ['', Validators.required]
  
      })]),
    
      MachinesForm: this.fb.array([this.fb.group({
        MachineCode: ['', Validators.required],
        MachineHours: ['', Validators.required],
        MachineTotal: ['', Validators.required]
  
      })])
    },)
     


  }
  /*
  onChange(event:any) {
      this.jobcodeChossenrate = event.target.value;
      console.log(this.jobcodeChossenrate)
      console.log(this.jobworkedhour)

      this.totaljobworked = Number(this.jobcodeChossenrate) * this.jobworkedhour;

  }
  */
  get jobsForm() {
    return this.timecardForm.controls["jobsForm"] as FormArray;
  }

  addJobs() {
    const jobForm = this.fb.group({
      JobCode: ['', Validators.required],
      JobHours: ['', Validators.required],
      JobTotal: ['', Validators.required]

    });
    this.jobsForm.push(jobForm);
  }


  get MachinesForm() {
    return this.timecardForm.controls["MachinesForm"] as FormArray;
  }

  addMachines() {
    const MachineForm = this.fb.group({
      MachineCode: ['', Validators.required],
      MachineHours: ['', Validators.required],
      MachineTotal: ['', Validators.required]

    });
    this.MachinesForm.push(MachineForm);
  }
  onSubmit(timecardForm:any)
  {
    console.log(this.timecardForm.value);
    var item = (<FormArray>this.timecardForm.get('jobsForm')).at(0);
    console.log(item);

  }
 
  get JobCode()
  {
    return this.timecardForm.get('JobCode');
  }
  get JobHours()
  {
    return this.timecardForm.get('JobHours');
  }
  get JobTotal()
  {
    return this.timecardForm.get('JobTotal');
  }
  get MachineCode()
  {
    return this.timecardForm.get('MachineCode');
  }
  get MachineHours()
  {
    return this.timecardForm.get('MachineHours');
  }
  get MachineTotal()
  {
    return this.timecardForm.get('MachineTotal');
  }
  get code()
  {
    return this.timecardForm.get('code');
  }
  get contractor()
  {
    return this.timecardForm.get('contractor');
  }
  get date()
  {
    return this.timecardForm.get('date');
  }

}
