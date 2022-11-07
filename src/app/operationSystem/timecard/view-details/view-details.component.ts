import { timecard } from 'src/model/timecard';
import { FormArray } from '@angular/forms';
import { machine } from 'src/model/machine';
import { TimecardserviceService } from './../service/timecardservice.service';
import { Component, Input, OnInit } from '@angular/core';
import { job } from 'src/model/job';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {

  constructor(private actRoute: ActivatedRoute , private timeCardSr: TimecardserviceService) { }
  timecardDetails: any ;
  timecardJobs:job[] =[];
  timecardMachines:machine[] =[];

  ngOnInit(): void {
 // not require 
 /*
 this.actRoute.paramMap.subscribe((params: ParamMap) => {  
  this.timeCardSr.getTimecardById(Number(params.get('id'))).subscribe(
    {
      next: (Current_timecard) => 
      {
        console.log(Current_timecard)
        this.timecardDetails = Current_timecard as timecard
        this.timecardJobs = Current_timecard._timecardJob,
        console.log(this.timecardDetails._timecardJob)
        this.timecardMachines = Current_timecard._timecardMachine

    },
    error: (e) => console.error(e),
    complete: () => console.info('complete') 
  }


  )

 })
*/

  }

}
