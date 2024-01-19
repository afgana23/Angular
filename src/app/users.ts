export class Users{

    public id:number;
    public name:string;
     public email:string;
      public password:string;
       public mobile:string;


    constructor(id:number,
        name:string,
        email:string,
        password:string,
        mobile:string)
    {
        this.id=id;
        this.name=name;
        this.email=email;
        this.password=password;
        this.mobile=mobile;
    }
}