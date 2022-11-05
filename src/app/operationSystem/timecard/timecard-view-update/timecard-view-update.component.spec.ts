import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimecardViewUpdateComponent } from './timecard-view-update.component';

describe('TimecardViewUpdateComponent', () => {
  let component: TimecardViewUpdateComponent;
  let fixture: ComponentFixture<TimecardViewUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimecardViewUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimecardViewUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
