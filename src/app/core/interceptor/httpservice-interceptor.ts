import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { enviroment } from "../enviroments/enviroment";

@Injectable()
export class AuthDBInterceptor implements HttpInterceptor{

    intercept(req: HttpRequest<any>, next: HttpHandler):Observable<any> {
        let clone = req.clone()
        
        if(req.url.includes(enviroment.url_db)){
            clone = req.clone({headers:req.headers.append('Authorization',"Bearer "+enviroment.db_auth)})
        }
        return next.handle(clone)
    }
    
}