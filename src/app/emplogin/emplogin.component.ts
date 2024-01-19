import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup ,NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeApiService } from '../service/employee-api.service';

@Component({
  selector: 'app-emplogin',
  templateUrl: './emplogin.component.html',
  styleUrls: ['./emplogin.component.css']
})
export class EmploginComponent implements OnInit {
loginForm: FormGroup
logi:any;
  constructor(private fb:FormBuilder,private router:Router, private loginapi: EmployeeApiService) { 
    this.loginForm=fb.group({
      empemail:[''],
      emppassword:['']

    });
  }


  empLogin(loginForm:any){
    this.loginapi.loginemp(loginForm.value.empemail,loginForm.value.emppassword).subscribe((data)=>{
      this.logi=data;
      console.warn("data",data)
      if(data){
        this.router.navigate(['home']);
      }
      });
  
    }
  



  ngOnInit(): void {
  }
}
