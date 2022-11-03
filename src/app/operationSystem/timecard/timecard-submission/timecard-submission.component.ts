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

  constructor(private tcSer: TimecardserviceService) { }

  ngOnInit(): void {
    this.tcSer.ListOfTimecards.subscribe({
      next: (tc) => {this.timecards=tc; console.log(tc)},
      error: (e) => console.error(e),
      complete: () => console.info('complete') }
    )
  }
  createTimeCard(){
    
  }
}
