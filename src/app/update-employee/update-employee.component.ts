import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../service/employee-service.service';
import { Employee } from '../entities/employee';
import { Location } from '@angular/common';
import { passwordValidator, userNameValidator, fullNameValidator, addressValidator, ageValidator } from '../validator/validator';


@Component({
  selector: 'app-update-employee',
  styleUrls: ['./update-employee.component.css'],
  templateUrl: './update-employee.component.html',
})

export class UpdateEmployeeComponent implements OnInit {
  submitted = false;
  employee: Employee;
  employeeForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Location,
    private employeeService: EmployeeService
  ) {}

  ngOnInit() {
    this.submitted = true;
    this.employeeForm = new FormGroup({
      id: new FormControl(''),
      userName: new FormControl('', [userNameValidator()]),
      fullName: new FormControl('', [fullNameValidator()]),
      password: new FormControl('', [passwordValidator()]),
      address: new FormControl('', [addressValidator()]),
      age: new FormControl('', [ageValidator()])
    });

    const employeeId = Number(this.route.snapshot.params['id']);
    this.employeeService.getEmployeeById(employeeId).then((employee) => {
      this.employee = employee as Employee;
      this.employeeForm.patchValue({
        ...this.employee,
        id: String(this.employee.id),
        age: String(this.employee.age)
      });
    });

    this.route.params.subscribe((params) => {
      console.log(params);
    });
  }

  onSubmit() {
    if (!this.employeeForm.valid) {
      return;
    }
    
    this.employee.id = Number(this.employeeForm.value.id ?? 0);
    
    this.employee.userName = this.employeeForm.value.userName ?? '';
    this.employee.fullName = this.employeeForm.value.fullName ?? '';
    this.employee.password = this.employeeForm.value.password ?? '';
    this.employee.address = this.employeeForm.value.address ?? '';
    this.employee.age = Number(this.employeeForm.value.age ?? 0);
    
    this.employeeService.updateEmployee(this.employee.id, this.employee).then(() => {
      alert('Employee Updated Successfully');
      this.router.back();
    });
  }
}

