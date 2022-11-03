import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { TimecardserviceService } from '../service/timecardservice.service';

@Component({
  selector: 'app-timecard-view-update',
  templateUrl: './timecard-view-update.component.html',
  styleUrls: ['./timecard-view-update.component.css']
})
export class TimecardViewUpdateComponent implements OnInit {

  timecards: any;
  timecard: any;
  timecardId: any;
  errorMsg: any;
  constructor(private actRoute: ActivatedRoute, private timecardSer: TimecardserviceService, private fb:FormBuilder, private router:Router) { }

  public editTC = this.fb.group(
    {code: '', contractor: '', amount: '', hours:'', status: ''}
  )
  ngOnInit(): void {
    this.actRoute.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      console.log(id);
      this.timecardId = id;
      console.log(this.timecardId);
      this.timecards = this.timecardSer.getTimecardById(this.timecardId).subscribe(
        (data) => {this.timecards = data; console.log(data);
        this.editTC = this.fb.group( {
          code: [this.timecards.code], 
          contractor: [this.timecards.contractor], 
          amount: [this.timecards.amount], 
          hours: [this.timecards.hours],
          status: [this.timecards.status]}
        );
      },
      (error) => {this.errorMsg = error; console.log(error); }
      );
    })
  }

  get code()
  {
    return this.editTC.get('code');
  }
  get contractor()
  {
    return this.editTC.get('contractor');
  }
  get amount()
  {
    return this.editTC.get('amount');
  }
  get hours()
  {
    return this.editTC.get('hours');
  }
  get status()
  {
    return this.editTC.get('status');
  }

  update(timecardId:number, editTC: any)
  {
    console.log(this.timecardId);
    console.log(this.editTC);
    this.timecardSer.updateTimecard(this.timecardId, this.editTC.value).subscribe(
      (data) => {this.timecards = data; console.log(data);
        this.timecardSer.getTimecards().subscribe(
          (data) => this.timecards = data,
          (error) => this.errorMsg = error
        )
      },
      (error) => {this.errorMsg = error; console.log(error); }
    );
    this.router.navigate(["management/timecard"]).then(() => {
      window.location.reload();
    });
  }

}
