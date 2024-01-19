import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from './Users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeApiService {

//redirectUrl:String;



url:string="http://localhost/hrmapi";
//url2="http://localhost/api-learn/userapic.php";

@Output() getLoggedInName:EventEmitter<any>=new EventEmitter();
  constructor(private http:HttpClient) { }
pop=1
isLoggedIn():boolean{
  if(this.pop==1){
  return true;
}
else{
  return false;
}

}


  empSaveapi(data:any){
    return this.http.post(this.url +'/employeeregister.php',data);
  }

  showRegapi(){
    return this.http.get(this.url +'/selectempreg.php')
  }

  loginemp(empemail:any,emppassword:any){
    return this.http.post(this.url +'/login.php',{ empemail,emppassword})
 


  }

  
getUsers():Observable<Users[]>{
  return this.http.get<Users[]>('http://localhost/api-learn/userapic.php');
}


 
}

