import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private url = 'api/employees';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getEmployees():Observable<any>{
    return this.http.get(this.url);
  }

  getEmployee(id:number):Observable<Employee>{
    const _url = `${this.url}/${id}`
    return this.http.get<Employee>(_url);
  }

  addEmployee(employee: Employee):Observable<Employee>{
    return this.http.post<Employee>(this.url, employee, this.httpOptions)
  }

  deleteEmployee(id):Observable<any>{
    const _url = `${this.url}/${id}`;
    return this.http.delete<any>(_url, this.httpOptions);
  }

  updateEmployee(employee:Employee):Observable<any>{
    return this.http.put(this.url, employee, this.httpOptions);
  }
}
