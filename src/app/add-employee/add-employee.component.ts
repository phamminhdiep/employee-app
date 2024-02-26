import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeService } from '../service/employee-service.service';
import { Employee } from '../entities/employee';
import { Location } from '@angular/common';

import { passwordValidator, userNameValidator, fullNameValidator, addressValidator, ageValidator } from '../validator/validator';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})

export class AddEmployeeComponent {
  submitted = false; 
  // employeeService: EmployeeService = inject(EmployeeService);

  employeeForm = new FormGroup({
    userName: new FormControl('', [userNameValidator()]),
    fullName: new FormControl('', [fullNameValidator()]),
    password: new FormControl('', [passwordValidator()]),
    address: new FormControl('', [addressValidator()]),
    age: new FormControl('', [ageValidator()])
  });

  constructor(private router: Location,private employeeService: EmployeeService) {

  }

  onSubmit() {
    this.submitted = true;
    if (!this.employeeForm.valid) {
      return;
    }

    let employee: Employee = {
      userName: this.employeeForm.value.userName ?? '',
      fullName: this.employeeForm.value.fullName ?? '',
      password: this.employeeForm.value.password ?? '',
      address: this.employeeForm.value.address ?? '',
      age: Number(this.employeeForm.value.age ?? 0)
    };

    this.employeeService.addNewEmployee(employee);
    alert('Employee Added Successfully');
    this.router.back();
  }
}
