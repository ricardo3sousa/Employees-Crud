import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(){
    const employees = [
      {id: 1, first_name: 'Ricardo'},
      {id: 2, first_name: 'João'}
    ];
    return {employees};
  }

  genId(employees: Employee[]): number {
    return employees.length > 0 ? Math.max(...employees.map(res => res.id)) + 1 : 1;
  }
}
