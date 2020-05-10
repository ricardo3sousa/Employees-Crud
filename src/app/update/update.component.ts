import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../shared/crud.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  employee;

  constructor(private data:CrudService, private route:ActivatedRoute, private location: Router) { }

  ngOnInit(): void {
    this.getEmployee();
  }

  getEmployee():void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.data.getEmployee(id)
    .subscribe((res) => {this.employee = res});
  }

  save(){
    this.data.updateEmployee(this.employee)
    .subscribe(() => {this.location.navigate(['/main'])});
  }

}
