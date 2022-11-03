import { Component, OnInit } from '@angular/core';
import { MachineserviceService } from './service/machineservice.service';

@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.css']
})
export class MachineComponent implements OnInit {

  public machines: any;
  errorMsg: any;
  constructor(private machineSer: MachineserviceService) { }

  ngOnInit(): void {
   localStorage.setItem("JWT_token", "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJleHAiOjE2Njc0NTQxNDcsImlhdCI6MTY2NzQzNjE0N30.d0O6eMMmyfxPeLTcJUQg62EK4yWFIXYg0RfcXrh7gXckWizvocAy1yBXno0fg0ks7C_C_YWfVqZ8WMh2LJEjmg");
    this.machineSer.ListOfMachines.subscribe({
      next: (m) => {this.machines = m; console.log(m)},
      error: (e) => console.error(e),
      complete: () => console.info('complete') 
    }
    )
  }

}
