import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authenticateSystem/login/login.component';
import { HomeComponent } from './home/home.component';
import { JobComponent } from './operationSystem/job/job.component';
import { MachineComponent } from './operationSystem/machine/machine.component';
import { ManagementComponent } from './operationSystem/management/management.component';

const routes: Routes = [

  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  {path:'home', component:HomeComponent, 
   children:[
    {path:'login', component:LoginComponent},


   ]
  },

  {path:'management', component:ManagementComponent,

  children:[
    {path:'job', component:JobComponent},
    {path:'machine', component:MachineComponent}


  ]

},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
