import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup } from '@angular/forms';
import { toJSDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar';
import { EmployeeApiService } from '../service/employee-api.service';
@Component({
  selector: 'app-empreg',
  templateUrl: './empreg.component.html',
  styleUrls: ['./empreg.component.css']
})
export class EmpregComponent implements OnInit {
emp:any;
empRegForm :FormGroup;
  constructor(private fb:FormBuilder , private employeeapi: EmployeeApiService) {

this.empRegForm=fb.group({
  empid:new FormControl(''),
  empname:new FormControl(''),
  empemail:new FormControl(''),
  emppassword:new FormControl('')

});





   }

  ngOnInit(): void {
  }




empRegFormSubmit(data:any){
  var id=data.empid;
  var nm=data.empname;
  var eml=data.empemail;
  var pas=data.emppassword;
console.log(id+"," + nm+"," + eml + "," +pas)

this.employeeapi.empSaveapi(data).subscribe((data)=>{
  this.emp=data;
  console.warn("data",data);
});

}



}
