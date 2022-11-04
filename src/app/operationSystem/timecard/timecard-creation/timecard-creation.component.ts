import { machine } from 'src/model/machine';
import { MachineserviceService } from './../../machine/service/machineservice.service';

import { JobserviceService } from './../../job/service/jobservice.service';
import { TimecardserviceService } from './../service/timecardservice.service';
import { timecard } from 'src/model/timecard';
import { job } from 'src/model/job';

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
  selectedjobFinal:job[] = [];
  selectedmachineFinal:machine[] = [];
  selectedjobcode!:string;
  selectedjobrate!:number;
  selectedjobHours:number = 1;
  selectedJobTotal!:number;
  selectedmachinecode!:string;

  selectedMachinerate!:number;
  selectedMachineHours:number = 1;
  selectedMachineTotal!:number;
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
  
  onChangeRate(newValue:any) {  // eroor herer  
     this.selectedjobcode =  newValue.target.value;
     console.log(Number(this.selectedjobcode));
     this.jobSer.getJobById(Number(this.selectedjobcode)).subscribe({
      next: (v:any) => {
        console.log(v.rate), this.selectedjobrate = v.rate; // cannnot get out the job rate for calculation
       },
      error: (e) => console.error(),
      complete: () => console.info('complete') }
    );
  }
  onChangeHour(newValue:any) {
    this.selectedjobHours =  newValue.target.value;
    this.selectedJobTotal= this.selectedjobrate*this.selectedjobHours
  }

  onChangeRateM(newValue:any) {
    this.selectedmachinecode = newValue.target.value;
    console.log(Number(this.selectedmachinecode));
     this.machineSer.getMachineById(Number(this.selectedmachinecode)).subscribe({
      next: (v:any) => {
        console.log(v.rent), this.selectedMachinerate = v.rent; 
       },
      error: (e) => console.error(),
      complete: () => console.info('complete') }
    );
    
  }
  onChangeHourM(newValue:any) {
    this.selectedMachineHours =  newValue.target.value;
    this.selectedMachineTotal= this.selectedMachinerate*this.selectedMachineHours
  }
  
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
  onSubmit(_timecardForm:any)
  {

    let jobs:job[] = [];
    let machines:machine[]=[];
    console.log(this.timecardForm.value);
    let  jobformsize= (<FormArray>this.timecardForm.get('jobsForm')).length;
    let  Machinesformsize = (<FormArray>this.timecardForm.get('MachinesForm')).length;
    let i = 0 ; 

    
     while(i <jobformsize ){
      this.jobSer.getJobById((<FormArray>this.timecardForm.get('jobsForm')).at(i).value.JobCode).subscribe({

        next: (v) => {
             jobs.push(v);
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete') }
      );
      
      i++
     }
   let  k = 0;
     while(k <Machinesformsize ){
      this.machineSer.getMachineById((<FormArray>this.timecardForm.get('MachinesForm')).at(k).value.MachineCode).subscribe({

        next: (m) => {
             machines.push(m);
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete') }
      );
      
      k++
     }
     let Timecard = new timecard();
     Timecard._code = this.timecardForm.value.code;
     Timecard._contractor= this.timecardForm.value.contractor;
     Timecard._hours = Number(this.selectedjobHours) + Number(this.selectedMachineHours);   // need to cal under -> line 77 -> 97 
     Timecard._amount = this.selectedJobTotal + this.selectedMachineTotal;  // need to cal   -> line 77 -> 97 
     Timecard._timecardJob=jobs;
     Timecard._timecardMachine= machines;
     Timecard._status = "Open";
     console.log(jobs)

     console.log(Timecard)
    this.timecardS.addTimecard(Timecard).subscribe(
      (error) => console.log(error)
    )
 
  
    this.router.navigate(['/access/Timecardsubmisstion']).then(() => {
      this.timecardForm.reset();

      window.location.reload();
    });;
    

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
