import { LogoutComponent } from './authenticateSystem/logout/logout.component';
import { AccessComponent } from './operationSystem/access/access.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authenticateSystem/login/login.component';
import { HomeComponent } from './home/home.component';
import { CreateJobFormComponent } from './operationSystem/job/create-job-form/create-job-form.component';
import { EditJobFormComponent } from './operationSystem/job/edit-job-form/edit-job-form.component';
import { JobComponent } from './operationSystem/job/job.component';
import { CreateMachineFormComponent } from './operationSystem/machine/create-machine-form/create-machine-form.component';
import { EditMachineFormComponent } from './operationSystem/machine/edit-machine-form/edit-machine-form.component';
import { MachineComponent } from './operationSystem/machine/machine.component';
import { ManagementComponent } from './operationSystem/management/management.component';
import { TimecardComponent } from './operationSystem/timecard/timecard.component';
import { RouteGGuard } from './RouteGraud/route-g.guard';

const routes: Routes = [

  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  {path:'home', component:HomeComponent, 
   children:[
    {path:'login', component:LoginComponent},
   ]
  },
 // { path: '**', component: null },  // Wildcard route for a 404 page

 // user acessable 
  {path:'access', component:AccessComponent, canActivate : [RouteGGuard],
  children:[
    {path:'Timecard', component:TimecardComponent},
    {path:'logout', component:LogoutComponent}
  ]

},


  // admin managment 
  {path:'management', component:ManagementComponent, canActivate : [RouteGGuard]   , canActivateChild:[RouteGGuard] ,


     
  children:[
    {path:'Timecard', component:TimecardComponent},
    {path:'job', component:JobComponent},
    {path:'machine', component:MachineComponent},
    {path:'timecard', component:TimecardComponent},
    {path:'newJob', component:CreateJobFormComponent},
    {path: 'editJob/:id', component:EditJobFormComponent},
    {path: 'newMachine', component:CreateMachineFormComponent},
    {path: 'editMachine/:id', component:EditMachineFormComponent},
    {path:'logout', component:LogoutComponent}


  ]

},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
