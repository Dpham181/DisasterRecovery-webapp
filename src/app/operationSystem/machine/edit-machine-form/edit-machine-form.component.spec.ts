import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMachineFormComponent } from './edit-machine-form.component';

describe('EditMachineFormComponent', () => {
  let component: EditMachineFormComponent;
  let fixture: ComponentFixture<EditMachineFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMachineFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditMachineFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
