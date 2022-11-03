import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobComponent } from './operationSystem/job/job.component';
import { MachineComponent } from './operationSystem/machine/machine.component';
import { TimecardComponent } from './operationSystem/timecard/timecard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './authenticateSystem/login/login.component';
import { HomeComponent } from './home/home.component';
import { ManagementComponent } from './operationSystem/management/management.component';
import { HttpClientModule } from '@angular/common/http';
import { LogoutComponent } from './authenticateSystem/logout/logout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateJobFormComponent } from './operationSystem/job/create-job-form/create-job-form.component';
import { EditJobFormComponent } from './operationSystem/job/edit-job-form/edit-job-form.component';
import { CreateMachineFormComponent } from './operationSystem/machine/create-machine-form/create-machine-form.component';
import { EditMachineFormComponent } from './operationSystem/machine/edit-machine-form/edit-machine-form.component';



@NgModule({
  declarations: [
    AppComponent,
    JobComponent,
    MachineComponent,
    TimecardComponent,
    LoginComponent,
    HomeComponent,
    ManagementComponent,
    LogoutComponent,
    CreateJobFormComponent,
    EditJobFormComponent,
    CreateMachineFormComponent,
    EditMachineFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

