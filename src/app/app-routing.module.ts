import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmploginComponent } from './emplogin/emplogin.component';
import { EmployeedetailComponent } from './employeedetail/employeedetail.component';
import { EmpregComponent } from './empreg/empreg.component';
import { HomeComponent } from './home/home.component';
import { GuardGuard } from './guard.guard';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent,canActivate:[GuardGuard]
  },
{path:'empreg',
component:EmpregComponent},

{path:'employeedetail',
component:EmployeedetailComponent},

{path:'emplogin',
component:EmploginComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
