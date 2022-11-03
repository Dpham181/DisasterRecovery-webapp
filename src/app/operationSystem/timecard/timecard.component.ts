import { Component, OnInit } from '@angular/core';
import { TimecardserviceService } from './service/timecardservice.service';
@Component({
  selector: 'app-timecard',
  templateUrl: './timecard.component.html',
  styleUrls: ['./timecard.component.css']
})
export class TimecardComponent implements OnInit {

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

}
