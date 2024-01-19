import { Component, OnInit } from '@angular/core';
import { EmployeeApiService } from '../service/employee-api.service';
import { Users } from '../service/Users';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
user:any
  constructor(private dataservice:EmployeeApiService) { }

  ngOnInit(): void {
    this.dataservice.getUsers().subscribe((users:Users[])=>{
      this.user=users;
console.log(users)
    });
  }

}
