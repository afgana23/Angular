import {Injectable,Output,EventEmitter} from '@angular/core';
import {map} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Users } from './users';

@Injectable({

    providedIn:'root'

})

export class ApiService{
    baseUrl:string = "http://localhost/Api-learn";
    constructor(private httpClient:HttpClient) {}


public userregistration(
    name:any,
    email:any,
    password:any,
    mobile:any)
    {

return this.httpClient.post<any>(this.baseUrl + '/Angularcrud.php',
{
    name,email,password,mobile
}
)
.pipe(map(Users => {
    return Users;
}));


}
}
