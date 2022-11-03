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
    // localStorage.setItem("JWT_token", "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJleHAiOjE2Njc0NTQxNDcsImlhdCI6MTY2NzQzNjE0N30.d0O6eMMmyfxPeLTcJUQg62EK4yWFIXYg0RfcXrh7gXckWizvocAy1yBXno0fg0ks7C_C_YWfVqZ8WMh2LJEjmg");
    this.tcSer.ListOfTimecards.subscribe({
      next: (tc) => {this.timecards=tc; console.log(tc)},
      error: (e) => console.error(e),
      complete: () => console.info('complete') }
    )
  }

}
