import { Component, OnInit } from '@angular/core';
import { EmployeeApiService } from '../service/employee-api.service';

@Component({
  selector: 'app-employeedetail',
  templateUrl: './employeedetail.component.html',
  styleUrls: ['./employeedetail.component.css']
})
export class EmployeedetailComponent implements OnInit {
empreg:any;
  constructor(private apiregdatashow:EmployeeApiService) {

this.apiregdatashow.showRegapi().subscribe((data)=>{
this.empreg=data;
console.warn("data",data)

});

   }
  

  ngOnInit(): void {
  }
 
}
