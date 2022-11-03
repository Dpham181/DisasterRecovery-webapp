import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimecardSubmissionComponent } from './timecard-submission.component';

describe('TimecardSubmissionComponent', () => {
  let component: TimecardSubmissionComponent;
  let fixture: ComponentFixture<TimecardSubmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimecardSubmissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimecardSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
