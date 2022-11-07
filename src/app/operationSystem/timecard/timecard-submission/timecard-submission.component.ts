import { timecard } from 'src/model/timecard';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TimecardserviceService } from '../service/timecardservice.service';

@Component({
  selector: 'app-timecard-submission',
  templateUrl: './timecard-submission.component.html',
  styleUrls: ['./timecard-submission.component.css']
})
export class TimecardSubmissionComponent implements OnInit {

  public timecards: any;
  errorMsg: any;
  currenttimecard!: any ;

  constructor(private tcSer: TimecardserviceService, private router:Router) { }

  ngOnInit(): void {
    this.tcSer.ListOfTimecards.subscribe({
      next: (tc) => {this.timecards=tc; console.log(tc)},
      error: (e) => console.error(e),
      complete: () => console.info('complete') }
    )
  }
  viewdetails (currentTC:any){
    this.currenttimecard= currentTC;
    this.router.navigate(["/access/Timecardsubmisstion/viewDetails", currentTC])
  }
}
