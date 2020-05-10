import { Component, OnInit } from '@angular/core';
import { Employee } from '../shared/employee';
import { CrudService } from '../shared/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  required: boolean = false;

  constructor(private data:CrudService, private location: Router) { }

  ngOnInit(): void {
  }

  addEmployee(first_name: string):void{
    if(!first_name){
      this.required = true;
    }else{
    this.data.addEmployee({ first_name } as Employee)
    .subscribe(() => this.location.navigate(['/main']))
    }
  }

}
