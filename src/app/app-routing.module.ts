import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';


const routes: Routes = [{
  path: '',
  component: HomeComponent,
  // title: 'Home page',
},
{
  path: 'add',
  component: AddEmployeeComponent,
  // title: 'Add new Employee',
},
{
  path: 'update/:id',
  component: UpdateEmployeeComponent,
  // title: 'Update Employee',
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
