import {Routes} from '@angular/router';
import {HomeComponent} from './app/home/home.component';
import {AddEmployeeComponent} from './app/add-employee/add-employee.component';
import {UpdateEmployeeComponent} from './app/update-employee/update-employee.component';

const routeConfig: Routes = [
    {
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
export default routeConfig;