import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeeApiService } from './service/employee-api.service';



@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  
  
  
  constructor(private auth:EmployeeApiService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //return true;

    if(this.auth.isLoggedIn()){
      window.alert('done');
      return true;
    }
    else{
      window.alert('you dont have permissiin ');
      return false;
    }


//const routerurl:string=state.url;
///return this.isLogin(routerurl);

  }
  

/////isLogin(routerurl:string){
 // if(this.dataservice.isLoggedIn()){
  //  return true


  }
//this.dataservice.redirectUrl=routerurl;
//this.router.navigate(['login'],{queryParams:{routerurl:routerurl}});





