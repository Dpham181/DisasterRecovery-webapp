import { machine } from 'src/model/machine';
import { MachineserviceService } from './../../machine/service/machineservice.service';

import { JobserviceService } from './../../job/service/jobservice.service';
import { TimecardserviceService } from './../service/timecardservice.service';

import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { timecard } from 'src/model/timecard';
import { job } from 'src/model/job';
import { __values } from 'tslib';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-timecard-creation',
  templateUrl: './timecard-creation.component.html',
  styleUrls: ['./timecard-creation.component.css']
})
export class TimecardCreationComponent implements OnInit {

  public timecardForm: any;
  timecards: any;
  jobs:job[]=[];
  defaultjob:any;
  machines:machine[]=[];
  duplicateJ:boolean = false;
  dupJobalert:boolean=false;
  duplicateM:boolean = false;
  dupMachinealert:boolean=false;
  constructor(private timecardS: TimecardserviceService,private jobSer:JobserviceService ,private machineSer:MachineserviceService ,  private fb:FormBuilder, private router:Router) {}

  ngOnInit(): void {

    // rest api call for list of jobs
   this.jobSer.ListOfJobs.subscribe({
      next: (v) => {this.jobs=v; console.log(v)},
      error: (e) => console.error(e),
      complete: () => console.info('complete') }
    );


   // rest api call for list of machines 
    this.machineSer.ListOfMachines.subscribe({
      next: (m) => {this.machines = m; console.log(m)},
      error: (e) => console.error(e),
      complete: () => console.info('complete') 
    }
    )
    // create the time card form with inclcuing 3 fields and a list of job  and machine forms 
    this.timecardForm = this.fb.group(
      
    { 
      code: ['Side Code', Validators.required],
      contractor: ['Contractor Name', Validators.required],
      date: ['Date', Validators.required],
      jobsForm: this.fb.array([]),
    
      MachinesForm: this.fb.array([])
    },)

    
    let items = [...Array(3).keys()].forEach(()=>{this.addJobs();
      this.addMachines();
       })

    

  }
  // on change in job form (emitEvent for stopping the change and getting back the result )
  onChangeJob(id:any) { 
    let jobdataform = (<FormArray>this.timecardForm.get('jobsForm')).at(id);
   
     
    jobdataform.valueChanges.subscribe(value => {

      // remove job from select if user already selected 
      jobdataform.patchValue({ "JobTotal": value.Job.rate*value.JobHours, }, { emitEvent: false })

   })

    
 
   
    
  }
 // onchange in machine form 
  onChangeMachine(id:any) { 
    let Machinedataform = (<FormArray>this.timecardForm.get('MachinesForm')).at(id);
    Machinedataform.valueChanges.subscribe(value => {

      Machinedataform.patchValue({

        "MachineTotal": value.Machine.rent * value.MachineHours,
      }, { emitEvent: false })
    
    })
   
    
  }
  // create job form by using formgroup 
  get jobsForm() {
    return this.timecardForm.controls["jobsForm"] as FormArray;
  }

  addJobs() {
    
    const jobForm = this.fb.group({
      Job: [null, Validators.required],
      JobHours: [null, Validators.required],
      JobTotal: [null, Validators.required]

    });
    this.jobsForm.push(jobForm);
  }
  delJobs() {
    let size = this.jobsForm.length; 
    if(size > 1)
    this.jobsForm.removeAt(size-1);
  }
// create machine form by using formgroup 
  get MachinesForm() {
    return this.timecardForm.controls["MachinesForm"] as FormArray;
  }

  addMachines() {
    const MachineForm = this.fb.group({
      Machine: [null, Validators.required],
      MachineHours: [null, Validators.required],
      MachineTotal: [null, Validators.required]

    });
    this.MachinesForm.push(MachineForm);
  }
  delMachines() {
    let size = this.MachinesForm.length; 
    if(size > 1)
    this.MachinesForm.removeAt(size-1);
  }

  /// time card submission 
  onSubmit(_timecardForm:any)
  {
    let Timecard = new timecard();
    Timecard._code = this.timecardForm.value.code;
    Timecard._contractor= this.timecardForm.value.contractor;

   
    let  jobformvalues= (<FormArray>this.timecardForm.get('jobsForm'));
    let jobs:job[]= []; 
    let Totalhour = 0 ; 
    let AmountTotal = 0; 
    jobformvalues.controls.forEach((Data) =>
    
    {
      
      Totalhour += Data.value.JobHours;
      AmountTotal += Data.value.JobTotal;
      if (jobs.includes(Data.value.Job)){
          this.duplicateJ = true;
          this.dupJobalert = true;
      }
      jobs.push(Data.value.Job);
    
    }
    
    )
    let  Machinesformvalues = (<FormArray>this.timecardForm.get('MachinesForm'));
    let machines:machine[]= []; 
   
    Machinesformvalues.controls.forEach((Data) =>
    
    {
      
      Totalhour += Data.value.MachineHours;
      AmountTotal += Data.value.MachineTotal;
      if (machines.includes(Data.value.Machine)){
        this.duplicateM = true;
        this.dupMachinealert = true;
    }
      machines.push(Data.value.Machine);
    }
    
    )
    Timecard._hours= Totalhour;
    Timecard._amount = AmountTotal
    Timecard._timecardJob=jobs;
    Timecard._timecardMachine= machines;
    Timecard.setDate = new Date();
     Timecard._status = "Open";

     console.log(Timecard)
     console.log(this.duplicateJ)

     if(!this.duplicateJ && !this.duplicateM){
    this.timecardS.addTimecard(Timecard).subscribe({
      next: (v) =>  this.router.navigate(['/access/Timecardsubmisstion']).then(() => {
        window.location.reload();
      }),
      error: (e) => console.error(e),
      complete: () => console.info('complete') 
  })}
      
     this.duplicateJ = false;
     this.duplicateM = false;

  }
  reset(){
    this.timecardForm.reset();

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
