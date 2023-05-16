import { HttpClient, HttpResponse } from "@angular/common/http";
import { EventEmitter, Injectable, Output } from "@angular/core";
import { enviroment } from "../enviroments/enviroment";
import { Observable, lastValueFrom } from "rxjs";
import {  LoginObj, User, UsersObj } from "src/app/models/user";

@Injectable({providedIn:'root'})
export class UsersService{

    @Output() errorMessage = new EventEmitter<any>();

    constructor(private readonly http:HttpClient){}

    error!:HttpResponse<any>

    getUserById(id:number):Observable<UsersObj>{
        return this.http.get<UsersObj>(enviroment.url_db+"/users/"+id)
    }

    getAllUsers():Observable<UsersObj>{
        return this.http.get<UsersObj>(enviroment.url_db+"/users")
       
    }

    deleteUserById(id:number):void{
        this.http.delete(enviroment.url_db+"/users/"+id).subscribe({error(err) {
            console.log(err);
        }});;
    }

    addUser(user:User):void{ 
        this.http.post(enviroment.url_db+"/users",user).subscribe({error:(err)=> this.errorMessage.emit(err)})
    }

    updateUserById(id:number,user:User):void{
        this.http.put(enviroment.url_db+"/users/"+id,user).subscribe({error(err) {
            console.log(err);
        }})
        
    }

    loginUser(email:string,password:string):Observable<LoginObj>{
        
       return this.http.post<LoginObj>(enviroment.url_db+'/api/auth/login?','',{params:{email:email,password:password}});
    }
    
}