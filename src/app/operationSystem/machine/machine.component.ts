import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MachineserviceService } from './service/machineservice.service';

@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.css']
})
export class MachineComponent implements OnInit {

  public machines: any;
  errorMsg: any;
  constructor(private machineSer: MachineserviceService, private router:Router) { }

  ngOnInit(): void {
    this.machineSer.ListOfMachines.subscribe({
      next: (m) => {this.machines = m; console.log(m)},
      error: (e) => console.error(e),
      complete: () => console.info('complete') 
    }
    )
  }

  deleteMachine(id:number) {
    console.log(id);
    this.machineSer.deleteOneMachine(id).subscribe({
      next: (v) => this.router.navigate(["management/machine"])
      .then(() => {
        window.location.reload();
      }),
      error: (e) => console.error(e)
    });
  } 

  createMachine(){
    this.router.navigate(["/management/newMachine"]);
  }

  editMachine(machine:any)
  {
    this.router.navigate(["/management/editMachine/", machine.id]);
  }
}
