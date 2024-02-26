import { Injectable } from '@angular/core';
import { Employee } from '../entities/employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url = 'http://localhost:3000/employees';
  constructor() { }

  async getAllEmployees(): Promise<Employee[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  async getEmployeeById(id: number): Promise<Employee | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }

  async addNewEmployee(employee: Employee): Promise<Employee> {
    const response = await fetch(this.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(employee)
    });
    return await response.json();
  }

  async updateEmployee(id: number, employee: Employee): Promise<Employee> {
   
    const response = await fetch(`${this.url}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(employee)
    });
    return await response.json();
  }

  async deleteEmployee(id: number): Promise<void> {
    await fetch(`${this.url}/${id}`, {
      method: 'DELETE'
    });
  }
}
