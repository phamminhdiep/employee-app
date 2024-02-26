import { Component, Input } from '@angular/core';
import { Employee } from '../entities/employee';
import { EmployeeService } from '../service/employee-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  @Input() standalone: boolean = true;
  employeeList: Employee[] = [];

  constructor(private employeeService: EmployeeService, private router: Location) {}

  ngOnInit() {
    this.employeeService.getAllEmployees().then((data) => {
      this.employeeList = data;
    });
  }

  onDelete(employeeId: number) {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.employeeService.deleteEmployee(employeeId).then(() => {
        // Update the employeeList without a full page reload
        this.employeeList = this.employeeList.filter((employee) => employee.id !== employeeId);
      });
    }
  }
}





// @Component({
//   selector: 'app-home',
//   standalone: true,
//   imports: [EmployeeComponent, CommonModule,RouterLink],
//   templateUrl: './home.component.html',

//   styleUrl: './home.component.css'
// })
// export class HomeComponent{
//   employeeService: EmployeeService = inject(EmployeeService);
//   employeeList: Employee[] = [];

//   constructor(private router: Location) {
//     this.employeeService.getAllEmployees().then((data) => {
//       this.employeeList = data;
//     });
//   }

//   onDelete(employeeId: number) {
//     if (confirm('Are you sure you want to delete this employee?')) {
//       this.employeeService.deleteEmployee(employeeId);
//       window.location.reload();
//     }
//   }
// }

