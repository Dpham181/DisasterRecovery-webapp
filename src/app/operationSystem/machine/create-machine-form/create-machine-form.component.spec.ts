import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMachineFormComponent } from './create-machine-form.component';

describe('CreateMachineFormComponent', () => {
  let component: CreateMachineFormComponent;
  let fixture: ComponentFixture<CreateMachineFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMachineFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateMachineFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
