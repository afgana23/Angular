import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validator,NgForm, Validators } from '@angular/forms';
import{first} from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  angForm:FormGroup
  constructor(private fb:FormBuilder,private dataService:ApiService,
    private router:Router) {
this.angForm=this.fb.group({
  email:['',[Validators.required,Validators.email]],
  password:['',Validators.required],
});

     }

     


  ngOnInit(): void {
  }

}
