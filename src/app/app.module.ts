import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RoleComponent } from './role/role.component';
import { JobComponent } from './job/job.component';
import { MachineComponent } from './machine/machine.component';
import { TimecardComponent } from './timecard/timecard.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RoleComponent,
    JobComponent,
    MachineComponent,
    TimecardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
