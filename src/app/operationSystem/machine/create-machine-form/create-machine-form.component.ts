import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MachineserviceService } from '../service/machineservice.service';

@Component({
  selector: 'app-create-machine-form',
  templateUrl: './create-machine-form.component.html',
  styleUrls: ['./create-machine-form.component.css']
})
export class CreateMachineFormComponent implements OnInit {

  public machineForm: any;
  machines: any;
  errorMsg: any;
  constructor(private machineSer: MachineserviceService, private fb:FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.machineSer.ListOfMachines.subscribe({
      next: (v) => {this.machines=v; console.log(v)},
      error: (e) => console.error(e),
      complete: () => console.info('complete') }
    ),
    this.machineForm = this.fb.group({code: '', description: '', rent: '', hours:''})
  }

  onSubmit(machineForm:any)
  {
    console.log(this.machineForm.value);
    this.machineSer.addMachine(this.machineForm.value).subscribe(
      (data) => {
        this.machines = data;
        console.log(this.machines);
        this.machineSer.getMachines().subscribe(
          (data) => this.machines = data
        )
      },
      (error) => this.errorMsg = error
    )
    this.router.navigate(["management/machine"]).then(() => {
      window.location.reload();
    });
    this.machineForm.reset();
  }

  get code()
  {
    return this.machineForm.get('code');
  }
  get description()
  {
    return this.machineForm.get('description');
  }
  get rent()
  {
    return this.machineForm.get('rent');
  }
  get hours()
  {
    return this.machineForm.get('hours');
  }
}
