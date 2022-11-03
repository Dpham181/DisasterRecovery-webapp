import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimecardCreationComponent } from './timecard-creation.component';

describe('TimecardCreationComponent', () => {
  let component: TimecardCreationComponent;
  let fixture: ComponentFixture<TimecardCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimecardCreationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimecardCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
