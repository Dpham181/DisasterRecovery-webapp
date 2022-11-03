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
    localStorage.setItem("JWT_token", "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJleHAiOjE2Njc0NzU5NjMsImlhdCI6MTY2NzQ1Nzk2M30.7bD4ADNA0203REsqlUzl5bJ1EPBVCQrVmrSdfYNrcKcsb0IHnS1bsQuKfEh9sZsxANOgUjk9NSLnx0zBJJoIUA");
    this.tcSer.ListOfTimecards.subscribe({
      next: (tc) => {this.timecards=tc; console.log(tc)},
      error: (e) => console.error(e),
      complete: () => console.info('complete') }
    )
  }

}
