import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { MachineserviceService } from '../service/machineservice.service';

@Component({
  selector: 'app-edit-machine-form',
  templateUrl: './edit-machine-form.component.html',
  styleUrls: ['./edit-machine-form.component.css']
})
export class EditMachineFormComponent implements OnInit {

  machines: any;
  machine: any;
  machineId: any;
  errorMsg: any;
  constructor(private actRoute: ActivatedRoute, private machineSer: MachineserviceService, private fb:FormBuilder, private router:Router) { }

  public editMachine = this.fb.group(
    {code: '', description: '', rent: '', hours:''}
  )
  ngOnInit(): void {
  
    this.actRoute.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      console.log(id);
      this.machineId = id;
      console.log(this.machineId);
      this.machines = this.machineSer.getMachineById(this.machineId).subscribe(
        (data) => {this.machines = data; console.log(data);
        this.editMachine = this.fb.group( {
          code: [this.machines.code], 
          description: [this.machines.description], 
          rent: [this.machines.rent], 
          hours: [this.machines.hours]}
        );
      },
      (error) => {this.errorMsg = error; console.log(error); }
      );
    })
  }

  get code()
  {
    return this.editMachine.get('code');
  }
  get description()
  {
    return this.editMachine.get('description');
  }
  get rent()
  {
    return this.editMachine.get('rent');
  }
  get hours()
  {
    return this.editMachine.get('hours');
  }

  update(machineId:number, editMachine: any)
  {
    console.log(this.machineId);
    console.log(this.editMachine);
    this.machineSer.updateMachine(this.machineId, this.editMachine.value).subscribe(
      (data) => {this.machines = data; console.log(data);
        this.machineSer.getMachines().subscribe(
          (data) => this.machines = data,
          (error) => this.errorMsg = error
        )
      },
      (error) => {this.errorMsg = error; console.log(error); }
    );
    this.router.navigate(["management/machine"]).then(() => {
      window.location.reload();
    });
  }

}
