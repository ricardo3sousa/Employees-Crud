import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';

import { Employee } from '../shared/employee';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  list;

  constructor(private data:CrudService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(){
    this.data.getEmployees()
    .subscribe((res) => this.list = res);
  }

  deleteEmployee(id):void{
    this.data.deleteEmployee(id).subscribe();
    this.ngOnInit();
  }

}
